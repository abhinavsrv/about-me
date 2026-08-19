/**
 * Obsidian Precision style reminder: the résumé area is a formal document shelf, not a generic promotional banner.
 */
import { Download, ExternalLink } from "lucide-react";
import { trackPortfolioEvent } from "@/lib/portfolioAnalytics";

export default function ResumeSection() {
  return (
    <section className="resume-section" aria-labelledby="resume-title">
      <div className="resume-document-mark" aria-hidden="true"><span>A</span><span>S</span></div>
      <div className="resume-copy">
        <p className="eyebrow">Profile document</p>
        <h2 id="resume-title">The full<br /><em>research record.</em></h2>
        <p>Education, research experience, publications, selected projects, and technical capabilities—compiled in a concise professional résumé.</p>
      </div>
      <div className="resume-actions">
        <a className="resume-download" href="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/FtFFYCiJPttkvHXM.pdf" target="_blank" rel="noreferrer" onClick={() => trackPortfolioEvent("resume_downloaded")}><Download size={19} aria-hidden="true" /> Download résumé <span>PDF · 2026</span></a>
        <a className="resume-linkedin" href="https://www.linkedin.com/in/navnotexist/" target="_blank" rel="noreferrer" onClick={() => trackPortfolioEvent("linkedin_opened")}>View LinkedIn profile <ExternalLink size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
