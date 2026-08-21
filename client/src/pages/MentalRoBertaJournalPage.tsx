import { ArrowLeft, ArrowUpRight, BarChart3, Database, GitBranch, ShieldCheck } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import { mentalRoBertaJournal } from "@/lib/mentalRoBertaJournal";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";
import { portfolioPath } from "@/lib/routes";

export default function MentalRoBertaJournalPage() {
  usePageMetadata(portfolioPageMetadata.mentalRoBertaJournal);

  return (
    <SiteShell>
      <article className="mental-journal">
        <header className="mental-journal__hero">
          <div className="mental-journal__index" aria-hidden="true"><span>01</span><i /></div>
          <div className="mental-journal__hero-copy">
            <p className="eyebrow">Mental-RoBERTa / research journal</p>
            <h1>{mentalRoBertaJournal.title}</h1>
            <p className="mental-journal__lede">A staged, imbalance-aware text-screening framework that treats the cost of missed suicidal ideation as a design condition rather than a post-hoc metric.</p>
            <div className="mental-journal__meta"><span>Healthcare NLP</span><span>Hierarchical classification</span><span>Decision support only</span></div>
          </div>
          <aside className="mental-journal__protocol" aria-label="Research protocol summary">
            <span>Protocol record</span>
            <p>Public aggregated corpus</p>
            <p>Stratified train / validation / test splits</p>
            <p>Bootstrap resampling · 1,000 iterations</p>
          </aside>
        </header>

        <section className="mental-journal__abstract" aria-labelledby="mental-abstract-title">
          <div><p className="eyebrow">Abstract</p><h2 id="mental-abstract-title">Screen for risk.<br /><em>Preserve review.</em></h2></div>
          <div className="mental-journal__abstract-copy">
            <p>Early text-based identification of mental-health distress is difficult because linguistic signals overlap, classes are severely imbalanced, and a missed suicidal-ideation signal carries disproportionate consequence. This research journal documents a hierarchical Mental-RoBERTa framework built to make that asymmetry explicit.</p>
            <p>The first stage separates Normal from Distressed text. The second assigns a fine-grained label among Stress, Bipolar Disorder, Personality Disorder, Depression, Anxiety, and Suicidal Ideation. Weighted cross-entropy, label smoothing, and a validation-tuned risk-aware operating rule are used to address imbalance and overconfidence.</p>
            <p className="mental-journal__source-note">Research details and reported results on this page are drawn from the supplied project manuscript. They are presented as a research record and not as a clinical recommendation.</p>
          </div>
        </section>

        <section className="mental-journal__architecture" aria-labelledby="mental-architecture-title">
          <div className="mental-journal__section-head"><p className="eyebrow">Decision architecture</p><h2 id="mental-architecture-title">A hierarchy for<br /><em>uneven consequences.</em></h2></div>
          <div className="mental-journal__stage-grid">
            {mentalRoBertaJournal.stages.map((stage, index) => <article key={stage.label}>
              <div className="mental-journal__stage-label"><span>0{index + 1}</span>{stage.label}</div>
              <h3>{stage.title}</h3>
              <p>{stage.detail}</p>
              <strong>{stage.result}</strong>
            </article>)}
          </div>
          <div className="mental-journal__signal-flow" aria-label="Normal text is screened separately from distressed text, which is then fine-grained classified and checked against the suicidal ideation operating threshold.">
            <span>Text input</span><i /><span>Normal / Distressed</span><i /><span>Fine-grained state</span><i /><b>SI probability ≥ {mentalRoBertaJournal.threshold}</b>
          </div>
        </section>

        <section className="mental-journal__evaluation" aria-labelledby="mental-evaluation-title">
          <div className="mental-journal__section-head"><p className="eyebrow">Reported evaluation checkpoints</p><h2 id="mental-evaluation-title">Measured at each<br /><em>decision boundary.</em></h2></div>
          <div className="mental-journal__evaluation-grid">
            <div className="mental-journal__dataset"><Database size={20} aria-hidden="true" /><span>Evaluation record</span><p>{mentalRoBertaJournal.dataset}</p><small>Reported splits were stratified. Bootstrap resampling used 1,000 iterations; the reported 95% confidence interval for overall accuracy was [87.56%, 89.28%].</small></div>
            <div className="mental-journal__metrics" role="table" aria-label="Mental-RoBERTa evaluation checkpoints">
              {mentalRoBertaJournal.checkpoints.map((checkpoint) => <div role="row" key={checkpoint.metric}><span role="cell">{checkpoint.metric}</span><b role="cell">{checkpoint.value}</b><small role="cell">{checkpoint.note}</small></div>)}
            </div>
          </div>
          <p className="mental-journal__comparison-note"><BarChart3 size={17} aria-hidden="true" /> These results correspond to distinct reported evaluation checkpoints. They are included to describe the manuscript’s evaluation record, not to imply that every measure is a directly interchangeable benchmark.</p>
        </section>

        <section className="mental-journal__findings" aria-labelledby="mental-findings-title">
          <div><p className="eyebrow">Class-level signal</p><h2 id="mental-findings-title">Where the model<br /><em>was strongest—and not.</em></h2></div>
          <div className="mental-journal__findings-copy">
            <p>The supplied evaluation record reports strongest Stage 2 performance for Anxiety, with comparatively lower scores for Personality Disorder and Suicidal Ideation. That difference motivates the risk-aware threshold rather than treating a flat top-class prediction as sufficient in every case.</p>
            <div className="mental-journal__class-results">{mentalRoBertaJournal.classResults.map(([label, result]) => <article key={label}><span>{label}</span><b>{result}</b></article>)}</div>
          </div>
        </section>

        <section className="mental-journal__guardrail" aria-labelledby="mental-guardrail-title">
          <div><ShieldCheck size={24} aria-hidden="true" /><p className="eyebrow">Use boundary</p><h2 id="mental-guardrail-title">Designed to prioritise<br /><em>human review.</em></h2></div>
          <div><p>This framework is positioned strictly as decision support for prioritising human review. It is not an autonomous diagnostic instrument, does not replace clinical assessment, and should not be deployed as a standalone health decision system.</p><div className="mental-journal__guardrail-tags"><span>Public aggregated data</span><span>Validation-tuned operating point</span><span>Human oversight required</span></div></div>
        </section>

        <footer className="mental-journal__footer">
          <a href={portfolioPath("/research")}><ArrowLeft size={16} aria-hidden="true" /> Back to research atlas</a>
          <a href={portfolioPath("/profile")}>Open profile record <ArrowUpRight size={16} aria-hidden="true" /></a>
          <span><GitBranch size={15} aria-hidden="true" /> Research journal / Mental-RoBERTa</span>
        </footer>
      </article>
    </SiteShell>
  );
}
