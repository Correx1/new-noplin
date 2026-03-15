import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Landing Page Hosting & Setup | Noplin Digital',
  description: 'Professional Landing Page Hosting & Setup services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Landing Page Hosting & Setup"
      department="Development"
      tagline="Professional Landing Page Hosting & Setup services tailored to elevate your business."
      turnaround="24 Hours"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Landing Page Hosting & Setup offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Domain connection",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "star",
    color: "purple"
  },
  {
    title: "SSL certificate",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "rocket",
    color: "pink"
  },
  {
    title: "Hosting setup",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "target",
    color: "yellow"
  },
  {
    title: "Speed optimisation",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "chart",
    color: "green"
  },
  {
    title: "Live URL delivered",
    description: "A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.",
    icon: "monitor",
    color: "blue"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Landing Page Hosting & Setup."
      process={[
  {
    step: "01",
    title: "Get hosting credentials or set up new hosting",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "02",
    title: "Upload & connect files",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "03",
    title: "Configure SSL",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "04",
    title: "Test loading speed",
    description: "Our specialists handle this step meticulously to ensure top quality and seamless execution."
  },
  {
    step: "05",
    title: "Confirm live with client",
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
    question: "What is included in the Landing Page Hosting & Setup service?",
    answer: "This service includes all the deliverables listed above, customized specifically to your brand requirements and growth goals."
  },
  {
    question: "How long does the Landing Page Hosting & Setup process take?",
    answer: "The standard turnaround time is 24 Hours, although this may vary slightly depending on project complexity and feedback loops."
  }
]}
    />
  );
}
