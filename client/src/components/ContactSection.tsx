/**
 * Obsidian Precision style reminder: the closing invitation is direct, editorial, and calm—never a generic sales conversion block.
 */
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="contact-main">
        <p className="eyebrow">Open channel</p>
        <h2 id="contact-title">Let’s make<br />the model <em>answerable.</em></h2>
        <p>I am open to research, MLOps, and fintech internship conversations where careful reasoning can become a useful system.</p>
        <a className="contact-email" href="mailto:heyabhinav.bit@gmail.com?subject=Research%20conversation%20for%20Abhinav%20Srivastava">
          heyabhinav.bit@gmail.com <ArrowUpRight size={21} aria-hidden="true" />
        </a>
      </div>
      <div className="contact-rail">
        <span>Profiles</span>
        <a href="https://github.com/abhinavsrv" target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
        <a href="https://www.linkedin.com/in/navnotexist/" target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
        <a href="mailto:heyabhinav.bit@gmail.com"><Mail size={17} aria-hidden="true" /> Email <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <div className="footer-strip">
        <span>© 2026 Abhinav Srivastava</span>
        <span>Static by design · Ready for GitHub Pages</span>
      </div>
    </footer>
  );
}
