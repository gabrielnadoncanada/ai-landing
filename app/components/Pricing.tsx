export default function Pricing() {
  return (
    <>
      {/* ===== PRICING ===== */}
      <section
        className="pricing max-tablet:py-22.5 max-mobile:py-17 relative overflow-hidden py-30 before:pointer-events-none before:absolute before:top-[4%] before:left-[-10%] before:z-1 before:h-[55%] before:w-[40%] before:bg-[radial-gradient(circle_at_35%_40%,color-mix(in_oklch,var(--glow-cyan)_26%,transparent),transparent_64%)] before:content-[''] after:pointer-events-none after:absolute after:top-[8%] after:right-[-8%] after:z-1 after:h-[62%] after:w-[46%] after:bg-[radial-gradient(circle_at_72%_38%,color-mix(in_oklch,var(--glow-red)_30%,transparent),oklch(26.8%_0.061_354/0.12)_45%,transparent_66%)] after:content-['']"
        id="pricing"
      >
        <div className="wrap max-tablet:px-8 max-mobile:px-5 relative z-2 mx-auto max-w-310 px-14 max-lg:px-10">
          <div className="sec-head max-mobile:mb-9.5 max-mobile:gap-y-4 mb-16 grid grid-cols-[1fr_minmax(0,400px)] items-end gap-x-12 gap-y-6 max-lg:grid-cols-1">
            <h2 className="font-display text-h2 tracking-heading max-mobile:text-[clamp(27px,8.2vw,36px)] leading-[1.12] font-light">
              Choose your pace
              <br />
              of innovation.
            </h2>
            <p className="intro text-muted max-mobile:text-[15px] max-w-100 justify-self-end text-right text-base leading-[1.55] max-lg:justify-self-start max-lg:text-left">
              Simple, transparent pricing tailored to your scale. Whether
              you&rsquo;re a solo creator or a global enterprise, we have a plan
              to fuel your AI journey.
            </p>
          </div>
          <div className="price-grid max-tablet:mx-auto max-tablet:max-w-120 max-tablet:grid-cols-1 max-mobile:gap-4 grid grid-cols-3 items-start gap-5">
            <div className="pcard rounded-card-lg border-line bg-price-card shadow-hairline max-mobile:px-5.5 max-mobile:pb-7 max-mobile:pt-6.5 relative overflow-hidden border px-7.5 pt-8 pb-8.5">
              <div className="picon text-plan-icon mb-5.5 h-8.5 w-8.5">
                <svg className="h-8.5 w-8.5">
                  <use href="#pinwheel" />
                </svg>
              </div>
              <h3 className="font-display tracking-heading mb-3 text-2xl leading-[1.08] font-normal">
                Starter Plan
              </h3>
              <p className="pdesc text-body-rx text-muted min-h-19 leading-[1.55]">
                Learn how your purchase supports artisanal communities and
                conscious consumption. We are craft, with a conscience.
              </p>
              <div className="divider font-code tracking-label text-muted-2 before:bg-line after:bg-line my-6 mb-5 flex items-center gap-3 text-[11px] uppercase before:h-px before:flex-1 before:content-[''] after:h-px after:flex-1 after:content-['']">
                Turquoise Trek ·
              </div>
              <ul className="mb-7.5 flex list-none flex-col gap-3.5">
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Supercharged tools
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Personalised guidance
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Market insights
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Supercharged tools
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Personalised guidance
                </li>
              </ul>
              <a
                className="btn pbtn font-display text-plan-action hover:bg-plan-action-hover max-mobile:px-5.5 max-mobile:py-3.25 max-mobile:text-[15px] inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 bg-white px-8 py-3.75 text-base font-normal whitespace-nowrap transition-[background,box-shadow,filter] duration-250 ease-[ease]"
                href="#"
                data-plan="Starter"
              >
                Choose this plan
              </a>
            </div>
            <div className="pcard pro rounded-card-lg border-pro-border bg-pro-card shadow-pro-card max-mobile:px-5.5 max-mobile:pb-7 max-mobile:pt-6.5 relative overflow-hidden border px-7.5 pt-8 pb-8.5">
              <div
                className="spark pointer-events-none absolute inset-0"
                id="spark"
              />
              <span className="badge text-badge-foreground absolute top-7 right-6 rounded-full border border-white/25 bg-white/14 px-3.25 py-1.25 text-xs">
                Most popular
              </span>
              <div className="picon mb-5.5 h-8.5 w-8.5 text-white">
                <svg className="h-8.5 w-8.5">
                  <use href="#swirl" />
                </svg>
              </div>
              <h3 className="font-display tracking-heading mb-3 text-2xl leading-[1.08] font-normal">
                Pro Plan
              </h3>
              <p className="pdesc text-body-rx min-h-19 leading-[1.55] text-white/70">
                Learn how your purchase supports artisanal communities and
                conscious consumption. We are craft, with a conscience.
              </p>
              <div className="divider font-code tracking-label my-6 mb-5 flex items-center gap-3 text-[11px] text-white/55 uppercase before:h-px before:flex-1 before:bg-white/20 before:content-[''] after:h-px after:flex-1 after:bg-white/20 after:content-['']">
                Turquoise Trek ·
              </div>
              <ul className="mb-7.5 flex list-none flex-col gap-3.5">
                <li className="text-plan-feature flex items-center gap-3 text-sm">
                  <span className="ck flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/16 text-white">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Supercharged tools
                </li>
                <li className="text-plan-feature flex items-center gap-3 text-sm">
                  <span className="ck flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/16 text-white">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Personalised guidance
                </li>
                <li className="text-plan-feature flex items-center gap-3 text-sm">
                  <span className="ck flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/16 text-white">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Market insights
                </li>
                <li className="text-plan-feature flex items-center gap-3 text-sm">
                  <span className="ck flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/16 text-white">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Supercharged tools
                </li>
                <li className="text-plan-feature flex items-center gap-3 text-sm">
                  <span className="ck flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/16 text-white">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Personalised guidance
                </li>
              </ul>
              <a
                className="btn pbtn border-pro-button-border bg-pro-gradient font-display shadow-pro-btn hover:bg-pro-gradient-hover hover:shadow-pro-btn-hover max-mobile:px-5.5 max-mobile:py-3.25 max-mobile:text-[15px] inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border px-8 py-3.75 text-base font-normal whitespace-nowrap text-white transition-[background,box-shadow,filter] duration-250 ease-[ease]"
                href="#"
                data-plan="Pro"
              >
                Choose this plan
              </a>
            </div>
            <div className="pcard rounded-card-lg border-line bg-price-card shadow-hairline max-mobile:px-5.5 max-mobile:pb-7 max-mobile:pt-6.5 relative overflow-hidden border px-7.5 pt-8 pb-8.5">
              <div className="picon text-plan-icon mb-5.5 h-8.5 w-8.5">
                <svg className="h-8.5 w-8.5">
                  <use href="#bloom" />
                </svg>
              </div>
              <h3 className="font-display tracking-heading mb-3 text-2xl leading-[1.08] font-normal">
                Enterprise
              </h3>
              <p className="pdesc text-body-rx text-muted min-h-19 leading-[1.55]">
                Learn how your purchase supports artisanal communities and
                conscious consumption. We are craft, with a conscience.
              </p>
              <div className="divider font-code tracking-label text-muted-2 before:bg-line after:bg-line my-6 mb-5 flex items-center gap-3 text-[11px] uppercase before:h-px before:flex-1 before:content-[''] after:h-px after:flex-1 after:content-['']">
                Turquoise Trek ·
              </div>
              <ul className="mb-7.5 flex list-none flex-col gap-3.5">
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Supercharged tools
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Personalised guidance
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Market insights
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Supercharged tools
                </li>
                <li className="text-ink-soft flex items-center gap-3 text-sm">
                  <span className="ck text-ink-soft flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg className="h-3 w-3">
                      <use href="#check" />
                    </svg>
                  </span>
                  Personalised guidance
                </li>
              </ul>
              <a
                className="btn pbtn font-display text-plan-action hover:bg-plan-action-hover max-mobile:px-5.5 max-mobile:py-3.25 max-mobile:text-[15px] inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 bg-white px-8 py-3.75 text-base font-normal whitespace-nowrap transition-[background,box-shadow,filter] duration-250 ease-[ease]"
                href="#"
                data-plan="Enterprise"
              >
                Choose this plan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
