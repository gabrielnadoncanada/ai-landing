export default function Testimonials() {
  return (
    <>
      {/* ===== TESTIMONIALS ===== */}
      <section
        className="testi max-tablet:py-22.5 max-mobile:py-17 relative overflow-hidden py-30 pb-27.5 before:pointer-events-none before:absolute before:top-[14%] before:left-[-6%] before:z-1 before:h-[42%] before:w-[44%] before:bg-[radial-gradient(circle_at_35%_40%,color-mix(in_oklch,var(--glow-cyan)_20%,transparent),transparent_64%)] before:content-['']"
        id="testimonials"
      >
        <div className="wrap max-tablet:px-8 max-mobile:px-5 relative z-2 mx-auto max-w-310 px-14 max-lg:px-10">
          <div className="sec-head max-mobile:mb-9.5 max-mobile:gap-y-4 mb-16 grid grid-cols-[1fr_minmax(0,400px)] items-end gap-x-12 gap-y-6 max-lg:grid-cols-1">
            <h2 className="font-display text-h2 tracking-heading max-mobile:text-[clamp(27px,8.2vw,36px)] leading-[1.12] font-light">
              Real results from
              <br />
              real innovators
            </h2>
            <p className="intro text-muted max-mobile:text-[15px] max-w-100 justify-self-end text-right text-base leading-[1.55] max-lg:justify-self-start max-lg:text-left">
              Be the first to secure our curated pieces. Sign up for exclusive
              access to upcoming studio drops and a private look into our
              artisan process.
            </p>
          </div>
        </div>
        <div className="t-rows group max-mobile:mb-10.5 max-mobile:gap-10 relative z-2 mb-13.5 flex flex-col gap-16">
          <div
            className="t-track animate-scroll-l flex w-max gap-6 group-hover:[animation-play-state:paused]"
            id="row1"
          />
          <div
            className="t-track rev animate-scroll-r flex w-max gap-6 group-hover:[animation-play-state:paused]"
            id="row2"
          />
        </div>
        <div className="wrap max-tablet:px-8 max-mobile:px-5 mx-auto max-w-310 px-14 max-lg:px-10">
          <div className="seeall flex justify-center">
            <a
              className="btn btn-primary border-primary-button-border bg-primary-gradient font-display shadow-btn hover:shadow-btn-hover max-mobile:px-5.5 max-mobile:py-3.25 max-mobile:text-[15px] max-xs:w-full max-xs:max-w-65 max-xs:justify-center inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-8 py-3.75 text-base font-normal whitespace-nowrap text-white transition-[background,box-shadow,filter] duration-250 ease-[ease]"
              href="#contact"
              data-nav=""
            >
              See All
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
