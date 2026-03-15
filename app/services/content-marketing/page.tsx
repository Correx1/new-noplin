import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Content Marketing | Noplin Digital',
  description: 'Professional Content Marketing services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Content Marketing"
      department="Marketing"
      tagline="Professional Content Marketing services tailored to elevate your business."
      turnaround="Weekly / Monthly"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      about="Our Content Marketing offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Pillar & Cluster Blog Articles",
    description: "Deeply researched, 1,500 to 3,000-word editorial pieces built to rank on Google, establish topical authority, and position your brand as the trusted expert in your field.",
    icon: "document",
    color: "yellow"
  },
  {
    title: "Lead Magnet Assets",
    description: "Highly valuable downloadable resources—checklists, whitepapers, templates, or guides—designed to capture qualified email addresses from your target readership.",
    icon: "target",
    color: "blue"
  },
  {
    title: "Content Distribution System",
    description: "A strategic multi-channel repurposing engine that extracts maximum value from every article by transforming it into social posts, email content, and short-form video scripts.",
    icon: "chart",
    color: "green"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Content Marketing."
      process={[
  {
    step: "01",
    title: "Research audience search behavior",
    description: "We use SEO tools to map the exact questions your target customers are typing into Google, selecting keywords with high buyer intent and achievable ranking difficulty."
  },
  {
    step: "02",
    title: "Build a 90-day editorial calendar",
    description: "We create a structured publishing schedule targeting pillar topics and supporting cluster keywords, ensuring consistent content velocity that signals authority to search engines."
  },
  {
    step: "03",
    title: "Research and draft each article",
    description: "Our writers go beyond surface-level summaries, incorporating original data, expert quotes, and unique angles to produce genuinely useful content that earns links and shares."
  },
  {
    step: "04",
    title: "Optimize for on-page SEO",
    description: "We apply proper heading hierarchy, semantic keyword placement, internal linking to related pages, optimized meta titles and descriptions, and image alt-text to every article."
  },
  {
    step: "05",
    title: "Design supporting visual assets",
    description: "We create custom charts, infographic sections, and cover images for each post to increase time-on-page, improve social shareability, and reinforce key data points visually."
  },
  {
    step: "06",
    title: "Publish, distribute & repurpose",
    description: "We format each article correctly in your CMS with proper schema markup, distribute it via your email list, and transform the key insights into social media content."
  }
]}
      complementaryServices={[
  {
    name: "SEO Optimization",
    url: "/services/seo-optimization",
    desc: "Deploy the technical and off-page SEO strategies required to ensure your high-quality content actually ranks on page one of Google."
  },
  {
    name: "Social Media Management",
    url: "/services/social-media-management",
    desc: "Transform your published articles into a steady stream of daily social posts that drive continuous traffic back to your growing content library."
  },
  {
    name: "Infographics",
    url: "/services/infographics",
    desc: "Turn complex data from your best-performing articles into shareable infographics that generate backlinks and exponentially expand your reach."
  }
]}
      faqs={[
  {
    question: "Do you use AI to write the articles?",
    answer: "We use AI for heavy research and first-draft outlining, but every final article is written and refined by a human expert. Generic AI-only content gets penalized by Google's Helpful Content system."
  },
  {
    question: "How is content marketing different from SEO?",
    answer: "SEO is the technical and strategic framework. Content marketing is the production of the actual articles, guides, and resources that build the topical authority that SEO depends on."
  },
  {
    question: "Will you upload the articles to our website?",
    answer: "Yes. We format and publish every piece directly inside your WordPress, Webflow, or Sanity CMS with all SEO metadata, cover images, and internal links correctly configured."
  },
  {
    question: "Can you write highly technical or niche industry articles?",
    answer: "Absolutely. We pair our writers with your internal experts or conduct thorough industry research to produce technically accurate, authoritative content even in specialized fields."
  },
  {
    question: "How long before content marketing drives significant traffic?",
    answer: "Content compounds over time. Most clients see meaningful organic traffic growth within 4 to 6 months of consistent publishing, with compounding returns accelerating significantly in months 9 through 12."
  },
  {
    question: "Do you repurpose blog content into social media posts?",
    answer: "Yes. As part of our distribution system, we extract key insights from each article and transform them into carousel posts, LinkedIn threads, and short-form video scripts."
  }
]}
    />
  );
}
