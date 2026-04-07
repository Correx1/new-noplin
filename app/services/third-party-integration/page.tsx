import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Third-Party Integration | Noplin Digital',
  description: 'Professional Third-Party Integration services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Third-Party Integration"
      department="Development"
      tagline="Professional Third-Party Integration services tailored to elevate your business."
      turnaround="3–5 Days"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Third-Party Integration offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Audit & Integration Map",
    description: "A thorough mapping of your current software stack, identifying exactly which tools need to communicate and the optimal data flow path between them.",
    icon: "chart",
    color: "blue"
  },
  {
    title: "Custom Webhook Architecture",
    description: "Precisely crafted webhook listeners and event handlers capturing real-time data exchanges between your platforms without data loss or duplication.",
    icon: "gear",
    color: "amber"
  },
  {
    title: "Error Handling & Fallback Logic",
    description: "Bulletproof error routing that automatically retries failed API calls and sends instant Slack alerts if a critical integration breaks at any point.",
    icon: "shield",
    color: "pink"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Third-Party Integration."
      process={[
  {
    step: "01",
    title: "Map the software ecosystem",
    description: "We interview your operations team to document every tool in your stack—CRM, payment processor, email platform, analytics and understand the exact data flow you need."
  },
  {
    step: "02",
    title: "Design integration architecture",
    description: "We create a visual map of all proposed connections, including trigger points, transformation steps, and destination endpoints for every data stream."
  },
  {
    step: "03",
    title: "Build core API connections",
    description: "We write the custom code connecting each platform, using native APIs and webhooks to establish direct, reliable data channels between your tools."
  },
  {
    step: "04",
    title: "Implement data transformation logic",
    description: "We add formatting steps to clean, normalize, and structure data as it moves between systems, ensuring compatibility even between platforms with conflicting data formats."
  },
  {
    step: "05",
    title: "Conduct edge-case testing",
    description: "We deliberately trigger failure scenarios, API timeouts, malformed data, duplicate events to verify the error handling and retry logic behaves correctly under stress."
  },
  {
    step: "06",
    title: "Deploy & monitor live integrations",
    description: "We push the integrations to production and establish monitoring dashboards so your team can see integration health at a glance and get alerted on failures."
  }
]}
      complementaryServices={[
  {
    name: "CRM Setup",
    url: "/services/crm-setup",
    desc: "Set up the central CRM hub that your integrations will push all incoming leads and customer data into automatically."
  },
  {
    name: "Marketing Automation Setup",
    url: "/services/marketing-automation-setup",
    desc: "Chain your integrations together into intelligent marketing workflows that execute multi-step actions based on user behavior."
  },
  {
    name: "Custom API Development",
    url: "/services/custom-api-development",
    desc: "Build a custom API layer that acts as the central data broker for all your third-party integration points."
  }
]}
      faqs={[
  {
    question: "Which platforms can you integrate?",
    answer: "We integrate virtually any platform with a public API: Salesforce, HubSpot, Stripe, PayPal, Shopify, Mailchimp, Twilio, Slack, Google Analytics, and hundreds more."
  },
  {
    question: "What if a platform does not have a native API?",
    answer: "If a platform supports webhooks or exposes any structured data, we can build custom middleware to intercept and route it, effectively creating our own bridge."
  },
  {
    question: "How do you prevent data duplication in integrations?",
    answer: "We implement idempotency keys and deduplication logic at every entry point to ensure the same event never triggers duplicate records, even if delivered multiple times."
  },
  {
    question: "Can you replace Zapier automations with custom code?",
    answer: "Yes. We often replace costly Zapier plans with custom webhook code that is faster, more reliable, and costs a fraction of the monthly platform fees."
  },
  {
    question: "Will you maintain the integrations over time?",
    answer: "We offer optional ongoing maintenance retainers, since third-party APIs occasionally change their endpoints or authentication methods, which requires updates to your integration code."
  },
  {
    question: "How long does a typical integration project take?",
    answer: "Simple two-platform integrations can be completed in 3 to 5 business days. Complex multi-system architectures with custom transformation logic typically run 2 to 4 weeks."
  }
]}
    />
  );
}
