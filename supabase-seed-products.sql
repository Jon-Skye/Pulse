-- PULSE Magazine: Create products table and seed with sample data
-- Run this in your Supabase project: SQL Editor → New query → paste → Run

CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  description TEXT,
  category TEXT,
  rating FLOAT DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON products
  FOR SELECT USING (true);

-- Seed sample products
INSERT INTO products (name, price, image_url, description, category, rating) VALUES
  ('Ceramic Pour-Over Set', 64.00, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', 'Hand-thrown ceramic dripper and carafe for a meditative morning ritual.', 'Home', 4.8),
  ('Linen Meditation Cushion', 89.00, 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80', 'Organic linen zafu filled with buckwheat hulls. Naturally dyed.', 'Wellness', 4.6),
  ('Soy & Cedarwood Candle', 38.00, 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80', 'Hand-poured 8 oz soy candle with notes of cedarwood and vanilla.', 'Home', 4.9),
  ('Minimalist Desk Journal', 28.00, 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80', 'Thread-bound journal with 180gsm cotton paper. 192 pages.', 'Lifestyle', 4.7),
  ('Wool Throw Blanket', 120.00, 'https://images.unsplash.com/photo-1580301762395-21ce6d555b43?w=800&q=80', 'Ethically sourced merino wool throw in oatmeal. 130x180 cm.', 'Home', 4.5),
  ('Essential Oil Diffuser', 52.00, 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80', 'Handcrafted ceramic ultrasonic diffuser with warm ambient light.', 'Wellness', 4.4);
