/**
 * Obsidian Precision style reminder: the explorer treats research and practice as one evidence-led record.
 * Filters are immediate, keyboard reachable, and never rely on visual-only state.
 */
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { getCaseStudy } from "@/lib/caseStudies";
import { portfolioPath } from "@/lib/routes";
import { trackPortfolioEvent } from "@/lib/portfolioAnalytics";

export type ProjectTrack = "Research" | "Applied Work" | "Technical Practice";
export type ProjectFocus = "Healthcare AI" | "Financial Systems" | "LLM Systems" | "Decision Intelligence" | "Algorithms";

export type Project = {
  id: string;
  number: string;
  category: string;
  track: ProjectTrack;
  focus: ProjectFocus;
  status: string;
  title: string;
  description: string;
  evidence: string;
  stack: string[];
  href?: string;
  featured?: boolean;
  detail: { question: string; approach: string; evidence: string; scope: string };
};

export const projects: Project[] = [
  {
    id: "mental-roberta", number: "01", category: "Research system", track: "Research", focus: "Healthcare AI", status: "Research internship · 2026", title: "Mental-RoBERTa",
    description: "End-to-end early screening software for mental anomalies using transformer and statistical methods.",
    evidence: "LinkedIn describes a 96% accuracy result; the public portfolio does not add undisclosed clinical data, patient information, or benchmark details.",
    stack: ["Transformers", "Statistical Methods", "Healthcare NLP", "Calibration"], href: "https://github.com/abhinavsrv", featured: true,
    detail: { question: "How can early multi-class screening better distinguish high-risk mental-health signals?", approach: "Designed end-to-end software around transformer and statistical methods during the NTNU research internship.", evidence: "The authenticated LinkedIn profile describes a 96% accuracy outcome. Further clinical-validation claims are intentionally not inferred.", scope: "Research Intern · NTNU · May 2026–present; supervised by Dr. Alok Mishra." },
  },
  {
    id: "dense-distillation", number: "02", category: "Research reproduction", track: "Research", focus: "Healthcare AI", status: "Independent reproduction · 2026", title: "Alignment-Free Dense Distillation",
    description: "A reproduction study of cross-modal medical-image transfer for white-light polyp classification using paired WLI and NBI images.",
    evidence: "Reimplemented dual ResNet-50 networks, dense-affinity distillation, CAM-guided gating, and a multi-objective optimization pipeline.",
    stack: ["PyTorch", "CUDA", "ResNet-50", "Medical Imaging"], href: "https://github.com/abhinavsrv/add-recreation",
    detail: { question: "Can cross-modal medical-image transfer be reproduced faithfully when registration is not explicitly used?", approach: "Recreated paired WLI/NBI teacher–student networks with dense-affinity transfer and CAM-guided semantic-refinement gating.", evidence: "The reproduction documents implementation choices, distillation-loss sensitivity, and reproducibility challenges; no unverified numerical comparison is claimed.", scope: "Independent reproduction of the MICCAI 2025 framework." },
  },
  {
    id: "bank-of-india", number: "03", category: "Applied research", track: "Applied Work", focus: "Financial Systems", status: "Artificial Intelligence Intern · 2026", title: "Risk & Security Management",
    description: "Machine-learning prototype work for risk assessment and security management in banking applications.",
    evidence: "LinkedIn records comprehensive factor analysis intended to enhance an application described as having more than 10 million active users.",
    stack: ["Risk Assessment", "Factor Analysis", "Security Management", "Banking"],
    detail: { question: "How can risk and security management be structured for high-scale banking applications?", approach: "Developed a machine-learning prototype and conducted factor analysis during the Bank of India internship.", evidence: "Portfolio wording is limited to the authenticated LinkedIn record and does not expose proprietary system details or personal customer data.", scope: "Artificial Intelligence Intern · Bank of India · May–July 2026." },
  },
  {
    id: "region-infinity", number: "04", category: "Applied research", track: "Applied Work", focus: "LLM Systems", status: "AI/ML Engineer Intern · 2025", title: "Region Infinity Model Systems",
    description: "Core-tech contribution to transformer-LLM architecture, optimization, and low-latency inference pipelines.",
    evidence: "LinkedIn records quantization and distillation workflows, distributed-training efficiency work, and an alignment-focused research roadmap.",
    stack: ["LLMs", "Quantization", "Distillation", "Distributed Training"],
    detail: { question: "How can large-scale transformer models become more efficient to train and faster to serve?", approach: "Co-designed architecture and optimization work, end-to-end ML pipelines, and low-latency inference paths using quantization and distillation techniques.", evidence: "The portfolio preserves the reported responsibility scope without adding private product or deployment metrics.", scope: "AI/ML Engineer Intern · Region Infinity · September–October 2025." },
  },
  {
    id: "risk-simulator", number: "05", category: "Decision research", track: "Research", focus: "Financial Systems", status: "Independent study · 2025", title: "Risk Simulator",
    description: "An explainable credit-risk evaluation framework for scenario-based forecasting and downside-aware allocation analysis.",
    evidence: "Combines SHAP dashboards, CVaR risk surfaces, and portfolio optimization to make risk aggregation more inspectable.",
    stack: ["Explainable ML", "CVaR", "SHAP", "Forecasting"],
    detail: { question: "How can credit-risk assessment retain transparent downside reasoning across changing scenarios?", approach: "Combined scenario forecasting, explanations, CVaR risk surfaces, and constrained allocation analysis.", evidence: "The project makes trade-offs visible through scenario-based views rather than framing any single score as a complete decision.", scope: "Independent applied machine-learning study from 2025." },
  },
  {
    id: "retail-intelligence", number: "06", category: "Decision research", track: "Applied Work", focus: "Decision Intelligence", status: "Experimental framework · 2026", title: "Retail AI Decision Intelligence",
    description: "A connected framework for demand forecasting, inventory optimization, segmentation, recommendations, and KPI analysis.",
    evidence: "Includes a SQL-aware agentic analyst designed to turn business signals into explainable recommendations.",
    stack: ["LightGBM", "XGBoost", "OR-Tools", "LangGraph"],
    detail: { question: "How can retail decision support connect prediction, optimization, and contextual explanation?", approach: "Integrated forecasting, inventory optimization, segmentation, recommendation systems, and a SQL-aware agentic analyst.", evidence: "The experimental system prioritizes inspectable recommendations rather than isolated model outputs.", scope: "Experimental retail-analytics framework, 2026." },
  },
  {
    id: "competitive-programming", number: "07", category: "Technical practice", track: "Technical Practice", focus: "Algorithms", status: "Codeforces · 1729-rated Expert", title: "Competitive Programming Practice",
    description: "Ongoing algorithmic problem solving through multiple competitive-programming platforms, primarily Codeforces.",
    evidence: "The profile lists Codeforces 1729-rated Expert status, supporting a practice of concise reasoning under constraints.",
    stack: ["Algorithms", "Data Structures", "Codeforces"], href: "https://codeforces.com/",
    detail: { question: "How can regular algorithmic practice sharpen reasoning under tight time and resource constraints?", approach: "Participates in competitive-programming contests across multiple platforms, primarily Codeforces.", evidence: "LinkedIn identifies a Codeforces 1729 rating and Expert status; no contest-history extrapolations are made.", scope: "Ongoing technical practice recorded on LinkedIn." },
  },
];

export default function WorkSection() {
  const [activeTrack, setActiveTrack] = useState<ProjectTrack | "All">("All");
  const [activeFocus, setActiveFocus] = useState<ProjectFocus | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { data: persistedItems } = trpc.portfolio.items.useQuery(undefined, { retry: false, staleTime: 30_000 });
  const trackFor = { research: "Research", applied_work: "Applied Work", technical_practice: "Technical Practice" } as const;
  const persistedProjects: Project[] = (persistedItems ?? []).map((item, index) => ({
    id: item.slug,
    number: String(index + 1).padStart(2, "0"),
    category: item.category,
    track: trackFor[item.itemType],
    focus: item.focus as ProjectFocus,
    status: item.status,
    title: item.title,
    description: item.description,
    evidence: item.evidence,
    stack: item.stack,
    href: item.sourceUrl ?? undefined,
    featured: item.featured,
    detail: item.details,
  }));
  const explorerProjects = persistedProjects.length > 0 ? persistedProjects : projects;
  const visibleProjects = explorerProjects.filter((project) => (activeTrack === "All" || project.track === activeTrack) && (activeFocus === "All" || project.focus === activeFocus));
  const tracks: Array<ProjectTrack | "All"> = ["All", "Research", "Applied Work", "Technical Practice"];
  const focuses: Array<ProjectFocus | "All"> = ["All", "Healthcare AI", "Financial Systems", "LLM Systems", "Decision Intelligence", "Algorithms"];
  const jumpToFocus = (focus: ProjectFocus) => {
    setActiveTrack("All");
    setActiveFocus(focus);
    window.requestAnimationFrame(() => document.getElementById("work-list")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <span className="section-beam work-beam" aria-hidden="true" />
      <div className="work-section__head">
        <div><p className="eyebrow">Research & practice explorer</p><h2 id="work-title">Research with<br /><em>implementation.</em></h2></div>
        <div className="work-section__controls">
          <p>Research systems, applied work, and technical practice—organized by track and focus rather than presented as a static list.</p>
          <div className="work-filter-group"><span>Track</span><div className="work-filter" aria-label="Filter research and work by track">{tracks.map((track) => <button key={track} type="button" className={activeTrack === track ? "work-filter__active" : ""} aria-pressed={activeTrack === track} onClick={() => setActiveTrack(track)}>{track}</button>)}</div></div>
          <div className="work-filter-group"><span>Focus</span><div className="work-filter" aria-label="Filter research and work by focus area">{focuses.map((focus) => <button key={focus} type="button" className={activeFocus === focus ? "work-filter__active" : ""} aria-pressed={activeFocus === focus} onClick={() => setActiveFocus(focus)}>{focus}</button>)}</div></div>
        </div>
      </div>
      <p className="work-filter-result" aria-live="polite">Showing {visibleProjects.length} of {explorerProjects.length} records. <span>{persistedProjects.length > 0 ? "Persistent record set" : "Static Pages snapshot"}</span></p>
      <nav className="work-jump-nav" aria-label="Jump to common research focus areas"><span>Quick focus</span>{(["Healthcare AI", "Financial Systems", "LLM Systems", "Decision Intelligence", "Algorithms"] as ProjectFocus[]).map((focus) => <button type="button" key={focus} onClick={() => jumpToFocus(focus)}>{focus}</button>)}</nav>
      <div className="work-list" id="work-list" tabIndex={-1}>
        {visibleProjects.map((project) => (
          <article className={`project-card ${project.featured ? "project-card--featured" : ""}`} key={project.id} id={project.id}>
            <div className="project-card__topline"><span>{project.number}</span><span>{project.track} · {project.focus}</span></div>
            <div className="project-card__main"><p className="project-status">{project.status}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-evidence">{project.evidence}</p>{getCaseStudy(project.id) ? <a className="project-detail-trigger" href={portfolioPath(`/work/${project.id}`)} onClick={() => trackPortfolioEvent("project_case_study_opened")}>Read full case study <ArrowUpRight size={14} aria-hidden="true" /></a> : <button type="button" className="project-detail-trigger" onClick={() => setSelectedProject(project)}>Open case note <ArrowUpRight size={14} aria-hidden="true" /></button>}</div>
            <div className="project-card__footer"><div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source`}><ArrowUpRight size={19} /></a> : <span className="project-card__quiet-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>}</div>
          </article>
        ))}
      </div>
      {selectedProject && <section className="project-detail" aria-labelledby="project-detail-title"><button type="button" className="project-detail__close" onClick={() => setSelectedProject(null)}><X size={16} aria-hidden="true" /> Close detail</button><div className="project-detail__heading"><span>{selectedProject.number} / {selectedProject.category}</span><h3 id="project-detail-title">{selectedProject.title}</h3><p>{selectedProject.detail.scope}</p></div><div className="project-detail__body"><article><span>Question</span><p>{selectedProject.detail.question}</p></article><article><span>Method</span><p>{selectedProject.detail.approach}</p></article><article><span>Evidence</span><p>{selectedProject.detail.evidence}</p></article></div><div className="project-detail__foot"><button type="button" onClick={() => setSelectedProject(null)}><ArrowLeft size={16} aria-hidden="true" /> Back to explorer</button>{selectedProject.href && <a href={selectedProject.href} target="_blank" rel="noreferrer">Open source <ArrowUpRight size={16} aria-hidden="true" /></a>}</div></section>}
    </section>
  );
}
