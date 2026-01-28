import Image from "next/image";
import Container from "@/components/ui/Container";

export default function VisualStoriesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="font-serif text-h2 text-center text-foreground">
          Visual stories
        </h2>
        <p className="text-body-lg text-foreground/70 text-center mt-3 max-w-xl mx-auto">
          Each issue captures the spaces and choices that matter
        </p>

        {/* Masonry Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Image 1 - Small landscape */}
            <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/3]">
              <Image
                src="/images/VisualStories1.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Image 4 - Tall portrait */}
            <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/4]">
              <Image
                src="/images/VisualStories4.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Image 2 - Small landscape */}
            <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/3]">
              <Image
                src="/images/VisualStories2.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Image 5 - Small landscape */}
            <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/3]">
              <Image
                src="/images/VisualStories5.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Image 6 - Tall portrait */}
            <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/4] h-[650px]">
              <Image
                src="/images/VisualStories6.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Image 3 - Tall portrait, capped at 760px on desktop */}
            <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/5] md:aspect-auto md:h-[760px]">
              <Image
                src="/images/VisualStories3.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
