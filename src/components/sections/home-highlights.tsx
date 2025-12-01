"use client";

import Link from "next/link";

const highlights = [
  {
    title: "Research",
    description:
      "Explore circular economy forecasting, NAACL recognition, and applied AI frameworks guiding sustainable infrastructure.",
    href: "/research",
  },
  {
    title: "Projects",
    description:
      "Dive into civic-scale platforms like TrashTrackr and embedded devices that translate research into real-world tools.",
    href: "/projects",
  },
  {
    title: "About",
    description:
      "Get to know my academic background, mentors, and inspirations that shape my engineering perspective.",
    href: "/about",
  },
  {
    title: "Reach out",
    description:
      "Share collaboration opportunities or mentorship requests—messages route straight to my inbox.",
    href: "/#contact",
  },
];

export function HomeHighlights() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24" aria-labelledby="highlights-heading">
      <div className="mb-8 flex flex-col gap-4">
        <h2
          id="highlights-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900"
        >
          Spotlight pathways
        </h2>
        <p className="max-w-2xl text-base text-slate-600">
          Quick links to the work, projects, and background I’m most proud of.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/50"
          >
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
            <Link
              href={item.href}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

