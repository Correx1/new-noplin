import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'UI/UX Design | Noplin Digital',
  description: 'Professional UI/UX Design services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="UI/UX Design"
      department="Design"
      tagline="Professional UI/UX Design services tailored to elevate your business."
      turnaround="5–7 Days"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
      about="Our UI/UX Design offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Interactive Figma Prototype",
    description: "A fully clickable, visually spectacular simulation of your final application, allowing you to test core workflows before development starts.",
    icon: "play",
    color: "pink"
  },
  {
    title: "Scalable Component System",
    description: "A bulletproof, developer-ready design library mapping out atomic components including buttons, inputs, alerts, and modal states.",
    icon: "gear",
    color: "yellow"
  },
  {
    title: "Pixel-Perfect Screen Flow",
    description: "Dozens of uniquely engineered, high-fidelity app screens mapped seamlessly to ensure absolutely frictionless, delightful user onboarding.",
    icon: "smartphone",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier UI/UX Design."
      process={[
  {
    step: "01",
    title: "Discovery & requirements session",
    description: "We conduct an intensive session to map out business logic, user personas, and the core problems your software needs to solve."
  },
  {
    step: "02",
    title: "User flow mapping",
    description: "We plot out the exact journey a user takes through the platform, ensuring every click is logical and friction is minimized."
  },
  {
    step: "03",
    title: "Wireframes",
    description: "We build low-fidelity wireframes to establish the structural layout and hierarchy of the interface without being distracted by colors."
  },
  {
    step: "04",
    title: "Client approval",
    description: "You review the wireframes and user flows. This is the stage where we finalize functionality before adding aesthetic polish."
  },
  {
    step: "05",
    title: "High-fidelity design",
    description: "We apply typography, color systems, and modern visual design principles to transform the wireframes into pixel-perfect mockups."
  },
  {
    step: "06",
    title: "Prototype",
    description: "We link the screens together in Figma, providing you with a fully clickable, interactive prototype that mimics the final coded product."
  },
  {
    step: "07",
    title: "Handoff to developer or client",
    description: "We deliver organized Figma files complete with a comprehensive Design System and developer-ready CSS specifications."
  }
]}
      complementaryServices={[
  {
    name: "Custom Web Application",
    url: "/services/custom-web-application",
    desc: "Take your finalized Figma prototypes and let our engineering team code them into reality."
  },
  {
    name: "MVP Development",
    url: "/services/mvp-development",
    desc: "Get your newly designed UI/UX rapidly deployed as a Minimum Viable Product to test the market."
  },
  {
    name: "Branding Consultation",
    url: "/services/branding-consultation",
    desc: "Ensure your app's UI color palette and typography perfectly mirror your overall brand ethos."
  }
]}
      faqs={[
  {
    question: "Do you code the app after designing it?",
    answer: "This specific service focuses solely on the interface design (UI) and user experience (UX). If you need it built, we offer Custom Web Application development as well."
  },
  {
    question: "What software do you use for UI/UX?",
    answer: "We build exclusively in Figma. It is the gold standard for interface design, allowing for seamless real-time collaboration and easy developer handoff."
  },
  {
    question: "Do you provide a Design System?",
    answer: "Yes! We don't just design flat screens; we construct a scalable system of reusable components (buttons, inputs, cards) with defined hover states."
  },
  {
    question: "Can you redesign an existing app that isn't converting well?",
    answer: "Absolutely. We will conduct a UX Audit on your existing platform to identify friction points and then redesign the interface for maximum usability."
  },
  {
    question: "How is this different from Web Design?",
    answer: "Web design focuses heavily on marketing and aesthetic appeal. UI/UX design focuses on complex interactivity, dashboards, and deep software usability."
  }
]}
    />
  );
}
