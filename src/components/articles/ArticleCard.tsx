import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group">
      <Link href={`/journal/${article.slug}`}>
        {/* Image */}
        <div className="relative w-full h-[500px] overflow-hidden bg-muted mb-4">
          {article.image_url ? (
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </div>

        {/* Content */}
        <div>
          {/* Category */}
          {article.category && (
            <span className="text-caption uppercase tracking-wider text-accent">
              {article.category}
            </span>
          )}

          {/* Title */}
          <h3 className="font-serif text-h3 mt-2 group-hover:text-accent transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-body text-foreground/70 mt-3 line-clamp-2">
              {article.excerpt}
            </p>
          )}

          {/* Author */}
          {article.author && (
            <p className="text-body-sm text-foreground/50 mt-4">
              By {article.author}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
