/**
 * Obsidian Precision style reminder: navigation is dark, precise, and quiet; avoid generic rounded UI.
 */
import { Menu, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

const navigation = [
  ["Research", "#research"],
  ["Work", "#work"],
  ["Trajectory", "#trajectory"],
  ["Capabilities", "#capabilities"],
  ["Contact", "#contact"],
] as const;

export default function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Abhinav Srivastava — homepage">
          <img
            className="brand-mark"
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/TelKRBPxxVkBYlyC.png"
            alt=""
          />
          <span className="brand-type">
            <b>ABHINAV SRIVASTAVA</b>
            <span>RESEARCH SYSTEMS</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="nav-github" href="https://github.com/abhinavsrv" target="_blank" rel="noreferrer">
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

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav__inner">
          <span className="eyebrow">Navigate</span>
          {navigation.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu} style={{ transitionDelay: `${60 + index * 45}ms` }}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </a>
          ))}
          <a className="mobile-nav__external" href="https://github.com/abhinavsrv" target="_blank" rel="noreferrer" onClick={closeMenu}>
            github.com/abhinavsrv ↗
          </a>
        </div>
      </div>

      <main id="main-content">{children}</main>
    </div>
  );
}
