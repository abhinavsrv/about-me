import { ArrowLeft, ArrowUpRight, BadgeCheck, BookOpenCheck, Cpu, Network } from "lucide-react";
import EvidencePageHero from "@/components/EvidencePageHero";
import SiteShell from "@/components/SiteShell";
import { profileCredentials, profileRecordEntries, researchDirections } from "@/lib/researchDirections";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";
import { portfolioPath } from "@/lib/routes";

export default function ResearchDirectionsPage() {
  usePageMetadata(portfolioPageMetadata.directions);

  return (
    <SiteShell>
      <EvidencePageHero
        index="05"
        eyebrow="Research directions"
        title={<>A map of what<br /><em>to make reliable.</em></>}
        summary="A declared interest landscape spanning model reasoning, alignment, uncertainty, representation learning, and systems that can carry those ideas into consequential settings."
        caption="Research directions / source profile record"
        marks={<><span>Foundation models</span><span>Alignment</span><span>Efficient systems</span></>}
        signal="inference"
      />

      <section className="directions-terrain" aria-labelledby="directions-terrain-title">
        <div className="directions-terrain__heading"><p className="eyebrow">Declared research terrain</p><h2 id="directions-terrain-title">Questions that reach<br /><em>across a system.</em></h2><p>These areas are drawn from the supplied Profile-9 record. They describe an active research orientation rather than claims of completed work in every field.</p></div>
        <div className="directions-terrain__grid">{researchDirections.map((direction) => <article key={direction.index}><span>{direction.index}</span><h3>{direction.title}</h3><p>{direction.detail}</p></article>)}</div>
      </section>

      <section className="directions-record" aria-labelledby="directions-record-title">
        <div><p className="eyebrow">Academic & community record</p><h2 id="directions-record-title">Practice grows through<br /><em>institutions and service.</em></h2></div>
        <div className="directions-record__ledger">{profileRecordEntries.map(([label, detail], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{label}</h3><p>{detail}</p></div></article>)}</div>
      </section>

      <section className="directions-signals" aria-labelledby="directions-signals-title">
        <div className="directions-signals__copy"><p className="eyebrow">Signals of practice</p><h2 id="directions-signals-title">Learn the system.<br /><em>Then test it.</em></h2><p>The supplied profile records Codeforces Expert status at a 1729 rating, alongside professional training in AI and healthcare data science. These entries are presented as practice and credential signals, not as substitutes for project evidence.</p></div>
        <div className="directions-signals__cards"><article><Cpu size={21} aria-hidden="true" /><span>Competitive programming</span><strong>Codeforces · 1729-rated Expert</strong><p>Ongoing algorithmic practice across multiple contest platforms.</p></article><article><BadgeCheck size={21} aria-hidden="true" /><span>Profile-listed certifications</span>{profileCredentials.map((credential) => <p key={credential}>{credential}</p>)}</article></div>
      </section>

      <section className="directions-publication" aria-labelledby="directions-publication-title"><div><BookOpenCheck size={23} aria-hidden="true" /><p className="eyebrow">Forthcoming record</p><h2 id="directions-publication-title">A journal entry<br /><em>on the horizon.</em></h2></div><div><p>The Profile-9 record lists Abhinav Srivastava as primary author of an upcoming international-conference research journal in 2026: <strong>“Hierarchical Risk-Aware Mental-RoBERTa Framework for Early Multi-Class Screening of Mental-Health Conditions and Suicidal Ideation.”</strong></p><p>No public paper, preprint, DOI, or citation link was supplied with that record, so this is presented as a forthcoming entry rather than a published artifact.</p><a href={portfolioPath("/research/mental-roberta")}>Read the research journal <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>

      <footer className="directions-footer"><a href={portfolioPath("/profile")}><ArrowLeft size={16} aria-hidden="true" /> Back to profile record</a><a href={portfolioPath("/research")}>Open research atlas <Network size={16} aria-hidden="true" /></a></footer>
    </SiteShell>
  );
}
