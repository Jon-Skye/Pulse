import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
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
      result.push(`<figure class="my-10"><img src="${inlineImage1}" alt="" class="w-full rounded-lg" /></figure>`);
    }
    if (index === insertPoint2 && inlineImage2) {
      result.push(`<figure class="my-10"><img src="${inlineImage2}" alt="" class="w-full rounded-lg" /></figure>`);
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
        {/* Hero Image — constrained to article width, not full viewport */}
        {article.image_url && (
          <section className="py-8 md:py-12 bg-muted">
            <Container className="max-w-article">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-muted">
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

            {/* Content with inline images */}
            {article.content && (
              <div
                className="prose mt-12"
                dangerouslySetInnerHTML={{
                  __html: renderContentWithImages(
                    article.content,
                    article.inline_image_1,
                    article.inline_image_2
                  ),
                }}
              />
            )}
          </Container>
        </article>
      </main>

      <Footer />
    </div>
  );
}
