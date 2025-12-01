"use client";

import { EDUCATION_HIGHLIGHTS } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-6 pb-24"
      aria-labelledby="about-heading"
    >
      <div className="mb-8 flex flex-col gap-4">
        <h2
          id="about-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900"
        >
          About me
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Academic foundations grounded in rigorous inquiry, with a focus on blending theory and
          hands-on prototyping to address real-world challenges.
        </p>
      </div>
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-200/50 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-base leading-7 text-slate-600">
            {EDUCATION_HIGHLIGHTS.bio}
          </p>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Education</h3>
            <ul className="space-y-4">
              {EDUCATION_HIGHLIGHTS.academics.map((entry) => (
                <li
                  key={entry.program}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <h4 className="text-base font-semibold text-slate-900">
                    {entry.program}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {entry.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6" />
      </div>
    </section>
  );
}

