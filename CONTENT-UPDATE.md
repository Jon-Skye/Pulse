# Updating Article Content and Images

This guide covers how to get the correct text and images into the PULSE database for the three journal articles.

## 1. Run the SQL update (titles, excerpts, images, sample content)

The file **`supabase-update-articles.sql`** updates all three articles to match the Approach section:

| Article | Slug | Image | Title |
|---------|------|--------|--------|
| 1 | `finding-balance-mindful-living` | `/images/Article1.png` | Actionable minimalism for real constraints |
| 2 | `art-of-slow-mornings` | `/images/Article2.png` | Honest product curation with real prices |
| 3 | `nourishing-seasonal-eating` | `/images/Article3.png` | Small-space solutions for renters |

**Steps:**

1. Open your [Supabase](https://supabase.com) project.
2. Go to **SQL Editor** → **New query**.
3. Paste the full contents of `supabase-update-articles.sql`.
4. Click **Run**.

That updates each article’s **title**, **excerpt**, **image_url**, **content**, **author**, and **category**. The script uses placeholder body content that matches the theme; you can replace it with your own copy (see below).

## 2. Changing the full article body (content)

The `content` column stores **HTML** (paragraphs, headings, lists, etc.).

### Option A: Edit in Supabase

1. In Supabase, go to **Table Editor** → **articles**.
2. Open the row for the article you want to change.
3. Edit the **content** cell. You can use simple HTML, for example:

   ```html
   <p>Your opening paragraph here.</p>
   <h2>A section heading</h2>
   <p>Another paragraph.</p>
   <ul><li>Point one</li><li>Point two</li></ul>
   ```

4. Save the row.

### Option B: Use a new SQL script

If you have the final HTML for each article:

1. Put each article’s HTML in a small SQL script like:

   ```sql
   UPDATE articles SET content = '<p>Your full HTML here...</p>' WHERE slug = 'finding-balance-mindful-living';
   ```

2. Run it in the Supabase SQL Editor.

- Use single quotes around the HTML.
- Escape any single quotes inside the HTML by doubling them: `'` → `''`.

If you paste your three article texts (plain or with simple HTML), they can be turned into an update script for you.

## 3. Images

Article images are stored as **paths** in `image_url`, e.g. `/images/Article1.png`. The files themselves live in **`public/images/`**.

- The update script sets:
  - Article 1 → `/images/Article1.png`
  - Article 2 → `/images/Article2.png`
  - Article 3 → `/images/Article3.png`

To use different files, either:

- Put the new file in `public/images/` and set `image_url` to `/images/YourFile.png`, or  
- Change the SQL in `supabase-update-articles.sql` and run it again.

## 4. Quick reference: article fields

| Column | Purpose |
|--------|---------|
| `title` | Shown on the journal list and article page |
| `slug` | URL: `/journal/[slug]` — **don’t change** if you’ve already linked from the Approach cards |
| `excerpt` | Short summary (cards, previews) |
| `content` | Full body HTML for the article page |
| `image_url` | Path from `public/`, e.g. `/images/Article1.png` |
| `author` | Byline |
| `category` | e.g. "Approach", "Wellness" |
| `featured` | If `true`, can be used as the featured article elsewhere |

After running `supabase-update-articles.sql`, the journal and Approach cards will show the new titles, excerpts, and images. Update `content` (and optionally `author`/`category`) in Supabase or via SQL when you have the final text.
