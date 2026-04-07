import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Custom Web Application | Noplin Digital',
  description: 'Professional Custom Web Application services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Custom Web Application"
      department="Development"
      tagline="Professional Custom Web Application services tailored to elevate your business."
      turnaround="3–10 Weeks"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Custom Web Application offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Scalable Full-Stack Architecture",
    description: "A highly modular, robust frontend and backend environment built using Next.js, Node, and PostgreSQL, designed to handle real-world traffic spikes without performance degradation.",
    icon: "rocket",
    color: "blue"
  },
  {
    title: "Secure API Integration",
    description: "Flawless communication with third-party software including payment gateways like Stripe, complex CRMs like HubSpot, or external data feeds via secure API layers.",
    icon: "shield",
    color: "green"
  },
  {
    title: "Comprehensive Developer Documentation",
    description: "Thoroughly written technical documentation ensuring any future engineering teams can quickly understand the architecture and safely extend the codebase.",
    icon: "document",
    color: "pink"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Custom Web Application."
      process={[
  {
    step: "01",
    title: "Systems architecture planning",
    description: "We map the precise technology stack, database schemas, authentication strategy, and external API dependencies before writing a single line of code."
  },
  {
    step: "02",
    title: "Database & backend setup",
    description: "Our engineers build a secure, scalable backend infrastructure, constructing the RESTful or GraphQL APIs required for seamless frontend communication."
  },
  {
    step: "03",
    title: "Frontend development",
    description: "We develop the user interface using the best stack, ensuring load times are blazing."
  },
  {
    step: "04",
    title: "API & 3rd-party integration",
    description: "We connect the required external services such as Stripe for payments, SendGrid for email, Twilio for SMS, or OpenAI for AI features."
  },
  {
    step: "05",
    title: "Rigorous security & QA",
    description: "We subject the application to intense stress testing, checking for common vulnerabilities like SQL injection, XSS, and ensuring data encryption compliance."
  },
  {
    step: "06",
    title: "Deployment & handover",
    description: "We deploy the application to a scalable cloud environment and hand over full developer documentation, environment variables, and all access credentials."
  }
]}
      complementaryServices={[
  {
    name: "UI/UX Design",
    url: "/services/ui-ux-design",
    desc: "Secure a meticulously optimized application interface design in Figma before any development begins."
  },
  {
    name: "MVP Development",
    url: "/services/mvp-development",
    desc: "Scope down the requirements and launch a lean Minimum Viable Product first to validate the market before full investment."
  },
  {
    name: "SEO Optimization",
    url: "/services/seo-optimization",
    desc: "Ensure your new web application is built with strong technical SEO foundations to attract organic traffic from launch."
  }
]}
      faqs={[
  {
    question: "What tech stack do you specialize in?",
    answer: "We build custom web applications using Next.js for the frontend, Node.js or Python for the backend, and PostgreSQL or MongoDB for the database layer."
  },
  {
    question: "How is this different from a normal website?",
    answer: "A website is informational. A web application handles complex user interactivity, data processing, authentication, and business logic like a SaaS dashboard or a booking platform."
  },
  {
    question: "Will I own all the source code?",
    answer: "Yes, 100%. Upon final delivery and payment, the entire codebase and all intellectual property rights are completely transferred to you."
  },
  {
    question: "Can you integrate payment gateways?",
    answer: "Absolutely. We integrate highly secure payment platforms including Stripe, PayPal, Flutterwave, and custom merchant APIs for complex billing scenarios."
  },
  {
    question: "Do you offer ongoing maintenance after launch?",
    answer: "Yes. Complex applications require consistent upkeep. We offer monthly retainer packages covering security patches, bug fixes, and new feature development."
  },
  {
    question: "How do you handle user authentication?",
    answer: "We implement industry-standard authentication using JWT tokens and OAuth 2.0 for social logins, making sign-up, login, and session management completely secure."
  }
]}
    />
  );
}
