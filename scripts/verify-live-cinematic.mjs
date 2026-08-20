import { spawn } from "node:child_process";
import { rm } from "node:fs/promises";

const productionUrl = process.argv[2] || "https://folio2027-cudcewte.manus.space/";
const port = 9333;
const profilePath = "/tmp/folio-live-cinematic-profile";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDebugger() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch {
      // Chromium has not opened the debugging socket yet.
    }
    await sleep(150);
  }
  throw new Error("Chromium remote debugging endpoint did not become available.");
}

async function main() {
  await rm(profilePath, { recursive: true, force: true });
  const browser = spawn("chromium", [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profilePath}`,
    "about:blank",
  ], { stdio: "ignore" });

  try {
    await waitForDebugger();
    const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" });
    const target = await targetResponse.json();
    const socket = new WebSocket(target.webSocketDebuggerUrl);
    const pending = new Map();
    const browserErrors = [];
    let sequence = 0;

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.method === "Runtime.exceptionThrown") {
        const details = message.params.exceptionDetails;
        browserErrors.push(details.exception?.description || details.exception?.value || details.text);
      }
      if (message.method === "Log.entryAdded" && message.params.entry.level === "error") browserErrors.push(message.params.entry.text);
      if (message.id && pending.has(message.id)) {
        const { resolve, reject } = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result);
      }
    });

    await new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    });

    const command = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++sequence;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });

    await command("Page.enable");
    await command("Runtime.enable");
    await command("Log.enable");
    await command("Page.addScriptToEvaluateOnNewDocument", {
      source: `(() => {
        const nativeSetTimeout = window.setTimeout.bind(window);
        window.setTimeout = (callback, delay, ...args) => nativeSetTimeout(callback, Number(delay) >= 1500 ? 60000 : delay, ...args);
      })();`,
    });
    await command("Emulation.setEmulatedMedia", {
      media: "",
      features: [{ name: "prefers-reduced-motion", value: "no-preference" }],
    });
    const navigation = await command("Page.navigate", { url: productionUrl });

    for (let attempt = 0; attempt < 100; attempt += 1) {
      const { result } = await command("Runtime.evaluate", {
        expression: "document.readyState === 'complete' && Boolean(document.querySelector('.cinematic-intro'))",
        returnByValue: true,
      });
      if (result.value) break;
      await sleep(75);
    }

    const { result } = await command("Runtime.evaluate", {
      expression: `JSON.stringify({
        url: location.href,
        readyState: document.readyState,
        navigationError: ${JSON.stringify(navigation.errorText || null)},
        rootLength: document.getElementById('root')?.textContent?.length || 0,
        browserErrors: ${JSON.stringify(browserErrors)},
        intro: Boolean(document.querySelector('.cinematic-intro')),
        sound: document.body.innerText.includes('Enable sound'),
        skip: document.body.innerText.includes('Skip intro'),
        replay: document.body.innerText.includes('Replay')
      })`,
      returnByValue: true,
    });
    const checks = JSON.parse(result.value);
    console.log(JSON.stringify(checks));
    if (!checks.intro || !checks.sound || !checks.skip || !checks.replay) process.exitCode = 1;
    socket.close();
  } finally {
    browser.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
