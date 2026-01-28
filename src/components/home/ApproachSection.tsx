import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { supabase } from "@/lib/supabase";
import { Article } from "@/lib/types";

// Custom images for each card position
const cardImages = [
  "/images/Article1.png",
  "/images/Article2.png",
  "/images/Article3.png",
];

async function getArticles(): Promise<Article[]> {
  noStore();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("published_date", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }

  return data || [];
}

export default async function ApproachSection() {
  const articles = await getArticles();
  return (
    <section className="py-16 md:py-24 bg-muted">
      <Container>
        <span className="text-caption uppercase tracking-wider text-foreground/50">
          Approach
        </span>
        <h2 className="font-serif text-h2 mt-2 text-foreground">
          3 ways we cut through the noise
        </h2>
        <p className="text-body-lg text-foreground/70 mt-3 max-w-2xl">
          We believe minimalism works best when it&apos;s practical, not
          performative.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/journal/${article.slug}`}
              className="block group"
            >
              <article className="bg-background rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[654px] bg-muted overflow-hidden">
                  <Image
                    src={cardImages[index] || article.image_url || "/images/placeholder.jpg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-6 pt-6 pb-[60px]">
                  <h3 className="font-serif text-h3 text-foreground group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body text-foreground/70 mt-2">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/journal"
            className="inline-block px-[60px] py-5 text-caption uppercase tracking-wider bg-accent text-white hover:bg-accent-dark transition-colors rounded-none min-w-[220px] text-center"
          >
            Journal
          </Link>
        </div>
      </Container>
    </section>
  );
}
