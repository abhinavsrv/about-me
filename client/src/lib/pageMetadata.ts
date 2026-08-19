import { useEffect } from "react";

export type PageMetadata = {
  title: string;
  description: string;
};

export const portfolioPageMetadata = {
  home: {
    title: "Abhinav Srivastava — Research Portfolio",
    description: "Abhinav Srivastava — undergraduate researcher exploring reliable machine-learning systems for consequential decisions.",
  },
  research: {
    title: "Research Atlas — Abhinav Srivastava",
    description: "Research projects and technical notes by Abhinav Srivastava across trustworthy AI, healthcare NLP, transformer behavior, and applied systems.",
  },
  profile: {
    title: "Profile — Abhinav Srivastava",
    description: "Profile, research orientation, and trajectory of Abhinav Srivastava, an undergraduate researcher in trustworthy AI and research systems.",
  },
  contact: {
    title: "Contact — Abhinav Srivastava",
    description: "Contact Abhinav Srivastava for research conversations and collaborations in trustworthy AI, healthcare NLP, and efficient model systems.",
  },
  outputs: {
    title: "Outputs Record — Abhinav Srivastava",
    description: "A sourced public record of approved reproductions, software practice, applied systems, and credentials by Abhinav Srivastava.",
  },
} as const satisfies Record<string, PageMetadata>;

export function applyPageMetadata(metadata: PageMetadata, documentRef: Document = document) {
  documentRef.title = metadata.title;
  documentRef.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
}

export function usePageMetadata(metadata: PageMetadata) {
  useEffect(() => {
    applyPageMetadata(metadata);
  }, [metadata]);
}
