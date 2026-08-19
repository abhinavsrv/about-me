import fs from "node:fs";
import path from "node:path";

const outputDirectory = path.resolve("dist/public");
const templatePath = path.join(outputDirectory, "index.html");
const siteUrl = (process.env.VITE_SITE_URL || "").replace(/\/$/, "");
const socialImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/QrDQxLNtAPftnhMd.webp";

const routeMetadata = {
  research: ["Research Atlas — Abhinav Srivastava", "Research projects and technical notes by Abhinav Srivastava across trustworthy AI, healthcare NLP, transformer behavior, and applied systems."],
  profile: ["Profile — Abhinav Srivastava", "Profile, research orientation, and trajectory of Abhinav Srivastava, an undergraduate researcher in trustworthy AI and research systems."],
  contact: ["Contact — Abhinav Srivastava", "Contact Abhinav Srivastava for research conversations and collaborations in trustworthy AI, healthcare NLP, and efficient model systems."],
  outputs: ["Outputs Record — Abhinav Srivastava", "A sourced public record of approved reproductions, software practice, applied systems, and credentials by Abhinav Srivastava."],
  "work/mental-roberta": ["Mental-RoBERTa — Abhinav Srivastava", "A scoped research-practice record for Mental-RoBERTa, represented with explicit evidence boundaries."],
  "work/dense-distillation": ["Alignment-Free Dense Distillation — Abhinav Srivastava", "An independent cross-modal medical-image transfer reproduction record with explicit implementation boundaries."],
  "work/region-infinity": ["Region Infinity Model Systems — Abhinav Srivastava", "A scoped applied-systems record of transformer-LLM optimization and efficient inference work."],
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

const template = fs.readFileSync(templatePath, "utf8");

for (const [route, [title, description]] of Object.entries(routeMetadata)) {
  const canonicalUrl = siteUrl ? `${siteUrl}/${route}` : `/${route}`;
  const socialTags = [
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${socialImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join("\n    ");
  const routeHtml = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace("</head>", `    ${socialTags}\n  </head>`);
  const routeDirectory = path.join(outputDirectory, route);
  fs.mkdirSync(routeDirectory, { recursive: true });
  fs.writeFileSync(path.join(routeDirectory, "index.html"), routeHtml);
}
