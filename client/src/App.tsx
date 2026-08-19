/**
 * Obsidian Precision style reminder: maintain a cinematic black field, cloud-white hierarchy,
 * ice-blue signal accents, and restrained product-grade interaction throughout the app shell.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { portfolioRouterBase } from "./lib/routes";
import "./brand.css";
import "./explorer.css";
import "./motion.css";
import "./about.css";
import "./editorial-pages.css";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import ResearchPage from "./pages/ResearchPage";
function AppRouter() {
  // make sure to consider if you need authentication for certain routes
  return (
    <WouterRouter base={portfolioRouterBase()}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/research" component={ResearchPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
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
