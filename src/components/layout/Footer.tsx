import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const avatarSources = [
  "/images/User0.png",
  "/images/User1.png",
  "/images/User2.png",
  "/images/User3.png",
  "/images/User4.png",
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
];

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-foreground/10">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Brand + tagline */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Stay grounded with Pulse
            </h2>
            <p className="mt-3 text-body text-foreground/70 max-w-sm">
              Get practical frameworks for living intentionally in a complicated
              world
            </p>
          </div>

          {/* Nav columns */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-1">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    About Pulse
                  </Link>
                </li>
                <li>
                  <Link
                    href="/journal"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Journal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@pulse.example"
                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* PULSE + avatars */}
        <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            PULSE
          </span>
          <div className="flex gap-3">
            {avatarSources.map((src, i) => (
              <div
                key={i}
                className="relative w-12 h-12 rounded-full overflow-hidden bg-foreground/10 flex-shrink-0"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright + social */}
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-body-sm text-foreground/50">
            &copy; {new Date().getFullYear()} Pulse Magazine. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label={s.name}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
