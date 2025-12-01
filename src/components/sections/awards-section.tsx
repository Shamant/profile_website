"use client";

import { AWARD_MILESTONES } from "@/lib/portfolio-data";

export function AwardsSection() {
  return (
    <section
      id="awards"
      className="mx-auto w-full max-w-6xl px-6 pb-24"
      aria-labelledby="awards-heading"
    >
      <div className="mb-8 flex flex-col gap-4">
        <h2
          id="awards-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900"
        >
          Leadership & recognition
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Milestones that shaped my collaborative, interdisciplinary approach to engineering and
          research.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-2 hidden h-full w-px bg-slate-200 md:block" />
        <div className="space-y-8">
          {AWARD_MILESTONES.map((entry) => (
            <div
              key={`${entry.title}-${entry.timeframe}`}
              className="relative rounded-3xl border border-slate-200 bg-white/90 px-6 py-6 shadow-md shadow-slate-200/50 md:ml-12 md:pl-16"
            >
              <div className="absolute left-4 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-200 bg-blue-600 md:block" />
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  {entry.timeframe}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {entry.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {entry.description}
                </p>
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Read the match report
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

