import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Book / Publication Design | Noplin Digital',
  description: 'Professional Book / Publication Design services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Book / Publication Design"
      department="Design"
      tagline="Professional Book / Publication Design services tailored to elevate your business."
      turnaround="5 Days"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
      about="Our Book / Publication Design offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Striking Cover Design",
    description: "A brilliantly conceived, typography-rich exterior cover designed meticulously to stand out on crowded Amazon digital shelves and physical displays.",
    icon: "document",
    color: "orange"
  },
  {
    title: "Typeset Interior Layout",
    description: "Immaculate, highly legible chapter formatting executing strict typographical hierarchy, perfect margins, and elegant spacing rules.",
    icon: "brush",
    color: "purple"
  },
  {
    title: "Ready-to-Print Print PDF",
    description: "A thoroughly proofed, ultra-high resolution CMYK PDF constructed with precise bleed and crop marks, strictly ready for high-end printing.",
    icon: "rocket",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Book / Publication Design."
      process={[
  {
    step: "01",
    title: "Receive manuscript & brief",
    description: "We collect your finalized manuscript, formatting requirements, and any specific creative direction you have for the cover and interior feel."
  },
  {
    step: "02",
    title: "Design cover",
    description: "We present multiple high-impact cover concepts designed to instantly grab attention on both digital thumbnails and physical shelves."
  },
  {
    step: "03",
    title: "Layout interior pages",
    description: "Our typesetters meticulously format the interior, focusing on margins, premium typography, chapter headers, and readability."
  },
  {
    step: "04",
    title: "Client review",
    description: "We offer a complete review of the digital galley, allowing you to check the flow, imagery placement, and typographic consistency."
  },
  {
    step: "05",
    title: "Revisions",
    description: "We execute any final tweaks, adjusting specific pages or resolving any orphans/widows in the paragraph formatting."
  },
  {
    step: "06",
    title: "Deliver print-ready PDF + source files",
    description: "We provide a pristine, CMYK print-ready PDF with bleed and crop marks, along with the raw InDesign source files."
  }
]}
      complementaryServices={[
  {
    name: "Landing Page Design",
    url: "/services/landing-page-design",
    desc: "Launch a highly optimized landing page specifically designed to sell your new publication."
  },
  {
    name: "Social Media Management",
    url: "/services/social-media-management",
    desc: "Build an audience and hype up your publication launch across your social channels."
  },
  {
    name: "Ad Creatives (Image)",
    url: "/services/ad-creatives-image",
    desc: "Promote your book through paid ads utilizing premium 3D mockups of the cover."
  }
]}
      faqs={[
  {
    question: "Do you design both the cover and the interior formatting?",
    answer: "Yes, this is an end-to-end service. We design a striking exterior cover and handle the intricate typographic formatting of the interior pages."
  },
  {
    question: "Can you format this for Amazon KDP?",
    answer: "Absolutely. We are highly familiar with Kindle Direct Publishing guidelines and will provide a PDF perfectly configured for their printing specs."
  },
  {
    question: "What software do you use for layout?",
    answer: "We strictly use Adobe InDesign for all publication layouts, as it is the undisputed industry standard for handling long-form text and print."
  },
  {
    question: "Do I need to have the text fully edited before layout?",
    answer: "Yes. We strongly recommend sending us the 100% final, proofread manuscript. Making heavy text edits after layout begins will delay the project significantly."
  },
  {
    question: "Will you provide the native InDesign files?",
    answer: "Yes, we always deliver the packaged InDesign files containing the links and fonts so your publisher or team can make future editions easily."
  }
]}
    />
  );
}
