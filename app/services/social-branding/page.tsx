import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Branding | Noplin Digital',
  description: 'Professional Social Branding services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Social Branding"
      department="Design"
      tagline="Professional Social Branding services tailored to elevate your business."
      turnaround="Not specified"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
      about="Our Social Branding offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Before & After Image",
    description: "A compelling comparison graphic visually demonstrating the dramatic improvement we've made to your digital profile. Perfect for your own marketing.",
    icon: "camera",
    color: "purple"
  },
  {
    title: "Cover Photos",
    description: "High-resolution, custom-designed cover photos perfectly sized and optimized for LinkedIn, X, Facebook, and YouTube to maximize your digital real estate.",
    icon: "monitor",
    color: "blue"
  },
  {
    title: "Profile Picture",
    description: "A crisp, striking profile picture or logo adaptation that ensures you are instantly recognizable across all social feeds.",
    icon: "star",
    color: "yellow"
  },
  {
    title: "Social Branding PDF Guideline",
    description: "A comprehensive brand rulebook containing your exact color hex codes, typography hierarchy, and spacing rules to keep future posts cohesive.",
    icon: "document",
    color: "pink"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Social Branding."
      process={[
  {
    step: "01",
    title: "Get Project Brief",
    description: "We start with a deep dive into your brand vision, target demographic, and specific goals to ensure our creative direction perfectly aligns with your business objectives."
  },
  {
    step: "02",
    title: "Audit Social Media Profile",
    description: "Our team conducts a comprehensive analysis of your current social presence, identifying gaps, layout issues, and opportunities for visual enhancement."
  },
  {
    step: "03",
    title: "Design cover & profile assets",
    description: "We create highly engaging, custom-sized cover photos, profile pictures, and banner assets tailored to each specific social media platform's best practices."
  },
  {
    step: "04",
    title: "Client Approval",
    description: "We present the initial branding concepts for your review, allowing for collaborative feedback to ensure the final designs exceed expectations."
  },
  {
    step: "05",
    title: "Send Deliverables",
    description: "Upon approval, we deliver all high-resolution assets neatly organized alongside a comprehensive Social Branding PDF Guideline to keep your future posts visually consistent."
  }
]}
      complementaryServices={[
  {
    name: "Social Media Management",
    url: "/services/social-media-management",
    desc: "Let our team manage your newly branded profiles with consistent, high-quality daily content."
  },
  {
    name: "Ad Creatives (Image)",
    url: "/services/ad-creatives-image",
    desc: "Leverage your new visual identity in paid campaigns with high-converting static creatives."
  },
  {
    name: "Content Marketing",
    url: "/services/content-marketing",
    desc: "Pair your premium social presence with authoritative blog posts and industry whitepapers."
  }
]}
      faqs={[
  {
    question: "What platforms do you design social branding for?",
    answer: "We cover all major platforms including Instagram, LinkedIn, Facebook, X (Twitter), YouTube, and TikTok, ensuring pixel-perfect dimensions for each."
  },
  {
    question: "Will my social branding match my existing website?",
    answer: "Absolutely. We ensure your new social assets seamlessly integrate with your existing brand guidelines, website colors, and typography."
  },
  {
    question: "How is the Social Branding PDF Guideline helpful?",
    answer: "The guideline acts as a rulebook for your team. It dictates which colors to use, typography hierarchy, and spacing rules so any future content stays cohesive."
  },
  {
    question: "Can you use our existing logo or do we need a new one?",
    answer: "We can definitely work with your existing logo. If you need a brand new logo, we recommend starting with our Brand Identity service first."
  },
  {
    question: "How many revisions do I get?",
    answer: "We typically include two rounds of revisions in our standard package to ensure you are 100% satisfied with the outcome."
  }
]}
    />
  );
}
