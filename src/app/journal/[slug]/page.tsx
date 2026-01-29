import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/articles/ArticleCard";
import { supabase } from "@/lib/supabase";
import { Article } from "@/lib/types";

// Always fetch fresh data from Supabase (no static caching)
export const dynamic = "force-dynamic";

// Helper to render content with inline images inserted at breakpoints
function renderContentWithImages(
  content: string,
  inlineImage1: string | null,
  inlineImage2: string | null
) {
  // Split content by closing paragraph or heading tags
  const parts = content.split(/(<\/p>|<\/h2>|<\/h3>)/gi);

  // Reassemble parts (each split removes the delimiter, so we pair them back)
  const sections: string[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    const text = parts[i] || "";
    const tag = parts[i + 1] || "";
    if (text || tag) {
      sections.push(text + tag);
    }
  }

  // Calculate insertion points (after ~1/3 and ~2/3 of sections)
  const insertPoint1 = Math.floor(sections.length / 3);
  const insertPoint2 = Math.floor((sections.length * 2) / 3);

  // Build final content with images
  const result: string[] = [];
  sections.forEach((section, index) => {
    result.push(section);

    if (index === insertPoint1 && inlineImage1) {
      result.push(`<figure class="article-inline-figure my-10" style="border-radius:0 !important;overflow:visible !important"><img src="${inlineImage1}" alt="" class="w-full" style="border-radius:0 !important;-webkit-border-radius:0 !important;image-rendering:crisp-edges" /></figure>`);
    }
    if (index === insertPoint2 && inlineImage2) {
      result.push(`<figure class="article-inline-figure my-10" style="border-radius:0 !important;overflow:visible !important"><img src="${inlineImage2}" alt="" class="w-full" style="border-radius:0 !important;-webkit-border-radius:0 !important;image-rendering:crisp-edges" /></figure>`);
    }
  });

  return result.join("");
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string): Promise<Article | null> {
  noStore();
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

async function getRecommendedArticles(excludeSlug: string): Promise<Article[]> {
  noStore();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("published_date", { ascending: false });

  if (error) {
    console.error("Error fetching recommended articles:", error);
    return [];
  }

  const others = (data || []).filter((a) => a.slug !== excludeSlug);
  return others.slice(0, 2);
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const [article, recommended] = await Promise.all([
    getArticle(slug),
    getRecommendedArticles(slug),
  ]);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image — constrained to article width, not full viewport */}
        {article.image_url && (
          <section className="py-8 md:py-12 bg-muted">
            <Container className="max-w-article">
              <div className="relative w-full h-[500px] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={article.image_url}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </div>
            </Container>
          </section>
        )}

        {/* Article Content — 750px column centered in viewport, header centered, body left-aligned */}
        <article className="py-16 md:py-24">
          <Container>
            <div className="max-w-[750px] mx-auto text-center">
            {/* Category */}
            {article.category && (
              <span className="text-caption uppercase tracking-wider text-accent">
                {article.category}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-h1 mt-4">{article.title}</h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-4 mt-6 pb-8 border-b border-foreground/10">
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

            {/* Content with inline images — text 750px, inline figures 1200px max, body left-aligned */}
            {article.content && (
              <div
                className="prose mt-12 max-w-[750px] text-left leading-[30px]"
                dangerouslySetInnerHTML={{
                  __html: renderContentWithImages(
                    article.content,
                    article.inline_image_1,
                    article.inline_image_2
                  ),
                }}
              />
            )}
            </div>
          </Container>
        </article>

        {/* Recommended reading */}
        {recommended.length > 0 && (
          <section className="py-16 md:py-24 bg-muted">
            <Container>
              <h2 className="font-serif text-h2 mb-12">Recommended reading</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {recommended.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
