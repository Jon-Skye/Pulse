import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import FeaturedArticle from "@/components/articles/FeaturedArticle";
import ArticleGrid from "@/components/articles/ArticleGrid";
import { supabase } from "@/lib/supabase";
import { Article } from "@/lib/types";

async function getArticles(): Promise<Article[]> {
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

export default async function Home() {
  const articles = await getArticles();
  const featuredArticle = articles.find((article) => article.featured);
  const otherArticles = articles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Featured Article Section */}
        {featuredArticle && (
          <section className="py-16 md:py-24">
            <Container>
              <FeaturedArticle article={featuredArticle} />
            </Container>
          </section>
        )}

        {/* Latest Articles Section */}
        {otherArticles.length > 0 && (
          <section className="py-16 md:py-24 bg-muted">
            <Container>
              <h2 className="font-serif text-h2 mb-12">Latest Articles</h2>
              <ArticleGrid articles={otherArticles} />
            </Container>
          </section>
        )}

        {/* Empty State */}
        {articles.length === 0 && (
          <section className="py-24">
            <Container>
              <div className="text-center">
                <h2 className="font-serif text-h2 mb-4">Welcome to PULSE</h2>
                <p className="text-body-lg text-foreground/60">
                  Articles coming soon. Check back later.
                </p>
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
