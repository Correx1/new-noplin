import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Landing Page Design | Noplin Digital',
  description: 'Professional Landing Page Design services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Landing Page Design"
      department="Development"
      tagline="Professional Landing Page Design services tailored to elevate your business."
      turnaround="2 Days"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Landing Page Design offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Direct-Response Copywriting",
    description: "Psychologically engineered sales copy precisely formulated to eliminate visitor objections, build urgency, and push every reader toward one clear, decisive action.",
    icon: "pen",
    color: "pink"
  },
  {
    title: "Frictionless Conversion UI",
    description: "A stripped-down, laser-focused visual layout that removes competing navigation elements and channels 100% of visitor attention toward the primary call-to-action.",
    icon: "target",
    color: "amber"
  },
  {
    title: "Conversion Optimization Hooks",
    description: "Strategically positioned social proof, urgency triggers, and micro-commitment devices embedded at key friction points to dramatically improve conversion rates.",
    icon: "chart",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Landing Page Design."
      process={[
  {
    step: "01",
    title: "Discovery & offer analysis",
    description: "We dissect your product or service to identify the emotional triggers, key objections, and primary desire of your exact target audience before a single word of copy is written."
  },
  {
    step: "02",
    title: "Wireframe the conversion layout",
    description: "We map the page's visual hierarchy—hero, benefits section, social proof placement, and CTA positioning—specifically optimized for fast scrolling and rapid decision-making."
  },
  {
    step: "03",
    title: "Write direct-response copy",
    description: "Our copywriters draft compelling headlines, a clear benefits stack, trust-building testimonials, and a call-to-action that creates genuine urgency without resorting to empty hype."
  },
  {
    step: "04",
    title: "Create the high-fidelity design",
    description: "We overlay your brand aesthetics onto the wireframe, producing a polished, persuasive page design that looks premium while preserving every element of the conversion structure."
  },
  {
    step: "05",
    title: "Client review & refinement",
    description: "You review the complete design for brand accuracy and messaging alignment. We apply your feedback before finalizing all assets for the development handoff."
  },
  {
    step: "06",
    title: "Prepare annotated developer handoff",
    description: "We package precise Figma files with spacing, typography, and interaction notes so the page can be developed into pixel-perfect, fast-loading code immediately."
  }
]}
      complementaryServices={[
  {
    name: "Social Media Ads Management",
    url: "/services/social-media-ads-management",
    desc: "Drive a consistent stream of precisely targeted paid traffic from Meta and TikTok directly into your newly designed high-converting page."
  },
  {
    name: "Ad Creatives (Video)",
    url: "/services/ad-creatives-video",
    desc: "Pair your landing page with compelling short-form video ads that pre-sell the offer before viewers even click through."
  },
  {
    name: "Sales Funnel Design",
    url: "/services/sales-funnel-design",
    desc: "Extend the landing page into a complete multi-step funnel with upsell pages, thank-you sequences, and automated email follow-up."
  }
]}
      faqs={[
  {
    question: "Do you write the copy for the landing page?",
    answer: "Yes. Direct-response copywriting is a core component of this service. The words on a landing page are responsible for the majority of conversion performance, so we handle this with our specialist writers."
  },
  {
    question: "Is development included in Landing Page Design?",
    answer: "This service focuses on the design and copywriting phase. For live deployment and hosting, our Landing Page Hosting & Setup service handles the development, tracking, and launch."
  },
  {
    question: "How is this different from a website homepage?",
    answer: "A homepage serves multiple purposes and has full navigation. A landing page is engineered for one singular action—signing up, purchasing, or booking—with everything else stripped out to prevent distraction."
  },
  {
    question: "Can you design landing pages for product launches?",
    answer: "Yes. We design waitlist pages, pre-launch registration pages, and full-scale product launch pages complete with countdown timers, early-bird offer sections, and launch sequences."
  },
  {
    question: "How many revisions are included in the design process?",
    answer: "We include two structured revision rounds within the design process. Additional revision cycles beyond this are available at a fixed hourly rate agreed upfront."
  },
  {
    question: "Do you design for mobile as well as desktop?",
    answer: "Absolutely. Every landing page is designed across mobile, tablet, and desktop breakpoints with special attention given to mobile, since the majority of paid ad traffic converts on small screens."
  }
]}
    />
  );
}
