# Noplin Digital 🚀

A high-performance, full-stack agency website built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Sanity CMS**. Designed to showcase Noplin Digital's services, portfolio, and thought leadership through a premium, animated UI.

---

## 🌐 Live Site

> **[noplindigital.com](https://noplindigital.com)** *(replace with actual URL)*

---

## ✨ Features

- **Premium UI/UX** — Fluid animations powered by Framer Motion, micro-interactions, hover effects, and smooth scroll via Lenis.
- **Mega Menu Navigation** — Full-width services dropdown with 5 categories and 26+ individual service links.
- **Dynamic Services Pages** — 35 individual sub-service pages generated from a central data layer, each with rich SEO content, FAQs, and process steps.
- **Portfolio Showcase** — Interactive left-tabbed viewer with full-width media (image/video) display and animated transitions.
- **Blog with Sanity CMS** — Fully integrated headless CMS for article management, supporting Portable Text, images, and categories.
- **Dark-First Design** — Force-dark sections on hero areas and CTAs for consistent brand feel across light and dark OS preferences.
- **Contact Form** — React Hook Form + Zod-validated contact page.
- **SEO Optimized** — Per-page metadata, `sitemap.ts`, `robots.ts`, and Open Graph image generation via `opengraph-image.tsx`.
- **Fully Responsive** — Pixel-perfect layouts from mobile (320px) to 4K+ — with tailored mobile UX for the portfolio and navigation.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + Custom CSS Variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **CMS** | [Sanity v3](https://www.sanity.io/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Forms** | React Hook Form + Zod |
| **Carousel** | Embla Carousel |
| **UI Primitives** | Radix UI |

---

## 📁 Project Structure

```
noplin-digital/
├── app/
│   ├── about/                  # About page
│   ├── blog/                   # Blog listing + [slug] page (Sanity powered)
│   ├── contact/                # Contact form page
│   ├── pricing/                # Pricing page
│   ├── services/               # Services overview + 35 sub-service pages
│   │   ├── page.tsx
│   │   └── [service-slug]/
│   ├── work/                   # Portfolio / case studies page
│   ├── studio/                 # Sanity Studio (embedded)
│   ├── components/
│   │   ├── home/               # Homepage sections (Hero, WhatWeDo, Portfolio, etc.)
│   │   ├── layout/             # Navbar, Footer
│   │   ├── services/           # Services page components
│   │   ├── about/              # About page components
│   │   ├── work/               # Work page components
│   │   ├── ui/                 # Shared UI primitives (buttons, inputs, etc.)
│   │   └── blog/               # Blog components
│   ├── globals.css             # Global styles, design tokens, component classes
│   ├── layout.tsx              # Root layout (fonts, Lenis, metadata)
│   └── sitemap.ts              # Auto-generated sitemap
│
├── public/
│   ├── images/                 # Static assets (logos, hero video, etc.)
│   └── portfolio/              # Portfolio media (images + videos)
│
├── sanity/                     # Sanity schemas and client configuration
├── generate_services.js        # Script to bulk-generate service pages with SEO data
├── seo_design_data.js          # SEO content for Design services
├── seo_dev1_data.js            # SEO content for Development (Part 1)
├── seo_dev2_data.js            # SEO content for Development (Part 2)
├── seo_marketing_data.js       # SEO content for Marketing services
├── seo_consulting_automation_data.js  # SEO content for Consulting & Automation
├── tailwind.config.ts          # Tailwind v4 configuration
└── next.config.ts              # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/noplin-digital.git
cd noplin-digital

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
```

> You can find these in your [Sanity project dashboard](https://sanity.io/manage).

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

---

## 🧑‍💻 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📊 Service Pages Generation

The site includes **35 individual service pages** across 5 departments. These were generated using a custom Node.js script (`generate_services.js`) that reads structured SEO data from the `seo_*_data.js` files and outputs fully-formed Next.js page files.

To re-run the generator (e.g., after updating SEO data):

```bash
node generate_services.js
```

> ⚠️ This will **overwrite** existing service page files. Make manual edits to the data files, not the generated pages.

---

## 🎨 Design System

Key design tokens are defined as CSS variables in `app/globals.css`:

| Token | Purpose |
|---|---|
| `--bg-base` | Page background |
| `--bg-section` | Alternating section backgrounds |
| `--bg-card` | Card backgrounds |
| `--text-primary` | Main heading/body text |
| `--text-secondary` | Supporting/muted text |
| `--electric` | Brand cyan/electric accent color |
| `--border-card` | Card border color |

### Component Classes

| Class | Usage |
|---|---|
| `.btn-primary` | Primary CTA buttons (dark navy text, cyan background) |
| `.btn-ghost` | Secondary ghost-style buttons |
| `.force-dark` | Forces dark appearance on sections regardless of OS theme |
| `.font-display` | Display/heading font |
| `.font-body` | Body/paragraph font |

---

## 📝 Content Management (Sanity)

Blog posts and potentially other dynamic content are managed via the embedded Sanity Studio at `/studio`.

### Blog Schema includes:
- Title, slug, excerpt
- Author + published date
- Cover image
- Category tags
- Portable Text body (rich content)

---

## 🗺 Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/services` | All services overview |
| `/services/[slug]` | Individual service pages (35 total) |
| `/work` | Portfolio / case studies |
| `/about` | About Noplin Digital |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact form |
| `/pricing` | Pricing tiers |
| `/studio` | Sanity CMS Studio |

---

## 📦 Deployment

This project is optimized for deployment on **Vercel**:

1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add the required environment variables.
4. Deploy!

For other platforms (e.g., Netlify, Railway), run `npm run build` and serve the `.next/` output.

---

## 🤝 Contributing

This is a private agency project. For internal contributors:

1. Create a feature branch from `main`.
2. Make your changes.
3. Open a pull request with a clear description.

---

## 📄 License

All rights reserved. © Noplin Digital. This codebase is proprietary and not open-source.
