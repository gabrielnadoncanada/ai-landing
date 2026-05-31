export default function Hero() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header
        className="hero bg-bg-hero max-mobile:pb-16 relative overflow-hidden [background-image:radial-gradient(120%_90%_at_8%_38%,color-mix(in_oklch,var(--glow-cyan)_55%,transparent),transparent_46%),radial-gradient(110%_90%_at_100%_60%,color-mix(in_oklch,var(--glow-red)_50%,transparent),transparent_50%),radial-gradient(90%_70%_at_50%_-10%,oklch(31.7%_0.022_238/0.4),transparent_60%)] pb-22.5 before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(122deg,transparent_0px,color-mix(in_oklch,white_2.8%,transparent)_55px,transparent_120px),linear-gradient(115deg,transparent_32%,color-mix(in_oklch,white_4%,transparent)_49%,transparent_66%)] before:content-['']"
        id="top"
      >
        <div className="wrap max-tablet:px-8 max-mobile:px-5 mx-auto max-w-310 px-14 max-lg:px-10">
          <div className="hero-inner max-mobile:pt-29 relative z-2 pt-37.5 text-center">
            <span className="pill-badge border-line font-display text-ink-soft shadow-hairline max-mobile:mb-5.5 max-mobile:px-4 max-mobile:py-2 max-mobile:text-[13px] mb-8.5 inline-block rounded-full border bg-white/4 px-5 py-2.25 text-sm">
              All-In-One AI Assistant
            </span>
            <h1 className="bg-title-gradient font-display text-hero tracking-display max-mobile:text-[clamp(32px,9.4vw,44px)] bg-clip-text leading-none font-light text-transparent">
              Give Your Team
              <br />
              <span className="l2 font-normal">Digital Superpowers</span>
            </h1>
            <p className="sub text-muted max-mobile:mt-5 max-mobile:text-[15px] mx-auto mt-7.5 max-w-120 text-[17px] leading-normal">
              Curated collection of one-of-a-kind pieces where traditional
              craftsmanship meets modern aesthetics.
            </p>
            <div className="cta-row max-mobile:mt-8 max-mobile:gap-3 max-xs:flex-col max-xs:items-center mt-11.5 flex justify-center gap-4.5">
              <a
                className="btn btn-ghost border-line bg-cta font-display max-mobile:px-5.5 max-mobile:py-3.25 max-mobile:text-[15px] max-xs:w-full max-xs:max-w-65 max-xs:justify-center inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-8 py-3.75 text-base font-normal whitespace-nowrap text-white transition-[background,box-shadow,filter] duration-250 ease-[ease] hover:bg-white/6"
                href="#contact"
                data-nav=""
              >
                Join Demo
              </a>
              <a
                className="btn btn-primary border-primary-button-border bg-primary-gradient font-display shadow-btn hover:shadow-btn-hover max-mobile:px-5.5 max-mobile:py-3.25 max-mobile:text-[15px] max-xs:w-full max-xs:max-w-65 max-xs:justify-center inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-8 py-3.75 text-base font-normal whitespace-nowrap text-white transition-[background,box-shadow,filter] duration-250 ease-[ease]"
                href="#pricing"
                data-nav=""
              >
                Explore More
              </a>
            </div>
            <div className="cloud max-mobile:mt-12.5 max-mobile:flex-wrap max-mobile:justify-center max-mobile:gap-x-6.5 max-mobile:gap-y-4 max-mobile:opacity-55 mt-18.5 flex items-center justify-between gap-8 opacity-50">
              <div className="brand font-display text-brand-muted max-mobile:gap-2 max-mobile:text-[17px] flex items-center gap-2.5 text-[21px] font-medium">
                <svg
                  className="max-mobile:h-4.5 max-mobile:w-4.5 h-5.5 w-5.5 opacity-85"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M4 11 L12 5 L20 11 V19 H4 Z" />
                </svg>
                Homey
              </div>
              <div className="brand font-display text-brand-muted max-mobile:gap-2 max-mobile:text-[17px] flex items-center gap-2.5 text-[21px] font-medium">
                <svg
                  className="max-mobile:h-4.5 max-mobile:w-4.5 h-5.5 w-5.5 opacity-85"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 20c-5-2-8-6-8-10 3 0 6 2 8 6 2-4 5-6 8-6 0 4-3 8-8 10Z" />
                </svg>
                Mindfulness
              </div>
              <div className="brand serif font-display text-brand-muted max-mobile:gap-2 max-mobile:text-[17px] flex items-center gap-2.5 text-[21px] font-medium italic">
                <svg
                  className="max-mobile:h-4.5 max-mobile:w-4.5 h-5.5 w-5.5 opacity-85"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx={12} cy={12} r={3} />
                  <path d="M12 9c0-4 4-4 4 0M12 15c0 4 4 4 4 0M9 12c-4 0-4 4 0 4M15 12c4 0 4-4 0-4" />
                </svg>
                Blossom
              </div>
              <div className="brand font-display text-brand-muted max-mobile:gap-2 max-mobile:text-[17px] flex items-center gap-2.5 text-[21px] font-medium">
                <svg
                  className="max-mobile:h-4.5 max-mobile:w-4.5 h-5.5 w-5.5 opacity-85"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                </svg>
                Proline
              </div>
              <div className="brand font-display text-brand-muted max-mobile:gap-2 max-mobile:text-[17px] flex items-center gap-2.5 text-[21px] font-medium">
                <svg
                  className="max-mobile:h-4.5 max-mobile:w-4.5 h-5.5 w-5.5 opacity-85"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 3 21 12 12 21 3 12Z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                luminor
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
