import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Debugging & Maintenance | Noplin Digital',
  description: 'Professional Debugging & Maintenance services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Debugging & Maintenance"
      department="Development"
      tagline="Professional Debugging & Maintenance services tailored to elevate your business."
      turnaround="1–5 Days"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our Debugging & Maintenance offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Root Cause Bug Analysis",
    description: "A systematic forensic investigation of your broken codebase to identify the exact origin of the error rather than patching surface-level symptoms.",
    icon: "magnifier",
    color: "yellow"
  },
  {
    title: "Performance Optimization Report",
    description: "A detailed audit identifying slow database queries, memory leaks, and rendering bottlenecks, complete with specific recommendations and implemented fixes.",
    icon: "chart",
    color: "purple"
  },
  {
    title: "Documented Fix Implementation",
    description: "All applied fixes are thoroughly documented in clear language so your team understands exactly what was broken, why it broke, and how it was resolved.",
    icon: "document",
    color: "green"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier Debugging & Maintenance."
      process={[
  {
    step: "01",
    title: "Reproduce the bug systematically",
    description: "We deliberately trigger the error in a controlled environment on the exact browser, device, and data configuration that causes it, capturing the full stack trace."
  },
  {
    step: "02",
    title: "Trace the root cause",
    description: "We follow the error backwards through the call stack from the UI through the API to the database to isolate the exact line or logic responsible for the failure."
  },
  {
    step: "03",
    title: "Propose and review the fix",
    description: "Before applying any changes to production, we write the solution and review it with your team to ensure the fix does not introduce new regressions."
  },
  {
    step: "04",
    title: "Implement and test thoroughly",
    description: "We apply the fix, run unit and integration tests, and verify the original bug no longer reproduces across all affected user flows and edge cases."
  },
  {
    step: "05",
    title: "Conduct regression sweep",
    description: "We test all features adjacent to the fixed area to confirm nothing else broke as a side effect, using a defined checklist appropriate to the codebase."
  },
  {
    step: "06",
    title: "Document & deliver summary",
    description: "We provide a written incident report detailing the bug origin, the fix applied, and preventive measures recommended to reduce the likelihood of recurrence."
  }
]}
      complementaryServices={[
  {
    name: "WordPress Development",
    url: "/services/wordpress-development",
    desc: "If your WordPress site has accumulated irreparable technical debt, a clean rebuild is often faster and more cost-effective than ongoing debugging."
  },
  {
    name: "Website Hosting & Setup",
    url: "/services/website-hosting-setup",
    desc: "Move your application to a properly configured cloud environment to eliminate server-related bugs caused by incorrect hosting configurations."
  },
  {
    name: "Custom Web Application",
    url: "/services/custom-web-application",
    desc: "When debugging reveals deep architectural problems, our team can plan and execute a clean, modern rebuild on a solid engineering foundation."
  }
]}
      faqs={[
  {
    question: "Can you fix bugs in code you did not write?",
    answer: "Yes. We regularly debug legacy codebases, inherited WordPress installs, and applications built by previous development agencies regardless of the original tech stack."
  },
  {
    question: "What if the bug is in a third-party plugin?",
    answer: "We identify plugin conflicts and either find a non-conflicting alternative, patch the plugin directly, or write custom code that bypasses the problematic behaviour."
  },
  {
    question: "How quickly can you fix a critical production bug?",
    answer: "For critical outages, we prioritize emergency response and typically deliver a production fix within 4 to 8 business hours depending on code complexity."
  },
  {
    question: "Do you offer ongoing maintenance retainers?",
    answer: "Yes. We offer monthly retainer packages that cover proactive monitoring, security updates, CMS updates, and a dedicated number of developer hours for feature additions."
  },
  {
    question: "What counts as a bug versus a new feature request?",
    answer: "A bug is existing functionality behaving differently from what was intended. A new feature is additional functionality that was not part of the original specification. We treat them differently in scope and billing."
  },
  {
    question: "Can you audit our site for security vulnerabilities?",
    answer: "Yes. We perform security audits covering common vulnerabilities including XSS, CSRF, SQL injection, broken authentication, and exposed sensitive data in version control."
  }
]}
    />
  );
}
