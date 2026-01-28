export interface Article {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  author: string | null;
  category: string | null;
  image_url: string | null;
  featured: boolean;
  published_date: string;
  inline_image_1: string | null;
  inline_image_2: string | null;
}
