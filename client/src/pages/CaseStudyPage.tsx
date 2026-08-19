import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useParams } from "wouter";
import SiteShell from "@/components/SiteShell";
import { getCaseStudy } from "@/lib/caseStudies";
import { usePageMetadata } from "@/lib/pageMetadata";
import { portfolioPath } from "@/lib/routes";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return (
      <SiteShell>
        <section className="case-study-missing"><p className="eyebrow">Record unavailable</p><h1>This case study<br />is not <em>published.</em></h1><a href={portfolioPath("/research")}>Return to research atlas <ArrowLeft size={16} /></a></section>
      </SiteShell>
    );
  }

  usePageMetadata({
    title: `${caseStudy.title} — Abhinav Srivastava`,
    description: caseStudy.lede,
  });

  return (
    <SiteShell>
      <article className="case-study-page">
        <header className="case-study-hero">
          <div className="case-study-hero__index" aria-hidden="true"><span>{caseStudy.number}</span><i /></div>
          <div className="case-study-hero__copy">
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h1>{caseStudy.title}</h1>
            <p>{caseStudy.lede}</p>
            <div className="case-study-meta"><span>{caseStudy.status}</span><span>{caseStudy.focus}</span></div>
          </div>
          <aside className="case-study-proof" aria-label="Case-study scope">
            <span>Evidence protocol</span><p>Approved source record only</p><p>Scope and limitation stated</p><p>No unverified performance added</p>
          </aside>
        </header>

        <section className="case-study-record" aria-labelledby="case-study-record-title">
          <div className="case-study-record__heading"><p className="eyebrow">Technical record</p><h2 id="case-study-record-title">How the work is<br /><em>being represented.</em></h2></div>
          <div className="case-study-record__entries">
            <article><span>01 / Question</span><p>{caseStudy.question}</p></article>
            <article><span>02 / Method</span><p>{caseStudy.method}</p></article>
            <article><span>03 / Evidence</span><p>{caseStudy.evidence}</p></article>
            <article><span>04 / What I learned</span><p>{caseStudy.learning}</p></article>
          </div>
        </section>

        <section className="case-study-boundary" aria-labelledby="case-boundary-title">
          <div><p className="eyebrow">Evidence boundary</p><h2 id="case-boundary-title">What this record<br />does <em>not</em> claim.</h2></div>
          <div className="case-study-boundary__copy"><CheckCircle2 size={20} aria-hidden="true" /><p>{caseStudy.boundary}</p><div className="case-study-tags">{caseStudy.related.map((item) => <span key={item}>{item}</span>)}</div></div>
        </section>

        <footer className="case-study-footer">
          <a href={portfolioPath("/research")}><ArrowLeft size={16} aria-hidden="true" /> Back to research atlas</a>
          {caseStudy.source ? <a href={caseStudy.source.href} target="_blank" rel="noreferrer">{caseStudy.source.label} <ArrowUpRight size={16} aria-hidden="true" /></a> : <span>External artifact not published in the approved record.</span>}
        </footer>
      </article>
    </SiteShell>
  );
}
