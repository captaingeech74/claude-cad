"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/test", label: "Take the Test" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary-dark transition-colors">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">
              Flying <span className="text-primary">Colors</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/test"
              className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Start Screening
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-primary/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/test"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-2 px-5 py-3 rounded-lg text-sm font-semibold bg-primary text-white text-center hover:bg-primary-dark transition-colors"
            >
              Start Screening
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
