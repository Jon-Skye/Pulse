import { unstable_noStore as noStore } from "next/cache";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/articles/ArticleCard";
import { supabase } from "@/lib/supabase";
import { Article } from "@/lib/types";

// Always fetch fresh data from Supabase (no static caching)
export const dynamic = "force-dynamic";

async function getArticles(): Promise<Article[]> {
  noStore();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("published_date", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }

  return data || [];
}

export default async function JournalPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-muted">
          <Container>
            <h1 className="font-serif text-h1 text-center">Journal</h1>
            <p className="text-body-lg text-foreground/60 text-center mt-4 max-w-2xl mx-auto">
              Explore our collection of articles on wellness, mindfulness, and mindful living.
            </p>
          </Container>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <Container>
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-body-lg text-foreground/60">
                  No articles yet. Check back soon.
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
