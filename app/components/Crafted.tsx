export default function Crafted() {
  return (
    <>
      {/* ===== CRAFTED ===== */}
      <section
        className="crafted max-tablet:py-22.5 max-mobile:py-17 py-30"
        id="craft"
      >
        <div className="wrap max-tablet:px-8 max-mobile:px-5 mx-auto max-w-310 px-14 max-lg:px-10">
          <div className="sec-head max-mobile:mb-9.5 max-mobile:gap-y-4 mb-16 grid grid-cols-[1fr_minmax(0,400px)] items-end gap-x-12 gap-y-6 max-lg:grid-cols-1">
            <h2 className="font-display text-h2 tracking-heading max-mobile:text-[clamp(27px,8.2vw,36px)] leading-[1.12] font-light">
              Crafted slowly,
              <br />
              lived intentionally.
            </h2>
            <p className="intro text-muted max-mobile:text-[15px] max-w-100 justify-self-end text-right text-base leading-[1.55] max-lg:justify-self-start max-lg:text-left">
              Be the first to secure our curated pieces. Sign up for exclusive
              access to upcoming studio drops and a private look into our
              artisan process.
            </p>
          </div>
          <div className="bento flex flex-col gap-4.5">
            <div className="row r1 max-tablet:flex-col flex gap-4.5">
              <div className="bcard rounded-card border-line bg-surface-bento max-tablet:flex-1 relative flex flex-[1.25] flex-col overflow-hidden border transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/16">
                <div className="viz viz-longevity max-mobile:h-43 relative h-50 overflow-hidden bg-[radial-gradient(60%_90%_at_50%_50%,color-mix(in_oklch,var(--teal-deep)_70%,transparent),var(--color-surface-deep))]">
                  <div className="arc l absolute top-1/2 left-[-12%] h-35 w-[46%] -translate-y-1/2 rounded-[50%] border border-r-0 border-white/7" />
                  <div className="arc r absolute top-1/2 right-[-12%] h-35 w-[46%] -translate-y-1/2 rounded-[50%] border border-l-0 border-white/7" />
                  <span className="tick l text-muted-2 absolute top-1/2 left-[18%] -translate-y-1/2 text-base">
                    +
                  </span>
                  <span className="tick r text-muted-2 absolute top-1/2 right-[18%] -translate-y-1/2 text-base">
                    +
                  </span>
                  <div className="core text-accent absolute top-1/2 left-1/2 h-14 w-16 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_26px_color-mix(in_oklch,var(--brand-500)_95%,transparent)]">
                    <svg className="h-14 w-16">
                      <use href="#xblue" />
                    </svg>
                  </div>
                </div>
                <div className="body max-mobile:px-5.5 max-mobile:pb-6.5 max-mobile:pt-5.5 px-7 pt-6.5 pb-7.5">
                  <h3 className="font-display text-card-title tracking-heading max-mobile:text-[21px] mb-2.5 leading-[1.08] font-normal">
                    Designed for Longevity
                  </h3>
                  <p className="text-muted max-w-107.5 text-sm leading-[1.55]">
                    Discover timeless designs that reject mass production. We
                    prioritize lasting quality and sustainable materials for a
                    home lived with purpose.
                  </p>
                </div>
              </div>
              <div className="bcard rounded-card border-line bg-surface-bento relative flex flex-1 flex-col overflow-hidden border transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/16">
                <div
                  className="viz viz-drops max-mobile:h-43 relative h-50 overflow-hidden bg-[radial-gradient(70%_100%_at_50%_40%,oklch(23.2%_0.055_318/0.8),var(--gray-960))]"
                  id="drops"
                />
                <div className="body max-mobile:px-5.5 max-mobile:pb-6.5 max-mobile:pt-5.5 px-7 pt-6.5 pb-7.5">
                  <h3 className="font-display text-card-title tracking-heading max-mobile:text-[21px] mb-2.5 leading-[1.08] font-normal">
                    Early Access Drops
                  </h3>
                  <p className="text-muted max-w-107.5 text-sm leading-[1.55]">
                    Get priority reservations on new collections before launch.
                    You always have first choice.
                  </p>
                </div>
              </div>
            </div>
            <div className="row r2 max-tablet:flex-col flex gap-4.5">
              <div className="bcard rounded-card border-line bg-surface-bento max-tablet:flex-1 relative flex flex-[0.62] flex-col overflow-hidden border transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/16">
                <div className="viz viz-journal max-mobile:h-43 relative h-50 overflow-hidden bg-[radial-gradient(55%_80%_at_50%_52%,color-mix(in_oklch,var(--glow-red)_75%,transparent),var(--gray-960))]">
                  <svg
                    className="jlines absolute inset-0 h-full w-full"
                    viewBox="0 0 320 200"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M160 100 L78 56 M160 100 L242 56 M160 100 L78 150 M160 100 L242 150"
                      fill="none"
                      stroke="var(--color-danger-line)"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span
                    className="jtile absolute z-2 flex h-10.5 w-10.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/12 bg-[linear-gradient(160deg,var(--color-surface-tile-start),var(--color-surface-tile-end))]"
                    style={{ left: "14%", top: "22%" }}
                  >
                    <svg className="text-tile-icon h-5.5 w-5.5">
                      <use href="#swirl" />
                    </svg>
                  </span>
                  <span
                    className="jtile absolute z-2 flex h-10.5 w-10.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/12 bg-[linear-gradient(160deg,var(--color-surface-tile-start),var(--color-surface-tile-end))]"
                    style={{ left: "70%", top: "22%" }}
                  >
                    <svg className="text-tile-icon h-5.5 w-5.5">
                      <use href="#burst" />
                    </svg>
                  </span>
                  <span
                    className="jtile absolute z-2 flex h-10.5 w-10.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/12 bg-[linear-gradient(160deg,var(--color-surface-tile-start),var(--color-surface-tile-end))]"
                    style={{ left: "14%", top: "62%" }}
                  >
                    <svg className="text-tile-icon h-5.5 w-5.5">
                      <use href="#dots4" />
                    </svg>
                  </span>
                  <span
                    className="jtile absolute z-2 flex h-10.5 w-10.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/12 bg-[linear-gradient(160deg,var(--color-surface-tile-start),var(--color-surface-tile-end))]"
                    style={{ left: "70%", top: "62%" }}
                  >
                    <svg className="text-tile-icon h-5.5 w-5.5">
                      <use href="#atom" />
                    </svg>
                  </span>
                  <span className="jnode rounded-tile border-danger-border text-danger-accent absolute top-1/2 left-1/2 z-3 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border bg-[linear-gradient(160deg,var(--color-danger-surface-start),var(--color-danger-surface-end))] shadow-[0_0_36px_6px_var(--color-danger-glow)]">
                    <svg className="h-6 w-6.5 drop-shadow-[0_0_8px_var(--color-danger-drop)]">
                      <use href="#xblue" />
                    </svg>
                  </span>
                </div>
                <div className="body max-mobile:px-5.5 max-mobile:pb-6.5 max-mobile:pt-5.5 px-7 pt-6.5 pb-7.5">
                  <h3 className="font-display text-card-title tracking-heading max-mobile:text-[21px] mb-2.5 leading-[1.08] font-normal">
                    Studio Journal Insights
                  </h3>
                  <p className="text-muted max-w-107.5 text-sm leading-[1.55]">
                    Read about the journey of creation and the hands that make
                    it all possible.
                  </p>
                </div>
              </div>
              <div className="bcard rounded-card border-line bg-surface-bento relative flex flex-1 flex-col overflow-hidden border transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/16">
                <div className="viz viz-steward max-mobile:h-43 relative flex h-50 items-end justify-center gap-4 overflow-hidden bg-[radial-gradient(70%_95%_at_50%_60%,color-mix(in_oklch,var(--teal-deep)_60%,transparent),var(--color-surface-deep))] px-8.5">
                  <div
                    className="bar border-bar-border bg-bar w-7.5 rounded-t-lg border border-b-0"
                    style={{ height: "46%" }}
                  />
                  <div
                    className="bar border-bar-border bg-bar w-7.5 rounded-t-lg border border-b-0"
                    style={{ height: "64%" }}
                  />
                  <div
                    className="bar border-bar-border bg-bar w-7.5 rounded-t-lg border border-b-0"
                    style={{ height: "52%" }}
                  />
                  <div className="glowbar border-glowbar-border shadow-glow-accent relative h-32 w-11 self-end overflow-hidden rounded-t-[14px] border border-b-0 bg-[linear-gradient(180deg,var(--color-glowbar-start)_0%,var(--color-glowbar-mid)_55%,var(--color-glowbar-end)_100%)] after:absolute after:inset-0 after:bg-[radial-gradient(60%_50%_at_50%_30%,color-mix(in_oklch,white_25%,transparent),transparent_70%)] after:content-['']">
                    <span className="gx absolute top-4 left-1/2 z-2 -translate-x-1/2 text-white">
                      <svg className="h-5.5 w-6 drop-shadow-[0_0_6px_color-mix(in_oklch,white_80%,transparent)]">
                        <use href="#xblue" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className="bar border-bar-border bg-bar w-7.5 rounded-t-lg border border-b-0"
                    style={{ height: "70%" }}
                  />
                  <div
                    className="bar border-bar-border bg-bar w-7.5 rounded-t-lg border border-b-0"
                    style={{ height: "48%" }}
                  />
                  <div
                    className="bar border-bar-border bg-bar w-7.5 rounded-t-lg border border-b-0"
                    style={{ height: "60%" }}
                  />
                </div>
                <div className="body max-mobile:px-5.5 max-mobile:pb-6.5 max-mobile:pt-5.5 px-7 pt-6.5 pb-7.5">
                  <h3 className="font-display text-card-title tracking-heading max-mobile:text-[21px] mb-2.5 leading-[1.08] font-normal">
                    Intensional Stewardship
                  </h3>
                  <p className="text-muted max-w-107.5 text-sm leading-[1.55]">
                    Learn how your purchase supports artisanal communities and
                    conscious consumption. We are craft, with a conscience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
