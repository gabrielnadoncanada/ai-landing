import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Newsreader, Poppins } from "next/font/google"

import "../styles.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Supo - Give Your Team Digital Superpowers",
  description:
    "An AI assistant landing page for teams that want digital superpowers.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className="max-mobile:scroll-pt-19.5 scroll-pt-24 scroll-smooth"
    >
      <body
        className={`${poppins.variable} ${newsreader.variable} bg-bg text-ink font-body leading-[1.45] font-normal antialiased [text-rendering:optimizeLegibility]`}
      >
        {children}
      </body>
    </html>
  )
}
