"use client"

import { useEffect } from "react"

type Testimonial = {
  quote: string
  name: string
  role: string
  img: number
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Fast turnaround and excellent communication made the entire design process smooth and enjoyable. Will definitely use their services again.",
    name: "Marcelo Velez",
    role: "Marketing Manager",
    img: 12,
  },
  {
    quote:
      "Their attention to detail and creative insights brought our vision to life beyond expectations.",
    name: "Sophie Chen",
    role: "Product Designer",
    img: 16,
  },
  {
    quote:
      "Timely delivery and proactive updates kept our project on track and stress-free.",
    name: "Jamal Edwards",
    role: "Project Coordinator",
    img: 33,
  },
  {
    quote:
      "The team was incredibly professional and brought my vision to life in ways I never imagined. Highly recommend for any creative project!",
    name: "Alana Ruiz",
    role: "Creative Director",
    img: 20,
  },
  {
    quote:
      "A perfect blend of professionalism and creativity that elevated our brand.",
    name: "Elena Rodriguez",
    role: "Brand Strategist",
    img: 47,
  },
]

function createTestimonialCard(testimonial: Testimonial) {
  const card = document.createElement("article")
  card.className =
    "tcard relative mt-7.5 w-107.5 shrink-0 rounded-3xl border border-line bg-[linear-gradient(170deg,color-mix(in_oklch,var(--teal-deep)_55%,transparent),color-mix(in_oklch,var(--gray-960)_55%,transparent))] px-7.5 pb-6.5 pt-12.5 max-mobile:w-[84vw] max-mobile:max-w-82.5 max-mobile:px-6 max-mobile:pb-6 max-mobile:pt-11.5"

  const avatar = document.createElement("img")
  avatar.className =
    "av absolute -top-7.5 left-7.5 h-16 w-16 rounded-full border-2 border-white/20 bg-avatar-bg object-cover"
  avatar.src = `https://i.pravatar.cc/128?img=${testimonial.img}`
  avatar.alt = testimonial.name

  const quote = document.createElement("p")
  quote.className =
    "quote min-h-26 text-base leading-[1.55] text-ink-soft max-mobile:min-h-0 max-mobile:text-[15px]"
  quote.textContent = testimonial.quote

  const quoteMark = document.createElement("span")
  quoteMark.className =
    "qmark pointer-events-none absolute bottom-7.5 left-6 font-serif text-[120px] leading-none text-white/4 max-mobile:text-[90px]"
  quoteMark.innerHTML = "&rdquo;"

  const foot = document.createElement("div")
  foot.className = "foot relative z-2 mt-6 flex items-end justify-between"

  const person = document.createElement("div")
  const name = document.createElement("div")
  name.className = "nm text-base font-semibold text-ink"
  name.textContent = testimonial.name
  const role = document.createElement("div")
  role.className = "role mt-0.75 text-[13px] text-muted"
  role.textContent = testimonial.role
  person.append(name, role)

  const logo = document.createElement("div")
  logo.className =
    "glogo font-display text-2xl tracking-[-0.5px] text-google-wordmark"
  logo.textContent = "Google"

  foot.append(person, logo)
  card.append(avatar, quote, quoteMark, foot)

  return card
}

function fillTestimonials(id: string, order: number[]) {
  const row = document.getElementById(id)
  if (!row) return

  const cards = order.map((index) => createTestimonialCard(testimonials[index]))
  row.replaceChildren(...cards, ...cards.map((card) => card.cloneNode(true)))
}

function populateDrops() {
  const el = document.getElementById("drops")
  if (!el) return

  el.querySelectorAll(".dot, img.av").forEach((node) => node.remove())
  ;[
    { x: 20, y: 30, color: "var(--dot-violet)" },
    { x: 74, y: 24, color: "var(--dot-pink)" },
    { x: 50, y: 62, color: "var(--dot-gold)" },
    { x: 30, y: 74, color: "var(--dot-teal)" },
    { x: 82, y: 66, color: "var(--dot-coral)" },
  ].forEach((dot) => {
    const span = document.createElement("span")
    span.className =
      "dot absolute flex h-5.5 w-5.5 items-center justify-center rounded-full after:absolute after:-inset-2.5 after:rounded-full after:bg-[radial-gradient(closest-side,var(--g),transparent)] after:opacity-80 after:content-['']"
    span.style.left = `${dot.x}%`
    span.style.top = `${dot.y}%`
    span.style.setProperty("--g", dot.color)
    span.style.background = dot.color
    el.appendChild(span)
  })
  ;[
    { x: 42, y: 18, img: 5 },
    { x: 60, y: 40, img: 8 },
    { x: 24, y: 50, img: 30 },
  ].forEach((avatar) => {
    const img = document.createElement("img")
    img.className =
      "av absolute z-2 h-7.5 w-7.5 rounded-full border border-white/25 bg-avatar-bg"
    img.src = `https://i.pravatar.cc/60?img=${avatar.img}`
    img.alt = ""
    img.style.left = `${avatar.x}%`
    img.style.top = `${avatar.y}%`
    el.appendChild(img)
  })
}

function populateStewardSparkles() {
  const el = document.querySelector(".viz-steward .glowbar")
  if (!el) return

  el.querySelectorAll(".spk").forEach((node) => node.remove())

  for (let i = 0; i < 14; i += 1) {
    const sparkle = document.createElement("span")
    sparkle.className =
      "spk absolute h-0.5 w-0.5 rounded-full bg-white opacity-70"
    sparkle.style.left = `${Math.random() * 100}%`
    sparkle.style.top = `${Math.random() * 70 + 20}%`
    sparkle.style.opacity = (Math.random() * 0.6 + 0.3).toFixed(2)
    el.appendChild(sparkle)
  }
}

function populateProStars() {
  const el = document.getElementById("spark")
  if (!el) return

  el.querySelectorAll("i").forEach((node) => node.remove())

  for (let i = 0; i < 26; i += 1) {
    const star = document.createElement("i")
    star.className = "absolute rounded-full bg-white opacity-70"
    const size = Math.random() * 2 + 1
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.left = `${Math.random() * 100}%`
    star.style.top = `${Math.random() * 55}%`
    star.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2)
    el.appendChild(star)
  }
}

export default function SupoRuntime() {
  useEffect(() => {
    fillTestimonials("row1", [0, 1, 2, 4])
    fillTestimonials("row2", [3, 0, 4, 1])
    populateDrops()
    populateStewardSparkles()
    populateProStars()

    const topbar = document.getElementById("topbar")
    const overlay = document.getElementById("menuOverlay")
    const openButton = document.getElementById("menuOpen")
    const closeButton = document.getElementById("menuClose")

    const onScroll = () => {
      topbar?.classList.toggle("scrolled", window.scrollY > 40)
    }

    const openMenu = () => {
      overlay?.classList.add("open")
      document.body.classList.add("menu-open")
      openButton?.setAttribute("aria-expanded", "true")
      overlay?.setAttribute("aria-hidden", "false")
    }

    const closeMenu = () => {
      overlay?.classList.remove("open")
      document.body.classList.remove("menu-open")
      openButton?.setAttribute("aria-expanded", "false")
      overlay?.setAttribute("aria-hidden", "true")
    }

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && overlay?.classList.contains("open")) {
        closeMenu()
      }
    }

    const scrollToElement = (target: Element) => {
      const y = target.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top: y, behavior: "smooth" })
    }

    const onAnchorClick = (event: Event) => {
      const anchor = event.currentTarget as HTMLAnchorElement
      const href = anchor.getAttribute("href")
      if (!href?.startsWith("#")) return

      event.preventDefault()
      const target = href.length > 1 ? document.querySelector(href) : null
      const wasOpen = overlay?.classList.contains("open")

      if (wasOpen) closeMenu()
      if (!target) return

      if (wasOpen) {
        window.setTimeout(
          () => requestAnimationFrame(() => scrollToElement(target)),
          160
        )
      } else {
        scrollToElement(target)
      }
    }

    const toast = document.createElement("div")
    toast.className =
      "toast pointer-events-none fixed bottom-10 left-1/2 z-120 flex -translate-x-1/2 translate-y-4.5 items-center gap-2.75 rounded-full border border-line bg-[color-mix(in_oklch,var(--gray-880)_92%,transparent)] px-5.5 py-3.5 text-[15px] text-ink-soft opacity-0 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-[10px] transition-[opacity,transform] duration-300 ease-[ease] [&.show]:translate-y-0 [&.show]:opacity-100"
    toast.setAttribute("data-supo-toast", "true")
    document.body.appendChild(toast)
    let toastTimer: number

    const showToast = (message: string) => {
      const dot = document.createElement("span")
      dot.className =
        "dot h-2 w-2 rounded-full bg-accent-hi shadow-[0_0_10px_var(--color-accent-hi)]"
      toast.replaceChildren(dot, document.createTextNode(message))
      toast.classList.add("show")
      window.clearTimeout(toastTimer)
      toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3400)
    }

    const onPlanClick = (event: Event) => {
      event.preventDefault()
      const plan = (event.currentTarget as HTMLElement).dataset.plan
      showToast(`"${plan}" plan selected - we'll be in touch.`)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("keydown", onKeydown)
    openButton?.addEventListener("click", openMenu)
    closeButton?.addEventListener("click", closeMenu)

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    anchors.forEach((anchor) => anchor.addEventListener("click", onAnchorClick))

    const planButtons = Array.from(document.querySelectorAll("[data-plan]"))
    planButtons.forEach((button) =>
      button.addEventListener("click", onPlanClick)
    )

    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("keydown", onKeydown)
      openButton?.removeEventListener("click", openMenu)
      closeButton?.removeEventListener("click", closeMenu)
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", onAnchorClick)
      )
      planButtons.forEach((button) =>
        button.removeEventListener("click", onPlanClick)
      )
      window.clearTimeout(toastTimer)
      toast.remove()
      closeMenu()
    }
  }, [])

  return null
}
