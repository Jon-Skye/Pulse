-- Update articles with inline images
-- Run this SQL in your Supabase SQL Editor

-- Article 1: inline1 and inline2
UPDATE articles
SET
  inline_image_1 = '/images/inline1.png',
  inline_image_2 = '/images/inline2.png'
WHERE slug = 'finding-balance-mindful-living';

-- Article 2: inline3 and inline4
UPDATE articles
SET
  inline_image_1 = '/images/inline3.png',
  inline_image_2 = '/images/inline4.png'
WHERE slug = 'art-of-slow-mornings';

-- Article 3: inline5 and inline6
UPDATE articles
SET
  inline_image_1 = '/images/inline5.png',
  inline_image_2 = '/images/inline6.png'
WHERE slug = 'nourishing-seasonal-eating';
