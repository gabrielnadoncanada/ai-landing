export default function FinalCta() {
  return (
    <>
      {/* ===== FINAL CTA ===== */}
      <section className="final bg-bg-hero max-mobile:py-23 max-mobile:pb-24 relative overflow-hidden [background-image:radial-gradient(95%_115%_at_6%_45%,color-mix(in_oklch,var(--glow-cyan)_62%,transparent),transparent_48%),radial-gradient(95%_115%_at_100%_55%,color-mix(in_oklch,var(--glow-red)_56%,transparent),transparent_52%),radial-gradient(90%_70%_at_50%_-10%,oklch(31.7%_0.022_238/0.4),transparent_60%)] py-37.5 pb-40 text-center before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(122deg,transparent_0px,var(--color-stripe-final)_55px,transparent_120px),linear-gradient(115deg,transparent_32%,color-mix(in_oklch,white_4.5%,transparent)_49%,transparent_66%)] before:content-['']">
        <div className="wrap final-inner max-tablet:px-8 max-mobile:px-5 relative z-2 mx-auto max-w-310 px-14 max-lg:px-10">
          <h1 className="bg-title-gradient font-display text-display tracking-display max-mobile:text-[clamp(32px,9.4vw,44px)] bg-clip-text leading-[1.02] font-light text-transparent">
            Give Your Team
            <br />
            <span className="l2 font-normal">Digital Superpowers</span>
          </h1>
          <p className="text-muted max-mobile:text-[15px] mx-auto mt-7 max-w-117.5 text-base">
            Curated collection of one-of-a-kind pieces where traditional
            craftsmanship meets modern aesthetics.
          </p>
          <div className="cta-row max-mobile:gap-3 max-xs:flex-col max-xs:items-center mt-10.5 flex justify-center gap-4.5">
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
        </div>
      </section>
    </>
  )
}
