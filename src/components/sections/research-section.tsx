"use client";

import Link from "next/link";

import { RESEARCH_FEATURES } from "@/lib/portfolio-data";

export function ResearchSection() {
  return (
    <section
      id="research"
      className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10"
      aria-labelledby="research-heading"
    >
      <div className="mb-8 flex flex-col gap-4">
        <h2
          id="research-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900"
        >
          Research
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Papers and workshops that explore theory of mind benchmarks, applied AI, and technical
          writing I’ve contributed to.
        </p>
      </div>
      <div className="grid gap-8">
        {RESEARCH_FEATURES.map((paper) => (
          <article
            key={paper.title}
            className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-blue-200/20 backdrop-blur"
          >
            <div className="flex flex-wrap items-center gap-3 pb-4">
              {paper.badges.map((badge) => (
                <Link
                  key={badge.label}
                  href={badge.url}
                  className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  {badge.label}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                {paper.title}
              </h3>
              <p className="text-base leading-7 text-slate-600">
                {paper.abstract}
              </p>
              <div>
                <span className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Co-authors
                </span>
                <ul className="mt-2 flex flex-wrap gap-2 text-sm text-slate-600">
                  {paper.authors.map((author) => (
                    <li
                      key={author}
                      className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {author}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

