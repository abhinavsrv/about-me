/**
 * Obsidian Precision style reminder: chronology is a concise evidence trail, not a crowded résumé table.
 */
import { trpc } from "@/lib/trpc";

const snapshotEntries = [
  {
    range: "2024 — 2028",
    type: "Education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Birla Institute of Technology, Mesra",
    detail: "Current undergraduate study in computer science and engineering, with AI, data mining, systems, and software-engineering coursework listed on LinkedIn.",
  },
  {
    range: "May — Jul 2026",
    type: "Research experience",
    title: "Research Intern",
    organization: "Norwegian University of Science and Technology (NTNU)",
    detail: "Designed end-to-end early-detection software using transformers and statistical methods, achieving 96% accuracy; additional public clinical-validation detail is not presented here.",
  },
  {
    range: "2024",
    type: "Advanced study",
    title: "Quantitative Finance & Machine Learning",
    organization: "Indian Institute of Technology, Kharagpur",
    detail: "Advanced coursework in algorithmic trading, derivatives, machine learning, statistics and probability, and stock markets; LinkedIn lists a 9.5/10 SOQ Advanced grade.",
  },
];

export default function TrajectorySection() {
  const { data: records } = trpc.portfolio.profile.useQuery(undefined, { retry: false, staleTime: 30_000 });
  const persistedEntries = (records ?? []).filter((record) => record.recordType === "experience" || record.recordType === "education").map((record) => ({
    range: record.periodLabel ?? "Current",
    type: record.recordType === "experience" ? "Experience" : "Education",
    title: record.title,
    organization: record.organization ?? "Verified profile record",
    detail: record.summary,
  }));
  const entries = persistedEntries.length > 0 ? persistedEntries : snapshotEntries;

  return (
    <section id="trajectory" className="trajectory-section" aria-labelledby="trajectory-title">
      <span className="section-beam trajectory-beam" aria-hidden="true" />
      <div className="trajectory-side">
        <p className="eyebrow">Trajectory</p>
        <h2 id="trajectory-title">A record of<br /><em>deepening focus.</em></h2>
      </div>
      <div className="trajectory-list">
        <p className="trajectory-list__source">{persistedEntries.length > 0 ? "Persistent profile record set" : "Static Pages snapshot"}</p>
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
