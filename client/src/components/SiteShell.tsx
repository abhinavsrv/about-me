/**
 * Obsidian Precision style reminder: navigation is dark, precise, and quiet; avoid generic rounded UI.
 */
import { Menu, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { portfolioPath } from "@/lib/routes";
import { trackPortfolioEvent } from "@/lib/portfolioAnalytics";
import { cinematicIntroSkipAction, CINEMATIC_INTRO_STORAGE_KEY, introLocksScroll, nextCinematicIntroPhase, shouldPlayCinematicIntro, type CinematicIntroPhase } from "@/lib/cinematicIntro";
import { useLocation } from "wouter";

const navigation = [
  { label: "Research", href: portfolioPath("/research"), match: "/research", destination: "Route" },
  { label: "Case studies", href: portfolioPath("/research#work"), match: "/work", destination: "Route + atlas" },
  { label: "Outputs", href: portfolioPath("/outputs"), match: "/outputs", destination: "Route" },
  { label: "Profile", href: portfolioPath("/profile"), match: "/profile", destination: "Route" },
  { label: "Contact", href: portfolioPath("/contact"), match: "/contact", destination: "Route" },
] as const;

export default function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [introPhase, setIntroPhase] = useState<CinematicIntroPhase>(() => {
    if (typeof window === "undefined") return "off";
    const hasSeenIntro = window.sessionStorage.getItem(CINEMATIC_INTRO_STORAGE_KEY) === "seen";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return shouldPlayCinematicIntro(location, prefersReducedMotion, hasSeenIntro) ? "play" : "off";
  });
  const { data: settings } = trpc.portfolio.settings.useQuery(undefined, { retry: false, staleTime: 30_000 });
  const identityValue = settings?.find((setting) => setting.settingKey === "profile_identity")?.value as { name?: string } | undefined;
  const displayName = identityValue?.name?.toUpperCase() ?? "ABHINAV SRIVASTAVA";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || introLocksScroll(introPhase) ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, introPhase]);

  useEffect(() => {
    if (introPhase === "off") return;
    const delay = introPhase === "play" ? 1550 : 410;
    const closeTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(CINEMATIC_INTRO_STORAGE_KEY, "seen");
      setIntroPhase((phase) => nextCinematicIntroPhase(phase));
    }, delay);
    return () => {
      window.clearTimeout(closeTimer);
    };
  }, [introPhase]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add("is-revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -6%" },
    );
    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, [location]);

  const closeMenu = () => setMenuOpen(false);
  const dismissIntro = () => {
    const skip = cinematicIntroSkipAction();
    if (skip.shouldMarkSeen) window.sessionStorage.setItem(CINEMATIC_INTRO_STORAGE_KEY, "seen");
    setIntroPhase(skip.nextPhase);
  };
  const isActive = (match: string) => match === "/work" ? location.startsWith("/work/") : location === match;

  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">Skip to content</a>
      {introPhase !== "off" && (
        <div className={`cinematic-intro cinematic-intro--${introPhase}`} role="status" aria-live="polite" aria-label="Opening portfolio sequence">
          <div className="cinematic-intro__grid" aria-hidden="true" />
          <div className="cinematic-intro__signal" aria-hidden="true"><span /><i /></div>
          <div className="cinematic-intro__identity" aria-hidden="true">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/TelKRBPxxVkBYlyC.png" alt="" />
            <div><b>ABHINAV SRIVASTAVA</b><span>RESEARCH SYSTEMS</span></div>
          </div>
          <p className="cinematic-intro__readout" aria-hidden="true">SIGNAL / CALIBRATED</p>
          <button className="cinematic-intro__skip" type="button" onClick={dismissIntro} autoFocus>Skip intro <span aria-hidden="true">↗</span></button>
        </div>
      )}
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand-lockup" href={portfolioPath("/")} aria-label="Abhinav Srivastava — homepage">
          <img
            className="brand-mark"
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/TelKRBPxxVkBYlyC.png"
            alt=""
          />
          <span className="brand-type">
            <b>{displayName}</b>
            <span>RESEARCH SYSTEMS</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={isActive(item.match) ? "nav-link--active" : undefined} aria-current={isActive(item.match) ? "page" : undefined} aria-label={`${item.label} — ${item.destination.toLowerCase()}`} onClick={() => { if (item.match === "/research") trackPortfolioEvent("research_atlas_opened"); }}><span>{item.label}</span><small>{item.destination}</small></a>
          ))}
          <a className="nav-github" href="https://github.com/abhinavsrv" target="_blank" rel="noreferrer" onClick={() => trackPortfolioEvent("github_opened")}>
            View GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={21} />}
          <span>Menu</span>
        </button>
      </header>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} role="dialog" aria-modal={menuOpen} aria-label="Portfolio navigation" aria-hidden={!menuOpen}>
        <div className="mobile-nav__inner">
          <span className="eyebrow">Navigate</span>
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => { if (item.match === "/research") trackPortfolioEvent("research_atlas_opened"); closeMenu(); }} tabIndex={menuOpen ? 0 : -1} aria-current={isActive(item.match) ? "page" : undefined} style={{ transitionDelay: `${60 + index * 45}ms` }}>
              <span>{String(index + 1).padStart(2, "0")}</span><b>{item.label}</b><small>{item.destination}</small>
            </a>
          ))}
          <a className="mobile-nav__external" href="https://github.com/abhinavsrv" target="_blank" rel="noreferrer" onClick={() => { trackPortfolioEvent("github_opened"); closeMenu(); }} tabIndex={menuOpen ? 0 : -1}>
            github.com/abhinavsrv ↗
          </a>
        </div>
      </div>

      <main id="main-content">{children}</main>
    </div>
  );
}
