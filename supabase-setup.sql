-- PULSE Magazine Database Setup
-- Run this SQL in your Supabase SQL Editor

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  author TEXT,
  category TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  published_date DATE DEFAULT CURRENT_DATE
);

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);

-- Insert sample articles
INSERT INTO articles (title, slug, excerpt, content, author, category, image_url, featured, published_date)
VALUES
  (
    'Finding Balance: A Guide to Mindful Living',
    'finding-balance-mindful-living',
    'Discover practical strategies for incorporating mindfulness into your daily routine and creating a more balanced life.',
    '<p>In our fast-paced world, finding moments of stillness can feel like a luxury. Yet, the practice of mindfulness—the art of being fully present in each moment—is more accessible than you might think.</p><p>Mindful living doesn''t require hours of meditation or a complete lifestyle overhaul. It begins with small, intentional choices: savoring your morning coffee without distractions, taking three deep breaths before responding to a stressful email, or simply noticing the sensation of your feet on the ground as you walk.</p><p>The key is consistency over intensity. A few minutes of mindful attention each day can gradually rewire your brain, reducing stress and increasing your capacity for joy.</p><h2>Starting Your Practice</h2><p>Begin with what you already do. Choose one routine activity—brushing your teeth, eating breakfast, or your commute—and commit to being fully present during that time. Notice the sensations, sounds, and thoughts that arise without judgment.</p><p>As this becomes natural, expand your practice to other moments throughout your day. Over time, you''ll find that mindfulness isn''t something you do; it becomes how you live.</p>',
    'Emma Thompson',
    'Wellness',
    '/images/article-1.jpg',
    true,
    CURRENT_DATE - INTERVAL '2 days'
  ),
  (
    'The Art of Slow Mornings',
    'art-of-slow-mornings',
    'How reclaiming your mornings can transform your entire day and overall well-being.',
    '<p>The alarm blares. You reach for your phone, scroll through notifications, and suddenly you''re already behind before your feet hit the floor. Sound familiar?</p><p>The morning sets the tone for everything that follows. When we rush through these precious first hours, we carry that frantic energy throughout our day.</p><h2>A Different Approach</h2><p>Slow mornings aren''t about having more time—they''re about being more intentional with the time you have. Start by waking 15 minutes earlier and resisting the urge to check your phone immediately.</p><p>Use this time for yourself: stretch, journal, or simply sit with your thoughts. Prepare a nourishing breakfast and eat it without multitasking. These small rituals create a foundation of calm that supports you through whatever the day brings.</p>',
    'James Chen',
    'Mindfulness',
    '/images/article-2.jpg',
    false,
    CURRENT_DATE - INTERVAL '5 days'
  ),
  (
    'Nourishing from Within: Seasonal Eating',
    'nourishing-seasonal-eating',
    'Embracing seasonal ingredients for better health, sustainability, and deeper connection to nature.',
    '<p>There''s a reason strawberries taste better in summer and root vegetables satisfy in winter. Our bodies are designed to thrive on foods that nature provides each season.</p><p>Seasonal eating isn''t a trend—it''s a return to how humans have nourished themselves for millennia. When we eat with the seasons, we benefit from produce at its peak nutrition and flavor, while also supporting local farmers and reducing our environmental footprint.</p><h2>Getting Started</h2><p>Visit your local farmers'' market and let the available produce guide your meals. In spring, embrace leafy greens and tender asparagus. Summer brings juicy tomatoes and sweet berries. Fall offers squash and apples, while winter is perfect for hearty root vegetables and citrus.</p><p>As you become more attuned to seasonal rhythms, you''ll notice a deeper connection to the natural world—and your meals will never taste better.</p>',
    'Sofia Rodriguez',
    'Nutrition',
    '/images/article-3.jpg',
    false,
    CURRENT_DATE - INTERVAL '7 days'
  );

-- Enable Row Level Security (optional but recommended)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access
CREATE POLICY "Allow public read access" ON articles
  FOR SELECT USING (true);
