# PULSE Magazine - Style Guide

A comprehensive design system reference for the PULSE Magazine website.

---

## Typography

### Font Families

| Type | Font | Usage |
|------|------|-------|
| Serif | Lora | Headlines (H1-H3) |
| Sans | DM Sans | Body text, UI elements |

### Type Scale

| Element | Font | Size | Weight | Line Height | CSS Class |
|---------|------|------|--------|-------------|-----------|
| H1 | Lora | 48px | 600 (Semibold) | 1.2 | `font-serif text-h1` |
| H2 | Lora | 36px | 600 (Semibold) | 1.25 | `font-serif text-h2` |
| H3 | Lora | 28px | 500 (Medium) | 1.3 | `font-serif text-h3` |
| H4 | DM Sans | 20px | 700 (Bold) | 1.4 | `font-sans text-h4` |
| Body Large | DM Sans | 20px | 400 (Regular) | 1.6 | `text-body-lg` |
| Body | DM Sans | 16px | 400 (Regular) | 1.6 | `text-body` |
| Body Small | DM Sans | 14px | 400 (Regular) | 1.5 | `text-body-sm` |
| Caption/CTA | DM Sans | 14px | 500 (Medium) | 1.4 | `text-caption uppercase tracking-wider` |

---

## Color Palette

| Name | Hex | Usage | CSS Variable |
|------|-----|-------|--------------|
| Background | `#FFFFFF` | Page background | `bg-background` |
| Foreground | `#2B2B2B` | Primary text | `text-foreground` |
| Muted | `#F9F5F1` | Secondary backgrounds, cards | `bg-muted` |
| Accent | `#774528` | CTAs, links, category labels | `text-accent`, `bg-accent` |
| Accent Dark | `#4A2B20` | Hover states | `hover:text-accent-dark`, `hover:bg-accent-dark` |

### Opacity Modifiers

- `text-foreground/60` - Secondary text
- `text-foreground/40` - Tertiary text (copyright, timestamps)
- `border-foreground/10` - Subtle borders

---

## Spacing

### Standard Scale (Tailwind defaults)

| Size | Value | Common Usage |
|------|-------|--------------|
| 4 | 1rem (16px) | Small gaps |
| 6 | 1.5rem (24px) | Standard padding |
| 8 | 2rem (32px) | Section gaps |
| 12 | 3rem (48px) | Section margins |
| 16 | 4rem (64px) | Section padding (mobile) |
| 24 | 6rem (96px) | Section padding (desktop) |

### Custom Scale

| Name | Value | Usage |
|------|-------|-------|
| `18` | 4.5rem (72px) | - |
| `22` | 5.5rem (88px) | - |
| `26` | 6.5rem (104px) | - |
| `30` | 7.5rem (120px) | - |

---

## Layout

### Container

- Max width: `1280px` (`max-w-content`)
- Horizontal padding: `24px` (`px-6`)
- Article content max width: `720px` (`max-w-article`)

### Grid System

```css
/* Article Grid */
.grid-cols-1        /* Mobile: 1 column */
.md:grid-cols-2     /* Tablet: 2 columns */
.lg:grid-cols-3     /* Desktop: 3 columns */

/* Gap */
.gap-8              /* Mobile: 32px */
.md:gap-12          /* Desktop: 48px */
```

### Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets, 2-column grid |
| `lg` | 1024px | Desktop, 3-column grid |
| `xl` | 1280px | Large screens |

---

## Components

### Buttons

**Primary Button**
```html
<button class="bg-accent text-white hover:bg-accent-dark px-6 py-3 text-caption uppercase tracking-wider transition-colors">
  Button Text
</button>
```

**Secondary Button**
```html
<button class="border border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-3 text-caption uppercase tracking-wider transition-colors">
  Button Text
</button>
```

### Article Card

Structure:
1. Image (aspect-ratio 4:3)
2. Category (caption style, accent color)
3. Title (H3, serif)
4. Excerpt (body text, muted)
5. Author (body-sm, muted)

### Featured Article

Two-column layout on desktop:
- Left: Image (aspect-ratio 3:2)
- Right: Category, Title (H2), Excerpt (body-lg), Meta, CTA

---

## Interactive States

### Hover Effects

- Text links: `hover:text-accent transition-colors`
- Images: `group-hover:scale-105 transition-transform duration-500`
- Buttons: Background color change with `transition-colors`

### Focus States

- Use browser defaults for accessibility
- Custom focus styles can be added with `focus:ring-2 focus:ring-accent`

---

## Images

### Aspect Ratios

| Component | Ratio | CSS |
|-----------|-------|-----|
| Article Card | 4:3 | `aspect-[4/3]` |
| Featured Article | 3:2 | `aspect-[3/2]` |
| Article Hero | Full viewport | `h-[50vh] md:h-[60vh]` |

### Image Treatment

- All images use `object-cover`
- Hover zoom effect: `scale-105` with `duration-500`
- Container uses `overflow-hidden`

---

## Animations

### Transitions

- Standard: `transition-colors` (150ms default)
- Image hover: `transition-transform duration-500`

### Best Practices

- Prefer subtle animations
- Use `transform` and `opacity` for performance
- Keep durations between 150-500ms

---

## Content Guidelines

### Article Structure

1. **Hero Image** - Full-width, high-quality
2. **Category** - Uppercase, accent color
3. **Title** - H1, serif font
4. **Meta** - Author, date, separated by pipe
5. **Content** - Prose styling applied

### Prose Styling

```css
.prose p          /* margin-bottom: 1.5rem */
.prose h2         /* margin-top: 3rem, margin-bottom: 1.5rem */
.prose blockquote /* border-left: 2px accent, italic */
.prose a          /* accent color, underline */
```

---

## File Structure

```
/src
  /app
    layout.tsx              # Root layout with fonts
    page.tsx                # Homepage
    globals.css             # Global styles
    /about/page.tsx
    /journal/page.tsx
    /journal/[slug]/page.tsx
  /components
    /ui
      Button.tsx
      Container.tsx
    /layout
      Header.tsx
      Footer.tsx
    /articles
      ArticleCard.tsx
      ArticleGrid.tsx
      FeaturedArticle.tsx
  /lib
    supabase.ts
    types.ts
```

---

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Sufficient color contrast
- Keyboard navigation support
- Mobile-friendly touch targets (min 44px)

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
