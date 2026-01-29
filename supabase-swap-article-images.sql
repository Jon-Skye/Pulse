-- Swap cover images between "Honest product curation..." and "Actionable minimalism..."
-- Run in Supabase: SQL Editor → New query → paste → Run

-- Actionable minimalism (finding-balance-mindful-living) → use article2 cover
UPDATE articles
SET image_url = '/images/article2-cover.png'
WHERE slug = 'finding-balance-mindful-living';

-- Honest product curation (art-of-slow-mornings) → use article1 cover
UPDATE articles
SET image_url = '/images/article1-cover.png'
WHERE slug = 'art-of-slow-mornings';
