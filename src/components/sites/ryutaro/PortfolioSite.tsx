"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Maximize2,
  Menu,
  MousePointer2,
  X,
} from "lucide-react";
import { MotionBackdrop } from "./MotionBackdrop";
import { useSiteMotion } from "./useSiteMotion";
import { copy, identity, projects, skills, type Locale, type Project } from "@/data/portfolio";

const anchors = ["about", "skills", "projects", "contact"] as const;

function RoleText({ locale }: { locale: Locale }) {
  if (locale === "en") return <>{identity.roles.en}</>;
  const segments = identity.roles.ja.split("・");
  return <>{segments.map((segment, index) => <span className="role-segment" key={segment}>{segment}{index < segments.length - 1 ? "・" : ""}</span>)}</>;
}

function ProjectCard({
  project,
  locale,
  index,
  onExpand,
}: {
  project: Project;
  locale: Locale;
  index: number;
  onExpand: (project: Project, trigger: HTMLButtonElement) => void;
}) {
  const t = copy[locale];
  return (
    <article className="project-card reveal" data-motion-index={index}>
      <div className="project-media">
        <img src={project.image} alt={project.alt[locale]} loading="lazy" />
        <button
          className="project-open-cover"
          type="button"
          aria-label={t.viewDetails + " : " + project.title[locale]}
          onClick={(event) => onExpand(project, event.currentTarget)}
        />
        <div className="project-media-actions">
          <button
            className="round-icon"
            type="button"
            aria-label={t.viewDetails + " : " + project.title[locale]}
            onClick={(event) => onExpand(project, event.currentTarget)}
          >
            <Maximize2 size={18} strokeWidth={1.8} />
          </button>
          {project.href && (
            <a
              className="round-icon"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.visit + " : " + project.title[locale]}
            >
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </a>
          )}
        </div>
        <span className="project-image-badge">{project.badge[locale]}</span>
      </div>
      <div className="project-label-row">
        <span className="project-category">{project.category[locale]}</span>
        <span className="project-number">/ {project.number}</span>
      </div>
      <h3>{project.title[locale]}</h3>
      <p className="project-summary">{project.summary[locale]}</p>
      <div className="tag-row">
        {project.tags.map((tag) => <span className="tag" key={tag.ja}>{tag[locale]}</span>)}
      </div>
    </article>
  );
}

function ProjectDialog({
  project,
  locale,
  onClose,
}: {
  project: Project;
  locale: Locale;
  onClose: () => void;
}) {
  const t = copy[locale];
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [alternate, setAlternate] = useState(false);
  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);
  const source = alternate && project.alternateImage ? project.alternateImage : project.fullImage || project.image;
  return (
    <div className="dialog-backdrop" onPointerDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="project-dialog" role="dialog" aria-modal="true" aria-label={t.modalLabel + " : " + project.title[locale]} ref={dialogRef}>
        <div className="dialog-topline">
          <span>{project.category[locale]} / {project.number}</span>
          <button className="dialog-close" type="button" ref={closeRef} onClick={onClose} aria-label={t.close}>
            <X size={21} strokeWidth={1.8} />
          </button>
        </div>
        <div className="dialog-scroll">
          <div className={"dialog-image" + (project.longImage ? " long-image" : "")}>
            <img src={source} alt={alternate ? project.title[locale] + " — 2" : project.alt[locale]} />
          </div>
          <div className="dialog-copy">
            <div>
              <h2>{project.title[locale]}</h2>
              {project.status && <span className="status-label">{project.status[locale]}</span>}
              <p>{project.detail[locale]}</p>
            </div>
            <div className="dialog-links">
              {project.alternateImage && (
                <button className="outline-action" type="button" onClick={() => setAlternate((value) => !value)}>
                  {t.nextImage} <ArrowRight size={16} />
                </button>
              )}
              {project.href && (
                <a className="outline-action" href={project.href} target="_blank" rel="noopener noreferrer">
                  {t.visit} <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CountedStat({ value, label, stopped }: { value: string; label: string; stopped: boolean }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || stopped) {
      if (node) node.textContent = value;
      return;
    }
    let frame = 0;
    const target = Number(value);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 2000, 1);
        node.textContent = String(Math.floor(target * progress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { rootMargin: "0px 0px -100px 0px", threshold: 0 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, stopped]);
  return <div className="stat reveal"><strong aria-label={value} ref={ref}>{value}</strong><span>{label}</span></div>;
}

export function PortfolioSite({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [motionOff, setMotionOff] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);
  const [motionReady, setMotionReady] = useState(false);
  const [active, setActive] = useState<string>("");
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saved = window.localStorage.getItem("ryutaro-motion");
    const frame = requestAnimationFrame(() => {
      setSystemReduced(media.matches);
      setMotionOff(saved === "off" || media.matches);
      setMotionReady(true);
    });
    const onChange = () => {
      setSystemReduced(media.matches);
      setMotionOff(window.localStorage.getItem("ryutaro-motion") === "off" || media.matches);
    };
    media.addEventListener("change", onChange);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", onChange);
    };
  }, []);

  useSiteMotion(siteRef, motionOff, motionReady, showAll);

  useEffect(() => {
    let ticking = false;
    let scrollFrame = 0;
    let springFrame = 0;
    let currentProgress = 0;
    let targetProgress = 0;
    let velocity = 0;
    let last = 0;
    const spring = (now: number) => {
      const dt = Math.min(last ? (now - last) / 1000 : 1 / 60, 1 / 30);
      last = now;
      velocity += ((targetProgress - currentProgress) * 100 - velocity * 30) * dt;
      currentProgress += velocity * dt;
      const moving = Math.abs(targetProgress - currentProgress) + Math.abs(velocity) > .0001;
      if (!moving) { currentProgress = targetProgress; velocity = 0; last = 0; }
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${currentProgress})`;
      springFrame = moving ? requestAnimationFrame(spring) : 0;
    };
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = max > 0 ? window.scrollY / max : 0;
      if (motionOff) {
        currentProgress = targetProgress;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${targetProgress})`;
      } else if (!springFrame) springFrame = requestAnimationFrame(spring);
      siteRef.current?.toggleAttribute("data-scrolled", window.scrollY > 50);
      const offset = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      anchors.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.offsetTop <= offset) current = id;
      });
      setActive((before) => before === current ? before : current);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        scrollFrame = requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(springFrame);
    };
  }, [motionOff]);

  const openProject = useCallback((project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelected(project);
  }, []);
  const closeProject = useCallback(() => {
    setSelected(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);
  const toggleMotion = () => {
    if (systemReduced) return;
    const next = !motionOff;
    setMotionOff(next);
    window.localStorage.setItem("ryutaro-motion", next ? "off" : "on");
  };
  const languagePath = locale === "ja" ? "/en/" : "/";
  return (
    <div className={"site-shell" + (motionReady && !motionOff ? " has-motion" : "")} data-motion={motionOff ? "off" : "on"} ref={siteRef}>
      <div className="pointer-light" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" ref={progressRef} />
      <header className="site-header">
        <nav className="nav-shell" aria-label={locale === "ja" ? "メインナビゲーション" : "Main navigation"}>
          <a className="brand" href="#top" aria-label={identity.name[locale] + " — Top"}>
            <span className="brand-mark">R<span>.</span>T</span>
            <span className="brand-word">TACHIBANA<span className="brand-dot">.</span></span>
          </a>
          <div className="desktop-links">
            {anchors.map((id, index) => (
              <a key={id} className={active === id ? "active" : ""} href={"#" + id}>{t.nav[index]}</a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="language-link" href={languagePath} lang={locale === "ja" ? "en" : "ja"}>{locale === "ja" ? "EN" : "JP"}</a>
            <a className="hire-button" href="#contact">{t.hire} <ArrowUpRight size={15} /></a>
            <button className="mobile-menu-button" ref={menuButtonRef} type="button" aria-label={menuOpen ? t.close : "Menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        <div className={"mobile-navigation" + (menuOpen ? " open" : "")} id="mobile-navigation" inert={!menuOpen} aria-hidden={!menuOpen}>
          {anchors.map((id, index) => (
            <a href={"#" + id} key={id} onClick={() => setMenuOpen(false)}>{t.nav[index]} <ArrowUpRight size={16} /></a>
          ))}
          <a href={languagePath} onClick={() => setMenuOpen(false)}>{t.language} <ArrowUpRight size={16} /></a>
        </div>
      </header>
      <aside className="social-rail" aria-label="Social profiles">
        <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
        <span className="social-rail-line" />
        <span className="rail-text">PORTFOLIO / 2026</span>
      </aside>
      <main>
        <section className="hero" id="top">
          <MotionBackdrop stopped={!motionReady || motionOff} />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-eyebrow">{t.eyebrow}</div>
            <h1>{t.heroLine}<br /><span>{t.heroAccent}</span></h1>
            <p className="hero-name">{identity.name[locale]}</p>
            <div className="hero-body">{t.heroBody.map((paragraph, index) => <p key={index}>{paragraph.map((phrase) => <span className={locale === "ja" ? "hero-phrase" : undefined} key={phrase}>{phrase}</span>)}</p>)}</div>
            <p className="hero-role"><RoleText locale={locale} /></p>
            <div className="hero-buttons">
              <div className="magnetic-wrap"><a className="primary-action" href="#projects">{t.heroPrimary} <ArrowUpRight size={18} /></a></div>
              <div className="magnetic-wrap"><a className="secondary-action" href="#about">{t.heroSecondary} <ArrowDown size={17} /></a></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><MousePointer2 size={16} strokeWidth={1.5} /> {t.scroll} <ChevronDown size={15} /></a>
        </section>
        <section className="about section" id="about">
          <div className="section-inner about-grid">
            <div className="about-copy reveal">
              <span className="section-kicker">{t.aboutEyebrow}</span>
              <h2>{t.aboutTitle}</h2>
              <div className="about-identity">
                <img src={identity.portrait} alt={locale === "ja" ? "橘 龍太郎の本人写真" : "Portrait of Ryutaro Tachibana"} width={283} height={345} loading="lazy" />
                <div><strong>{t.aboutLead}</strong><p className="about-role"><RoleText locale={locale} /></p></div>
              </div>
              <div className="about-body">{t.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
            <div className="about-card-grid">
              {t.aboutCards.map(([number, title, body], index) => (
                <div className="about-card reveal" key={number} data-motion-index={index}>
                  <span className="about-card-number">{number}</span>
                  <Check size={23} strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="skills section" id="skills">
          <div className="section-inner">
            <div className="section-heading centered reveal">
              <span className="section-kicker">{t.skillsEyebrow}</span>
              <h2>{locale === "ja" ? t.skillsTitle.map((phrase) => <span className="heading-phrase" key={phrase}>{phrase}</span>) : t.skillsTitle.join("")}</h2>
              <p>{locale === "ja" ? t.skillsBody.map((phrase) => <span className="copy-phrase" key={phrase}>{phrase}</span>) : t.skillsBody.join("")}</p>
            </div>
            <div className="skill-grid">
              {skills.map((skill, index) => (
                <article className={"skill-card " + skill.theme + " reveal"} key={skill.number} data-motion-index={index}>
                  <span className="skill-giant-number">{skill.number}</span>
                  <div className="skill-content">
                    <span className="skill-index">/ {skill.number}</span>
                    <h3>{skill.title[locale]}</h3>
                    <p>{skill.body[locale]}</p>
                    <div className="tag-row">{skill.tags.map((tag) => <span className="skill-tag" key={tag.ja}>{tag[locale]}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="projects section" id="projects">
          <div className="section-inner">
            <div className="section-heading projects-heading reveal">
              <span className="section-kicker">{t.projectsEyebrow}</span>
              <div className="projects-title-row">
                <h2>{t.projectsTitle}</h2>
                <button className="all-projects" type="button" aria-expanded={showAll} onClick={() => setShowAll((value) => !value)}>
                  {showAll ? t.viewLess : t.viewAll} <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="project-grid">
              {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
                <ProjectCard key={project.id} index={index} project={project} locale={locale} onExpand={openProject} />
              ))}
            </div>
            <p className="project-note">{t.workNote}</p>
          </div>
        </section>
        <section className="stats-section">
          <div className="section-inner">
            <span className="section-kicker">{t.statsEyebrow}</span>
            <div className="stats-grid">
              {t.stats.map(([number, label]) => (
                <CountedStat value={number} label={label} stopped={motionOff} key={label} />
              ))}
            </div>
          </div>
        </section>
        <section className="contact section" id="contact">
          <div className="section-inner contact-inner reveal">
            <span className="section-kicker">{t.contactEyebrow}</span>
            <h2>{t.contactTitle}</h2>
            <p>{locale === "ja" ? t.contactBody.map((phrase) => <span className="copy-phrase" key={phrase}>{phrase}</span>) : t.contactBody.join("")}</p>
            <div className="contact-actions">
              <a className="primary-action" href={identity.wantedly} target="_blank" rel="noopener noreferrer">{t.contactPrimary} <ArrowUpRight size={18} /></a>
              <a className="secondary-action" href={identity.github} target="_blank" rel="noopener noreferrer">{t.contactSecondary} <ArrowUpRight size={18} /></a>
            </div>
            <div className="contact-light" aria-hidden="true" />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="section-inner footer-inner">
          <span>{t.footer}</span>
          <div>
            <button type="button" className="footer-utility" aria-pressed={!motionOff} disabled={systemReduced} title={systemReduced ? (locale === "ja" ? "OSの動きを減らす設定を優先しています" : "Your system reduced-motion preference is active") : undefined} onClick={toggleMotion}>{systemReduced ? (locale === "ja" ? "OS設定で動きを抑制中" : "Reduced by system setting") : motionOff ? t.motionOn : t.motionOff}</button>
            <a className="footer-utility" href={languagePath} lang={locale === "ja" ? "en" : "ja"}>{t.language}</a>
            <a className="footer-utility" href="#top">↑ TOP</a>
          </div>
        </div>
      </footer>
      {selected && <ProjectDialog project={selected} locale={locale} onClose={closeProject} />}
    </div>
  );
}
