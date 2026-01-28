import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-muted">
          <Container>
            <h1 className="font-serif text-h1 text-center">About PULSE</h1>
            <p className="text-body-lg text-foreground/60 text-center mt-4 max-w-2xl mx-auto">
              A wellness magazine dedicated to mindful living and holistic well-being.
            </p>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <Container className="max-w-article">
            <h2 className="font-serif text-h2 mb-8">Our Mission</h2>
            <div className="space-y-6 text-body-lg text-foreground/80">
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
              <div className="text-center">
                <h3 className="font-serif text-h3 mb-4">Mindfulness</h3>
                <p className="text-body text-foreground/70">
                  Being present in each moment is the foundation of a well-lived life.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-h3 mb-4">Balance</h3>
                <p className="text-body text-foreground/70">
                  True wellness comes from nurturing all aspects of ourselves.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-h3 mb-4">Authenticity</h3>
                <p className="text-body text-foreground/70">
                  Honoring our unique paths is essential to genuine well-being.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
