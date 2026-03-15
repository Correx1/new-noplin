import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Lead Generation System | Noplin Digital',
  description: 'Professional Lead Generation System services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Lead Generation System"
      department="Automation"
      tagline="Professional Lead Generation System services tailored to elevate your business."
      turnaround="3–7 Days"
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
      about="Our Lead Generation System offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Multi-Channel Lead Capture Funnels",
    description: "Strategically designed opt-in flows deployed across paid social, organic search, and content marketing that attract and pre-qualify high-intent prospects before they reach your team.",
    icon: "target",
    color: "purple"
  },
  {
    title: "Lead Qualification Scoring System",
    description: "Automated behavioral and demographic scoring rules that rank every incoming lead by conversion probability, ensuring your sales team contacts the hottest prospects first.",
    icon: "chart",
    color: "blue"
  },
  {
    title: "Instant Lead Routing & Notifications",
    description: "Real-time lead delivery to the right sales representative via Slack, SMS, and CRM task creation the moment a prospect completes the qualification process.",
    icon: "rocket",
    color: "green"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Lead Generation System."
      process={[
  {
    step: "01",
    title: "Define ideal customer profile",
    description: "We work with your sales leadership to identify the exact characteristics of your highest-value customers, building audience targeting criteria around real conversion data rather than assumptions."
  },
  {
    step: "02",
    title: "Design lead capture assets",
    description: "We build dedicated opt-in pages with compelling lead magnets—free audits, exclusive guides, or live training events—that give prospects a clear reason to exchange their contact information."
  },
  {
    step: "03",
    title: "Activate traffic sources",
    description: "We launch the appropriate traffic channels for your audience—Meta Ads for B2C, LinkedIn Ads for B2B, or SEO content—calibrated to the purchase intent level of each platform."
  },
  {
    step: "04",
    title: "Configure tracking & attribution",
    description: "We implement UTM parameter tracking, server-side conversion pixels, and CRM source tagging so every lead can be traced back to the exact campaign and creative that generated it."
  },
  {
    step: "05",
    title: "Build automated routing workflows",
    description: "We connect the lead capture system to your CRM and configure assignment rules, instant notification alerts, and follow-up task creation based on lead quality score and product interest."
  },
  {
    step: "06",
    title: "Monitor and optimize cost per lead",
    description: "We analyze weekly performance data across all active channels, identifying the lowest-cost, highest-quality traffic sources and reallocating budget to maximize volume within your target CPL."
  }
]}
      complementaryServices={[
  {
    name: "CRM Setup",
    url: "/services/crm-setup",
    desc: "Build the organized pipeline that your lead generation system routes every new prospect into the moment they opt in."
  },
  {
    name: "Social Media Ads Management",
    url: "/services/social-media-ads-management",
    desc: "Fuel your lead generation funnels with precision-targeted paid social campaigns that deliver a consistent daily volume of qualified inquiries."
  },
  {
    name: "Landing Page Design",
    url: "/services/landing-page-design",
    desc: "Maximize your lead capture rate with a dedicated, conversion-focused opt-in page designed specifically to attract and qualify your ideal customer."
  }
]}
      faqs={[
  {
    question: "Are leads generated exclusively for my business?",
    answer: "Yes, every lead is generated specifically for your brand through campaigns built around your offer. We never sell shared lists or split leads between multiple clients."
  },
  {
    question: "How fast will I get the first leads?",
    answer: "Via paid advertising, leads typically begin arriving within 24 to 48 hours of campaign launch. Organic lead generation through SEO content builds over a 3 to 6 month timeline."
  },
  {
    question: "Can you control lead quality not just volume?",
    answer: "Yes. We use qualification questions in the capture funnel, behavioral scoring in the CRM, and precise audience targeting upstream to filter out tire-kickers before they reach your team."
  },
  {
    question: "What is a lead magnet and why do I need one?",
    answer: "A lead magnet is a valuable free resource offered in exchange for contact information. High-performing lead generation almost always requires a genuinely useful lead magnet that attracts the right audience."
  },
  {
    question: "Can you generate leads for high-ticket B2B services?",
    answer: "Yes. We specialize in generating qualified B2B leads using LinkedIn advertising, intent-targeted Google Search campaigns, and gated content funnels that attract serious decision-makers."
  },
  {
    question: "Will leads appear automatically in our CRM?",
    answer: "Yes. We integrate every lead capture touchpoint with your CRM so new contacts appear with full source attribution, qualification responses, and next-step tasks without any manual data entry."
  }
]}
    />
  );
}
