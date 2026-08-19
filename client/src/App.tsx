/**
 * Obsidian Precision style reminder: maintain a cinematic black field, cloud-white hierarchy,
 * ice-blue signal accents, and restrained product-grade interaction throughout the app shell.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { lazy, Suspense } from "react";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { portfolioRouterBase } from "./lib/routes";
import "./brand.css";
import "./explorer.css";
import "./motion.css";
import "./about.css";
import "./editorial-pages.css";
import "./case-studies.css";
import "./home-index.css";
import "./outputs.css";
import Home from "./pages/Home";
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const OutputsPage = lazy(() => import("./pages/OutputsPage"));
function AppRouter() {
  // make sure to consider if you need authentication for certain routes
  return (
    <WouterRouter base={portfolioRouterBase()}>
      <Suspense fallback={<div className="route-loading" role="status" aria-live="polite">Loading record…</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/research" component={ResearchPage} />
        <Route path="/work/:slug" component={CaseStudyPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/outputs" component={OutputsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
