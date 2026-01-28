import Image from "next/image";
import Container from "@/components/ui/Container";

const stats = [
  { value: "87%", label: "Report less decision fatigue" },
  { value: "12", label: "Issues published annually" },
  { value: "50K", label: "Readers across North America" },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <Container>
        <span className="block text-caption uppercase tracking-wider text-foreground/50 text-center">
          Impact
        </span>
        <h2 className="font-serif text-h2 text-center mt-2 text-foreground">
          Where our readers stand
        </h2>
        <p className="text-body-lg text-foreground/70 text-center mt-3">
          Real people making real changes in their lives
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
                  {stat.value}
                </span>
                <p className="text-body text-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-lg overflow-hidden bg-background">
            <Image
              src="/images/Stats-image.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
