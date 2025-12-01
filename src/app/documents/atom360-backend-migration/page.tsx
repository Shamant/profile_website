import Link from "next/link";

const PDF_PATH = "/documents/atom360-backend-migration.pdf";

export default function Atom360MigrationSummary() {
  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col gap-8 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Backend Lead Intern — Atom360
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Migration Runbook & Technical Summary
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          This document outlines the systems design, staging rollout, and deployment safeguards
          behind the Atom360 backend migration supporting roughly 5,000 active users.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://atom360.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Visit Atom360
          </a>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Download PDF
          </a>
        </div>
      </header>
      <section className="flex flex-1 flex-col gap-6">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          <object
            data={PDF_PATH}
            type="application/pdf"
            className="h-full w-full"
            aria-label="Atom360 backend migration PDF"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-8 text-center text-sm text-slate-600">
              <p>
                Upload your migration summary PDF to{" "}
                <code className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs">
                  public/documents/atom360-backend-migration.pdf
                </code>{" "}
                to display it here.
              </p>
              <p>
                You can also{" "}
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-600 underline"
                >
                  open the PDF directly
                </a>{" "}
                once it&apos;s available.
              </p>
            </div>
          </object>
        </div>
        <Link
          href="/projects#atom360-backend-migration"
          className="self-start text-sm font-semibold text-blue-600 underline underline-offset-4"
        >
          Back to Projects
        </Link>
      </section>
    </div>
  );
}

