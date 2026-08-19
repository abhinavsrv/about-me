/**
 * Obsidian Precision style reminder: chronology is a concise evidence trail, not a crowded résumé table.
 */
const entries = [
  {
    range: "2024 — 2028",
    type: "Education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Birla Institute of Technology, Mesra",
    detail: "Relevant study includes machine learning, deep learning, linear algebra, probability, optimization, and computer vision.",
  },
  {
    range: "May — Jul 2026",
    type: "Research experience",
    title: "Research Intern",
    organization: "Norwegian University of Science and Technology (NTNU)",
    detail: "Investigated hierarchical mental-health classification from noisy clinical and social-media text, with calibration-aware inference for high-risk screening.",
  },
  {
    range: "2026",
    type: "Research output",
    title: "Clinical Use of Transformers for Mental Health",
    organization: "IEEE conference paper · accepted",
    detail: "First-author conference work on the clinical use of transformer systems for mental-health research.",
  },
];

export default function TrajectorySection() {
  return (
    <section id="trajectory" className="trajectory-section" aria-labelledby="trajectory-title">
      <span className="section-beam trajectory-beam" aria-hidden="true" />
      <div className="trajectory-side">
        <p className="eyebrow">Trajectory</p>
        <h2 id="trajectory-title">A record of<br /><em>deepening focus.</em></h2>
      </div>
      <div className="trajectory-list">
        {entries.map((entry, index) => (
          <article className="trajectory-entry" key={entry.title}>
            <div className="trajectory-entry__marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="trajectory-entry__time"><span>{entry.range}</span><span>{entry.type}</span></div>
            <div className="trajectory-entry__content">
              <h3>{entry.title}</h3>
              <p className="trajectory-entry__org">{entry.organization}</p>
              <p>{entry.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
