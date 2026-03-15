import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Infographics | Noplin Digital',
  description: 'Professional Infographics services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Infographics"
      department="Design"
      tagline="Professional Infographics services tailored to elevate your business."
      turnaround="24 Hours"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
      about="Our Infographics offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Master Infographic Graphic",
    description: "A striking, long-form visual data representation utilizing custom iconography and your specialized brand color palettes.",
    icon: "chart",
    color: "pink"
  },
  {
    title: "Sliced Carousel Format",
    description: "The master infographic seamlessly chopped into 1080x1350 segments, perfect for high-engagement Instagram or LinkedIn carousels.",
    icon: "smartphone",
    color: "green"
  },
  {
    title: "Source Files (.ai/.fig)",
    description: "The fully editable raw vector files so your internal design team can update facts, figures, and charts in the future.",
    icon: "document",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Infographics."
      process={[
  {
    step: "01",
    title: "Get content/data from client",
    description: "We collect your raw data, research reports, or key messages that need to be distilled into a visual format."
  },
  {
    step: "02",
    title: "Plan layout and visual hierarchy",
    description: "Our designers map out the information architecture, ensuring a logical flow that guides the reader’s eye from top to bottom."
  },
  {
    step: "03",
    title: "Design infographic",
    description: "We bring the data to life using custom iconography, brand-aligned color palettes, and engaging typography."
  },
  {
    step: "04",
    title: "Client review",
    description: "We present the draft infographic to ensure all data points are accurate and the visual style aligns with your brand."
  },
  {
    step: "05",
    title: "Revise if needed",
    description: "We implement any necessary adjustments, fine-tuning graphs, text sizes, or icons based on your feedback."
  },
  {
    step: "06",
    title: "Deliver final files",
    description: "You receive a high-resolution PNG for web use, a print-ready PDF, and the editable source file for future updates."
  }
]}
      complementaryServices={[
  {
    name: "Content Marketing",
    url: "/services/content-marketing",
    desc: "Embed your new infographics into authoritative SEO blog posts to generate high-quality backlinks."
  },
  {
    name: "Pitch Deck Design",
    url: "/services/pitch-deck-design",
    desc: "Incorporate these powerful data visualizations into your investor or sales presentations."
  },
  {
    name: "Social Media Management",
    url: "/services/social-media-management",
    desc: "We can repurpose your comprehensive infographic into bite-sized carousel posts for social media."
  }
]}
      faqs={[
  {
    question: "Do you write the content or do I provide the data?",
    answer: "We ask that you provide the core data and facts. However, our copywriters will refine the text to ensure it is punchy and easily scannable."
  },
  {
    question: "Can these infographics be used for print?",
    answer: "Yes! We deliver high-resolution PNGs for the web and vector-based PDFs that are perfectly suitable for high-quality printing."
  },
  {
    question: "What industries do you create infographics for?",
    answer: "We have experience turning complex data into engaging visuals for tech/SaaS, finance, healthcare, education, and B2B consulting sectors."
  },
  {
    question: "Are the icons used custom or templates?",
    answer: "We design custom icons and visual elements tailored specifically to your brand guidelines, completely avoiding generic template looks."
  },
  {
    question: "Do I get the source file?",
    answer: "Absolutely. We provide the editable source file (usually Adobe Illustrator or Figma) so your internal team can make future data updates easily."
  }
]}
    />
  );
}
