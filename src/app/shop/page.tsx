import { unstable_noStore as noStore } from "next/cache";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ShopFilter from "@/components/shop/ShopFilter";
import { supabase } from "@/lib/supabase";
import { Product } from "@/lib/types";

export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  noStore();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data || [];
}

export default async function ShopPage() {
  const products = await getProducts();

  const categories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  ) as string[];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-muted">
          <Container>
            <h1 className="font-serif text-h1 text-center">Shop</h1>
            <p className="text-body-lg text-foreground/60 text-center mt-4 max-w-[800px] mx-auto">
              Thoughtfully curated essentials for mindful living.
            </p>
          </Container>
        </section>

        {/* Products */}
        <section className="py-16 md:py-24">
          <Container>
            <ShopFilter products={products} categories={categories} />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
