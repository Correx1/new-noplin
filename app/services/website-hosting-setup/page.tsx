import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Hosting Setup | Noplin Digital',
  description: 'Professional Website Hosting Setup services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Website Hosting Setup"
      department="Development"
      tagline="Professional Website Hosting Setup services tailored to elevate your business."
      turnaround="24 Hours"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Website Hosting Setup offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Server provisioned",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "star",
    color: "purple"
  },
  {
    title: "Domain connected",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "rocket",
    color: "pink"
  },
  {
    title: "SSL active",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "target",
    color: "yellow"
  },
  {
    title: "Site live",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "chart",
    color: "green"
  },
  {
    title: "Credentials handed over",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "monitor",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Website Hosting Setup."
      process={[
  {
    step: "01",
    title: "Select & set up hosting plan",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "02",
    title: "Configure server environment",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "03",
    title: "Connect domain",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "04",
    title: "Enable SSL",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "05",
    title: "Deploy site files",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "06",
    title: "Speed test",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "07",
    title: "Hand over credentials",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  }
]}
      complementaryServices={[
  {
    name: "Digital Strategy Consultation",
    url: "/services/digital-marketing-consultation"
  },
  {
    name: "A-Grade Website Design",
    url: "/services/a-grade-website-design"
  }
]}
      faqs={[
  {
    question: "What is included in the Website Hosting Setup service?",
    answer: "This service includes all the deliverables listed above, customized specifically to your brand requirements and growth goals."
  },
  {
    question: "How long does the Website Hosting Setup process take?",
    answer: "The standard turnaround time is 24 Hours, although this may vary slightly depending on project complexity and feedback loops."
  }
]}
    />
  );
}
