import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Vector Illustration | Noplin Digital',
  description: 'Professional Vector Illustration services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Vector Illustration"
      department="Design"
      tagline="Professional Vector Illustration services tailored to elevate your business."
      turnaround="48 Hours"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
      about="Our Vector Illustration offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Bespoke Illustration Artworks",
    description: "Striking, highly-original illustrations tailored explicitly to match the unique aesthetic tone and mood of your digital brand.",
    icon: "brush",
    color: "pink"
  },
  {
    title: "Infinite Resolution SVGs",
    description: "Delivery in crisp, scalable vector formats (.svg, .eps) ensuring your illustration looks perfect on an iPhone screen or a giant billboard.",
    icon: "rocket",
    color: "yellow"
  },
  {
    title: "Full Commercial Rights",
    description: "Complete intellectual property rights handed over instantly upon project completion, giving you total freedom over your assets.",
    icon: "shield",
    color: "green"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Vector Illustration."
      process={[
  {
    step: "01",
    title: "Get illustration brief & references",
    description: "We start by collecting your mood boards, reference images, and stylistic preferences to pin down the exact aesthetic you desire."
  },
  {
    step: "02",
    title: "Sketch/concept",
    description: "Our illustrators create rough, conceptual pencil/digital sketches to lock in the composition, perspective, and subject matter."
  },
  {
    step: "03",
    title: "Send rough for approval",
    description: "We present the uncolored sketches to you, allowing for structural feedback before we commit to the final rendering."
  },
  {
    step: "04",
    title: "Finalise in vector",
    description: "Upon sketch approval, we precisely trace, outline, and color the illustration using professional vector software for infinite scalability."
  },
  {
    step: "05",
    title: "Deliver all formats",
    description: "We deliver the final artwork in incredibly crisp AI, SVG, EPS, and PNG formats, ready for both vast print projects and sharp web use."
  }
]}
      complementaryServices={[
  {
    name: "A-Grade Website Design",
    url: "/services/a-grade-website-design",
    desc: "Incorporate your stunning new vector illustrations directly into a custom-built website."
  },
  {
    name: "UI/UX Design",
    url: "/services/ui-ux-design",
    desc: "Use these custom vectors as core elements in your app's onboarding screens or empty states."
  },
  {
    name: "Pitch Deck Design",
    url: "/services/pitch-deck-design",
    desc: "Enhance your pitch deck with custom illustrations to clearly explain complex systems."
  }
]}
      faqs={[
  {
    question: "What is the benefit of a vector illustration?",
    answer: "Unlike JPEGs or PNGs, vector illustrations (SVGs) can be scaled infinitely without losing quality. They look sharp on a tiny smartphone screen or a massive billboard."
  },
  {
    question: "Can these illustrations be used commercially?",
    answer: "Yes! Upon final delivery and payment, you own the full commercial rights to use the illustrations wherever you like."
  },
  {
    question: "Do you create character designs or abstract corporate art?",
    answer: "Our talented team can do both. Whether you need an engaging mascot character or clean, abstract corporate graphics for a SaaS website, we can deliver."
  },
  {
    question: "Will I get the source files?",
    answer: "Yes. We always include the raw Adobe Illustrator (.ai) or Figma source files so you have complete control over your assets."
  },
  {
    question: "How long does a complex illustration take?",
    answer: "While our standard turnaround is 48 hours for simple assets, highly detailed or multi-character scenes may take naturally longer based on client feedback loops."
  }
]}
    />
  );
}
