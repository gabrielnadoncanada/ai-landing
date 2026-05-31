export default function Features() {
  return (
    <>
      {/* ===== FEATURES ===== */}
      <section
        className="features max-tablet:py-24 max-tablet:pb-6 max-mobile:py-16 max-mobile:pb-4 relative overflow-hidden py-30 pb-10 before:pointer-events-none before:absolute before:top-[18%] before:right-[-4%] before:z-1 before:h-[40%] before:w-[42%] before:bg-[radial-gradient(circle_at_70%_40%,color-mix(in_oklch,var(--glow-red)_20%,transparent),transparent_64%)] before:content-[''] after:pointer-events-none after:absolute after:bottom-[4%] after:left-[-6%] after:z-1 after:h-[46%] after:w-[48%] after:bg-[radial-gradient(circle_at_30%_70%,color-mix(in_oklch,var(--glow-cyan)_28%,transparent),transparent_62%)] after:content-['']"
        id="features"
      >
        <div className="wrap max-tablet:px-8 max-mobile:px-5 relative z-2 mx-auto max-w-310 px-14 max-lg:px-10">
          <div className="sec-head max-mobile:mb-9.5 max-mobile:gap-y-4 mb-16 grid grid-cols-[1fr_minmax(0,400px)] items-end gap-x-12 gap-y-6 max-lg:grid-cols-1">
            <h2 className="font-display text-h2 tracking-heading max-mobile:text-[clamp(27px,8.2vw,36px)] leading-[1.12] font-light">
              Why Modern Leaders
              <br />
              Choose Supo?
            </h2>
            <p className="intro text-muted max-mobile:text-[15px] max-w-100 justify-self-end text-right text-base leading-[1.55] max-lg:justify-self-start max-lg:text-left">
              Stop managing tools and start managing growth with an AI ecosystem
              built for precision.
            </p>
          </div>
          <div className="feat-grid max-mobile:grid-cols-1 max-mobile:gap-3.5 grid auto-rows-[222px] grid-cols-4 gap-5 max-lg:auto-rows-auto max-lg:grid-cols-2">
            <div className="fcard rounded-card border-line bg-bento-card shadow-hairline max-mobile:min-h-0 max-mobile:p-6 flex flex-col justify-between border p-7.5 transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/18 max-lg:min-h-47">
              <div className="ficon text-accent max-mobile:h-9.5 max-mobile:w-9.5 mb-1.5 h-10.5 w-10.5">
                <svg className="max-mobile:h-9.5 max-mobile:w-9.5 h-10.5 w-10.5 drop-shadow-[0_0_12px_color-mix(in_oklch,var(--brand-500)_65%,transparent)]">
                  <use href="#burst" />
                </svg>
              </div>
              <div className="ftxt mt-auto">
                <h3 className="font-display text-feature-title tracking-heading text-ink max-mobile:text-xl mb-2.5 leading-[1.08] font-normal">
                  Hyper-Automation
                </h3>
                <p className="text-body-rx text-muted max-w-[88%] leading-[1.55]">
                  Our AI identifies repetitive bottlenecks in your workflow.
                </p>
              </div>
            </div>
            <div className="feat-empty rounded-card border-line-2 border bg-[radial-gradient(120%_95%_at_50%_130%,color-mix(in_oklch,var(--wash-cyan)_12%,transparent),transparent_60%)] max-lg:hidden" />
            <div className="fcard rounded-card border-line bg-bento-card shadow-hairline max-mobile:min-h-0 max-mobile:p-6 flex flex-col justify-between border p-7.5 transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/18 max-lg:min-h-47">
              <div className="ficon text-accent max-mobile:h-9.5 max-mobile:w-9.5 mb-1.5 h-10.5 w-10.5">
                <svg className="max-mobile:h-9.5 max-mobile:w-9.5 h-10.5 w-10.5 drop-shadow-[0_0_12px_color-mix(in_oklch,var(--brand-500)_65%,transparent)]">
                  <use href="#sun" />
                </svg>
              </div>
              <div className="ftxt mt-auto">
                <h3 className="font-display text-feature-title tracking-heading text-ink max-mobile:text-xl mb-2.5 leading-[1.08] font-normal">
                  Exponential Scale
                </h3>
                <p className="text-body-rx text-muted max-w-[88%] leading-[1.55]">
                  Scaling no longer requires a proportional increase in
                  headcount or cost.
                </p>
              </div>
            </div>
            <div className="fcard rounded-card border-line bg-bento-card shadow-hairline max-mobile:min-h-0 max-mobile:p-6 flex flex-col justify-between border p-7.5 transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/18 max-lg:min-h-47">
              <div className="ficon text-accent max-mobile:h-9.5 max-mobile:w-9.5 mb-1.5 h-10.5 w-10.5">
                <svg className="max-mobile:h-9.5 max-mobile:w-9.5 h-10.5 w-10.5 drop-shadow-[0_0_12px_color-mix(in_oklch,var(--brand-500)_65%,transparent)]">
                  <use href="#atom" />
                </svg>
              </div>
              <div className="ftxt mt-auto">
                <h3 className="font-display text-feature-title tracking-heading text-ink max-mobile:text-xl mb-2.5 leading-[1.08] font-normal">
                  Actionable Intel
                </h3>
                <p className="text-body-rx text-muted max-w-[88%] leading-[1.55]">
                  Transform fragmented information into a cohesive narrative.
                </p>
              </div>
            </div>
            <div className="fcard rounded-card border-line bg-bento-card shadow-hairline max-mobile:min-h-0 max-mobile:p-6 flex flex-col justify-between border p-7.5 transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/18 max-lg:min-h-47">
              <div className="ficon text-accent max-mobile:h-9.5 max-mobile:w-9.5 mb-1.5 h-10.5 w-10.5">
                <svg className="max-mobile:h-9.5 max-mobile:w-9.5 h-10.5 w-10.5 drop-shadow-[0_0_12px_color-mix(in_oklch,var(--brand-500)_65%,transparent)]">
                  <use href="#dots4" />
                </svg>
              </div>
              <div className="ftxt mt-auto">
                <h3 className="font-display text-feature-title tracking-heading text-ink max-mobile:text-xl mb-2.5 leading-[1.08] font-normal">
                  Lean Operations
                </h3>
                <p className="text-body-rx text-muted max-w-[88%] leading-[1.55]">
                  Optimizing resource allocation and identifying hidden
                  operational costs.
                </p>
              </div>
            </div>
            <div className="fcard rounded-card border-line bg-bento-card shadow-hairline max-mobile:min-h-0 max-mobile:p-6 flex flex-col justify-between border p-7.5 transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/18 max-lg:min-h-47">
              <div className="ficon text-accent max-mobile:h-9.5 max-mobile:w-9.5 mb-1.5 h-10.5 w-10.5">
                <svg className="max-mobile:h-9.5 max-mobile:w-9.5 h-10.5 w-10.5 drop-shadow-[0_0_12px_color-mix(in_oklch,var(--brand-500)_65%,transparent)]">
                  <use href="#swirl" />
                </svg>
              </div>
              <div className="ftxt mt-auto">
                <h3 className="font-display text-feature-title tracking-heading text-ink max-mobile:text-xl mb-2.5 leading-[1.08] font-normal">
                  Plug &amp; Play
                </h3>
                <p className="text-body-rx text-muted max-w-[88%] leading-[1.55]">
                  Our solution is built for seamless, native connectivity.
                </p>
              </div>
            </div>
            <div className="fcard rounded-card border-line bg-bento-card shadow-hairline max-mobile:min-h-0 max-mobile:p-6 flex flex-col justify-between border p-7.5 transition-[transform,border-color] duration-400 hover:-translate-y-0.75 hover:border-white/18 max-lg:min-h-47">
              <div className="ficon text-accent max-mobile:h-9.5 max-mobile:w-9.5 mb-1.5 h-10.5 w-10.5">
                <svg className="max-mobile:h-9.5 max-mobile:w-9.5 h-10.5 w-10.5 drop-shadow-[0_0_12px_color-mix(in_oklch,var(--brand-500)_65%,transparent)]">
                  <use href="#sparkle" />
                </svg>
              </div>
              <div className="ftxt mt-auto">
                <h3 className="font-display text-feature-title tracking-heading text-ink max-mobile:text-xl mb-2.5 leading-[1.08] font-normal">
                  Stay Ahead
                </h3>
                <p className="text-body-rx text-muted max-w-[88%] leading-[1.55]">
                  Continuously updated with the latest advancements in machine
                  learning.
                </p>
              </div>
            </div>
            <div className="fcard feat-deco rounded-card relative flex items-center justify-center border-none bg-transparent p-7.5 shadow-none transition-none hover:translate-y-0 max-lg:hidden">
              <div className="stack relative h-37.5 w-37.5">
                <div className="sq a text-tile-icon absolute top-3.5 left-1.5 flex h-19.5 w-19.5 -rotate-10 items-center justify-center rounded-[18px] border border-white/16 bg-[color-mix(in_oklch,var(--gray-100)_10%,transparent)] text-2xl font-light backdrop-blur-[2px]">
                  +
                </div>
                <div className="sq b absolute top-7.5 right-4.5 flex h-21 w-21 items-center justify-center rounded-[18px] border border-white/12 bg-[linear-gradient(160deg,var(--gray-880),var(--gray-940))] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                  <svg className="h-9.5 w-10.5 drop-shadow-[0_0_10px_color-mix(in_oklch,var(--brand-500)_60%,transparent)]">
                    <use href="#xduo" />
                  </svg>
                </div>
                <div className="sq c rounded-tile text-muted absolute -right-0.5 bottom-1.5 flex h-11.5 w-11.5 items-center justify-center border border-white/12 bg-[var(--gray-920)]">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M5 5h5v5H5zM14 14h5v5h-5z" />
                    <path
                      d="M14 6.5h5M16.5 4v5M5 16.5l5 0M7.5 14l0 5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
