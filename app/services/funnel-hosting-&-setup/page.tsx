import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Funnel Hosting & Setup | Noplin Digital',
  description: 'Professional Funnel Hosting & Setup services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Funnel Hosting & Setup"
      department="Development"
      tagline="Professional Funnel Hosting & Setup services tailored to elevate your business."
      turnaround="48 Hours"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Funnel Hosting & Setup offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Fast Funnel Deployment",
    description: "Pixel-perfect translation of your funnel designs into high-speed code deployed on a reliable, low-latency hosting environment built for conversion.",
    icon: "rocket",
    color: "blue"
  },
  {
    title: "Full Tracking Integration",
    description: "Precise installation of Meta Pixel, Google Tag, and conversion event tracking to ensure every lead and purchase is attributed back to its exact traffic source.",
    icon: "chart",
    color: "green"
  },
  {
    title: "Domain & SSL Configuration",
    description: "Complete DNS record updates and SSL certificate provisioning so your funnel runs on your custom branded domain with airtight HTTPS security from launch.",
    icon: "shield",
    color: "purple"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Funnel Hosting & Setup."
      process={[
  {
    step: "01",
    title: "Review designs & requirements",
    description: "We collect your Figma files or design assets and clarify which analytics tools, payment gateways, and email platforms need to be connected to the funnel."
  },
  {
    step: "02",
    title: "Provision hosting environment",
    description: "We set up a fast, isolated hosting environment optimized for single-page applications, ensuring sub-2-second load times that prevent paid traffic from bouncing."
  },
  {
    step: "03",
    title: "Code the funnel pages",
    description: "We translate every step of the funnel, optin, sales, checkout, upsell, thank-you into clean, lightweight code that renders perfectly across all devices and browsers."
  },
  {
    step: "04",
    title: "Install tracking pixels & events",
    description: "We deploy and verify conversion-level events in Meta Events Manager and Google Tag Manager so your ad platforms receive accurate purchase and lead signals."
  },
  {
    step: "05",
    title: "Integrate payment & email systems",
    description: "We connect your payment processor, autoresponder platform, and CRM to the live funnel so transactions and subscriber actions flow automatically."
  },
  {
    step: "06",
    title: "Go-live QA & handoff",
    description: "We run a final end-to-end test of every click path, form submission, payment confirmation, and email trigger before handing over a fully live, verified funnel."
  }
]}
      complementaryServices={[
  {
    name: "Sales Funnel Design",
    url: "/services/sales-funnel-design",
    desc: "Have a professional funnel designed from scratch before we build and deploy it for you."
  },
  {
    name: "Social Media Ads Management",
    url: "/services/social-media-ads-management",
    desc: "Drive consistent paid traffic into your live funnel with expert campaign management across Meta and TikTok."
  },
  {
    name: "Email Marketing",
    url: "/services/email-marketing",
    desc: "Set up automated sequences that follow up with everyone who enters your funnel but leaves without converting."
  }
]}
      faqs={[
  {
    question: "Do I need this if I already have ClickFunnels?",
    answer: "If you are using an all-in-one platform like ClickFunnels, this service may not be needed. This service is for clients who prefer custom-coded funnels on their own hosting for speed and flexibility."
  },
  {
    question: "How fast will the pages load?",
    answer: "We optimize every page to load within 1–2 seconds. Paid traffic funnels live and die on page speed, and we treat it as a top engineering priority."
  },
  {
    question: "Can you set up split tests on the funnel?",
    answer: "Yes. We structure the codebase to make A/B testing of headlines, offers, and page layouts straightforward, feeding winning data back to your ad campaigns."
  },
  {
    question: "Will you connect the funnel to my email platform?",
    answer: "Yes. We integrate your funnel with Klaviyo, Mailchimp, ActiveCampaign, or ConvertKit so opt-ins and purchases trigger the right automated sequences automatically."
  },
  {
    question: "Who hosts the funnel, you or me?",
    answer: "You own and control the hosting. We set everything up on your accounts (AWS, Vercel, or Netlify) so you are never dependent on us for access to your live funnel."
  },
  {
    question: "Do you handle the domain for the funnel?",
    answer: "Yes. We handle all DNS configuration, SSL certificate installation, and subdomain routing to ensure your funnel runs on a clean, branded URL from day one."
  }
]}
    />
  );
}
