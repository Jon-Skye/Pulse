-- PULSE Magazine: Update articles with correct titles, excerpts, images, and content
-- Run this in your Supabase project: SQL Editor → New query → paste → Run

-- Article 1: Actionable minimalism for real constraints (slug: finding-balance-mindful-living)
UPDATE articles
SET
  title = 'Actionable minimalism for real constraints',
  excerpt = 'Clear next steps that fit a 50-hour work week and a 650 square foot apartment.',
  image_url = '/images/Article1.png',
  content = '<p>Minimalism often gets sold as a look—clean countertops, white walls, a single plant. But for most of us, the real question isn’t “What would this look like in a magazine?” It’s “What can I actually do with 50 hours of work, a 650 sq ft apartment, and no budget for a reno?”</p><h2>Start with one room</h2><p>Pick the space that frustrates you most. Define one clear outcome (e.g. “I can find my keys in under 30 seconds” or “Getting dressed doesn’t require a dig”). Work backward from that. Add or remove only what supports it.</p><h2>Use constraints as the brief</h2><p>Your constraints—time, square footage, lease rules—aren’t things to hide. They’re the brief. “Honest product curation” means we test for how things hold up and we list real prices, so you can decide without guessing.</p><p>Small, repeatable steps beat big aesthetic swings. That’s actionable minimalism.</p>',
  author = 'Pulse Editors',
  category = 'Approach'
WHERE slug = 'finding-balance-mindful-living';

-- Article 2: Honest product curation with real prices (slug: art-of-slow-mornings)
UPDATE articles
SET
  title = 'Honest product curation with real prices',
  excerpt = 'We test for longevity and list the cost. No hidden aspirations or architectural tourism.',
  image_url = '/images/Article2.png',
  content = '<p>So much “curation” is really aspiration—things that look good in a photo and assume you have a different life, a different budget, or a different building. We focus on what we’d actually buy and use, and we tell you what it costs.</p><h2>How we choose what to feature</h2><p>We test for longevity and real-world use: Will it survive a move? Does it work in a rental? We list the price, and we don’t hide behind “investment piece” when we mean “expensive.”</p><h2>No architectural tourism</h2><p>You won’t find fantasy reno spreads here. You’ll find things that fit real rooms, real budgets, and real constraints—so you can make a decision and move on.</p>',
  author = 'Pulse Editors',
  category = 'Approach'
WHERE slug = 'art-of-slow-mornings';

-- Article 3: Small-space solutions for renters (slug: nourishing-seasonal-eating)
UPDATE articles
SET
  title = 'Small-space solutions for renters',
  excerpt = 'Practical frameworks designed for temporary walls and landlord restrictions.',
  image_url = '/images/Article3.png',
  content = '<p>Renting doesn’t mean you’re stuck with a default layout or a “someday” mindset. Practical minimalism for renters starts with what you can change without losing your deposit.</p><h2>Work with the lease</h2><p>Assume no nails in the wall, no new built-ins, no painting. That leaves: furniture placement, freestanding storage, lighting, and what you own. We design around those.</p><h2>Temporary walls and soft divisions</h2><p>Room dividers, shelves, and curtains can define zones without construction. The goal isn’t to pretend you have more space—it’s to make the space you have work for how you actually live.</p><p>Landlord restrictions aren’t a dead end. They’re the design brief.</p>',
  author = 'Pulse Editors',
  category = 'Approach'
WHERE slug = 'nourishing-seasonal-eating';
