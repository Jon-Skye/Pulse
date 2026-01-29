"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-foreground/10">
      <div className="max-w-content mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
            PULSE
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/journal"
                className="text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-6 pb-4 space-y-4">
            <li>
              <Link
                href="/"
                className="block text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/journal"
                className="block text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-body-sm uppercase tracking-wider hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
