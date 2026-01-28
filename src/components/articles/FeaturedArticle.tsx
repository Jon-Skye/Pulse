import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/types";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="group">
      <Link href={`/journal/${article.slug}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden bg-muted">
            {article.image_url ? (
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="w-full h-full bg-muted" />
            )}
          </div>

          {/* Content */}
          <div className="lg:py-8">
            {/* Category */}
            {article.category && (
              <span className="text-caption uppercase tracking-wider text-accent">
                {article.category}
              </span>
            )}

            {/* Title */}
            <h2 className="font-serif text-h2 mt-3 group-hover:text-accent transition-colors">
              {article.title}
            </h2>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-body-lg text-foreground/70 mt-4">
                {article.excerpt}
              </p>
            )}

            {/* Meta */}
            <div className="flex items-center gap-4 mt-6">
              {article.author && (
                <span className="text-body-sm text-foreground/50">
                  By {article.author}
                </span>
              )}
              {article.published_date && (
                <>
                  <span className="text-foreground/30">|</span>
                  <span className="text-body-sm text-foreground/50">
                    {new Date(article.published_date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </>
              )}
            </div>

            {/* Read More */}
            <span className="inline-block mt-6 text-caption uppercase tracking-wider text-accent group-hover:text-accent-dark transition-colors">
              Read Article &rarr;
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
