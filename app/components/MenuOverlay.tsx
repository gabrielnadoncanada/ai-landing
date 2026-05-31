export default function MenuOverlay() {
  return (
    <>
      {/* ===== MENU OVERLAY ===== */}
      <div
        className="menu-overlay invisible fixed inset-0 z-90 flex flex-col overflow-y-auto bg-[var(--gray-960)] [background-image:radial-gradient(95%_115%_at_6%_28%,color-mix(in_oklch,var(--glow-cyan)_60%,transparent),transparent_48%),radial-gradient(95%_115%_at_100%_78%,color-mix(in_oklch,var(--glow-red)_50%,transparent),transparent_52%)] opacity-0 transition-[opacity,visibility] duration-500 ease-[ease] before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(122deg,transparent_0px,color-mix(in_oklch,white_2.5%,transparent)_55px,transparent_120px)] before:content-[''] [&.open]:visible [&.open]:opacity-100 [&.open_.menu-link]:translate-y-0 [&.open_.menu-link]:opacity-100"
        id="menuOverlay"
        aria-hidden="true"
      >
        <div className="mo-bar wrap max-tablet:px-8 max-mobile:px-5 max-mobile:py-4 relative z-2 mx-auto flex max-w-310 items-center justify-between px-14 py-5.5 max-lg:px-10">
          <a
            className="logo font-display max-mobile:text-[22px] flex items-center gap-3 text-[26px] text-white"
            href="#top"
            data-nav=""
          >
            <svg className="h-8.5 w-10">
              <use href="#xduo" />
            </svg>
            <span>Supo</span>
          </a>
          <button
            className="mo-close group font-display text-ink-soft inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent text-base transition-colors duration-200 hover:text-white"
            id="menuClose"
            aria-label="Close menu"
          >
            <svg
              className="h-5.5 w-5.5 transition-transform duration-300 group-hover:rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <line x1={6} y1={6} x2={18} y2={18} />
              <line x1={18} y1={6} x2={6} y2={18} />
            </svg>
            <span>Close</span>
          </button>
        </div>
        <nav className="mo-links wrap max-tablet:px-8 max-mobile:gap-0 max-mobile:px-5 max-mobile:py-2 relative z-2 mx-auto flex max-w-310 flex-1 flex-col justify-center gap-0.5 px-14 py-6 max-lg:px-10">
          <a
            className="menu-link group max-mobile:gap-4 max-mobile:py-2 flex translate-y-8.5 items-baseline gap-6.5 py-2.5 opacity-0 transition-[transform,opacity] delay-50 duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            href="#top"
            data-nav=""
          >
            <span className="idx font-code text-muted-2 group-hover:text-accent-hi max-mobile:w-6 max-mobile:text-xs w-8.5 text-sm transition-colors duration-250">
              01
            </span>
            <span className="lbl font-display text-ink-soft max-mobile:text-[clamp(30px,9vw,42px)] text-[clamp(34px,6.2vw,74px)] leading-[1.04] font-light tracking-[-0.015em] transition-[color,transform] duration-350 ease-[ease] group-hover:translate-x-4 group-hover:text-white">
              Home
            </span>
          </a>
          <a
            className="menu-link group max-mobile:gap-4 max-mobile:py-2 flex translate-y-8.5 items-baseline gap-6.5 py-2.5 opacity-0 transition-[transform,opacity] delay-100 duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            href="#features"
            data-nav=""
          >
            <span className="idx font-code text-muted-2 group-hover:text-accent-hi max-mobile:w-6 max-mobile:text-xs w-8.5 text-sm transition-colors duration-250">
              02
            </span>
            <span className="lbl font-display text-ink-soft max-mobile:text-[clamp(30px,9vw,42px)] text-[clamp(34px,6.2vw,74px)] leading-[1.04] font-light tracking-[-0.015em] transition-[color,transform] duration-350 ease-[ease] group-hover:translate-x-4 group-hover:text-white">
              Why Supo
            </span>
          </a>
          <a
            className="menu-link group max-mobile:gap-4 max-mobile:py-2 flex translate-y-8.5 items-baseline gap-6.5 py-2.5 opacity-0 transition-[transform,opacity] delay-150 duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            href="#craft"
            data-nav=""
          >
            <span className="idx font-code text-muted-2 group-hover:text-accent-hi max-mobile:w-6 max-mobile:text-xs w-8.5 text-sm transition-colors duration-250">
              03
            </span>
            <span className="lbl font-display text-ink-soft max-mobile:text-[clamp(30px,9vw,42px)] text-[clamp(34px,6.2vw,74px)] leading-[1.04] font-light tracking-[-0.015em] transition-[color,transform] duration-350 ease-[ease] group-hover:translate-x-4 group-hover:text-white">
              Our Craft
            </span>
          </a>
          <a
            className="menu-link group max-mobile:gap-4 max-mobile:py-2 flex translate-y-8.5 items-baseline gap-6.5 py-2.5 opacity-0 transition-[transform,opacity] delay-200 duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            href="#pricing"
            data-nav=""
          >
            <span className="idx font-code text-muted-2 group-hover:text-accent-hi max-mobile:w-6 max-mobile:text-xs w-8.5 text-sm transition-colors duration-250">
              04
            </span>
            <span className="lbl font-display text-ink-soft max-mobile:text-[clamp(30px,9vw,42px)] text-[clamp(34px,6.2vw,74px)] leading-[1.04] font-light tracking-[-0.015em] transition-[color,transform] duration-350 ease-[ease] group-hover:translate-x-4 group-hover:text-white">
              Pricing
            </span>
          </a>
          <a
            className="menu-link group max-mobile:gap-4 max-mobile:py-2 flex translate-y-8.5 items-baseline gap-6.5 py-2.5 opacity-0 transition-[transform,opacity] delay-250 duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            href="#testimonials"
            data-nav=""
          >
            <span className="idx font-code text-muted-2 group-hover:text-accent-hi max-mobile:w-6 max-mobile:text-xs w-8.5 text-sm transition-colors duration-250">
              05
            </span>
            <span className="lbl font-display text-ink-soft max-mobile:text-[clamp(30px,9vw,42px)] text-[clamp(34px,6.2vw,74px)] leading-[1.04] font-light tracking-[-0.015em] transition-[color,transform] duration-350 ease-[ease] group-hover:translate-x-4 group-hover:text-white">
              Reviews
            </span>
          </a>
          <a
            className="menu-link group max-mobile:gap-4 max-mobile:py-2 flex translate-y-8.5 items-baseline gap-6.5 py-2.5 opacity-0 transition-[transform,opacity] delay-300 duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            href="#contact"
            data-nav=""
          >
            <span className="idx font-code text-muted-2 group-hover:text-accent-hi max-mobile:w-6 max-mobile:text-xs w-8.5 text-sm transition-colors duration-250">
              06
            </span>
            <span className="lbl font-display text-ink-soft max-mobile:text-[clamp(30px,9vw,42px)] text-[clamp(34px,6.2vw,74px)] leading-[1.04] font-light tracking-[-0.015em] transition-[color,transform] duration-350 ease-[ease] group-hover:translate-x-4 group-hover:text-white">
              Contact
            </span>
          </a>
        </nav>
        <div className="mo-foot wrap border-line max-tablet:px-8 max-mobile:flex-col max-mobile:items-start max-mobile:gap-5.5 max-mobile:px-5 max-mobile:pb-9 relative z-2 mx-auto flex max-w-310 items-end justify-between gap-6 border-t px-14 py-6.5 pb-11 max-lg:px-10">
          <div className="mo-contact flex flex-col gap-1.25">
            <span className="mo-cap font-code tracking-caps text-muted-2 mb-2.5 block text-[11px] uppercase">
              Get in touch
            </span>
            <a
              className="text-ink-soft text-lg transition-colors duration-200 hover:text-white"
              href="mailto:hello@emura.studio"
            >
              hello@emura.studio
            </a>
            <a
              className="text-ink-soft text-lg transition-colors duration-200 hover:text-white"
              href="tel:+19998887766"
            >
              +1(999) 888-77-66
            </a>
          </div>
          <div className="mo-social flex gap-5">
            <a
              className="font-display text-muted text-[15px] transition-colors duration-200 hover:text-white"
              href="#"
              data-nav=""
              aria-label="VK"
            >
              VK
            </a>
            <a
              className="font-display text-muted text-[15px] transition-colors duration-200 hover:text-white"
              href="#"
              data-nav=""
              aria-label="Facebook"
            >
              Fb
            </a>
            <a
              className="font-display text-muted text-[15px] transition-colors duration-200 hover:text-white"
              href="#"
              data-nav=""
              aria-label="Telegram"
            >
              Tg
            </a>
            <a
              className="font-display text-muted text-[15px] transition-colors duration-200 hover:text-white"
              href="#"
              data-nav=""
              aria-label="Instagram"
            >
              Ig
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
