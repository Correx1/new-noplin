import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Marketing Automation Setup | Noplin Digital',
  description: 'Professional Marketing Automation Setup services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Marketing Automation Setup"
      department="Automation"
      tagline="Professional Marketing Automation Setup services tailored to elevate your business."
      turnaround="3–5 Days"
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
      about="Our Marketing Automation Setup offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Multi-Trigger Automation Blueprints",
    description: "Complex Zapier or Make scenarios linking your disparate SaaS tools into one automated system—triggered by lead form submissions, payment events, or user behavior.",
    icon: "gear",
    color: "amber"
  },
  {
    title: "Error Handling & Fallback Logic",
    description: "Bulletproof routing with automatic retry logic and instant Slack alerts sent to your team whenever a critical automation step fails or a webhook drops.",
    icon: "shield",
    color: "pink"
  },
  {
    title: "Custom Data Transformation Scripts",
    description: "Precisely crafted custom code steps that clean, format, and normalize data as it passes between platforms with conflicting field structures or naming conventions.",
    icon: "rocket",
    color: "yellow"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Marketing Automation Setup."
      process={[
  {
    step: "01",
    title: "Map manual processes & bottlenecks",
    description: "We interview your operations and marketing teams to document every repetitive manual task—data entry, lead routing, follow-up emails—that consumes time without adding strategic value."
  },
  {
    step: "02",
    title: "Select the right automation platform",
    description: "We evaluate Zapier versus Make (Integromat) based on your tool complexity, monthly trigger volume, and budget, selecting the platform that gives you the most power for the cost."
  },
  {
    step: "03",
    title: "Build core trigger sequences",
    description: "We establish the foundational webhooks capturing events from Facebook Lead Ads, website forms, Stripe payments, or Shopify orders that kick off each automation chain."
  },
  {
    step: "04",
    title: "Add data transformation logic",
    description: "We insert custom code steps to reformat dates, clean phone number formats, split full names into first and last, and merge data fields before sending to destination tools."
  },
  {
    step: "05",
    title: "Connect all output destinations",
    description: "We precisely route the cleaned, formatted data into your CRM, email platform, Google Sheets, Slack channels, and any other tools in your workflow simultaneously."
  },
  {
    step: "06",
    title: "Stress test with edge-case data",
    description: "We deliberately send malformed test data through every automation to verify the error handling routes behave correctly and alerts fire as expected before going live."
  }
]}
      complementaryServices={[
  {
    name: "CRM Setup",
    url: "/services/crm-setup",
    desc: "Build the organized CRM pipeline that your automations will route every new lead and contact into the moment they opt in."
  },
  {
    name: "Email Marketing",
    url: "/services/email-marketing",
    desc: "Trigger deeply personalized email sequences the instant an automation event completes, creating seamless multi-touchpoint customer journeys."
  },
  {
    name: "Lead Generation System",
    url: "/services/lead-generation-system",
    desc: "Connect your lead capture funnels directly into your new automation network so every prospect is instantly qualified and routed without human intervention."
  }
]}
      faqs={[
  {
    question: "Zapier or Make: which is better for my business?",
    answer: "Zapier offers a gentler learning curve and works with more obscure apps. Make is significantly more powerful and cost-effective for complex multi-branch logic with high monthly task volumes."
  },
  {
    question: "What happens when an automation breaks?",
    answer: "We build error-handling paths that catch failures, log the event, and immediately notify your team via Slack with the exact error payload so nothing falls through the cracks unnoticed."
  },
  {
    question: "Can you automate tools that are not on Zapier?",
    answer: "If the tool has a REST API or sends webhooks, we can build a custom integration using Zapier or Make's webhook modules, effectively connecting any software with a public interface."
  },
  {
    question: "Do you need our login credentials to set this up?",
    answer: "No. Both Zapier and Make use secure OAuth connections or API keys so you authorize access through the platform itself without ever sharing your actual account passwords."
  },
  {
    question: "Will this save us money?",
    answer: "Dramatically. Eliminating even five hours of manual data entry per week across your team saves significant monthly payroll cost, often paying for the automation investment within 30 to 60 days."
  },
  {
    question: "How long does automation setup take?",
    answer: "Simple two-platform automations are typically live within 3 to 5 days. Complex multi-step workflows involving custom logic and several tools usually take 1 to 2 weeks to build and test."
  }
]}
    />
  );
}
