/**
 * Obsidian Precision style reminder: work appears as engineered glass-dark capsules; evidence and status lead over decoration.
 */
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

export type ProjectCategory = "Research Systems" | "Reproductions" | "Applied ML";

export type Project = {
  id: string;
  number: string;
  category: ProjectCategory;
  status: string;
  title: string;
  description: string;
  evidence: string;
  stack: string[];
  href?: string;
  featured?: boolean;
  detail: {
    question: string;
    approach: string;
    evidence: string;
    scope: string;
  };
};

export const projects: Project[] = [
  {
    id: "mental-roberta",
    number: "01",
    category: "Research Systems",
    status: "First-author manuscript · 2026",
    title: "Mental-RoBERTa",
    description: "A hierarchical, calibration-aware framework for early multi-class screening of mental-health conditions and suicidal ideation.",
    evidence: "Reported screening accuracy improved from 89.35% to 96.17% in the study evaluation, with bootstrap validation across 1,000 iterations.",
    stack: ["PyTorch", "Transformers", "Calibration", "Healthcare NLP"],
    href: "https://github.com/abhinavsrv",
    featured: true,
    detail: {
      question: "How can an early multi-class screening system better distinguish high-risk mental-health signals under imbalanced data?",
      approach: "Designed hierarchical Mental-RoBERTa inference with weighted cross-entropy, label smoothing, probability calibration, and threshold-sensitive screening.",
      evidence: "The study reports screening accuracy improving from 89.35% to 96.17%, with a 5.2% accuracy and 5.5 macro-F1 lead over DistilBERT in the described benchmark.",
      scope: "First-author journal manuscript, revised and resubmitted following peer review in 2026.",
    },
  },
  {
    id: "dense-distillation",
    number: "02",
    category: "Reproductions",
    status: "Independent reproduction · MICCAI 2025",
    title: "Alignment-Free Dense Distillation",
    description: "A reproduction study of cross-modal medical-image transfer for white-light polyp classification using paired WLI and NBI images.",
    evidence: "Reimplemented dual ResNet-50 networks, dense-affinity distillation, CAM-guided gating, and the multi-objective optimization pipeline.",
    stack: ["PyTorch", "CUDA", "OpenCV", "ResNet-50"],
    href: "https://github.com/abhinavsrv/add-recreation",
    detail: {
      question: "Can cross-modal medical-image transfer be reproduced faithfully when registration is not explicitly used?",
      approach: "Recreated paired WLI and NBI ResNet-50 teacher–student networks with dense-affinity transfer, CAM-guided semantic-refinement gating, and multi-objective optimization.",
      evidence: "The study documented implementation choices, distillation-loss sensitivity, and reproducibility challenges in the published framework.",
      scope: "Independent research reproduction based on the MICCAI 2025 paper.",
    },
  },
  {
    id: "credit-risk",
    number: "03",
    category: "Applied ML",
    status: "Independent study · 2025",
    title: "Risk Simulator",
    description: "An explainable credit-risk evaluation framework for scenario-based forecasting and downside-aware allocation analysis.",
    evidence: "Combines SHAP dashboards, CVaR risk surfaces, and portfolio optimization to make risk aggregation more inspectable.",
    stack: ["Explainable ML", "CVaR", "SHAP", "Forecasting"],
    detail: {
      question: "How can credit-risk assessment retain transparent downside reasoning across changing scenarios?",
      approach: "Combined scenario forecasting, SHAP explanations, CVaR risk surfaces, and CVaR-constrained allocation analysis.",
      evidence: "The project evaluates risk-aggregation strategies and makes their downside trade-offs inspectable through scenario-based views.",
      scope: "Independent applied machine-learning study from 2025.",
    },
  },
  {
    id: "retail-intelligence",
    number: "04",
    category: "Applied ML",
    status: "Experimental framework · 2026",
    title: "Retail AI Decision Intelligence",
    description: "A connected framework for demand forecasting, inventory optimization, segmentation, recommendations, and KPI analysis.",
    evidence: "Includes a SQL-aware agentic analyst designed to turn business signals into explainable recommendations.",
    stack: ["LightGBM", "XGBoost", "OR-Tools", "LangGraph"],
    detail: {
      question: "How can retail decision support connect prediction, optimization, and contextual explanation?",
      approach: "Integrated demand forecasting, inventory optimization, segmentation, recommendation systems, and a SQL-aware agentic analyst for KPI evaluation.",
      evidence: "The experimental framework is designed to provide explainable business recommendations rather than isolated model outputs.",
      scope: "Experimental retail-analytics framework, 2026.",
    },
  },
];

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);
  const categories: Array<ProjectCategory | "All"> = ["All", "Research Systems", "Reproductions", "Applied ML"];

  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <span className="section-beam work-beam" aria-hidden="true" />
      <div className="work-section__head">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Research with<br /><em>implementation.</em></h2>
        </div>
        <div className="work-section__controls">
          <p>Four focused systems across healthcare AI, medical imaging, financial risk, and decision intelligence.</p>
          <div className="work-filter" aria-label="Filter work by project category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "work-filter__active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="work-list">
        {visibleProjects.map((project) => (
          <article className={`project-card ${project.featured ? "project-card--featured" : ""}`} key={project.id} id={project.id}>
            <div className="project-card__topline"><span>{project.number}</span><span>{project.category}</span></div>
            <div className="project-card__main">
              <p className="project-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-evidence">{project.evidence}</p>
              <button type="button" className="project-detail-trigger" onClick={() => setSelectedProject(project)}>
                Open case note <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            </div>
            <div className="project-card__footer">
              <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source on GitHub`}>
                  <ArrowUpRight size={19} />
                </a>
              ) : <span className="project-card__quiet-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>}
            </div>
          </article>
        ))}
      </div>
      {selectedProject && (
        <section className="project-detail" aria-labelledby="project-detail-title">
          <button type="button" className="project-detail__close" onClick={() => setSelectedProject(null)}>
            <X size={16} aria-hidden="true" /> Close detail
          </button>
          <div className="project-detail__heading">
            <span>{selectedProject.number} / {selectedProject.category}</span>
            <h3 id="project-detail-title">{selectedProject.title}</h3>
            <p>{selectedProject.detail.scope}</p>
          </div>
          <div className="project-detail__body">
            <article><span>Question</span><p>{selectedProject.detail.question}</p></article>
            <article><span>Method</span><p>{selectedProject.detail.approach}</p></article>
            <article><span>Evidence</span><p>{selectedProject.detail.evidence}</p></article>
          </div>
          <div className="project-detail__foot">
            <button type="button" onClick={() => setSelectedProject(null)}><ArrowLeft size={16} aria-hidden="true" /> Back to work</button>
            {selectedProject.href && <a href={selectedProject.href} target="_blank" rel="noreferrer">Open source <ArrowUpRight size={16} aria-hidden="true" /></a>}
          </div>
        </section>
      )}
    </section>
  );
}
