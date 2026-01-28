import Image from "next/image";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "Pulse finally gave me permission to stop chasing the perfect aesthetic.",
    name: "Sarah Chen",
    role: "Marketing manager, Seattle",
    image: "/images/Testimonial1.png",
  },
  {
    quote:
      "I've read every minimalism book. This is the only one I love",
    name: "Marcus Webb",
    role: "Software engineer, Toronto",
    image: "/images/Testimonial2.png",
  },
  {
    quote: "The product recommendations actually have price points.",
    name: "Elena Rodriguez",
    role: "Designer, Los Angeles",
    image: "/images/Testimonial3.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="font-serif text-h2 text-center text-foreground">
          What readers say
        </h2>
        <p className="text-body-lg text-foreground/70 text-center mt-3">
          The difference between inspiration and actual change
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="text-center flex flex-col items-center"
            >
              <p className="font-serif text-body-lg text-foreground max-w-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 relative w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <cite className="mt-3 not-italic font-sans font-medium text-foreground">
                {t.name}
              </cite>
              <p className="text-body-sm text-foreground/60">{t.role}</p>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
