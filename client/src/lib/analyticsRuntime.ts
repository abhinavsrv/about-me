export function analyticsScriptUrl(endpoint?: string, websiteId?: string): string | null {
  if (!endpoint?.startsWith("https://") || !websiteId) return null;
  return `${endpoint.replace(/\/$/, "")}/umami`;
}
