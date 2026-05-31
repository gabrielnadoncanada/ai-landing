import {
  Crafted,
  Features,
  FinalCta,
  Footer,
  Header,
  Hero,
  MenuOverlay,
  Pricing,
  SupoRuntime,
  SvgSymbols,
  Testimonials,
} from "./components"

export default function HomePage() {
  return (
    <>
      <SvgSymbols />
      <Header />
      <MenuOverlay />
      <Hero />
      <Features />
      <Crafted />
      <Pricing />
      <Testimonials />
      <FinalCta />
      <Footer />
      <SupoRuntime />
    </>
  )
}
