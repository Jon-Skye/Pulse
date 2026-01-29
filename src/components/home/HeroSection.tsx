import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-16">
      <Container className="text-center">
        <h1 className="font-serif text-h1 md:text-[2.75rem] lg:text-[3rem] text-foreground max-w-2xl mx-auto">
          Simplify your life with intention
        </h1>
        <p className="text-body-lg text-foreground/70 mt-4 max-w-xl mx-auto">
          Practical frameworks for minimalism that fit real life
        </p>
        <Link
          href="/journal"
          className="inline-block mt-8 px-[60px] py-5 text-caption uppercase tracking-wider bg-accent text-white hover:bg-accent-dark transition-colors rounded-none"
        >
          Journal
        </Link>
        <div className="mt-12 md:mt-16 relative w-full max-w-[1232px] mx-auto aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-lg bg-muted">
          <Image
            src="/images/Hero-image.png"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </Container>
    </section>
  );
}
