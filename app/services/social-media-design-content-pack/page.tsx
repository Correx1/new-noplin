import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Media Design (Content Pack) | Noplin Digital',
  description: 'Professional Social Media Design (Content Pack) services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Social Media Design (Content Pack)"
      department="Design"
      tagline="Professional Social Media Design (Content Pack) services tailored to elevate your business."
      turnaround="72 Hours"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
      about="Our Social Media Design (Content Pack) offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "12-20 Master Templates",
    description: "A beautiful, strategically designed library of templates built directly in Canva or Figma for quotes, announcements, and educational posts.",
    icon: "brush",
    color: "purple"
  },
  {
    title: "Instagram Carousel Layouts",
    description: "Seamless, high-retention multi-slide carousel templates designed to maximize dwell time and algorithm preference.",
    icon: "smartphone",
    color: "yellow"
  },
  {
    title: "Highlight Covers",
    description: "Matching, highly polished highlight icons to instantly elevate the aesthetic appeal of your profile landing page.",
    icon: "star",
    color: "pink"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Social Media Design (Content Pack)."
      process={[
  {
    step: "01",
    title: "Get Brand Assets & Brief",
    description: "We collect your logos, fonts, color palettes, and stylistic preferences to ensure the templates reflect your exact aesthetic."
  },
  {
    step: "02",
    title: "Design template set",
    description: "We craft a diverse range of 10-20 highly engaging post, carousel, and story templates meant to accommodate quotes, promotions, and educational content."
  },
  {
    step: "03",
    title: "Client review",
    description: "We present the designed pack for your feedback, ensuring the layouts are both beautiful and functionally easy for your team to use."
  },
  {
    step: "04",
    title: "Revisions",
    description: "We refine the templates according to your notes, adjusting spacing, text hierarchy, or graphical elements as needed."
  },
  {
    step: "05",
    title: "Deliver editable files + PDF preview",
    description: "We hand over the fully editable Canva or AI files, alongside a PDF preview guide showing best practices for using the templates."
  }
]}
      complementaryServices={[
  {
    name: "Social Media Management",
    url: "/services/social-media-management",
    desc: "Don't have time to use the templates? Let us handle the daily posting and community management."
  },
  {
    name: "Social Branding",
    url: "/services/social-branding",
    desc: "Ensure your overarching profile aesthetic matches the high quality of your new daily posts."
  },
  {
    name: "Content Marketing",
    url: "/services/content-marketing",
    desc: "Use your new templates to promote the long-form SEO articles we write for your blog."
  }
]}
      faqs={[
  {
    question: "Are these templates editable in Canva?",
    answer: "Yes, we frequently build these content packs directly in Canva so that you or your team can easily drop in new text and images without needing advanced design software."
  },
  {
    question: "Do you provide the actual written content?",
    answer: "This specific service focuses on the visual design layer (templates). If you need caption writing and posting, check out our Social Media Management service."
  },
  {
    question: "Can you design highlight covers too?",
    answer: "Yes! As part of the content pack, we also design cohesive Instagram Highlight covers to make your profile look incredibly premium."
  },
  {
    question: "How is this different from Social Branding?",
    answer: "Social Branding focuses on your profile setup (banner, logo). The Content Pack focuses on giving you templates for your daily/weekly feed posts."
  },
  {
    question: "Do you include carousel templates?",
    answer: "Absolutely. Seamless carousels are some of the highest-converting formats on social media, and we include premium layouts for them in your pack."
  }
]}
    />
  );
}
