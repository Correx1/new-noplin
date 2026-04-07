import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'WordPress Development | Noplin Digital',
  description: 'Professional WordPress Development services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="WordPress Development"
      department="Development"
      tagline="Professional WordPress Development services tailored to elevate your business."
      turnaround="5–7 Days"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our WordPress Development offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Custom-Coded WordPress Theme",
    description: "A lean, built-from-scratch PHP and React theme that eliminates the performance drag and security holes found in every off-the-shelf ThemeForest template.",
    icon: "brush",
    color: "purple"
  },
  {
    title: "Advanced Custom Fields Architecture",
    description: "A tailored backend editing interface that lets your marketing team safely update page content within predefined design boundaries without ever touching code.",
    icon: "gear",
    color: "blue"
  },
  {
    title: "Security Hardening Configuration",
    description: "Database prefix changes, custom login URLs, two-factor authentication, Web Application Firewall setup, and automated offsite backups to lock down your WordPress installation.",
    icon: "shield",
    color: "pink"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier WordPress Development."
      process={[
  {
    step: "01",
    title: "Define CMS architecture requirements",
    description: "We assess your publishing workflows, team structure, and content types to design the right custom post types, taxonomies, and page templates before writing any code."
  },
  {
    step: "02",
    title: "Configure staging environment",
    description: "We set up an isolated staging server and install a clean, minimal WordPress core with only the essential plugins required for the project, nothing more."
  },
  {
    step: "03",
    title: "Develop custom theme from scratch",
    description: "We write every template file, stylesheet, and interaction from scratch in pure PHP and React, producing clean, fast code that no page builder or pre-written theme could match."
  },
  {
    step: "04",
    title: "Build backend editing interfaces",
    description: "We structure the Advanced Custom Fields layout so your team can edit every content section safely through intuitive fields rather than raw HTML in the WordPress editor."
  },
  {
    step: "05",
    title: "Security hardening & caching setup",
    description: "We harden the installation with login protections, firewall rules, and server-side caching to ensure the site loads almost instantly without compromising security."
  },
  {
    step: "06",
    title: "Handover with training walkthrough",
    description: "We deliver ownership of the codebase and record a detailed walkthrough video showing your team how to publish posts, update team members, and handle routine content changes."
  }
]}
      complementaryServices={[
  {
    name: "SEO Optimization",
    url: "/services/seo-optimization",
    desc: "Leverage your new lean, fast WordPress codebase as the foundation for a comprehensive SEO strategy targeting high-value, buyer-intent keywords."
  },
  {
    name: "Content Marketing",
    url: "/services/content-marketing",
    desc: "Use your new CMS capabilities to their full potential with a consistent, high-quality content publishing schedule that builds topical authority."
  },
  {
    name: "Web Hosting",
    url: "/services/web-hosting",
    desc: "Deploy your WordPress site onto cloud hosting specifically tuned for WordPress performance, security, and scalability."
  }
]}
      faqs={[
  {
    question: "Why choose a custom theme over a template?",
    answer: "Templates ship with thousands of unused features that bloat your page size, destroy load speed, and create security vulnerabilities. Custom themes are built specifically for your site and nothing else."
  },
  {
    question: "Will my WordPress site load fast?",
    answer: "Yes. We custom-code without page builders like Elementor, implement server-side object caching, and optimize every image and asset to achieve near-instant load times."
  },
  {
    question: "How do you protect the site from hackers?",
    answer: "We combine database hardening, custom login URLs, two-factor authentication, login attempt limiting, and a Web Application Firewall to protect against the most common WordPress attack vectors."
  },
  {
    question: "Can you migrate content from Wix or Squarespace?",
    answer: "Yes. We extract your existing content, reimport it correctly into the new WordPress structure, and set up all necessary 301 redirects to protect your current search engine rankings."
  },
  {
    question: "Can my team add blog posts and pages themselves?",
    answer: "Yes. The entire purpose of a custom WordPress CMS is enabling your team to publish and edit content confidently without requiring a developer for every routine update."
  },
  {
    question: "Do you handle plugin updates and maintenance?",
    answer: "Post-launch plugin and security updates are covered during the initial 30-day support window. For ongoing maintenance, we offer monthly retainer packages."
  }
]}
    />
  );
}
