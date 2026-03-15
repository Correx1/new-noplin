import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'MVP Development | Noplin Digital',
  description: 'Professional MVP Development services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="MVP Development"
      department="Development"
      tagline="Professional MVP Development services tailored to elevate your business."
      turnaround="3–6 Weeks"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our MVP Development offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Core Feature Engineering",
    description: "A heavily focused, functional codebase entirely stripped of non-essential features to accelerate your time-to-market and get real user feedback as fast as possible.",
    icon: "target",
    color: "pink"
  },
  {
    title: "Scalable Starting Architecture",
    description: "A lightweight yet resilient code foundation built with genuine frameworks so you do not have to throw it away and rebuild once your product gains traction.",
    icon: "rocket",
    color: "blue"
  },
  {
    title: "Analytics & Behavior Tracking",
    description: "Vital event tracking hooks installed from day one, allowing you to monitor exact user behavior, identify drop-off points, and gather compelling data for investors.",
    icon: "chart",
    color: "yellow"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier MVP Development."
      process={[
  {
    step: "01",
    title: "Feature prioritization workshop",
    description: "We sit down and ruthlessly trim the scope, selecting only the single core feature set absolutely required to validate market demand and gather real user feedback."
  },
  {
    step: "02",
    title: "Rapid architecture setup",
    description: "We select agile frameworks like Supabase and Next.js that dramatically cut backend setup time, allowing us to focus engineering effort on core user value."
  },
  {
    step: "03",
    title: "High-speed UI development",
    description: "Our engineers build a clean, intuitive interface using component libraries to assemble a functional, user-ready product in days rather than months."
  },
  {
    step: "04",
    title: "Core logic connection & testing",
    description: "We wire up authentication, the primary user workflow, and test heavily for critical failures that would block a real user from completing the key action."
  },
  {
    step: "05",
    title: "Staging deployment for client review",
    description: "We deploy the MVP to a live staging URL so you can log in, test the core experience yourself, and provide targeted feedback before the public launch."
  },
  {
    step: "06",
    title: "Soft launch to beta users",
    description: "We deploy to a production Vercel or AWS environment, onboard your first batch of beta testers, and monitor the analytics closely for behavior patterns."
  }
]}
      complementaryServices={[
  {
    name: "UI/UX Design",
    url: "/services/ui-ux-design",
    desc: "Design an intuitive, visually polished interface in Figma before our engineers begin rapidly coding your MVP."
  },
  {
    name: "Pitch Deck Design",
    url: "/services/pitch-deck-design",
    desc: "Combine your functional MVP demo with a stunning investor presentation to dramatically increase your fundraising success rate."
  },
  {
    name: "Landing Page Design",
    url: "/services/landing-page-design",
    desc: "Build a conversion-focused waitlist or signup page to capture early beta users before the MVP launches publicly."
  }
]}
      faqs={[
  {
    question: "How is an MVP different from a Custom Web App?",
    answer: "An MVP focuses entirely on speed and market validation. We use rapid backend solutions like Supabase instead of building custom infrastructure, cutting weeks off the timeline."
  },
  {
    question: "Will the MVP code be scalable later?",
    answer: "Yes. We deliberately avoid no-code tools that force rebuilds. Our MVPs use real React and Node.js code that can be extended to a full product without starting over."
  },
  {
    question: "How long does it take to build an MVP?",
    answer: "Typically 4 to 8 weeks, depending on the complexity of the critical core feature. Our guiding principle is maximum speed without sacrificing usability."
  },
  {
    question: "Can I change the direction mid-build?",
    answer: "Minor pivots are always accommodated. For major directional changes, we reassess the timeline and scope together to make sure the pivot makes commercial sense."
  },
  {
    question: "What happens after the MVP launches?",
    answer: "Once you validate demand and secure funding or early revenue, we move you into an ongoing development retainer to systematically build out the full product roadmap."
  },
  {
    question: "Do you help with investor presentations alongside the MVP?",
    answer: "Yes. Our Pitch Deck Design team can build a compelling investor presentation that showcases the live MVP alongside your market data and financial projections."
  }
]}
    />
  );
}
