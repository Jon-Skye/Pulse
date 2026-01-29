import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import CtaSection from "@/components/home/CtaSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto text-center px-6 mb-6">
            <img
              src="/images/about.png"
              alt="About PULSE"
              className="w-full rounded-lg"
            />
          </div>
          <Container className="max-w-article">
            <h4 className="font-sans text-h4 font-light text-foreground mb-0 text-center">
              A wellness magazine dedicated to mindful living and holistic well-being.
            </h4>
            <hr
              className="w-full border-0 border-t border-foreground/10 my-8 md:my-12"
              aria-hidden
            />
            <h2 className="font-serif text-h2 mb-8 text-center">About us</h2>
            <div className="space-y-6 text-body-lg text-foreground/80 text-left">
              <p>
                PULSE was founded with a simple belief: that wellness is not a destination
                but a journey. We exist to inspire and guide readers toward a more balanced,
                mindful way of living.
              </p>
              <p>
                In a world that often moves too fast, we create space for reflection,
                growth, and genuine connection with ourselves and others. Our content
                explores the intersection of mind, body, and spirit, offering practical
                wisdom for everyday life.
              </p>
              <p>
                Through thoughtful storytelling and evidence-based insights, we aim to
                make wellness accessible to everyone—not as a trend, but as a sustainable
                approach to living well.
              </p>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted">
          <Container>
            <h2 className="font-serif text-h2 mb-12 text-center">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Mindfulness */}
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 text-foreground mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-h3 mb-4">Mindfulness</h3>
                <p className="text-body text-foreground/70">
                  Being present in each moment is the foundation of a well-lived life.
                </p>
              </div>
              {/* Balance */}
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 text-foreground mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 3v18" />
                    <path d="M8 21h8" />
                    <path d="M5 12h14" />
                    <path d="M5 12l3-4" />
                    <path d="M19 12l-3-4" />
                    <path d="M5 12l3 4" />
                    <path d="M19 12l-3 4" />
                  </svg>
                </div>
                <h3 className="font-serif text-h3 mb-4">Balance</h3>
                <p className="text-body text-foreground/70">
                  True wellness comes from nurturing all aspects of ourselves.
                </p>
              </div>
              {/* Authenticity */}
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 text-foreground mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-h3 mb-4">Authenticity</h3>
                <p className="text-body text-foreground/70">
                  Honoring our unique paths is essential to genuine well-being.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Team — editorial layout */}
        <section className="py-16 md:py-24">
          <Container>
            <p className="text-caption uppercase tracking-wider text-accent mb-3">
              The people behind PULSE
            </p>
            <h2 className="font-serif text-h2 mb-16 md:mb-20">Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
              {/* Member 1 — full height, editorial lead */}
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                  <img
                    src="/images/team1.png"
                    alt="Maya Morgan, Editor in chief"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 text-caption uppercase tracking-wider text-white drop-shadow-md">
                    Editor
                  </span>
                </div>
                <h3 className="font-serif text-h3 mb-1">
                  <span className="text-foreground">Maya</span>{" "}
                  <span className="text-foreground/80">Morgan</span>
                </h3>
                <p className="text-caption uppercase tracking-wider text-accent mb-3">
                  Editor in chief
                </p>
                <p className="text-body text-foreground/70">
                  Shapes the voice of PULSE and leads our editorial vision. Former features editor with a focus on mindful living.
                </p>
              </article>

              {/* Member 2 — staggered down on desktop */}
              <article className="group md:mt-16">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                  <img
                    src="/images/team2.png"
                    alt="Sofia Reed, Senior writer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 text-caption uppercase tracking-wider text-white drop-shadow-md">
                    Writer
                  </span>
                </div>
                <h3 className="font-serif text-h3 mb-1">
                  <span className="text-foreground">Sofia</span>{" "}
                  <span className="text-foreground/80">Reed</span>
                </h3>
                <p className="text-caption uppercase tracking-wider text-accent mb-3">
                  Senior writer
                </p>
                <p className="text-body text-foreground/70">
                  Brings stories to life through narrative and research. Passionate about the intersection of wellness and culture.
                </p>
              </article>

              {/* Member 3 */}
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                  <img
                    src="/images/team3.png"
                    alt="Lena Chen, Creative director"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 text-caption uppercase tracking-wider text-white drop-shadow-md">
                    Creative
                  </span>
                </div>
                <h3 className="font-serif text-h3 mb-1">
                  <span className="text-foreground">Lena</span>{" "}
                  <span className="text-foreground/80">Chen</span>
                </h3>
                <p className="text-caption uppercase tracking-wider text-accent mb-3">
                  Creative director
                </p>
                <p className="text-body text-foreground/70">
                  Oversees visual identity and art direction. Believes design should feel calm, clear, and human.
                </p>
              </article>
            </div>
          </Container>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
