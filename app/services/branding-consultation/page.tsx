import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Branding Consultation | Noplin Digital',
  description: 'Professional Branding Consultation services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Branding Consultation"
      department="Consulting"
      tagline="Professional Branding Consultation services tailored to elevate your business."
      turnaround="1–2 Sessions"
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
      about="Our Branding Consultation offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Brand Positioning Framework",
    description: "A clearly articulated brand positioning statement defining your unique value proposition, target audience, and differentiation from competitors in a single memorable sentence.",
    icon: "target",
    color: "pink"
  },
  {
    title: "Voice & Tone Guidelines",
    description: "A detailed linguistic rulebook defining exactly how your brand communicates, the vocabulary it uses, the emotions it evokes, and the personality it projects across all channels.",
    icon: "pen",
    color: "yellow"
  },
  {
    title: "Brand Strategy Document",
    description: "A comprehensive written strategy file encapsulating your brand archetype, mission, values, messaging pillars, and competitive positioning for consistent application company-wide.",
    icon: "document",
    color: "purple"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Branding Consultation."
      process={[
  {
    step: "01",
    title: "Brand discovery workshop",
    description: "We conduct an in-depth session exploring your origin story, core values, audience psychology, competitive landscape, and the emotional territory you want your brand to own."
  },
  {
    step: "02",
    title: "Define brand archetype & positioning",
    description: "We identify the archetypal character your brand embodies whether that is the Expert, the Rebel, the Nurturer, or another and build your positioning around that core personality."
  },
  {
    step: "03",
    title: "Clarify target audience personas",
    description: "We build detailed customer personas capturing the fears, ambitions, language, and decision-making triggers of your most valuable audience segments."
  },
  {
    step: "04",
    title: "Develop core messaging framework",
    description: "We craft your primary value proposition, key messaging pillars, elevator pitch, and objection-handling statements that your team uses consistently across all channels."
  },
  {
    step: "05",
    title: "Write voice & tone guidelines",
    description: "We define the vocabulary, sentence structure, emotional tone, and communication style that makes your brand sound distinctively like itself whether in a social post or a formal proposal."
  },
  {
    step: "06",
    title: "Present & refine the strategy",
    description: "We walk through the complete brand strategy document together, refining specific elements based on your feedback before finalizing for organization-wide distribution."
  }
]}
      complementaryServices={[
  {
    name: "A-Grade Website Design",
    url: "/services/a-grade-website-design",
    desc: "Apply your new brand strategy to a completely custom, high-performance website that communicates your positioning to every visitor."
  },
  {
    name: "Social Branding",
    url: "/services/social-branding",
    desc: "Translate your brand strategy into cohesive visual assets across every social media platform for a unified professional presence."
  },
  {
    name: "Pitch Deck Design",
    url: "/services/pitch-deck-design",
    desc: "Present your newly defined brand and value proposition to investors or enterprise clients through a compelling, professional pitch deck."
  }
]}
      faqs={[
  {
    question: "Do we need branding consultation before building a website?",
    answer: "Strongly yes. Without a clear brand strategy, your website will have confusing messaging. A defined positioning foundation makes every design and copywriting decision dramatically faster and more effective."
  },
  {
    question: "Is this about logo and colors or something deeper?",
    answer: "This consultation goes far deeper than visual identity. It establishes the strategic brand foundation—positioning, messaging, voice, and values that all visual work should then translate and express."
  },
  {
    question: "We already have a logo. Do we still need this?",
    answer: "Having a logo does not mean you have a brand strategy. Many businesses with logos still lack consistent messaging, a clear value proposition, and a defined audience. This session addresses those foundations."
  },
  {
    question: "How long does the branding consultation process take?",
    answer: "The initial discovery session runs 2 hours. We deliver the complete Brand Strategy Document within 5 to 7 business days, with a follow-up review call to walk through and finalize the content."
  },
  {
    question: "Will you help us implement the brand strategy?",
    answer: "Yes. Our team can apply the strategy to your website, social media, pitch decks, and advertising campaigns, ensuring consistent brand expression across every customer touchpoint."
  },
  {
    question: "Can you help rebrand an established business?",
    answer: "Absolutely. Rebranding an existing business requires extra care to retain existing customer recognition while evolving the brand forward. We specialize in strategic repositioning alongside new visual direction."
  }
]}
    />
  );
}
