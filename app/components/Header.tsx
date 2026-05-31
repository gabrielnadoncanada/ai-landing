export default function Header() {
  return (
    <>
      {/* ===== STICKY TOPBAR ===== */}
      <header
        className="topbar [&.scrolled]:border-line fixed inset-x-0 top-0 z-60 border-b border-transparent transition-[background,backdrop-filter,border-color] duration-350 ease-[ease] [&.scrolled]:bg-[color-mix(in_oklch,var(--gray-960)_72%,transparent)] [&.scrolled]:backdrop-blur-[14px]"
        id="topbar"
      >
        <div className="wrap nav max-tablet:px-8 max-mobile:px-5 max-mobile:py-4 relative mx-auto flex max-w-310 items-center justify-between px-14 py-5.5 max-lg:px-10">
          <button
            className="menu font-display text-ink-soft max-mobile:text-[15px] inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent text-base font-normal transition-colors duration-200 hover:text-white"
            id="menuOpen"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <svg
              className="max-mobile:h-4.5 max-mobile:w-4.5 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={14} x2={14} y2={14} />
            </svg>
            Menu
          </button>
          <a
            className="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            href="#top"
            aria-label="Supo home"
          >
            <svg className="max-mobile:h-7.25 max-mobile:w-8.5 block h-9 w-10.5">
              <use href="#xduo" />
            </svg>
          </a>
          <a
            className="contact font-display text-ink-soft max-mobile:text-[15px] inline-flex items-center gap-2.5 text-base font-normal transition-colors duration-200 hover:text-white"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </header>
    </>
  )
}
