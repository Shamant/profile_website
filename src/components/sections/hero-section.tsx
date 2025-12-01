"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-20 lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          Aspiring Electrical & Computer Engineer
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Shamant Sai
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
          Aspiring Electrical & Computer Engineer | Circular Economy Innovator | AI Researcher
        </p>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          I design systems that close resource loops, prototype hardware that scales sustainably, and
          build AI tools that empower communities. From circular economy analytics to embedded
          sensing, I explore how human-centered technology can unlock resilient infrastructure.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/research"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Explore research
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Connect with me
          </Link>
        </div>
      </div>
      <div className="relative flex w-full flex-1 justify-center lg:justify-end">
        <Image
          src="/images/profile-hero.jpg"
          alt="Shamant Sai in front of a waterfall"
          width={1200}
          height={1600}
          priority
          className="h-72 w-72 rounded-3xl object-cover shadow-xl"
        />
      </div>
    </section>
  );
}

