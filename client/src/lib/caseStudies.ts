export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  lede: string;
  status: string;
  focus: string;
  question: string;
  method: string;
  evidence: string;
  learning: string;
  boundary: string;
  source?: { label: string; href: string };
  related: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "mental-roberta": {
    slug: "mental-roberta",
    number: "01",
    title: "Mental-RoBERTa",
    eyebrow: "Research case study",
    lede: "An end-to-end early screening software record built around transformer and statistical methods during a research internship at NTNU.",
    status: "Research Intern · NTNU · May 2026–present",
    focus: "Healthcare AI / Trustworthy evaluation",
    question: "How can early multi-class screening better distinguish high-risk mental-health signals when reliability matters as much as raw prediction?",
    method: "The approved record describes end-to-end software using transformer and statistical methods. This case study frames that work through the conditions of screening, model behavior, and evaluation rather than exposing implementation details that are not public.",
    evidence: "The authenticated LinkedIn record describes a 96% accuracy outcome. The public portfolio preserves that scoped statement without inferring a dataset, benchmark, clinical-validation protocol, patient population, or deployment outcome.",
    learning: "The work reinforces a research premise used throughout this portfolio: high-stakes systems should make their limits visible, particularly when an error cannot be treated as a neutral event.",
    boundary: "No undisclosed clinical data, patient information, benchmark details, or validation claims are presented here. This is a research-practice record, not a clinical-performance claim.",
    related: ["Healthcare NLP", "Transformers", "Statistical methods", "Calibration"],
  },
  "dense-distillation": {
    slug: "dense-distillation",
    number: "02",
    title: "Alignment-Free Dense Distillation",
    eyebrow: "Reproduction case study",
    lede: "A technical reproduction of cross-modal medical-image transfer for white-light polyp classification using paired WLI and NBI images.",
    status: "Independent reproduction · 2026",
    focus: "Medical imaging / Reproducibility",
    question: "Can a cross-modal medical-image transfer framework be reproduced faithfully when explicit registration is not part of the implementation path?",
    method: "The approved record documents dual ResNet-50 networks, dense-affinity distillation, CAM-guided semantic-refinement gating, and a multi-objective optimization pipeline. The focus is on implementation fidelity and the practical conditions of reproducing the framework.",
    evidence: "The reproduction records design choices, distillation-loss sensitivity, and reproducibility challenges. It intentionally does not claim an unverified numerical comparison with the source framework.",
    learning: "Reproduction work is treated as a research output in its own right: a way to make assumptions, dependencies, and failure points inspectable rather than simply re-stating a paper’s result.",
    boundary: "This record does not present itself as a clinical finding or a replacement for the original framework. It is a scoped independent implementation study.",
    source: { label: "Open implementation record", href: "https://github.com/abhinavsrv/add-recreation" },
    related: ["PyTorch", "CUDA", "ResNet-50", "Medical imaging"],
  },
  "region-infinity": {
    slug: "region-infinity",
    number: "04",
    title: "Region Infinity Model Systems",
    eyebrow: "Applied systems case study",
    lede: "A scoped record of transformer-LLM architecture, optimization, and low-latency inference work during an AI/ML engineering internship.",
    status: "AI/ML Engineer Intern · Region Infinity · September–October 2025",
    focus: "LLM systems / Efficient inference",
    question: "How can large transformer systems become more efficient to train and faster to serve without treating optimization as separate from research judgment?",
    method: "The approved record describes co-designed architecture and optimization work, end-to-end ML pipelines, quantization and distillation techniques, distributed-training efficiency work, and low-latency inference paths.",
    evidence: "The portfolio keeps the record at the responsibility level documented on LinkedIn. It does not expose private product details, proprietary implementation, customer information, or unverified latency and deployment metrics.",
    learning: "Efficient systems work is part of a research practice when it preserves the conditions that make models evaluable, maintainable, and useful in real operating environments.",
    boundary: "This case study is a bounded experience record. It is not a public benchmark report or a disclosure of Region Infinity systems.",
    related: ["LLMs", "Quantization", "Distillation", "Distributed training"],
  },
};

export function getCaseStudy(slug: string | undefined) {
  return slug ? caseStudies[slug] : undefined;
}
