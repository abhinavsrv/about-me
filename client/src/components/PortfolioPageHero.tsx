import type { ReactNode } from "react";

type PortfolioPageHeroProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  summary: string;
  image: string;
  imageSmall: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  caption: string;
  marks: ReactNode;
};

export default function PortfolioPageHero({
  index,
  eyebrow,
  title,
  summary,
  image,
  imageSmall,
  imageAlt,
  imageWidth,
  imageHeight,
  caption,
  marks,
}: PortfolioPageHeroProps) {
  return (
    <section className="editorial-page-hero" aria-labelledby={`page-title-${index}`}>
      <div className="editorial-page-hero__ambient" aria-hidden="true" />
      <div className="editorial-page-hero__copy">
        <p className="eyebrow"><span>{index}</span>{eyebrow}</p>
        <h1 id={`page-title-${index}`}>{title}</h1>
        <p>{summary}</p>
        <div className="editorial-page-hero__marks">{marks}</div>
      </div>
      <figure className="editorial-page-hero__portrait">
        <img src={image} srcSet={`${imageSmall} 640w, ${image} ${imageWidth}w`} sizes="(max-width: 860px) 88vw, 36vw" alt={imageAlt} width={imageWidth} height={imageHeight} decoding="async" />
        <figcaption>{caption}</figcaption>
      </figure>
    </section>
  );
}
