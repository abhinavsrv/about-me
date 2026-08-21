/**
 * Obsidian Precision style reminder: this is a human editorial pause between research claims and the work record.
 * It names only verified source limits, rather than implying unavailable publications or undisclosed projects.
 */
const portraitUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/AYYWhxMsBwRHbyLu.webp";

export default function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-index" aria-hidden="true"><span>01A</span><i /></div>
      <div className="about-portrait-wrap">
        <img src={portraitUrl} sizes="(max-width: 760px) 88vw, 35vw" alt="Abhinav Srivastava in a sunlit window setting" width="2048" height="1536" loading="lazy" decoding="async" />
        <span className="about-portrait-beam" aria-hidden="true" />
        <p>ABHINAV / OBSERVATION BEFORE OPTIMIZATION</p>
      </div>
      <div className="about-copy">
        <p className="eyebrow">About the practice</p>
        <h2 id="about-title">Inquiry starts with<br /><em>the conditions</em><br />around a model.</h2>
        <p>
          I am an undergraduate researcher in computer science, working across trustworthy AI, healthcare NLP, transformer behavior,
          and decision systems. The common thread is a preference for systems that show their limits, not merely their outputs.
        </p>
        <p>
          That approach carries into applied work: from early-screening research at NTNU to financial-system prototypes and efficient
          LLM pipelines. I treat calibration, evidence, and operational constraints as part of the work—not postscript to it.
        </p>
        <div className="publication-status">
          <span>Publication status</span>
          <p>The supplied Profile-9 record lists a forthcoming 2026 international-conference research journal on Mental-RoBERTa, with Abhinav Srivastava named as primary author. No public paper, preprint, DOI, or citation link has been supplied, so the portfolio presents it as forthcoming rather than published.</p>
        </div>
      </div>
    </section>
  );
}
