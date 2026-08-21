export const mentalRoBertaJournal = {
  title: "Hierarchical Risk-Aware Mental-RoBERTa Framework for Early Multi-Class Screening of Mental-Health Conditions and Suicidal Ideation",
  dataset: "Public, aggregated Sentiment Analysis for Mental Health corpus · 7 classes · n = 53,043",
  threshold: "τ = 0.30",
  stages: [
    {
      label: "Stage 1 / Triage",
      title: "Normal or distressed",
      detail: "A domain-adapted Mental-RoBERTa classifier first separates Normal text from Distressed text to narrow the high-stakes screening path.",
      result: "97.48% accuracy · ROC-AUC 0.99",
    },
    {
      label: "Stage 2 / Fine-grained classification",
      title: "Six distressed states",
      detail: "Distressed inputs are classified as Stress, Bipolar Disorder, Personality Disorder, Depression, Anxiety, or Suicidal Ideation using weighted cross-entropy and label smoothing.",
      result: "82% accuracy · macro-F1 0.85",
    },
    {
      label: "Risk-aware correction",
      title: "Prioritise suicidal-ideation review",
      detail: "A validation-tuned probability rule overrides the Stage 2 decision when the Suicidal Ideation probability meets the operating threshold.",
      result: "89.35% → 96.17% reported system-level accuracy",
    },
  ],
  checkpoints: [
    { metric: "Stage 1 triage", value: "97.48%", note: "Accuracy · ROC-AUC 0.99" },
    { metric: "Stage 2 classifier", value: "82%", note: "Accuracy · macro-F1 0.85" },
    { metric: "Risk-aware system", value: "96.17%", note: "Reported system-level accuracy after threshold correction" },
    { metric: "Matched DistilBERT", value: "83.22%", note: "Accuracy · macro-F1 80.63% under identical conditions" },
  ],
  classResults: [
    ["Anxiety", "F1 = 0.92"],
    ["Personality Disorder", "F1 = 0.81"],
    ["Suicidal Ideation", "F1 = 0.77"],
  ],
} as const;
