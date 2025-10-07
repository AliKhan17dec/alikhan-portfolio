"use client"

import { useEffect, useRef } from "react"

type TimelineItem = {
  title: string
  org?: string
  seniority?: string
  period: string
  description?: string
}

const experience: TimelineItem[] = [
  {
    title: "Full Stack Developer",
    seniority: "Junior",
    org: "BemBexLab",
    period: "06/2025 – 09/2025",
    description: "Contributed across the stack with a focus on clean UI, performance, and collaboration.",
  },
  {
    title: "Full Stack Developer",
    seniority: "Intern",
    org: "BemBexLab",
    period: "04/2025 – 06/2025",
    description: "Contributed across the stack with a focus on clean UI, performance, and collaboration.",
  },
]

const education: TimelineItem[] = [
  { title: "BSCS", org: "Virtual University", period: "2025 – Ongoing" },
  { title: "Intermediate", org: "GOVT Premier Boys College", period: "2022 – 2024" },
  { title: "Matric", org: "The learning Circle School", period: "2020 – 2022" },
]

const certifications: TimelineItem[] = [
  {
    title: "Certified Cloud Applied Generative AI",
    org: "Governer Sindh House",
    period: "01/2024 – Ongoing",
  },
  {
    title: "Intermediate English",
    org: "Domino English Learning Center",
    period: "07/2020 – 12/2022",
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = Array.from(section.querySelectorAll('[data-reveal="true"]'))
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview")
          }
        }
      },
      { threshold: 0.15 },
    )

    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-12 md:py-20 px-4 md:px-8 bg-background text-foreground"
      style={{ '--brand': '#077b32' } as React.CSSProperties}
    >
      {/* Title */}
      <header className="max-w-6xl mx-auto mb-10 md:mb-14">
        <div
          className="inline-flex items-center gap-3 opacity-0 translate-y-3 is-inview:!opacity-100 is-inview:!translate-y-0 transition-all duration-700"
          data-reveal="true"
        >
          <span
            className="h-1.5 w-8 rounded-full bg-[#077b32] shadow-[0_0_25px_#077b32]"
            aria-hidden="true"
          />
          <p className="text-2xl md:text-4xl tracking-widest uppercase font-bold text-[color-mix(in_oklab,#077b32_80%,white_20%)] py-5 animate-pulse">
            About Me
          </p>
        </div>
        {/* <h2
          className="mt-3 text-balance text-7xl md:text-4xl font-semibold leading-tight opacity-0 translate-y-2 is-inview:!opacity-100 is-inview:!translate-y-0 transition-all duration-700 delay-100"
          data-reveal="true"
        >
          Turning ideas into reliable, scalable experiences through code and collaboration.
        </h2> */}
        <p
          className="mt-4 max-w-7xl text-pretty leading-relaxed text-sm md:text-base opacity-0 translate-y-2 is-inview:!opacity-90 is-inview:!translate-y-0 transition-all duration-700 delay-150"
          data-reveal="true"
        >
          I’m a Full Stack Web Application Developer skilled in Next.js, Node.js, with experience in NestJS, Tailwind CSS, AWS, and Linux. I’m passionate about creating clean, scalable, and high-performance web applications that deliver great user experiences.

I’m currently pursuing the Cloud Applied Generative AI course at Governor Sindh House and a BSCS degree at Virtual University. I also hold an Intermediate English certification from Domino English Learning Center.

With a strong interest in modern web technologies and cloud computing, I aim to build innovative digital solutions that blend performance with design.
        </p>
      </header>

      {/* Content grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 text-white">
        {/* Experience */}
        <section
          aria-labelledby="experience-title"
          className="rounded-xl border border-[#077b32] backdrop-blur-sm p-5 md:p-6 opacity-0 translate-y-3 is-inview:!opacity-100 is-inview:!translate-y-0 transition-all duration-700"
          data-reveal="true"
        >
          <h3 id="experience-title" className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <span
              className="inline-block h-5 w-1.5 rounded-full bg-[#077b32] shadow-[0_0_20px_#077b32]"
              aria-hidden="true"
            />
            Experience
          </h3>

          <ol className="mt-4 relative">
  <span
    aria-hidden="true"
    className="pointer-events-none absolute left-[10px] top-0 bottom-0 w-px bg-[color-mix(in_oklab,#077b32_35%,transparent_65%)]"
  />
  {experience.map((item, idx) => (
    <li key={idx} className="relative pl-8 py-4 group">
      <span
        className="absolute left-0 top-5 h-2.5 w-2.5 rounded-full bg-[#077b32] shadow-[0_0_18px_#077b32] ring-2 ring-[color-mix(in_oklab,#077b32_50%,transparent_50%)]"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium">
            {item.title}
            {item.seniority ? ` • ${item.seniority}` : ""}
            {item.org ? ` • ${item.org}` : ""}
          </p>
          <p className="text-xs opacity-70 mt-0.5">{item.period}</p>
        </div>
      </div>
      {item.description && <p className="mt-2 text-sm leading-relaxed opacity-90">{item.description}</p>}
      <div className="mt-3 h-[1px] w-full bg-[color-mix(in_oklab,#077b32_25%,#e5e7eb_75%)] opacity-50 transition-opacity group-hover:opacity-80" />
    </li>
  ))}
</ol>
        </section>

        

        {/* Certifications */}
        <section
          aria-labelledby="certifications-title"
          className="rounded-xl border border-[#077b32] text-white backdrop-blur-sm p-5 md:p-6 opacity-0 translate-y-3 is-inview:!opacity-100 is-inview:!translate-y-0 transition-all duration-700 delay-200 "
          data-reveal="true"
        >
          <h3 id="certifications-title" className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <span
              className="inline-block h-5 w-1.5 rounded-full bg-[#077b32] shadow-[0_0_20px_#077b32]"
              aria-hidden="true"
            />
            Certifications
          </h3>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 gap-4">
            {certifications.map((item, idx) => (
              <article key={idx} className="rounded-lg border p-4 relative overflow-hidden group border-[#077b32]">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  aria-hidden="true"
                  style={{ background: "radial-gradient(600px 100px at 0% 0%, #077b32, transparent)" }}
                />
                <p className="font-medium">{item.title}</p>
                {item.org && <p className="text-sm opacity-80 mt-0.5">{item.org}</p>}
                <p className="text-xs opacity-70 mt-1">{item.period}</p>
                {/* <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-white bg-[#077b32]/90 px-2.5 py-1 rounded-md shadow-[0_0_18px_#077b32]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
                  Verified Achievement
                </div> */}
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          aria-labelledby="education-title text-white"
          className="rounded-xl border backdrop-blur-sm p-5 md:p-6 opacity-0 translate-y-3 is-inview:!opacity-100 is-inview:!translate-y-0 transition-all duration-700 delay-100 border-[#077b32]"
          data-reveal="true"
        >
          <h3 id="education-title" className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <span
              className="inline-block h-5 w-1.5 rounded-full bg-[#077b32] shadow-[0_0_20px_#077b32]"
              aria-hidden="true"
            />
            Education
          </h3>

          <ul className="mt-4 space-y-4">
            {education.map((item, idx) => (
              <li
                key={idx}
                className="rounded-lg border p-4 hover:translate-y-[-2px] transition-all duration-300 border-[#077b32]"
                style={{ boxShadow: '0 0 0 1px color-mix(in oklab, #077b32 18%, transparent 82%)' }}
              >
                <p className="font-medium">{item.title}</p>
                {item.org && <p className="text-sm opacity-80 mt-0.5">{item.org}</p>}
                <p className="text-xs opacity-70 mt-1">{item.period}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      

      <style jsx global>{`
        [data-reveal="true"] {
          opacity: 0;
          transform: translateY(6px);
        }
        [data-reveal="true"].is-inview {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .glow-hover:hover {
          box-shadow:
            0 0 0 1px #077b32,
            0 0 28px -4px color-mix(in oklab, #077b32 80%, transparent 20%);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}