import { useEffect } from "react";
import { analyticsScriptUrl } from "@/lib/analyticsRuntime";

/** Loads aggregate analytics only when a valid hosting endpoint is configured. */
export default function PortfolioAnalytics() {
  useEffect(() => {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
    const scriptUrl = analyticsScriptUrl(endpoint, websiteId);
    if (!scriptUrl || !websiteId) return;
    if (document.querySelector("script[data-portfolio-analytics]")) return;

    const script = document.createElement("script");
    script.defer = true;
    script.src = scriptUrl;
    script.dataset.websiteId = websiteId;
    script.dataset.portfolioAnalytics = "true";
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return null;
}
