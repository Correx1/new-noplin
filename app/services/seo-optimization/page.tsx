import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'SEO Optimization | Noplin Digital',
  description: 'Professional SEO Optimization services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="SEO Optimization"
      department="Marketing"
      tagline="Professional SEO Optimization services tailored to elevate your business."
      turnaround="7–14 Days"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      about="Our SEO Optimization offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Comprehensive Technical SEO Audit",
    description: "A deep crawl of your entire website uncovering indexation errors, broken canonicals, slow Core Web Vitals, crawl budget waste, and mobile usability failures.",
    icon: "gear",
    color: "pink"
  },
  {
    title: "Keyword & Content Architecture Plan",
    description: "A structured map assigning high-value, buyer-intent keywords to dedicated pages and blog clusters, establishing clear topical authority across your niche.",
    icon: "chart",
    color: "green"
  },
  {
    title: "Link Acquisition Strategy & Execution",
    description: "White-hat backlink generation through targeted digital PR outreach, guest articles on authoritative publications, and linkable asset creation to boost Domain Authority.",
    icon: "rocket",
    color: "purple"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier SEO Optimization."
      process={[
  {
    step: "01",
    title: "Audit site infrastructure thoroughly",
    description: "We deploy enterprise crawlers to identify critical technical failures—broken internal links, missing metadata, lazy-loading issues, and duplicate content causing keyword cannibalization."
  },
  {
    step: "02",
    title: "Conduct keyword gap analysis",
    description: "We analyze which high-value keywords your top competitors rank for that your site does not, prioritizing low-competition opportunities that can generate traffic quickly."
  },
  {
    step: "03",
    title: "Optimize on-page semantic structure",
    description: "We rewrite title tags, meta descriptions, H1 and H2 headings, and body copy on your key service and product pages to align precisely with target search intent."
  },
  {
    step: "04",
    title: "Develop topic cluster content plan",
    description: "We design a pillar-cluster content architecture where a comprehensive pillar page is supported by a series of related blog articles, signaling deep topical authority to Google."
  },
  {
    step: "05",
    title: "Build high-quality targeted backlinks",
    description: "We conduct personalized outreach to relevant publications and industry blogs to acquire authoritative do-follow backlinks that directly improve your domain-level ranking power."
  },
  {
    step: "06",
    title: "Monitor rankings & iterate monthly",
    description: "We track precise keyword position changes weekly, update declining pages, improve internal link distribution, and adjust targeting based on algorithm changes and competitor activity."
  }
]}
      complementaryServices={[
  {
    name: "Content Marketing",
    url: "/services/content-marketing",
    desc: "Produce the high-authority blog cluster articles required to build topical depth and capture long-tail keyword traffic consistently."
  },
  {
    name: "A-Grade Website Design",
    url: "/services/a-grade-website-design",
    desc: "Migrate to a blazing-fast, semantically correct website architecture that gives Google exactly what it needs to rank you above competitors."
  },
  {
    name: "Website Strategy Session",
    url: "/services/website-strategy-session",
    desc: "Align your SEO roadmap with your broader digital marketing strategy to ensure every organic ranking feeds directly into revenue-generating funnels."
  }
]}
      faqs={[
  {
    question: "How long does SEO take to show results?",
    answer: "Depending on domain age, niche competitiveness, and starting technical health, meaningful ranking improvements and organic traffic growth typically surface within 4 to 6 months of consistent execution."
  },
  {
    question: "Do you guarantee a number one ranking?",
    answer: "No. Any agency that guarantees specific rankings is being dishonest. We guarantee methodical execution of the technical, on-page, and off-page strategies that reliably move rankings upward."
  },
  {
    question: "What is the difference between technical and on-page SEO?",
    answer: "Technical SEO ensures search engines can crawl, render, and index your site correctly. On-page SEO ensures the actual content, headings, and metadata answer the user's search intent precisely."
  },
  {
    question: "Do you buy low-quality backlinks?",
    answer: "Never. We build backlinks exclusively through manual outreach and content-based strategies. Toxic backlinks from link farms will trigger Google penalties and destroy your rankings."
  },
  {
    question: "Is SEO a one-time project?",
    answer: "No. SEO is an ongoing process. If you stop publishing content and building authority, competitors will gradually reclaim the rankings you worked to achieve."
  },
  {
    question: "Can you fix an existing Google penalty?",
    answer: "Yes. We audit your backlink profile for toxic links, submit disavow files to Google, resolve any manual action violations, and rebuild the site's trust signals systematically."
  }
]}
    />
  );
}
