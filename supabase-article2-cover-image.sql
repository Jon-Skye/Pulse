-- Use article2-Cover.png for "Honest product curation with real prices"
-- Run in Supabase: SQL Editor → New query → paste → Run

UPDATE articles
SET image_url = '/images/article2-cover.png'
WHERE slug = 'art-of-slow-mornings';
