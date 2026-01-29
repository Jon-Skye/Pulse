-- Use article cover images for Journal page and article detail pages
-- Homepage (Approach section) keeps its current images (Article1.png, article2-cover.png, Article3.png)
-- Run in Supabase: SQL Editor → New query → paste → Run

-- Article 1: Actionable minimalism (slug: finding-balance-mindful-living)
UPDATE articles
SET image_url = '/images/article1-cover.png'
WHERE slug = 'finding-balance-mindful-living';

-- Article 2: Honest product curation (slug: art-of-slow-mornings)
UPDATE articles
SET image_url = '/images/article2-cover.png'
WHERE slug = 'art-of-slow-mornings';

-- Article 3: Small-space solutions (slug: nourishing-seasonal-eating)
UPDATE articles
SET image_url = '/images/article3-cover.png'
WHERE slug = 'nourishing-seasonal-eating';
