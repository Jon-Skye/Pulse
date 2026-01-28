import Image from "next/image";
import Container from "@/components/ui/Container";

const images: { src: string; alt: string; className: string }[] = [
  { src: "/images/VisualStories1.png", alt: "", className: "aspect-[4/3] md:col-start-1 md:row-start-1" },
  { src: "/images/VisualStories2.png", alt: "", className: "aspect-[4/3] md:col-start-2 md:row-start-1" },
  { src: "/images/VisualStories3.png", alt: "", className: "aspect-[3/4] md:col-start-3 md:row-start-1 md:row-span-2" },
  { src: "/images/VisualStories4.png", alt: "", className: "aspect-[3/4] md:col-start-1 md:row-start-2" },
  { src: "/images/VisualStories5.png", alt: "", className: "aspect-[4/3] md:col-start-2 md:row-start-2" },
  { src: "/images/VisualStories6.png", alt: "", className: "aspect-[3/4] md:col-start-2 md:row-start-3" },
];

export default function VisualStoriesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="font-serif text-h2 text-center text-foreground">
          Visual stories.
        </h2>
        <p className="text-body-lg text-foreground/70 text-center mt-3 max-w-xl mx-auto">
          Each issue captures the spaces and choices that matter.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg bg-muted min-h-[240px] ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
