export default function Footer() {
  return (
    <>
      {/* ===== FOOTER ===== */}
      <footer
        className="footer max-mobile:py-15 max-mobile:pb-13.75 relative overflow-hidden bg-[linear-gradient(180deg,var(--gray-960)_35%,oklch(25%_0.038_228)_100%)] py-20 pb-11.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-60 after:bg-[radial-gradient(80%_120%_at_50%_130%,oklch(50.3%_0.084_224/0.55),transparent_60%)] after:content-['']"
        id="contact"
      >
        <div className="wrap max-tablet:px-8 max-mobile:px-5 mx-auto max-w-310 px-14 max-lg:px-10">
          <div className="f-grid max-tablet:grid-cols-2 max-tablet:gap-8.5 max-mobile:grid-cols-1 max-mobile:gap-7.5 relative z-2 grid grid-cols-[1.4fr_1fr_1fr] gap-10">
            <div className="f-brand max-tablet:col-span-full max-mobile:col-auto">
              <div className="logo font-display max-mobile:text-[26px] mb-6.5 flex items-center gap-3 text-3xl font-normal">
                <svg className="h-8.5 w-10">
                  <use href="#xduo" />
                </svg>{" "}
                Supo
              </div>
              <p className="text-muted max-w-75 text-sm leading-[1.6]">
                Discover timeless designs that reject mass production. We
                prioritize lasting quality and sustainable materials for a home
                lived with purpose.
              </p>
              <div className="f-social max-tablet:mt-8 max-mobile:mt-6.5 mt-20 flex max-w-30 flex-wrap gap-3.5">
                <a
                  className="bg-social-bg text-social-foreground flex h-11.5 w-11.5 items-center justify-center rounded-full transition-[background,color,filter] duration-250 hover:brightness-105"
                  href="#"
                  aria-label="Odnoklassniki"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle
                      cx={12}
                      cy={7}
                      r="3.4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                    <path
                      d="M7 13c1.6 1.3 3.3 2 5 2s3.4-.7 5-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 21l3-4 3 4M8.5 16.5l7 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="f-social mt-3.5 flex max-w-30 flex-wrap gap-3.5">
                <a
                  className="bg-social-bg text-social-foreground flex h-11.5 w-11.5 items-center justify-center rounded-full transition-[background,color,filter] duration-250 hover:brightness-105"
                  href="#"
                  aria-label="VK"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.7 16.5c-5 0-8.2-3.5-8.4-9.3h2.6c.1 4.3 2.1 6.1 3.6 6.5V7.2h2.4v3.6c1.5-.2 3-1.8 3.6-3.6h2.4c-.4 2.2-2 3.8-3.1 4.5 1.1.6 2.9 2 3.6 4.8h-2.7c-.5-1.7-1.9-3-3.8-3.2v3.2h-.8Z" />
                  </svg>
                </a>
                <a
                  className="bg-social-bg text-social-foreground flex h-11.5 w-11.5 items-center justify-center rounded-full transition-[background,color,filter] duration-250 hover:brightness-105"
                  href="#"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle
                      cx={12}
                      cy={12}
                      r={9}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                    <path d="M13.2 21v-7h2l.4-2.6h-2.4V9.7c0-.8.3-1.3 1.4-1.3h1.1V6.1c-.5-.1-1.2-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8v2.6h2.3V21Z" />
                  </svg>
                </a>
                <a
                  className="bg-social-bg text-social-foreground flex h-11.5 w-11.5 items-center justify-center rounded-full transition-[background,color,filter] duration-250 hover:brightness-105"
                  href="#"
                  aria-label="Telegram"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 4 2.5 11.3c-.9.4-.9.9-.1 1.1l4.7 1.5L19 6.2c.5-.3.9-.1.6.2l-9.2 8.3-.4 4.4c.4 0 .6-.2.8-.4l2-1.9 4.1 3c.8.4 1.3.2 1.5-.7L22.7 5.3c.3-1.1-.4-1.6-1.7-1.3Z" />
                  </svg>
                </a>
                <a
                  className="bg-social-bg text-social-foreground flex h-11.5 w-11.5 items-center justify-center rounded-full transition-[background,color,filter] duration-250 hover:brightness-105"
                  href="#"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="3.5" y="3.5" width={17} height={17} rx={5} />
                    <circle cx={12} cy={12} r={4} />
                    <circle
                      cx={17}
                      cy={7}
                      r="1.2"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="f-nav font-display max-mobile:gap-3.5 max-mobile:text-[17px] flex flex-col gap-4.5 text-lg">
              <a
                className="text-ink hover:text-accent-hi transition-colors duration-200"
                href="#top"
                data-nav=""
              >
                About.
              </a>
              <a
                className="text-ink hover:text-accent-hi transition-colors duration-200"
                href="#testimonials"
                data-nav=""
              >
                Testimonials.
              </a>
              <a
                className="text-ink hover:text-accent-hi transition-colors duration-200"
                href="#pricing"
                data-nav=""
              >
                Pricing.
              </a>
              <a
                className="text-ink hover:text-accent-hi transition-colors duration-200"
                href="#contact"
                data-nav=""
              >
                Contacts.
              </a>
            </div>
            <div className="f-col">
              <div className="blk mb-10.5">
                <h4 className="font-display max-mobile:text-[17px] mb-4.5 text-lg font-medium">
                  Contact Us
                </h4>
                <p className="text-muted text-sm leading-[1.6]">
                  +1(999) 888-77-66
                  <br />
                  hello@emura.studio
                </p>
              </div>
              <div className="blk mb-0">
                <h4 className="font-display max-mobile:text-[17px] mb-4.5 text-lg font-medium">
                  Location
                </h4>
                <p className="text-muted text-sm leading-[1.6]">
                  483920, Moscow.
                  <br />
                  Myasnitskaya 22/2/5, Office 4
                </p>
              </div>
            </div>
          </div>
          <div className="f-bottom max-mobile:mt-6.5 max-mobile:flex-col max-mobile:items-start max-mobile:gap-5 relative z-2 mt-7.5 flex items-end justify-between gap-7.5">
            <div />
            <div className="f-copy text-muted-2 max-mobile:text-left text-center text-[13px] leading-normal">
              © 2026 — Copyright.
              <br />
              All Rights reserved
            </div>
            <div className="f-lang max-mobile:text-left text-right">
              <div className="lbl font-display mb-2 text-[15px] font-medium">
                Languages
              </div>
              <div className="langs text-muted max-mobile:justify-start flex gap-4 text-sm">
                <b className="text-ink font-semibold">En</b>
                <span>Es</span>
                <span>Fr</span>
                <span>De</span>
                <span>Ru</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
