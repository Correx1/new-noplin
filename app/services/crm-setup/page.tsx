import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CRM Setup | Noplin Digital',
  description: 'Professional CRM Setup services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="CRM Setup"
      department="Automation"
      tagline="Professional CRM Setup services tailored to elevate your business."
      turnaround="2–4 Days"
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
      about="Our CRM Setup offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Custom Pipeline Architecture",
    description: "A purpose-built sales pipeline with deal stages, field requirements, and automation triggers designed to mirror exactly how your team actually closes business.",
    icon: "gear",
    color: "yellow"
  },
  {
    title: "Safe Data Migration",
    description: "A structured, rigorously validated import process that moves thousands of legacy contacts, deals, and notes into the new CRM with zero data loss or duplication.",
    icon: "shield",
    color: "pink"
  },
  {
    title: "Automated Lifecycle Workflows",
    description: "Intelligent background triggers that automatically send follow-up emails, assign tasks to reps, or alert managers when a high-value deal goes cold.",
    icon: "chart",
    color: "orange"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier CRM Setup."
      process={[
  {
    step: "01",
    title: "Audit your actual sales process",
    description: "We interview your sales reps and sales managers to understand how deals actually get closed—not how they are supposed to—so we model the CRM around real workflows."
  },
  {
    step: "02",
    title: "Select the right CRM platform",
    description: "We provide an objective recommendation between HubSpot, Salesforce, and ActiveCampaign based on your team size, marketing tech stack, and long-term scalability requirements."
  },
  {
    step: "03",
    title: "Build custom fields & pipeline stages",
    description: "We create tailored deal stages, contact properties, and company records that eliminate every irrelevant default field and make the CRM an accurate mirror of your business."
  },
  {
    step: "04",
    title: "Clean and import existing data",
    description: "We sanitize your spreadsheets using deduplication and normalization logic before importing, ensuring the new CRM starts with clean, well-structured data free of duplicates."
  },
  {
    step: "05",
    title: "Configure automation workflows",
    description: "We build smart triggers—deal stage changes, email opens, inactivity alerts—that automatically assign tasks, send internal notifications, and keep your pipeline moving."
  },
  {
    step: "06",
    title: "Train your team comprehensively",
    description: "We deliver recorded video walkthroughs and written documentation ensuring your sales and marketing teams adopt the CRM confidently from the very first day."
  }
]}
      complementaryServices={[
  {
    name: "Email Marketing",
    url: "/services/email-marketing",
    desc: "Send behavioral email sequences triggered directly from contact stage changes in your CRM for true one-to-one personalization at scale."
  },
  {
    name: "Marketing Automation Setup",
    url: "/services/marketing-automation-setup",
    desc: "Connect your CRM to the rest of your software stack through intelligent automations that route leads, sync data, and trigger actions across tools."
  },
  {
    name: "Lead Generation System",
    url: "/services/lead-generation-system",
    desc: "Build the front-end lead capture system that feeds a steady stream of qualified prospects into your newly organized CRM pipeline."
  }
]}
      faqs={[
  {
    question: "HubSpot vs Salesforce: which should we choose?",
    answer: "HubSpot is the right choice for growing companies wanting a powerful yet easy-to-adopt platform with strong native marketing integration. Salesforce is for enterprises needing deep customization and complex reporting."
  },
  {
    question: "How do you prevent duplicate contacts during migration?",
    answer: "We run fuzzy matching algorithms on your existing data before import, flagging and merging duplicates based on email addresses, phone numbers, and company names."
  },
  {
    question: "Will my team actually use the new CRM?",
    answer: "We design the CRM around how your team works, removing unnecessary complexity. The result is an interface that feels intuitive rather than obstructive, dramatically improving adoption."
  },
  {
    question: "Can the CRM track website visitor behavior?",
    answer: "Yes. With HubSpot or Salesforce tracking scripts installed on your site, reps can see exactly which pages a lead visited before a call, giving them critical context for personalized outreach."
  },
  {
    question: "Can you connect the CRM to our email and phone tools?",
    answer: "Absolutely. We integrate your CRM bidirectionally with Gmail, Outlook, calling tools like Aircall, and marketing automation platforms so all activity logs automatically."
  },
  {
    question: "Do you offer ongoing CRM maintenance?",
    answer: "Yes. CRMs degrade over time as teams add ad-hoc fields and pipelines. We offer monthly audit retainers to keep your architecture clean, your data accurate, and your automations running correctly."
  }
]}
    />
  );
}
