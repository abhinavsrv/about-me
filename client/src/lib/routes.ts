/** Build internal portfolio links that work at the Vite root and on a GitHub Pages project site. */
export function portfolioPath(path = "/", basePath = import.meta.env.BASE_URL): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  return `${normalizedBase}${normalizedPath}`;
}

export function portfolioRouterBase(basePath = import.meta.env.BASE_URL): string {
  return basePath === "/" ? "" : basePath.replace(/\/$/, "");
}
