"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  description: string
  tags: string[]
  href: string
  imageAlt: string
  imageSrc: string
}

const projects: Project[] = [
  {
    title: "WebFounders USA",
    description: "A sleek and responsive digital agency website.",
    tags: ["Next.js", "Nodejs", "TailwindCss", "CMS"],
    href: "https://www.webfoundersusa.com/",
    imageAlt: "Web Founders",
    imageSrc: "/portfolios/Screenshot 2025-07-19 at 11.25.53 PM.webp",
  },
  {
    title: "Ink Founders",
    description: "A clean and intuitive ebook publishing platform.",
    tags: ["Next.js", "Nodejs", "TailwindCss"],
    href: "https://www.inkfounders.com/",
    imageAlt: "Insight Dashboard preview",
    imageSrc: "/portfolios/Screenshot 2025-07-19 at 11.24.17 PM.webp",
  },
  {
    title: "Car Deal Marketplace",
    description: "A modern car deal marketplace platform.",
    tags: ["Next.js", "Nestjs", "TailwindCss", "Postgresql"],
    href: "https://car-deal-marketplace.vercel.app/AllCars",
    imageAlt: "Docs Engine preview",
    imageSrc: "/portfolios/Screenshot 2025-10-07 at 2.08.04 PM.webp",
  },
  {
    title: "BemBexLab",
    description: "A sleek and responsive digital agency website.",
    tags: ["Next.js", "Nodejs", "TailwindCss", "CMS"],
    href: "https://bembexlab.vercel.app/",
    imageAlt: "Studio CMS preview",
    imageSrc: "/portfolios/Screenshot 2025-10-07 at 2.13.49 PM.webp",
  },
  {
    title: "Engines Market UK",
    description: "A modern platform for buying and selling engines.",
    tags: ["Next.js", "Node.js", "TailwindCss", "CMS"],
    href: "https://enginesmarket.co.uk/",
    imageAlt: "AI Mail Writer preview",
    imageSrc: "/portfolios/Screenshot 2025-10-07 at 2.17.17 PM.webp",
  },
  {
    title: "Magic Cake",
    description: "A sweet and elegant cake shop website.",
    tags: ["Next.js", "Node.js", "TailwindCss"],
    href: "https://magicakes.vercel.app/",
    imageAlt: "Collab Whiteboard preview",
    imageSrc: "/portfolios/Screenshot 2025-10-07 at 2.20.51 PM.webp",
  },
  {
    title: "GIAIC",
    description: "A modern replica of the GIAIC IT program website.",
    tags: ["Next.js", "TailwindCss"],
    href: "https://giaic-nu.vercel.app/",
    imageAlt: "Collab Whiteboard preview",
    imageSrc: "/portfolios/Screenshot 2025-01-24 at 8.56.06 PM.webp",
  },
  {
    title: "Food Tuck",
    description: "A clean and appetizing restaurant website.",
    tags: ["Next.js", "TailwindCss", "SanityCMS", "Nodejs"],
    href: "https://giaic-hackathon-resturant-web-next-js.vercel.app/",
    imageAlt: "Collab Whiteboard preview",
    imageSrc: "/portfolios/Screenshot 2025-10-07 at 2.29.32 PM.webp",
  },
]

export function PortfolioCardsSection() {
  return (
    <section
  id="project"
  aria-labelledby="portfolio-heading"
  className="w-full py-12 md:py-16 bg-black"
  style={
    {
      "--brand": "#077b32",
      "--brand-glow": "0 0 40px var(--brand)",
    } as React.CSSProperties
  }
>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <header className="max-w-6xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3">
            <span
              className="h-1.5 w-8 rounded-full bg-[var(--brand)] shadow-[0_0_16px_var(--brand)]"
              aria-hidden="true"
            />
            <h2
              className="text-2xl md:text-4xl tracking-tight font-semibold text-[color-mix(in_oklab,var(--brand)_80%,white_20%)] py-5 animate-pulse"
              style={{ textShadow: "0 0 8px color-mix(in oklch, var(--color-foreground) 10%, transparent)" }}
            >
              Featured Work
            </h2>
          </div>
          <p className="mt-1 text-pretty leading-relaxed text-sm md:text-base text-muted-foreground">
            Interfaces that feel alive—crafted with performance, clarity, and motion.
          </p>
        </header>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          role="list"
          aria-label="Portfolio projects"
        >
          {projects.map((proj, i) => (
            <article
              key={proj.title}
              role="listitem"
              className="group relative"
              style={{ animation: `cardIn 600ms ${100 + i * 60}ms both ease-out` }}
            >
              {/* Card replacement */}
              <div
                className="overflow-hidden border-2 border-[color:var(--brand)]/20 bg-card/60 backdrop-blur-sm transition-transform duration-300 will-change-transform group-hover:-translate-y-1 rounded-lg"
                style={{ boxShadow: "0 0 0 0 transparent" }}
              >
                <div className="relative">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={proj.imageSrc || "/placeholder.svg"}
                      alt={proj.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      priority={i < 2}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ boxShadow: "inset 0 0 0 2px color-mix(in oklch, var(--brand) 55%, transparent)" }}
                    />
                  </div>

                  {/* subtle brand glow bar */}
                  {/* <div
      className="absolute left-4 top-4 h-6 rounded-md px-2 inline-flex items-center gap-2"
      style={{
        background: "color-mix(in oklch, var(--brand) 15%, transparent)",
        boxShadow: "0 0 18px color-mix(in oklch, var(--brand) 40%, transparent)",
      }}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand)]" />
      <span className="text-xs font-medium tracking-wide" style={{ color: "var(--color-foreground)" }}>
        Live
      </span>
    </div> */}
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-pretty">
                    <span className="align-middle text-white">{proj.title}</span>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-white">{proj.description}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-[color:var(--brand)]/40 text-white px-2.5 py-0.5 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                    target="_blank"
                      href={proj.href}
                      className="text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]"
                      aria-label={`Open ${proj.title}`}
                    >
                      <span className="inline-flex items-center gap-2 text-[color:var(--brand)]">
                        View project
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </Link>

                    {/* Button replacement */}
                    {/* <Link
        href={proj.href}
        aria-label={`Open ${proj.title} in new view`}
        className="inline-flex items-center justify-center rounded-md border border-[color:var(--brand)]/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[color:var(--brand)] hover:text-[color:var(--color-primary-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] bg-transparent"
      >
        Preview
      </Link> */}
                  </div>
                </div>
              </div>

              {/* brand glow ring on hover */}
              <div
                className="pointer-events-none absolute -inset-[1px] rounded-[calc(var(--radius-lg))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: "var(--brand-glow)" }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>

      {/* Global animations scoped to this file */}
      <style jsx global>{`
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  )
}

export default PortfolioCardsSection