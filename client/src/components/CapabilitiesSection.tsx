/**
 * Obsidian Precision style reminder: capability lists are structured field notes, not generic skill-meter widgets.
 */
const capabilityGroups = [
  {
    label: "Research systems",
    title: "Learning under pressure",
    detail: "Reliable transformer workflows for noisy inputs, imbalanced targets, and high-consequence evaluation.",
    tools: ["PyTorch", "Transformers", "Hugging Face", "CUDA", "MLflow"],
  },
  {
    label: "Applied intelligence",
    title: "Models that meet operations",
    detail: "Forecasting, optimization, risk analysis, and explainable decision support for practical systems.",
    tools: ["LightGBM", "XGBoost", "OR-Tools", "SHAP", "OpenCV"],
  },
  {
    label: "Delivery layer",
    title: "From study to system",
    detail: "Python-centered engineering for reproducible workflows, deployment surfaces, and data-aware applications.",
    tools: ["Python", "C++", "FastAPI", "Docker", "PostgreSQL", "Git"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="capabilities-head">
        <p className="eyebrow">Capabilities</p>
        <h2 id="capabilities-title">A full-stack<br />research <em>practice.</em></h2>
      </div>
      <div className="capability-image" aria-hidden="true">
        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/oGjTbUoPbaUkwhBZ.jpg" alt="" />
        <span className="section-beam capability-beam" />
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
    </section>
  );
}
