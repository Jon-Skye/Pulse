import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { supabase } from "@/lib/supabase";
import { Article } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        {article.image_url && (
          <div className="relative w-full h-[50vh] md:h-[60vh] bg-muted">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <article className="py-16 md:py-24">
          <Container className="max-w-article">
            {/* Category */}
            {article.category && (
              <span className="text-caption uppercase tracking-wider text-accent">
                {article.category}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-h1 mt-4">{article.title}</h1>

            {/* Meta */}
            <div className="flex items-center gap-4 mt-6 pb-8 border-b border-foreground/10">
              {article.author && (
                <span className="text-body text-foreground/60">
                  By {article.author}
                </span>
              )}
              {article.published_date && (
                <>
                  <span className="text-foreground/30">|</span>
                  <span className="text-body text-foreground/60">
                    {new Date(article.published_date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </>
              )}
            </div>

            {/* Content */}
            {article.content && (
              <div
                className="prose mt-12"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}
          </Container>
        </article>
      </main>

      <Footer />
    </div>
  );
}
