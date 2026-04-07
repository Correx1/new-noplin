import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'A-Grade Website Design | Noplin Digital',
  description: 'Professional A-Grade Website Design services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="A-Grade Website Design"
      department="Development"
      tagline="Professional A-Grade Website Design services tailored to elevate your business."
      turnaround="7 Days"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our A-Grade Website Design offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Custom Branded Interface",
    description: "A wholly bespoke, non-templated user interface sculpted from the ground up to perfectly encapsulate your brand identity and set you apart from competitors.",
    icon: "brush",
    color: "purple"
  },
  {
    title: "Responsive Web Framework",
    description: "Military-grade responsive engineering ensuring your website scales elegantly from ultra-wide desktop monitors down to all mobile screen sizes without compromise.",
    icon: "smartphone",
    color: "blue"
  },
  {
    title: "Technical SEO Foundation",
    description: "Rock-solid technical SEO implementation including semantic HTML5, optimized metadata, structured data schema, and Core Web Vitals optimization built into the core.",
    icon: "magnifier",
    color: "green"
  },
  {
    title: "1-Month Post-Launch Support",
    description: "Comprehensive post-launch monitoring and bug fixes for a full month to guarantee a flawlessly smooth transition into your new digital flagship.",
    icon: "shield",
    color: "yellow"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier A-Grade Website Design."
      process={[
  {
    step: "01",
    title: "Discovery & strategy session",
    description: "We conduct a foundational workshop to grasp your brand's unique selling proposition, target audience, and primary competitors, establishing the creative direction."
  },
  {
    step: "02",
    title: "Sitemap & wireframing",
    description: "We architect the complete user journey, creating low-fidelity wireframes that prioritize logical conversion pathways and ensure intuitive content progression."
  },
  {
    step: "03",
    title: "UI design execution",
    description: "Our designers overlay your brand assets, typography, and color systems onto the wireframes, producing high-fidelity mockups reviewed and approved before coding begins."
  },
  {
    step: "04",
    title: "Frontend & backend development",
    description: "Our engineers write clean, scalable code to bring the designs to life, building every interaction with performance, speed, and long-term maintainability in mind."
  },
  {
    step: "05",
    title: "QA testing across devices",
    description: "We rigorously test the website across all major browsers, operating systems, and physical devices to eliminate any bugs, layout shifts, or performance bottlenecks."
  },
  {
    step: "06",
    title: "Launch & training handover",
    description: "We deploy the site to your live domain and provide a comprehensive walkthrough of your CMS, so you can confidently manage content from day one."
  }
]}
      complementaryServices={[
  {
    name: "Branding Consultation",
    url: "/services/branding-consultation",
    desc: "Solidify your visual identity, messaging, and market positioning before we build your flagship website."
  },
  {
    name: "SEO Optimization",
    url: "/services/seo-optimization",
    desc: "Drive highly targeted organic traffic to your newly launched site through ongoing keyword strategy and link building."
  },
  {
    name: "Content Marketing",
    url: "/services/content-marketing",
    desc: "Populate your new website's blog with authoritative, SEO-optimized articles that attract and convert your ideal audience."
  }
]}
      faqs={[
  {
    question: "Do you use templates?",
    answer: "Never. Every A-Grade Website we design is entirely custom-built to match your specific brand guidelines, messaging, and functional requirements from scratch."
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Yes. We integrate user-friendly Content Management Systems like Sanity or WordPress so your team can update text, images, and blog posts without touching any code."
  },
  {
    question: "Is SEO included in the design?",
    answer: "Technical on-page SEO is built directly into the site foundation, including site speed optimization, proper alt tags, metadata structure, and mobile responsiveness."
  },
  {
    question: "What platform do you build on?",
    answer: "We select the right technology based on your requirements: Next.js for high-performance applications, WordPress for content-heavy blogs, or Shopify for e-commerce stores."
  },
  {
    question: "Do you provide web hosting?",
    answer: "We help you set up hosting perfectly tailored to your tech stack (e.g., Vercel for Next.js, Shopify hosting), and you will fully own the hosting account directly."
  },
  {
    question: "How long does the project take?",
    answer: "Most complete website builds are delivered within 3–5 weeks depending on scope and your feedback speed. We agree on a timeline during the discovery session."
  }
]}
    />
  );
}
