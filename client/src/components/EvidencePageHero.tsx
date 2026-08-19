import type { ReactNode } from "react";

type EvidencePageHeroProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  summary: string;
  caption: string;
  marks: ReactNode;
  signal: "inference" | "provenance";
};

export default function EvidencePageHero({ index, eyebrow, title, summary, caption, marks, signal }: EvidencePageHeroProps) {
  return (
    <section className="evidence-page-hero" aria-labelledby={`evidence-page-title-${index}`}>
      <div className="evidence-page-hero__copy"><p className="eyebrow"><span>{index}</span>{eyebrow}</p><h1 id={`evidence-page-title-${index}`}>{title}</h1><p>{summary}</p><div className="editorial-page-hero__marks">{marks}</div></div>
      <figure className={`evidence-window evidence-window--${signal}`} aria-label={caption}><div className="evidence-window__grid" aria-hidden="true" /><div className="evidence-window__trace" aria-hidden="true" /><div className="evidence-window__aperture" aria-hidden="true" /><figcaption>{caption}</figcaption></figure>
    </section>
  );
}
