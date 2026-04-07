import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Email Marketing | Noplin Digital',
  description: 'Professional Email Marketing services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Email Marketing"
      department="Marketing"
      tagline="Professional Email Marketing services tailored to elevate your business."
      turnaround="48 Hours (per campaign)"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      about="Our Email Marketing offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Automated Drip Sequences",
    description: "Strategic, multi-step automated email flows designed to nurture cold subscribers into warm buyers through relevant value, social proof, and timely offers.",
    icon: "chat",
    color: "green"
  },
  {
    title: "Deliverability Configuration",
    description: "Complete DNS record setup including DKIM, DMARC, and SPF authentication to permanently protect your sender reputation and ensure inbox placement.",
    icon: "shield",
    color: "purple"
  },
  {
    title: "Branded HTML Email Templates",
    description: "Beautifully designed, mobile-responsive HTML newsletter templates that render consistently across all major email clients including Outlook, Gmail, and Apple Mail.",
    icon: "brush",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Email Marketing."
      process={[
  {
    step: "01",
    title: "Audit deliverability & sender health",
    description: "We analyze your sending domain reputation, check for blacklist appearances, and fully configure DKIM, SPF, and DMARC records to maximize inbox placement rates."
  },
  {
    step: "02",
    title: "Map automated sequence architecture",
    description: "We design the full automation blueprint, wselcome Series, Lead Nurture sequences, Abandoned Cart flows, Win-Back campaigns, and post-purchase upsell chains."
  },
  {
    step: "03",
    title: "Design branded email templates",
    description: "Our design team creates responsive HTML email layouts that match your visual brand guidelines and display correctly across every major email client and device type."
  },
  {
    step: "04",
    title: "Write persuasive email copy",
    description: "Our copywriters craft attention-commanding subject lines, preview text that drives opens, and persuasive body copy engineered to guide the reader toward a specific action."
  },
  {
    step: "05",
    title: "Configure segmentation & logic",
    description: "We build conditional branching inside your platform like Klaviyo, ActiveCampaign, or Mailchimp, so each subscriber receives emails triggered by their specific behavior rather than a generic blast."
  },
  {
    step: "06",
    title: "Test across clients & launch sequences",
    description: "We run every email through Litmus to verify correct rendering across 50+ client and device combinations before activating any live automation or scheduling any broadcast."
  }
]}
      complementaryServices={[
  {
    name: "Landing Page Design",
    url: "/services/landing-page-design",
    desc: "Capture email subscribers through a dedicated high-converting opt-in page before routing them into your automated sequences."
  },
  {
    name: "Content Marketing",
    url: "/services/content-marketing",
    desc: "Populate your email newsletters with authoritative blog content that keeps subscribers engaged and drives repeat traffic to your site."
  },
  {
    name: "CRM Setup",
    url: "/services/crm-setup",
    desc: "Build the organized contact database and pipeline structure needed to send truly personalized emails based on deal stage and lead status."
  }
]}
      faqs={[
  {
    question: "Why are my emails going to spam?",
    answer: "The most common causes are broken DKIM and DMARC DNS records, sending to disengaged lists without cleaning them, or using spam-trigger phrases in subject lines. We fix all three."
  },
  {
    question: "Which email marketing platform is best?",
    answer: "For e-commerce brands, Klaviyo is the dominant choice due to its deep integration with Shopify and behavioral segmentation. For B2B and service businesses, ActiveCampaign offers superior automation logic."
  },
  {
    question: "Do you create both HTML and plain-text emails?",
    answer: "Yes. We design rich HTML emails for promotional campaigns and use strategic plain-text formatting for B2B drip sequences, which consistently achieve higher open and reply rates."
  },
  {
    question: "How do you personalize email content at scale?",
    answer: "We use dynamic merge tags, conditional content blocks, and behavioral triggers so each subscriber receives contextually relevant copy based on their industry, actions, or purchase history."
  },
  {
    question: "Are you going to manage the newsletters every week too?",
    answer: "This service covers foundational setup and automated sequences. Ongoing weekly newsletter management is a separate retainer. We can discuss that scope during your onboarding call."
  },
  {
    question: "What results should I expect from email marketing?",
    answer: "A well-architected email system typically generates 20 to 40% of total e-commerce revenue. Results depend on list quality, automation depth, and how relevant the offers are to your segments."
  }
]}
    />
  );
}
