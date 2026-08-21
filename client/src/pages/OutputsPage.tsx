import { ArrowUpRight, BookOpenCheck, FileCheck2, FileSearch, FolderGit2, ShieldCheck } from "lucide-react";
import EvidencePageHero from "@/components/EvidencePageHero";
import SiteShell from "@/components/SiteShell";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";
import { portfolioPath } from "@/lib/routes";

const outputs = [
  { type: "Reproduction", icon: FolderGit2, title: "Alignment-Free Dense Distillation", status: "Open implementation record", detail: "Independent reproduction of cross-modal medical-image transfer for white-light polyp classification, documented as a scoped implementation study.", href: "https://github.com/abhinavsrv/add-recreation", source: "Repository" },
  { type: "Software", icon: FileSearch, title: "Mental-RoBERTa research software", status: "Research-practice record", detail: "End-to-end early-screening software using transformer and statistical methods, represented only through the approved research-internship record.", source: "Approved profile record" },
  { type: "Forthcoming journal", icon: BookOpenCheck, title: "Hierarchical Risk-Aware Mental-RoBERTa", status: "Profile-listed forthcoming · 2026", detail: "The supplied Profile-9 record lists Abhinav Srivastava as primary author of an upcoming international-conference research journal. No public paper, preprint, DOI, or citation link was supplied.", href: portfolioPath("/research/mental-roberta"), source: "Open research journal", internal: true },
  { type: "Applied systems", icon: ShieldCheck, title: "Region Infinity model systems", status: "Experience record", detail: "Transformer-LLM architecture, optimization, and low-latency inference contributions presented without private implementation details or unverified performance metrics.", source: "Approved profile record" },
  { type: "Credential", icon: FileCheck2, title: "Quantitative Finance and Machine Learning", status: "SOQ Advanced · 9.5/10", detail: "Standard and advanced study at Indian Institute of Technology, Kharagpur, spanning algorithmic trading, derivatives, machine learning, statistics, and probability.", source: "Approved résumé / profile record" },
];

export default function OutputsPage() {
  usePageMetadata(portfolioPageMetadata.outputs);

  return (
    <SiteShell>
      <EvidencePageHero
        index="04"
        eyebrow="Outputs record"
        title={<>Artifacts with<br /><em>provenance.</em></>}
        summary="A categorized public record of reproductions, software practice, applied systems, and credentials. Every entry states its source and maturity rather than implying publication status."
        caption="Provenance matrix / evidence and artifacts"
        marks={<><span>Reproduction</span><span>Software</span><span>Credentials</span></>}
        signal="provenance"
      />

      <section className="outputs-section" aria-labelledby="outputs-title">
        <div className="outputs-section__head"><p className="eyebrow">Public record</p><h2 id="outputs-title">What can be<br /><em>inspected.</em></h2><p>Entries use direct status language. Publication, preprint, and citation material is not represented unless an approved public source exists.</p></div>
        <div className="outputs-grid">
          {outputs.map((output, index) => { const Icon = output.icon; return <article key={output.title}><div><span>{String(index + 1).padStart(2, "0")} / {output.type}</span><Icon size={18} aria-hidden="true" /></div><h3>{output.title}</h3><p className="outputs-status">{output.status}</p><p>{output.detail}</p><footer>{output.href ? <a href={output.href} target={output.internal ? undefined : "_blank"} rel={output.internal ? undefined : "noreferrer"}>{output.source} <ArrowUpRight size={15} aria-hidden="true" /></a> : <span>{output.source}</span>}</footer></article>; })}
        </div>
      </section>

      <section className="outputs-boundary" aria-labelledby="outputs-boundary-title"><p className="eyebrow">Publication status</p><h2 id="outputs-boundary-title">A forthcoming record—<br />not a public <em>paper yet.</em></h2><p>The supplied profile lists a 2026 upcoming Mental-RoBERTa research journal. The portfolio deliberately distinguishes that forthcoming entry from a published artifact until a paper, preprint, DOI, or citation link is available.</p></section>
      <section className="outputs-notes-status" aria-labelledby="outputs-notes-title"><p className="eyebrow">Technical notes</p><h2 id="outputs-notes-title">No approved public<br /><em>technical notes yet.</em></h2><p>Technical notes are intentionally absent from this record until an author-approved public artifact can be linked. Research ideas and private working material are not presented as finished outputs.</p></section>
    </SiteShell>
  );
}
