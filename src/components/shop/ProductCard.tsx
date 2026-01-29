import Image from "next/image";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-4">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>

      {/* Content */}
      <div>
        {product.category && (
          <span className="text-caption uppercase tracking-wider text-accent">
            {product.category}
          </span>
        )}

        <h3 className="font-serif text-h4 mt-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-body-sm text-foreground/70 mt-2 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          <span className="text-body font-medium">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-body-sm text-foreground/50">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </span>
        </div>
      </div>
    </div>
  );
}
