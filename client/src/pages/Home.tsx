/**
 * Obsidian Precision style reminder: one cinematic purpose per screen; dark luxury surfaces,
 * cloud-white typography, signal-ice emphasis, and the supplied portrait treated as a singular editorial moment.
 */
import SiteShell from "@/components/SiteShell";
import HomeIndexSections from "@/components/HomeIndexSections";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";
import { portfolioPath } from "@/lib/routes";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  usePageMetadata(portfolioPageMetadata.home);

  return (
    <SiteShell>
      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-ambient" aria-hidden="true" />
        <div className="hero-gridline hero-gridline--a" aria-hidden="true" />
        <div className="hero-gridline hero-gridline--b" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="signal-dot" />Undergraduate researcher · New Delhi, India</p>
          <h1 id="hero-title">
            Reliable intelligence<br />
            <em>for consequential</em><br />
            decisions.
          </h1>
          <p className="hero-summary">
            I study transformer systems under noisy, imbalanced, and high-stakes conditions—where calibration,
            interpretability, and robust evaluation matter as much as raw performance.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="signal-button" href={portfolioPath("/research")}>Open research atlas <ArrowDownRight size={17} aria-hidden="true" /></a>
            <a className="quiet-button" href={portfolioPath("/contact")}>Start a conversation <Mail size={15} aria-hidden="true" /></a>
          </div>
        </div>

        <div className="hero-portrait-stage">
          <div className="hero-portrait-meta hero-portrait-meta--top">
            <span>01 / Profile</span>
            <span>2026</span>
          </div>
          <div className="hero-portrait-frame">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/AYYWhxMsBwRHbyLu.webp" sizes="(max-width: 760px) 88vw, 43vw" alt="Abhinav Srivastava in a sunlit window setting" width="2048" height="1536" fetchPriority="high" decoding="async" />
            <div className="portrait-vignette" aria-hidden="true" />
            <span className="portrait-signal" aria-hidden="true" />
          </div>
          <div className="hero-portrait-meta hero-portrait-meta--bottom">
            <span>ABHINAV SRIVASTAVA</span>
            <span>RESEARCH / ML</span>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Current research identifiers">
          <div>
            <span className="hero-proof__label">Current focus</span>
            <p>Trustworthy AI<br />Healthcare NLP<br />Mechanistic interpretability</p>
          </div>
          <div className="hero-proof__rule" />
          <div>
            <span className="hero-proof__label">Current trajectory</span>
            <p>Research Intern<br />NTNU · 2026</p>
          </div>
        </aside>

        <div className="hero-bottomline">
          <span>Open the research atlas</span>
          <a href={portfolioPath("/research")} aria-label="Open research atlas"><ArrowDownRight size={20} aria-hidden="true" /></a>
          <div className="hero-socials" aria-label="External profile links">
            <a href="https://github.com/abhinavsrv" target="_blank" rel="noreferrer" aria-label="Open Abhinav’s GitHub"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/navnotexist/" target="_blank" rel="noreferrer" aria-label="Open Abhinav’s LinkedIn"><Linkedin size={17} /></a>
            <a href="mailto:heyabhinav.bit@gmail.com" aria-label="Email Abhinav"><Mail size={17} /></a>
          </div>
        </div>
      </section>

      <HomeIndexSections />
    </SiteShell>
  );
}
