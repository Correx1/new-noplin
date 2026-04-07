import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Media Management | Noplin Digital',
  description: 'Professional Social Media Management services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Social Media Management"
      department="Marketing"
      tagline="Professional Social Media Management services tailored to elevate your business."
      turnaround="Monthly Cycle"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      about="Our Social Media Management offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Custom Monthly Content Calendar",
    description: "An intensely strategic grid of educational carousels, engaging reels, and promotional posts meticulously scheduled weeks in advance for your review and approval.",
    icon: "calendar",
    color: "blue"
  },
  {
    title: "Community Engagement Management",
    description: "Proactive daily interaction responding to comments, managing DMs, and strategically engaging with related industry accounts to compound organic reach.",
    icon: "chat",
    color: "amber"
  },
  {
    title: "Monthly Performance Analytics Report",
    description: "A transparent monthly deep-dive tracking follower growth, post reach, engagement rates, and the demographic evolution of your growing audience.",
    icon: "chart",
    color: "yellow"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Social Media Management."
      process={[
  {
    step: "01",
    title: "Audit existing audience & content",
    description: "We analyze your current follower base, top-performing posts, and competitor strategies to understand which content pillars create the most algorithmic engagement for your niche."
  },
  {
    step: "02",
    title: "Develop brand-specific content strategy",
    description: "We construct a customized monthly calendar balancing value-driven educational posts, behind-the-scenes content, social proof, and subtle promotional touches that avoid feeling salesy."
  },
  {
    step: "03",
    title: "Design & write daily content",
    description: "Our designers create thumb-stopping graphics and our copywriters draft hook-driven captions tailored to each platform's specific culture, optimal post length, and algorithm preferences."
  },
  {
    step: "04",
    title: "Client approval workflow",
    description: "We send the month's complete content payload through your review dashboard so you can approve, request tweaks, or redirect any piece before anything goes public."
  },
  {
    step: "05",
    title: "Publish at peak-engagement hours",
    description: "We use enterprise scheduling tools to post at the exact times your specific audience is most active, maximizing early engagement signals that trigger broader algorithmic distribution."
  },
  {
    step: "06",
    title: "Engage & grow community actively",
    description: "We moderate your timeline in real time responding to key comments, engaging with industry hashtags, and strategically interacting with accounts in your target audience's following list."
  }
]}
      complementaryServices={[
  {
    name: "Social Media Design (Content Pack)",
    url: "/services/social-media-design-content-pack",
    desc: "Give your team editable Canva templates so they can supplement our managed posts with their own branded assets any time."
  },
  {
    name: "Social Branding",
    url: "/services/social-branding",
    desc: "Ensure your profile banners and highlights look polished and professional before we drive any significant traffic to your profiles."
  },
  {
    name: "Social Media Ads Management",
    url: "/services/social-media-ads-management",
    desc: "Amplify your best-performing organic content with targeted advertising spend to dramatically accelerate audience and revenue growth."
  }
]}
      faqs={[
  {
    question: "Which social media platforms do you manage?",
    answer: "We specialize in LinkedIn for B2B authority building, Instagram and TikTok for visual consumer brands, and Facebook and X for broader community and engagement campaigns."
  },
  {
    question: "Do I need to provide the photos and videos?",
    answer: "For businesses that serve physical locations or sell physical products, you supply raw content. We handle all editing, graphic design, captioning, and scheduling entirely."
  },
  {
    question: "Is social media for brand building or direct sales?",
    answer: "Organic social media is a long-term investment in community trust and brand authority. For immediate direct-response sales, pair this with our Social Media Ads Management service."
  },
  {
    question: "Do you reply to customer inquiries in DMs?",
    answer: "We handle general engagement and filter DMs. Complex customer service complaints or purchase-specific questions are flagged and forwarded to your internal team immediately."
  },
  {
    question: "Will the content sound like my brand voice?",
    answer: "Yes. We spend the entire onboarding phase documenting your exact tone, language preferences, and content direction guide before writing a single caption."
  },
  {
    question: "How many posts do you publish per week?",
    answer: "Our packages typically range from 5 to 14 posts per week depending on your platform mix and chosen plan. We agree on a specific cadence during onboarding."
  }
]}
    />
  );
}
