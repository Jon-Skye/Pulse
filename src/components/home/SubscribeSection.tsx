import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function SubscribeSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <Container className="text-center">
        <h2 className="font-serif text-h2 text-foreground">
          Join us in the Journal
        </h2>
        <p className="text-body-lg text-foreground/70 mt-3 max-w-xl mx-auto">
          Get practical frameworks delivered to your inbox every two weeks
        </p>
        <Link
          href="/journal"
          className="inline-block mt-8 px-[60px] py-5 text-caption uppercase tracking-wider bg-accent text-white hover:bg-accent-dark transition-colors rounded-none"
        >
          Subscribe
        </Link>
        <div className="mt-12 relative w-full max-w-4xl mx-auto aspect-[16/10] overflow-hidden rounded-lg bg-background">
          <Image
            src="/images/Subscribe-image.png"
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
