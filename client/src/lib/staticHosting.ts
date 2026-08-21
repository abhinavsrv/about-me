/** True only for the static GitHub Pages build, where tRPC endpoints do not exist. */
export function isStaticPortfolioBuild(staticExport = import.meta.env.VITE_STATIC_EXPORT): boolean {
  return staticExport === "true";
}
