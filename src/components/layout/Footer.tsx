import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-muted">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl font-semibold">
              PULSE
            </Link>
            <p className="mt-2 text-body-sm text-foreground/60">
              A wellness magazine for mindful living.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/"
                  className="text-body-sm uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-body-sm uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-body-sm uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <p className="text-body-sm text-foreground/40 text-center">
            &copy; {new Date().getFullYear()} PULSE Magazine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
