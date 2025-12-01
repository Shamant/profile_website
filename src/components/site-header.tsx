"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { NAV_LINKS } from "@/lib/portfolio-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => setMobileOpen((prev) => !prev);
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={pathname === "/" ? "#home" : "/"}
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Shamant Sai
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-blue-500 after:transition-transform hover:text-blue-600 hover:after:scale-x-100 ${
                    isActive ? "text-blue-600 after:scale-x-100" : "text-slate-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:hidden"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="overflow-hidden border-t border-slate-200/70 transition-all duration-300 ease-in-out md:hidden"
        style={{
          maxHeight: mobileOpen ? "320px" : "0px",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="space-y-2 px-6 py-4">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-600 ${
                  isActive ? "bg-blue-50 text-blue-600" : "text-slate-600"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

