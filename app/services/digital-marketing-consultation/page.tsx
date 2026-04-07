import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Digital Marketing Consultation | Noplin Digital',
  description: 'Professional Digital Marketing Consultation services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Digital Marketing Consultation"
      department="Consulting"
      tagline="Professional Digital Marketing Consultation services tailored to elevate your business."
      turnaround="1 Session"
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
      about="Our Digital Marketing Consultation offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Full Ecosystem Audit",
    description: "A thorough, objective teardown of your current marketing channels, ad accounts, website conversion performance, and funnel structure to identify specific revenue leaks and growth gaps.",
    icon: "magnifier",
    color: "purple"
  },
  {
    title: "Strategic Growth Roadmap",
    description: "A highly actionable master plan mapping exactly which marketing channels to prioritize first, the required budget allocation, key milestones, and realistic ROI timelines.",
    icon: "chart",
    color: "blue"
  },
  {
    title: "Competitor Intelligence Report",
    description: "Detailed reconnaissance into your top three competitors exposing their ad strategies, organic keywords, content positioning, and gaps your brand can immediately exploit.",
    icon: "target",
    color: "yellow"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Digital Marketing Consultation."
      process={[
  {
    step: "01",
    title: "Pre-consultation discovery",
    description: "We send a detailed intake questionnaire gathering your business model, average customer value, historical marketing spend, and current challenges before the session to maximize consulting time on strategy."
  },
  {
    step: "02",
    title: "Identify funnel bottlenecks",
    description: "During the strategy session, we systematically identify exactly where your current funnel is losing high-intent prospects traffic, conversion, retention, or monetization."
  },
  {
    step: "03",
    title: "Analyze competitive landscape",
    description: "We reverse-engineer your top competitors to reveal which channels they are investing in, which keywords they dominate, and which positioning angles they are missing."
  },
  {
    step: "04",
    title: "Formulate tailored channel strategy",
    description: "We construct a bespoke multi-channel growth plan selecting the exact combination of SEO, Paid Ads, Email, and Content most aligned with your offer, audience, and budget."
  },
  {
    step: "05",
    title: "Present prioritized action plan",
    description: "We deliver a structured document outlining the exact next steps ranked by impact and implementation effort, making it easy to know what to execute first."
  },
  {
    step: "06",
    title: "Connect to specialist execution teams",
    description: "We route you directly to the right Noplin specialists for Ads, SEO, Web to begin implementing the strategy immediately after the consultation is complete."
  }
]}
      complementaryServices={[
  {
    name: "SEO Optimization",
    url: "/services/seo-optimization",
    desc: "Execute the organic search component of your strategic roadmap to build long-term inbound traffic that compounds in value every month."
  },
  {
    name: "Social Media Ads Management",
    url: "/services/social-media-ads-management",
    desc: "Launch the paid social campaigns identified in your growth roadmap with expert media buying and creative testing."
  },
  {
    name: "Website Strategy Session",
    url: "/services/website-strategy-session",
    desc: "Pair marketing strategy with website architecture planning to ensure your site is designed to convert the traffic your campaigns generate."
  }
]}
      faqs={[
  {
    question: "What do I need to prepare before the consultation?",
    answer: "We send an intake form requesting your current KPIs, ad spend history, website analytics access, and your biggest business challenges so the session focuses entirely on strategy."
  },
  {
    question: "Is this consultation suitable for any industry?",
    answer: "Yes. We regularly craft growth strategies for e-commerce brands, B2B SaaS companies, local service businesses, high-ticket coaching, and professional services firms."
  },
  {
    question: "Do you execute the strategy after presenting it?",
    answer: "Absolutely. The consultation produces the strategic blueprint. Our specialized internal teams then execute every element—ads, content, web, and automation—based on that roadmap."
  },
  {
    question: "Will you push services we do not need?",
    answer: "No. We are ROI-focused above all else. If your model performs best on search alone, we tell you to ignore social media entirely rather than waste budget on it."
  },
  {
    question: "How long does the full consultation process take?",
    answer: "The strategy session itself runs 90 to 120 minutes. We deliver the formatted Strategic Growth Roadmap document within 5 business days following the session."
  },
  {
    question: "Can this replace an in-house marketing director?",
    answer: "For early-stage businesses, yes. Our strategic consultation combined with our execution services provides the marketing leadership function without the cost of a full-time CMO hire."
  }
]}
    />
  );
}
