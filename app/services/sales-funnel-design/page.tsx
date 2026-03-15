import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Sales Funnel Design | Noplin Digital',
  description: 'Professional Sales Funnel Design services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Sales Funnel Design"
      department="Development"
      tagline="Professional Sales Funnel Design services tailored to elevate your business."
      turnaround="48 Hours"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Sales Funnel Design offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Multi-Step Funnel Architecture",
    description: "A strategically sequenced set of pages—optin, sales, upsell, downsell, and thank-you—engineered to maximize the revenue extracted from every single visitor.",
    icon: "chart",
    color: "green"
  },
  {
    title: "Persuasive Sales Page Copy",
    description: "Long-form direct-response sales copy built on proven psychological frameworks designed to answer objections, build desire, and drive high-ticket conversions.",
    icon: "pen",
    color: "yellow"
  },
  {
    title: "Order Bump & Upsell Logic",
    description: "Strategically placed one-click upsell offers that increase your average order value without adding friction to the core purchase decision.",
    icon: "rocket",
    color: "orange"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Sales Funnel Design."
      process={[
  {
    step: "01",
    title: "Map the customer journey",
    description: "We audit your current offer, pricing, and existing traffic to design a funnel architecture that aligns with your buyer's level of awareness and urgency at each stage."
  },
  {
    step: "02",
    title: "Write persuasive funnel copy",
    description: "Our direct-response copywriters craft high-converting opt-in copy, long-form sales pages, and upsell scripts tailored to your specific audience's language and buying triggers."
  },
  {
    step: "03",
    title: "Design every funnel page",
    description: "We design each page step in the sequence—optin page, VSL page, checkout, one-time offers—using visual hierarchy that naturally guides users toward the next step."
  },
  {
    step: "04",
    title: "Code & integrate payment checkout",
    description: "We build the funnel onto your chosen platform (ClickFunnels, ThriveCart, or custom) and integrate order bumps and one-click upsells into the checkout flow."
  },
  {
    step: "05",
    title: "Connect email automation sequences",
    description: "We link the funnel directly to your email marketing platform to trigger automated nurture sequences for leads who did not convert immediately on the first visit."
  },
  {
    step: "06",
    title: "Test all flows & launch",
    description: "We run the entire funnel through end-to-end testing, verifying payments, upsell triggers, email firing, and thank-you page redirects before opening it to live traffic."
  }
]}
      complementaryServices={[
  {
    name: "Social Media Ads Management",
    url: "/services/social-media-ads-management",
    desc: "Drive a consistent flow of paid traffic from Meta and TikTok into the top of your newly built conversion funnel."
  },
  {
    name: "Landing Page Design",
    url: "/services/landing-page-design",
    desc: "Start with a highly optimized lead capture page as the entry point to your funnel sequence."
  },
  {
    name: "Email Marketing",
    url: "/services/email-marketing",
    desc: "Build automated email sequences to nurture everyone who enters the funnel but does not yet convert."
  }
]}
      faqs={[
  {
    question: "What is a sales funnel exactly?",
    answer: "A sales funnel is a structured sequence of pages designed to take a visitor from cold prospect to paying customer through increasingly strong value propositions and logical next steps."
  },
  {
    question: "Do I need a sales funnel or just a website?",
    answer: "If you are selling products, courses, or premium services, a dedicated sales funnel will consistently outperform a standard website at converting traffic into revenue."
  },
  {
    question: "Do you build funnels on ClickFunnels?",
    answer: "We build on ClickFunnels, ThriveCart, Kartra, or as completely custom-coded pages depending on your existing tech stack and budget."
  },
  {
    question: "Can you write all the copy for the funnel?",
    answer: "Yes. Copywriting is the most critical element of a high-converting funnel. Our direct-response writers handle every headline, bullet point, and call-to-action in the sequence."
  },
  {
    question: "What is an order bump?",
    answer: "An order bump is a checkbox offer shown at checkout that adds a complementary product to the cart with a single click. It typically increases average order value by 20–30%."
  },
  {
    question: "Do you integrate email follow-up sequences into the funnel?",
    answer: "Yes. We connect your funnel to a platform like Klaviyo or ActiveCampaign and build out automated email sequences for non-buyers, new customers, and upsell follow-ups."
  }
]}
    />
  );
}
