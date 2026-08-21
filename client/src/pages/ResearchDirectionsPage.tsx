import { ArrowLeft, ArrowUpRight, BadgeCheck, BookOpenCheck, Cpu, Network } from "lucide-react";
import EvidencePageHero from "@/components/EvidencePageHero";
import SiteShell from "@/components/SiteShell";
import { approvedCertificates, profileRecordEntries, researchDirections } from "@/lib/researchDirections";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";
import { portfolioPath } from "@/lib/routes";

export default function ResearchDirectionsPage() {
  usePageMetadata(portfolioPageMetadata.directions);

  return (
    <SiteShell>
      <article className="directions-page">
        <EvidencePageHero
          index="05"
          eyebrow="Research directions"
          title={<>A map of what<br /><em>to make reliable.</em></>}
          summary="A declared interest landscape spanning model reasoning, alignment, uncertainty, representation learning, and systems that can carry those ideas into consequential settings."
          caption="Research directions / declared focus"
          marks={<><span>Foundation models</span><span>Alignment</span><span>Efficient systems</span></>}
          signal="inference"
        />

        <nav className="directions-jump-nav" aria-label="Jump to Research Directions records">
          <span>Jump to record</span>
          <a href="#directions-academic">Academic record <i aria-hidden="true">01</i></a>
          <a href="#directions-certificates">Certificates <i aria-hidden="true">02</i></a>
          <a href="#directions-publication">Journal status <i aria-hidden="true">03</i></a>
        </nav>

      <section className="directions-terrain" aria-labelledby="directions-terrain-title">
        <div className="directions-terrain__heading"><p className="eyebrow">Declared research terrain</p><h2 id="directions-terrain-title">Questions that reach<br /><em>across a system.</em></h2><p>These areas describe an active research orientation rather than claims of completed work in every field.</p></div>
        <div className="directions-terrain__grid">{researchDirections.map((direction) => <article key={direction.index}><span>{direction.index}</span><h3>{direction.title}</h3><p>{direction.detail}</p></article>)}</div>
      </section>

      <section className="directions-record" id="directions-academic" aria-labelledby="directions-record-title">
        <div><p className="eyebrow">Academic & community record</p><h2 id="directions-record-title">Practice grows through<br /><em>institutions and service.</em></h2></div>
        <div className="directions-record__ledger">{profileRecordEntries.map(([label, detail], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{label}</h3><p>{detail}</p></div></article>)}</div>
      </section>

      <section className="directions-certificates" id="directions-certificates" aria-labelledby="directions-certificates-title">
        <div className="directions-certificates__heading"><p className="eyebrow">Certificate record</p><h2 id="directions-certificates-title">Training with<br /><em>verifiable dates.</em></h2><p>Each entry states its certificate name, issuer, completion date, and a concise scope note.</p></div>
        <div className="directions-certificates__grid">{approvedCertificates.map((certificate, index) => <article key={certificate.title}><span>{String(index + 1).padStart(2, "0")}</span><p className="directions-certificates__issuer">{certificate.issuer}</p><h3>{certificate.title}</h3><dl><div><dt>Completed</dt><dd>{certificate.completed}</dd></div><div><dt>Record</dt><dd>{certificate.detail}</dd></div></dl></article>)}</div>
      </section>

      <section className="directions-signals" aria-labelledby="directions-signals-title">
        <div className="directions-signals__copy"><p className="eyebrow">Signals of practice</p><h2 id="directions-signals-title">Learn the system.<br /><em>Then test it.</em></h2><p>Codeforces Expert status at a 1729 rating sits alongside professional training in AI and healthcare data science. These entries are presented as practice and credential signals, not as substitutes for project evidence.</p></div>
        <div className="directions-signals__cards directions-signals__cards--single"><article><Cpu size={21} aria-hidden="true" /><span>Competitive programming</span><strong>Codeforces · 1729-rated Expert</strong><p>Ongoing algorithmic practice across multiple contest platforms.</p></article><article><BadgeCheck size={21} aria-hidden="true" /><span>Evidence protocol</span><strong>Certificate details are source-bound.</strong><p>Issuer and completion-date evidence now appears in the dedicated certificate record above.</p></article></div>
      </section>

      <section className="directions-publication" id="directions-publication" aria-labelledby="directions-publication-title"><div><BookOpenCheck size={23} aria-hidden="true" /><p className="eyebrow">Forthcoming record</p><h2 id="directions-publication-title">A journal entry<br /><em>on the horizon.</em></h2></div><div><p>Abhinav Srivastava is named as primary author of an upcoming 2026 international-conference research journal: <strong>“Hierarchical Risk-Aware Mental-RoBERTa Framework for Early Multi-Class Screening of Mental-Health Conditions and Suicidal Ideation.”</strong></p><p>Until a public paper, preprint, DOI, or citation link is available, this is presented as a forthcoming entry rather than a published artifact.</p><a href={portfolioPath("/research/mental-roberta")}>Read the research journal <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>

        <footer className="directions-footer"><a href={portfolioPath("/profile")}><ArrowLeft size={16} aria-hidden="true" /> Back to profile record</a><a href={portfolioPath("/research")}>Open research atlas <Network size={16} aria-hidden="true" /></a></footer>
      </article>
    </SiteShell>
  );
}
