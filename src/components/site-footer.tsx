import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Shamant Sai. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="mailto:shamantsai@gmail.com" className="hover:text-blue-600">
            shamantsai@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}

