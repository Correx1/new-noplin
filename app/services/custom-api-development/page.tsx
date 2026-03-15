import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Custom API Development | Noplin Digital',
  description: 'Professional Custom API Development services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Custom API Development"
      department="Development"
      tagline="Professional Custom API Development services tailored to elevate your business."
      turnaround="1–2 Weeks"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Custom API Development offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Custom RESTful Core API",
    description: "A deeply secure, meticulously structured backend API built in Node.js or Python to serve the exact data your frontend applications require efficiently.",
    icon: "rocket",
    color: "green"
  },
  {
    title: "3rd-Party Service Integration",
    description: "Flawless code bridges connecting your system to external platforms like Stripe, Twilio, Salesforce, or OpenAI with rigorous error handling.",
    icon: "shield",
    color: "purple"
  },
  {
    title: "Swagger API Documentation",
    description: "A meticulously mapped interactive endpoint dictionary enabling your engineering team or external partners to integrate your API confidently and immediately.",
    icon: "document",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Custom API Development."
      process={[
  {
    step: "01",
    title: "Define data structures & endpoints",
    description: "We map out the exact data payloads your application consumes, designing logical, consistent, and predictable route structures before any server code is written."
  },
  {
    step: "02",
    title: "Set up secure server environment",
    description: "We provision the cloud infrastructure and configure deep authentication protocols including JWT tokens and OAuth 2.0 to protect all sensitive data access."
  },
  {
    step: "03",
    title: "Develop core API functionality",
    description: "We write the robust backend logic handling database queries, data transformations, and returning clean, predictable JSON responses to your frontends."
  },
  {
    step: "04",
    title: "Integrate 3rd-party webhooks & APIs",
    description: "We establish secure API handshakes with external software, handling payment processing events, CRM data synchronization, and real-time webhook callbacks."
  },
  {
    step: "05",
    title: "Stress testing & rate limiting",
    description: "We bombard the API with intense traffic simulations to ensure it scales correctly and implements protective rate limiting to prevent abuse."
  },
  {
    step: "06",
    title: "Publish interactive documentation",
    description: "We hand over elegant Swagger documentation detailing every available endpoint, parameter, required header, and expected response object for clear developer reference."
  }
]}
      complementaryServices={[
  {
    name: "Custom Web Application",
    url: "/services/custom-web-application",
    desc: "Build the full-stack application that consumes your new API, handling both frontend UI and backend architecture together."
  },
  {
    name: "Third-Party Integration",
    url: "/services/third-party-integration",
    desc: "Connect your new API to the full ecosystem of tools your business already uses, from CRMs to payment gateways."
  },
  {
    name: "Website Hosting & Setup",
    url: "/services/website-hosting-setup",
    desc: "Deploy your custom API to a secure, auto-scaling cloud server environment with proper monitoring and CI/CD pipelines."
  }
]}
      faqs={[
  {
    question: "Do you build REST or GraphQL APIs?",
    answer: "We build whatever your frontend technology demands. We default to well-structured REST APIs for predictability, but we build GraphQL for applications requiring highly flexible, nested data queries."
  },
  {
    question: "How do you secure the API?",
    answer: "We implement strict JWT authentication, OAuth 2.0 for social logins, rate-limiting to prevent DDoS attacks, and thorough input sanitization to block SQL injection attempts."
  },
  {
    question: "Can you integrate with our legacy systems?",
    answer: "Yes. If your legacy system exposes webhooks, a SOAP interface, or any REST endpoint, we build custom middleware to bridge the gap cleanly."
  },
  {
    question: "What backend languages do you use?",
    answer: "We primarily engineer scalable APIs in Node.js using Express or NestJS, and Python using FastAPI or Django REST Framework depending on the project requirements."
  },
  {
    question: "Do you handle the database as well?",
    answer: "Yes. API development and database design are deeply interconnected. We design both the API layer and the underlying schema together for optimal performance."
  },
  {
    question: "Will you document the API for our team?",
    answer: "Absolutely. Every API we build ships with full Swagger/OpenAPI documentation so your frontend team or third-party partners can integrate immediately without guessing."
  }
]}
    />
  );
}
