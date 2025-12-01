"use client";

import { FormEvent, useState } from "react";

import { SOCIAL_LINKS } from "@/lib/portfolio-data";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setErrorMessage("Please complete every field before sending.");
      setStatus("error");
      return;
    }

    setStatus("pending");
    setErrorMessage(null);

    // Simulate a successful send without calling a backend.
    await new Promise((resolve) => setTimeout(resolve, 400));
    form.reset();
    setStatus("success");
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-6 pb-24"
      aria-labelledby="contact-heading"
    >
      <div className="mb-8 flex flex-col gap-4">
        <h2
          id="contact-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900"
        >
          Let&apos;s connect
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Reach out to collaborate on research, discuss circular economy initiatives, or explore
          engineering opportunities.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <form
          className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-200/40"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            Message
            <textarea
              rows={5}
              name="message"
              placeholder="Share a bit about what you’d like to discuss..."
              className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              required
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Sending..." : "Send message"}
          </button>
          <div className="text-xs text-slate-500" aria-live="polite">
            {status === "success" ? (
              <span className="font-semibold text-blue-600">Sent message.</span>
            ) : null}
            {status === "error" ? (
              <span className="font-semibold text-red-600">
                {errorMessage ??
                  "We couldn't send your message right now. Please try again soon."}
              </span>
            ) : null}
          </div>
        </form>
        <div className="space-y-6 rounded-3xl border border-blue-100 bg-blue-50/80 p-8 shadow-inner shadow-blue-200/40">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Stay connected
          </p>
          <ul className="space-y-3 text-sm text-blue-700">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 transition hover:bg-white"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="text-sm font-semibold">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

