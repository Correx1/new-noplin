import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Web Hosting | Noplin Digital',
  description: 'Professional Web Hosting services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Web Hosting"
      department="Development"
      tagline="Professional Web Hosting services tailored to elevate your business."
      turnaround="24 Hours"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Web Hosting offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Elastic Cloud Server Environment",
    description: "Auto-scaling cloud infrastructure that dynamically expands server resources during traffic spikes and contracts during low periods to optimize both performance and hosting costs.",
    icon: "rocket",
    color: "blue"
  },
  {
    title: "Enterprise Security & DDoS Protection",
    description: "Cloudflare edge protection combined with Web Application Firewall rules that block malicious bots and brute-force attacks before they reach your web server.",
    icon: "shield",
    color: "pink"
  },
  {
    title: "Automated Daily Backups",
    description: "Scheduled offsite database and file backups retained for 30 days, ensuring complete restoration capability in the event of accidental data loss or server failure.",
    icon: "gear",
    color: "green"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Web Hosting."
      process={[
  {
    step: "01",
    title: "Audit hosting requirements",
    description: "We assess your current traffic levels, application framework, database type, and expected growth trajectory to determine the correct server size and cloud provider."
  },
  {
    step: "02",
    title: "Provision cloud infrastructure",
    description: "We set up your virtual server environment on AWS, DigitalOcean, or Vercel—configuring isolated network rules and ensuring clean, properly resourced environments from the start."
  },
  {
    step: "03",
    title: "Install & configure runtimes",
    description: "We set up the exact server environment your application needs—Node.js, PHP, Python, Nginx, MySQL, or Redis—configured and tuned for optimal performance."
  },
  {
    step: "04",
    title: "Implement security hardening",
    description: "We lock down SSH to key-only access, close all non-essential ports, configure automatic rate limiting, and integrate Cloudflare for edge-level DDoS mitigation."
  },
  {
    step: "05",
    title: "Deploy application & verify performance",
    description: "We transfer your live application to the new server, verify all environment variables, test all critical functionality, and confirm load times are within target thresholds."
  },
  {
    step: "06",
    title: "Set up monitoring & uptime alerts",
    description: "We configure real-time server monitoring tools to notify your team immediately via email or Slack if uptime drops below 99.9%, enabling rapid incident response."
  }
]}
      complementaryServices={[
  {
    name: "A-Grade Website Design",
    url: "/services/a-grade-website-design",
    desc: "Pair your production-ready hosting environment with a blazing-fast, custom-built website that takes full advantage of your infrastructure."
  },
  {
    name: "WordPress Development",
    url: "/services/wordpress-development",
    desc: "Deploy your custom WordPress site onto cloud hosting configured specifically for WordPress performance and security."
  },
  {
    name: "Debugging & Maintenance",
    url: "/services/debugging-maintenance",
    desc: "Keep your hosted application running smoothly with proactive maintenance, security updates, and rapid bug resolution."
  }
]}
      faqs={[
  {
    question: "Which cloud provider do you recommend?",
    answer: "For most sites and applications, we recommend Vercel for Next.js, DigitalOcean for straightforward cloud servers, and AWS for complex, enterprise-scale infrastructure needs."
  },
  {
    question: "Will I own the hosting accounts?",
    answer: "Yes, 100%. All cloud accounts are set up in your name with your payment method. We never act as an intermediary between you and your hosting provider."
  },
  {
    question: "How is this different from shared hosting?",
    answer: "Shared hosting places your site on a server shared with hundreds of other websites, causing unpredictable slowdowns. Our cloud hosting gives your application dedicated, scalable resources entirely to itself."
  },
  {
    question: "Do you monitor the server after setup?",
    answer: "We include a 30-day monitoring period post-launch. For ongoing server management and uptime monitoring, we offer monthly DevOps retainer packages."
  },
  {
    question: "How do you handle traffic spikes?",
    answer: "We configure auto-scaling policies that automatically increase server compute resources when traffic surges and reduce them afterward, so you never pay for idle capacity or suffer slowdowns during peaks."
  },
  {
    question: "Can you migrate my existing site to new hosting?",
    answer: "Yes. We handle the complete transfer—copying files, migrating databases, updating DNS records, and installing SSL certificates—with zero downtime using a carefully managed blue-green deployment approach."
  }
]}
    />
  );
}
