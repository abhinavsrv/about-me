import NotesSection from "@/components/NotesSection";
import EvidencePageHero from "@/components/EvidencePageHero";
import SiteShell from "@/components/SiteShell";
import WorkSection from "@/components/WorkSection";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";

export default function ResearchPage() {
  usePageMetadata(portfolioPageMetadata.research);

  return (
    <SiteShell>
      <EvidencePageHero
        index="01"
        eyebrow="Research atlas"
        title={<>Research that makes<br /><em>limits legible.</em></>}
        summary="A focused record of work across trustworthy AI, healthcare NLP, transformer behavior, financial systems, and the engineering choices that make evaluation usable."
        caption="Inference window / research systems"
        marks={<><span>Trustworthy AI</span><span>Healthcare NLP</span><span>Mechanistic interpretability</span></>}
        signal="inference"
      />

      <section className="research-method-section" aria-labelledby="research-method-title">
        <div>
          <p className="eyebrow">Method</p>
          <h2 id="research-method-title">The question is not just<br /><em>what a model predicts.</em></h2>
        </div>
        <div className="research-method-grid">
          <article><span>01</span><h3>Conditions first</h3><p>Start with incomplete inputs, imbalance, uncertainty, and the real cost of failure rather than a headline metric alone.</p></article>
          <article><span>02</span><h3>Evidence in the loop</h3><p>Use calibration, representation behavior, and clear evaluation practices to make a system’s limits visible.</p></article>
          <article><span>03</span><h3>Implementation matters</h3><p>Treat systems engineering, inference efficiency, and operational constraints as part of the research question.</p></article>
        </div>
      </section>

      <WorkSection />
      <NotesSection />
    </SiteShell>
  );
}
