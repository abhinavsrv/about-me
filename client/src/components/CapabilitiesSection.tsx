/**
 * Obsidian Precision style reminder: capability lists are structured field notes, not generic skill-meter widgets.
 */
import { trpc } from "@/lib/trpc";
const capabilityGroups = [
  {
    label: "Foundation & reasoning",
    title: "Models that reason, adapt, and remain inspectable.",
    detail: "Foundation models, LLMs and LRMs, test-time compute, agentic systems, representation learning, preference learning, and alignment-aware methods.",
    tools: ["LLMs", "LRMs", "Agentic AI", "RLHF", "DPO", "RAG"],
  },
  {
    label: "Trustworthy AI",
    title: "Evidence for consequential model behavior.",
    detail: "Mechanistic interpretability, explainable AI, uncertainty quantification, causal and Bayesian machine learning, model alignment, and AI safety.",
    tools: ["Interpretability", "XAI", "UQ", "Causal ML", "AI Safety"],
  },
  {
    label: "Multimodal & systems",
    title: "From perception to efficient inference.",
    detail: "Clinical NLP, vision-language and multimodal AI, graph and geometric learning, scalable systems, distributed AI, inference optimization, and MLOps.",
    tools: ["Transformers", "PyTorch", "CUDA", "VLMs", "MLOps", "Efficient AI"],
  },
];

const experienceLedger = [
  { index: "01", title: "Research Intern · NTNU", detail: "Early-detection software using transformers and statistical methods, with a LinkedIn-recorded 96% accuracy outcome and no added clinical-validation claim.", tag: "Healthcare AI" },
  { index: "02", title: "IT Department · Bank of India", detail: "Risk-assessment and security-management contributions for large-scale banking applications, described on LinkedIn as serving an app with more than 10 million active users.", tag: "Fintech" },
  { index: "03", title: "Production-model work · Region Infinity", detail: "Co-designed a production model using hyperparameter tuning, fine-tuning, and LLMs.", tag: "LLM Systems" },
  { index: "04", title: "Competitive programming", detail: "Active participant across programming platforms, with Codeforces 1729-rated Expert status stated on LinkedIn.", tag: "Algorithms" },
];

export default function CapabilitiesSection() {
  const { data: records } = trpc.portfolio.profile.useQuery(undefined, { retry: false, staleTime: 30_000 });
  const persistedLedger = (records ?? []).filter((record) => record.recordType === "experience" || record.recordType === "education" || record.recordType === "credential").slice(0, 5).map((record, index) => ({
    index: String(index + 1).padStart(2, "0"),
    title: `${record.title}${record.organization ? ` · ${record.organization}` : ""}`,
    detail: record.summary,
    tag: record.recordType === "experience" ? "Experience" : record.recordType === "education" ? "Education" : "Credential",
  }));
  const ledger = persistedLedger.length > 0 ? persistedLedger : experienceLedger;

  return (
    <section id="capabilities" className="capabilities-section" aria-labelledby="capabilities-title">
      <span className="section-beam capability-ledger-beam" aria-hidden="true" />
      <div className="capabilities-head">
        <p className="eyebrow">Capabilities</p>
        <h2 id="capabilities-title">A research<br />practice with <em>range.</em></h2>
        <p className="capabilities-lede">A systems-minded approach spanning model behavior, clinical AI, applied risk, and the engineering conditions that make research usable.</p>
      </div>
      <div className="capability-groups">
        {capabilityGroups.map((group, index) => (
          <article className="capability-group" key={group.label}>
            <div className="capability-group__label"><span>{String(index + 1).padStart(2, "0")}</span>{group.label}</div>
            <h3>{group.title}</h3>
            <p>{group.detail}</p>
            <div className="capability-tools">{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="experience-ledger" aria-label="Selected research and applied experience">
        <p className="experience-ledger__title">Practice ledger <span>{persistedLedger.length > 0 ? "Persistent profile records" : "Static Pages snapshot"}</span></p>
        {ledger.map((entry) => (
          <article className="experience-ledger__item" key={entry.index}>
            <span>{entry.index}</span>
            <div><h3>{entry.title}</h3><p>{entry.detail}</p></div>
            <b>{entry.tag}</b>
          </article>
        ))}
      </div>
    </section>
  );
}
