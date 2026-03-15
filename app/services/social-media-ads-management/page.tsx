import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Media Ads Management | Noplin Digital',
  description: 'Professional Social Media Ads Management services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Social Media Ads Management"
      department="Marketing"
      tagline="Professional Social Media Ads Management services tailored to elevate your business."
      turnaround="Ongoing / Monthly"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      about="Our Social Media Ads Management offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Full-Funnel Campaign Architecture",
    description: "A strategically structured Meta, TikTok, or LinkedIn ad account using cold audiences, warm retargeting layers, and exclusion lists to maximize every dollar of ad spend.",
    icon: "target",
    color: "pink"
  },
  {
    title: "Continuous A/B Creative Testing",
    description: "Systematic split-testing of video hooks, static image variations, and primary text angles to consistently lower your Cost-Per-Acquisition over time.",
    icon: "play",
    color: "green"
  },
  {
    title: "Pixel & Server-Side Tracking Setup",
    description: "Flawless Conversions API integration ensuring every purchase or lead generation event is accurately reported back to the platform, defeating iOS privacy signal loss.",
    icon: "shield",
    color: "purple"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Social Media Ads Management."
      process={[
  {
    step: "01",
    title: "Onboard & audit existing pixel tracking",
    description: "We audit your Meta Pixel or LinkedIn Insight Tag setup, correcting any misfiring events and confirming purchase and lead events are passing server-side via CAPI."
  },
  {
    step: "02",
    title: "Develop full-funnel campaign strategy",
    description: "We map a Top-of-Funnel awareness layer, Mid-Funnel engagement layer, and Bottom-of-Funnel retargeting structure aligned precisely to your buyer's decision timeline."
  },
  {
    step: "03",
    title: "Write direct-response ad copy",
    description: "Our copywriters deploy proven frameworks like AIDA and PAS to craft headlines and primary text that scroll-stop the exact audience you are targeting without relying on discounts."
  },
  {
    step: "04",
    title: "Launch initial testing campaigns",
    description: "We deploy controlled budget across multiple audiences and creative variations simultaneously, gathering statistically significant performance data within the first 7 to 10 days."
  },
  {
    step: "05",
    title: "Scale winning ad sets strategically",
    description: "We identify the best-performing audience and creative combinations, cutting underperformers immediately and scaling the winning sets with increased daily budgets."
  },
  {
    step: "06",
    title: "Monthly reporting & creative refresh",
    description: "We deliver transparent ROI reports every month and continuously rotate fresh creatives into your active ad sets to prevent audience fatigue from eroding performance."
  }
]}
      complementaryServices={[
  {
    name: "Ad Creatives (Video)",
    url: "/services/ad-creatives-video",
    desc: "Feed our media buyers an ongoing supply of fresh, platform-native short-form video creatives to continuously test and scale."
  },
  {
    name: "Landing Page Design",
    url: "/services/landing-page-design",
    desc: "Maximize your ad spend ROI by sending clicks to a purpose-built, heavily optimized conversion page rather than a generic website homepage."
  },
  {
    name: "Lead Generation System",
    url: "/services/lead-generation-system",
    desc: "Combine paid social traffic with a complete automated lead qualification and routing system to turn raw clicks into booked calls."
  }
]}
      faqs={[
  {
    question: "Which platforms do you run paid social ads on?",
    answer: "We execute campaigns on Meta (Facebook and Instagram), TikTok, and LinkedIn. Platform selection depends on where your ideal customer actually spends their time."
  },
  {
    question: "Do you create the ad videos and images?",
    answer: "This service focuses on media buying and campaign management. Our Ad Creatives team produces the high-converting visuals that we deploy and test within your account."
  },
  {
    question: "What is the minimum ad budget required?",
    answer: "We recommend a minimum ad spend of $1,500 per month to exit the platform learning phase and gather enough data to optimize. Higher budgets accelerate results significantly."
  },
  {
    question: "How quickly will I see profitable results?",
    answer: "Paid social generates traffic within 24 hours of launch. Achieving consistently profitable ROAS typically requires 3 to 6 weeks of structured testing and iteration."
  },
  {
    question: "Do you guarantee a specific return on ad spend?",
    answer: "No ethical agency guarantees specific ROAS without data from your actual account. We guarantee a disciplined, data-driven methodology that kills losing ads and scales winners."
  },
  {
    question: "Can you take over an existing ad account?",
    answer: "Yes. We audit your existing account structure, creative library, and historical data before implementing our own campaign architecture and optimization process."
  }
]}
    />
  );
}
