import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import { trackPortfolioEvent } from "@/lib/portfolioAnalytics";
import { portfolioPath } from "@/lib/routes";

const featuredStudies = [caseStudies["mental-roberta"], caseStudies["dense-distillation"], caseStudies["region-infinity"]];

export default function HomeIndexSections() {
  return (
    <>
      <section id="research" className="research-section" aria-labelledby="research-title">
        <div className="section-index" aria-hidden="true"><span>01</span><i /></div>
        <div className="research-intro"><p className="eyebrow">Research orientation</p><h2 id="research-title">Model behavior<br />is the <em>product.</em></h2></div>
        <div className="research-statement"><p>My work asks how transformer systems should behave when their inputs are incomplete, their classes are imbalanced, and the cost of a wrong answer is not evenly distributed. I am especially interested in calibration, representation behavior, and evaluation practices that make the limits of a model visible.</p><a className="inline-signal-link" href={portfolioPath("/research")} onClick={() => trackPortfolioEvent("research_atlas_opened")}>Open research atlas <ArrowDownRight size={16} aria-hidden="true" /></a></div>
        <div className="research-themes">
          {[["01", "Trustworthy AI", "Calibration-aware inference and reliability under uncertainty."], ["02", "Healthcare AI", "High-stakes language and imaging systems where errors require context."], ["03", "Transformer reasoning", "Representation behavior, mechanism, and evidence-led analysis."]].map(([index, title, copy]) => <article key={title}><span>{index}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section id="work" className="home-featured-work" aria-labelledby="featured-work-title">
        <div className="home-featured-work__head"><div><p className="eyebrow">Selected case studies</p><h2 id="featured-work-title">Three records.<br /><em>Clear boundaries.</em></h2></div><p>Start with the strongest evidence-led records, then use the research atlas to explore the full index by track and focus.</p></div>
        <div className="home-featured-work__grid">
          {featuredStudies.map((study) => <article key={study.slug}><div><span>{study.number} / {study.eyebrow}</span><p>{study.status}</p></div><h3>{study.title}</h3><p>{study.lede}</p><a href={portfolioPath(`/work/${study.slug}`)} onClick={() => trackPortfolioEvent("project_case_study_opened")}>Read case study <ArrowUpRight size={16} aria-hidden="true" /></a></article>)}
        </div>
        <a className="home-featured-work__all" href={portfolioPath("/research")} onClick={() => trackPortfolioEvent("research_atlas_opened")}>View all research and practice <ArrowDownRight size={17} aria-hidden="true" /></a>
      </section>

      <section className="home-profile-bridge" aria-labelledby="profile-bridge-title">
        <div><p className="eyebrow">Profile record</p><h2 id="profile-bridge-title">The research practice<br />behind the <em>record.</em></h2></div>
        <div><p>Explore the trajectory, working premise, approved public biography, and résumé in a dedicated profile route rather than repeating the full record on the homepage.</p><a className="inline-signal-link" href={portfolioPath("/profile")}>Open profile record <ArrowDownRight size={16} aria-hidden="true" /></a></div>
      </section>

      <section className="home-contact-bridge" aria-labelledby="contact-bridge-title">
        <p className="eyebrow">Open channel</p><h2 id="contact-bridge-title">Bring the question,<br />the context, and <em>the stakes.</em></h2><a href={portfolioPath("/contact")}>Start a conversation <Mail size={17} aria-hidden="true" /></a>
      </section>
    </>
  );
}
