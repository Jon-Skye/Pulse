"use client";

import { useState, useMemo } from "react";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface ShopFilterProps {
  products: Product[];
  categories: string[];
}

export default function ShopFilter({ products, categories }: ShopFilterProps) {
  const [sortOrder, setSortOrder] = useState<"default" | "low" | "high">(
    "default"
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (sortOrder === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, sortOrder, activeCategory]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-caption uppercase tracking-wider transition-colors rounded ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "border border-foreground/20 text-foreground/70 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as "default" | "low" | "high")
          }
          className="appearance-none bg-transparent border border-foreground/20 rounded px-4 py-2 text-body-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
        >
          <option value="default">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center py-12 text-body-lg text-foreground/60">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
