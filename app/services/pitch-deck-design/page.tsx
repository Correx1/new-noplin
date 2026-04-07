import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Pitch Deck Design | Noplin Digital',
  description: 'Professional Pitch Deck Design services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Pitch Deck Design"
      department="Design"
      tagline="Professional Pitch Deck Design services tailored to elevate your business."
      turnaround="72 Hours"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
      about="Our Pitch Deck Design offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "15-20 Hand-Crafted Slides",
    description: "Exquisitely styled, highly persuasive presentation slides built to capture attention and communicate your business potential clearly.",
    icon: "monitor",
    color: "blue"
  },
  {
    title: "Custom Financial Charts",
    description: "Your complex traction metrics and financial projections translated into gorgeous, incredibly easy-to-understand data visualizations.",
    icon: "chart",
    color: "green"
  },
  {
    title: "Editable Source Deck",
    description: "The untethered raw file in PowerPoint, Keynote, or Google Slides so you can make necessary last-minute adjustments before your pitch.",
    icon: "gear",
    color: "purple"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Pitch Deck Design."
      process={[
  {
    step: "01",
    title: "Receive raw content/draft from client",
    description: "We take in your business plan, raw data, or unformatted slides and conduct a thorough review to understand the core narrative."
  },
  {
    step: "02",
    title: "Plan slide structure",
    description: "We map out a persuasive, logical flow for the presentation, ensuring the problem, solution, and traction are highlighted perfectly."
  },
  {
    step: "03",
    title: "Design all slides",
    description: "Our specialized presentation designers craft premium layouts, incorporating custom icons, infographics, and typography that exude authority."
  },
  {
    step: "04",
    title: "Client review",
    description: "We present a draft of the full deck, walking you through the visual decisions and how they support your pitch narrative."
  },
  {
    step: "05",
    title: "Revisions (max 2 rounds)",
    description: "We implement your feedback, refining the text sizing, data visualization, and imagery across all slides."
  },
  {
    step: "06",
    title: "Deliver editable + PDF",
    description: "You receive a pristine, presentation-ready PDF alongside the fully editable source file (PowerPoint, Keynote, or Google Slides)."
  }
]}
      complementaryServices={[
  {
    name: "Branding Consultation",
    url: "/services/branding-consultation",
    desc: "Solidify your brand identity and market positioning before stepping into the pitch room."
  },
  {
    name: "Vector Illustration",
    url: "/services/vector-illustration",
    desc: "Add fully custom, bespoke illustrations to specific slides to make your pitch truly unforgettable."
  },
  {
    name: "A-Grade Website Design",
    url: "/services/a-grade-website-design",
    desc: "Ensure investors see a premium, highly-credible website when they research you after the pitch."
  }
]}
      faqs={[
  {
    question: "Do you write the pitch deck copy?",
    answer: "We heavily rely on you to provide the core business data and narrative. However, we do edit and condense the text aggressively to ensure the slides aren't cluttered."
  },
  {
    question: "What software do you design the deck in?",
    answer: "We can design in PowerPoint, Apple Keynote, Google Slides, or Figma whichever platform you and your team are most comfortable using."
  },
  {
    question: "Can you sign an NDA before we share our business plan?",
    answer: "Absolutely. We work with stealth startups frequently and are completely happy to sign an NDA before you share any sensitive documentation."
  },
  {
    question: "How many slides are included?",
    answer: "Our standard pitch deck package accommodates up to 20 slides, which is the industry standard for seed and series A fundraising rounds."
  },
  {
    question: "Do you design custom graphics for the deck?",
    answer: "Yes, we create custom infographics, charts, and device mockups to visually communicate your business model and traction."
  }
]}
    />
  );
}
