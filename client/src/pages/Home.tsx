/**
 * Obsidian Precision style reminder: one cinematic purpose per screen; dark luxury surfaces,
 * cloud-white typography, signal-ice emphasis, and the supplied portrait treated as a singular editorial moment.
 */
import SiteShell from "@/components/SiteShell";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import NotesSection from "@/components/NotesSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import TrajectorySection from "@/components/TrajectorySection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add("is-revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -8%" },
    );
    sections.forEach((section) => { section.classList.add("scroll-reveal"); observer.observe(section); });
    return () => observer.disconnect();
  }, []);

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
            <a className="signal-button" href="#research">Examine research <ArrowDownRight size={17} aria-hidden="true" /></a>
            <a className="quiet-button" href="mailto:heyabhinav.bit@gmail.com">Start a conversation <Mail size={15} aria-hidden="true" /></a>
          </div>
        </div>

        <div className="hero-portrait-stage">
          <div className="hero-portrait-meta hero-portrait-meta--top">
            <span>01 / Profile</span>
            <span>2026</span>
          </div>
          <div className="hero-portrait-frame">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/QrDQxLNtAPftnhMd.webp" alt="Abhinav Srivastava seated by a window in a sunlit setting" />
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
          <span>Scroll to enter the work</span>
          <a href="#research" aria-label="Scroll to research"><ArrowDownRight size={20} aria-hidden="true" /></a>
          <div className="hero-socials" aria-label="External profile links">
            <a href="https://github.com/abhinavsrv" target="_blank" rel="noreferrer" aria-label="Open Abhinav’s GitHub"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/navnotexist/" target="_blank" rel="noreferrer" aria-label="Open Abhinav’s LinkedIn"><Linkedin size={17} /></a>
            <a href="mailto:heyabhinav.bit@gmail.com" aria-label="Email Abhinav"><Mail size={17} /></a>
          </div>
        </div>
      </section>

      <section id="research" className="research-section" aria-labelledby="research-title">
        <div className="section-index" aria-hidden="true"><span>01</span><i /></div>
        <div className="research-intro">
          <p className="eyebrow">Research orientation</p>
          <h2 id="research-title">Model behavior<br />is the <em>product.</em></h2>
        </div>
        <div className="research-statement">
          <p>
            My work asks how transformer systems should behave when their inputs are incomplete, their classes are imbalanced,
            and the cost of a wrong answer is not evenly distributed. I am especially interested in calibration, representation
            behavior, and evaluation practices that make the limits of a model visible.
          </p>
          <a className="inline-signal-link" href="#work">Explore selected work <ArrowDownRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="research-themes">
          {[
            ["01", "Trustworthy AI", "Calibration-aware inference and reliability under uncertainty."],
            ["02", "Healthcare AI", "High-stakes language and imaging systems where errors require context."],
            ["03", "Transformer reasoning", "Representation behavior, mechanism, and evidence-led analysis."],
          ].map(([index, title, copy]) => (
            <article key={title} className="research-theme">
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <AboutSection />
      <WorkSection />
      <TrajectorySection />
      <CapabilitiesSection />
      <NotesSection />
      <ResumeSection />
      <ContactSection />
    </SiteShell>
  );
}
