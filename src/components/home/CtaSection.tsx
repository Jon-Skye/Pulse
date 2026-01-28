"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";

export default function CtaSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-serif text-h2 text-foreground">
          Get practical advice every two weeks
        </h2>
        <p className="text-body-lg text-foreground/70 mt-3 max-w-xl mx-auto">
          Subscribe to the Journal for product tests and honest reflections on
          living well
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 px-4 py-3 rounded border border-foreground/20 bg-background text-foreground placeholder:text-foreground/40 text-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-[60px] py-5 text-caption uppercase tracking-wider bg-accent text-white hover:bg-accent-dark transition-colors rounded-none flex-shrink-0"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-body-sm text-foreground/50">
          By subscribing you agree to our privacy policy and terms of service.
        </p>
        <div className="mt-12 relative w-full max-w-4xl mx-auto aspect-[16/10] overflow-hidden rounded-lg bg-muted">
          <Image
            src="/images/CTA-image.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </Container>
    </section>
  );
}
