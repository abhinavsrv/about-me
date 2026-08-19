/**
 * Obsidian Precision style reminder: notes are sparse research signals, with clear status and no invented publication claims.
 */
const notes = [
  { index: "01", status: "Research thread", title: "Calibration belongs in the evaluation loop.", copy: "When screening systems carry unequal error costs, confidence must be assessed as a behavioral property—not assumed from a score." },
  { index: "02", status: "Research thread", title: "Imbalance changes what a useful model looks like.", copy: "Early detection and multi-class settings require evidence beyond aggregate accuracy, particularly where minority classes carry the highest consequence." },
  { index: "03", status: "In development", title: "Mechanistic evidence for transformer behavior.", copy: "An emerging line of inquiry focused on tracing representation behavior and making model mechanisms easier to inspect." },
];

export default function NotesSection() {
  return (
    <section className="notes-section" aria-labelledby="notes-title">
      <div className="notes-art" aria-hidden="true"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/QybVvkaQBPRvJlAt.jpg" alt="" /></div>
      <div className="notes-content">
        <div className="notes-heading"><p className="eyebrow">Research notes</p><h2 id="notes-title">What I am<br /><em>following now.</em></h2></div>
        <div className="notes-list">
          {notes.map((note) => (
            <article key={note.index} className="note-card">
              <div><span>{note.index}</span><span>{note.status}</span></div>
              <h3>{note.title}</h3>
              <p>{note.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
