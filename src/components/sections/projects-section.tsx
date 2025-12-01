"use client";

import Image from "next/image";
import Link from "next/link";

import { PROJECT_CARDS } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl px-6 pb-24"
      aria-labelledby="projects-heading"
    >
      <div className="mb-8 flex flex-col gap-4">
        <h2
          id="projects-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900"
        >
          Projects
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          A mix of startups, research products, and engineering experiments I’ve built or led.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {PROJECT_CARDS.map((project) => (
          <article
            id={project.id}
            key={project.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 w-full bg-slate-100">
              {project.imageSrc ? (
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={project.imageWidth ?? 1280}
                  height={project.imageHeight ?? 720}
                  className={`h-full w-full object-cover ${
                    project.imageAlt.toLowerCase().includes("logo") ? "object-contain p-6" : ""
                  }`}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-medium text-slate-500">
                  {project.imageAlt}
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-5 p-6">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap items-center gap-3">
                  {project.href ? (
                    <a
                      href={project.href}
                      className="inline-flex items-center justify-center rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {project.ctaLabel ?? "View project"}
                    </a>
                  ) : null}
                  {project.documentUrl ? (
                    <Link
                      href={project.documentUrl}
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    >
                      {project.documentLabel ?? "View documentation"}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

