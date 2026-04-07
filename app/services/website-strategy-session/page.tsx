import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Strategy Session | Noplin Digital',
  description: 'Professional Website Strategy Session services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Website Strategy Session"
      department="Consulting"
      tagline="Professional Website Strategy Session services tailored to elevate your business."
      turnaround="Single Session"
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
      about="Our Website Strategy Session offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Conversion Architecture Audit",
    description: "A thorough review of your current website's user journey, CTA placement, messaging hierarchy, and conversion funnel to expose exactly where visitors drop off.",
    icon: "magnifier",
    color: "blue"
  },
  {
    title: "Sitemap & Page Hierarchy Plan",
    description: "A crystal-clear visual map of your proposed site structure, defining which pages to create, which to consolidate, and how to guide users from arrival to conversion.",
    icon: "chart",
    color: "green"
  },
  {
    title: "Strategic Website Roadmap Document",
    description: "A complete written strategy document outlining budget ranges, development priorities, technology recommendations, and a phased implementation timeline.",
    icon: "document",
    color: "purple"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Website Strategy Session."
      process={[
  {
    step: "01",
    title: "Pre-session business model review",
    description: "Before the call, we analyze your current website analytics, top traffic sources, and primary conversion goals to arrive at the session with data-backed observations already prepared."
  },
  {
    step: "02",
    title: "Audit existing website performance",
    description: "We walk through your current site together, identifying messaging gaps, UX friction points, missing trust signals, and technical issues that are costing you leads and sales."
  },
  {
    step: "03",
    title: "Map out the ideal site architecture",
    description: "We collaboratively design the right page structure for your goals swhether that means consolidating a bloated site, building new service pages, or restructuring navigation for clarity."
  },
  {
    step: "04",
    title: "Define technology recommendations",
    description: "We advise on the right platform and tech stack for your specific needs, team capabilities, and budget, whether that is WordPress, Next.js, Webflow, or Shopify."
  },
  {
    step: "05",
    title: "Align website strategy with marketing",
    description: "We ensure your website structure supports your SEO strategy, paid ad funnels, and content marketing plan so every digital channel works together rather than in isolation."
  },
  {
    step: "06",
    title: "Deliver prioritized action roadmap",
    description: "You receive a structured document listing every recommended change ranked by business impact and implementation effort so you know exactly what to do first."
  }
]}
      complementaryServices={[
  {
    name: "A-Grade Website Design",
    url: "/services/a-grade-website-design",
    desc: "Execute the website roadmap produced in your strategy session with a fully custom-designed, high-performance website."
  },
  {
    name: "Branding Consultation",
    url: "/services/branding-consultation",
    desc: "Solidify your brand positioning, messaging, and visual identity before beginning any website design work."
  },
  {
    name: "SEO Optimization",
    url: "/services/seo-optimization",
    desc: "Build SEO strategy into your website architecture from the very beginning, ensuring every new page is structured to rank from day one."
  }
]}
      faqs={[
  {
    question: "Who is this session designed for?",
    answer: "This session is ideal for business owners planning a website rebuild or redesign, teams scaling their digital presence, and companies whose current site is not generating leads or revenue."
  },
  {
    question: "Do I need to have a website already?",
    answer: "No. If you are starting from scratch, we map out the ideal site structure and strategy before any design or development begins, saving significant rework time and budget later."
  },
  {
    question: "How is this different from a Digital Marketing Consultation?",
    answer: "A Digital Marketing Consultation covers your entire marketing ecosystem. A Website Strategy Session focuses specifically on the website itself. Its structure, messaging, UX, and conversion architecture."
  },
  {
    question: "Will you build the site after the strategy session?",
    answer: "Yes. The strategy session produces the roadmap, and our web design and development team executes it. Many clients combine this with our A-Grade Website Design service."
  },
  {
    question: "Do you provide any deliverable documents after the session?",
    answer: "Yes. You receive a written strategic recommendations document, a proposed sitemap, and technology and budget guidance within 3 business days following the session."
  },
  {
    question: "How long does the session itself run?",
    answer: "Website Strategy Sessions typically run 90 minutes and are conducted via video call. A follow-up session may be scheduled for complex projects requiring additional discovery depth."
  }
]}
    />
  );
}
