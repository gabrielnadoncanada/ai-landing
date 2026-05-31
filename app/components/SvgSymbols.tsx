export default function SvgSymbols() {
  return (
    <>
      {/* ===== SVG symbol defs ===== */}
      <svg
        width={0}
        height={0}
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gblue" x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="var(--brand-300)" />
            <stop offset={1} stopColor="var(--brand-700)" />
          </linearGradient>
          <linearGradient id="gpink" x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="var(--color-white)" />
            <stop offset={1} stopColor="var(--pink-soft)" />
          </linearGradient>
          <symbol id="xduo" viewBox="0 0 100 90">
            <g
              fill="none"
              strokeWidth={15}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 20 L50 52 L84 20" stroke="url(#gblue)" />
              <path d="M16 70 L50 38 L84 70" stroke="url(#gpink)" />
            </g>
          </symbol>
          <symbol id="xblue" viewBox="0 0 100 90">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth={15}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 20 L50 52 L84 20" />
              <path d="M16 70 L50 38 L84 70" />
            </g>
          </symbol>
          <symbol id="sun" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={13} fill="currentColor" />
            <g stroke="currentColor" strokeWidth={7} strokeLinecap="round">
              <line x1={50} y1={14} x2={50} y2={26} />
              <line x1={50} y1={74} x2={50} y2={86} />
              <line x1={14} y1={50} x2={26} y2={50} />
              <line x1={74} y1={50} x2={86} y2={50} />
              <line x1={25} y1={25} x2={33} y2={33} />
              <line x1={67} y1={67} x2={75} y2={75} />
              <line x1={75} y1={25} x2={67} y2={33} />
              <line x1={33} y1={67} x2={25} y2={75} />
            </g>
          </symbol>
          <symbol id="swirl" viewBox="0 0 100 100">
            <path
              d="M62 30 C62 20 36 20 36 41 C36 58 64 53 64 70 C64 81 36 81 34 68"
              fill="none"
              stroke="currentColor"
              strokeWidth={13}
              strokeLinecap="round"
            />
          </symbol>
          <symbol id="burst" viewBox="0 0 100 100">
            <g stroke="currentColor" strokeWidth={8} strokeLinecap="round">
              <line x1={50} y1={14} x2={50} y2={86} />
              <line x1={14} y1={50} x2={86} y2={50} />
              <line x1={24} y1={24} x2={76} y2={76} />
              <line x1={76} y1={24} x2={24} y2={76} />
            </g>
            <circle cx={50} cy={50} r={7} fill="currentColor" />
          </symbol>
          <symbol id="atom" viewBox="0 0 100 100">
            <g fill="none" stroke="currentColor" strokeWidth={7}>
              <ellipse
                cx={50}
                cy={50}
                rx={34}
                ry={13}
                transform="rotate(45 50 50)"
              />
              <ellipse
                cx={50}
                cy={50}
                rx={34}
                ry={13}
                transform="rotate(-45 50 50)"
              />
            </g>
            <circle cx={50} cy={50} r={7} fill="currentColor" />
          </symbol>
          <symbol id="dots4" viewBox="0 0 100 100">
            <g stroke="currentColor" strokeWidth={5}>
              <line x1={50} y1={24} x2={50} y2={76} />
              <line x1={24} y1={50} x2={76} y2={50} />
            </g>
            <g fill="currentColor">
              <circle cx={50} cy={20} r={11} />
              <circle cx={50} cy={80} r={11} />
              <circle cx={20} cy={50} r={11} />
              <circle cx={80} cy={50} r={11} />
            </g>
          </symbol>
          <symbol id="flake" viewBox="0 0 100 100">
            <g stroke="currentColor" strokeWidth={6} strokeLinecap="round">
              <line x1={50} y1={16} x2={50} y2={84} />
              <line x1={20} y1={33} x2={80} y2={67} />
              <line x1={80} y1={33} x2={20} y2={67} />
            </g>
          </symbol>
          <symbol id="sparkle" viewBox="0 0 100 100">
            <path
              d="M50 10 C54 38 62 46 90 50 C62 54 54 62 50 90 C46 62 38 54 10 50 C38 46 46 38 50 10 Z"
              fill="currentColor"
            />
          </symbol>
          <symbol id="sparkO" viewBox="0 0 100 100">
            <path
              d="M50 12 C53.5 37 63 46.5 88 50 C63 53.5 53.5 63 50 88 C46.5 63 37 53.5 12 50 C37 46.5 46.5 37 50 12 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth={6}
              strokeLinejoin="round"
            />
          </symbol>
          <symbol id="pinwheel" viewBox="0 0 100 100">
            <g fill="currentColor">
              <path d="M50 50 C50 30 56 13 73 9 C69 29 60 44 50 50 Z" />
              <path
                d="M50 50 C70 50 87 56 91 73 C71 69 56 60 50 50 Z"
                transform="rotate(0 50 50)"
              />
              <path d="M50 50 C50 70 44 87 27 91 C31 71 40 56 50 50 Z" />
              <path d="M50 50 C30 50 13 44 9 27 C29 31 44 40 50 50 Z" />
            </g>
          </symbol>
          <symbol id="bloom" viewBox="0 0 100 100">
            <g fill="currentColor">
              <ellipse cx={50} cy={25} rx="8.5" ry={22} />
              <ellipse
                cx={50}
                cy={25}
                rx="8.5"
                ry={22}
                transform="rotate(60 50 50)"
              />
              <ellipse
                cx={50}
                cy={25}
                rx="8.5"
                ry={22}
                transform="rotate(120 50 50)"
              />
              <ellipse
                cx={50}
                cy={25}
                rx="8.5"
                ry={22}
                transform="rotate(180 50 50)"
              />
              <ellipse
                cx={50}
                cy={25}
                rx="8.5"
                ry={22}
                transform="rotate(240 50 50)"
              />
              <ellipse
                cx={50}
                cy={25}
                rx="8.5"
                ry={22}
                transform="rotate(300 50 50)"
              />
            </g>
          </symbol>
          <symbol id="check" viewBox="0 0 24 24">
            <path
              d="M5 12.5 L10 17.5 L19 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </symbol>
        </defs>
      </svg>
    </>
  )
}
