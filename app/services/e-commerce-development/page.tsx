import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'E-Commerce Development | Noplin Digital',
  description: 'Professional E-Commerce Development services tailored to elevate your business.',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="E-Commerce Development"
      department="Development"
      tagline="Professional E-Commerce Development services tailored to elevate your business."
      turnaround="10–14 Days"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
      about="Our E-Commerce Development offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives."
      whatItIncludes={[
  {
    title: "Conversion-Optimized Storefront",
    description: "A visually engaging, highly intuitive online shopping experience built precisely to reduce cart abandonment rates and increase average order value systematically.",
    icon: "cart",
    color: "yellow"
  },
  {
    title: "Secure Payment Architecture",
    description: "Bulletproof integration of multi-currency payment gateways, SSL encryption, and PCI-compliance safeguards for processing customer payment data with zero risk.",
    icon: "shield",
    color: "green"
  },
  {
    title: "Inventory Management Integration",
    description: "Seamless back-end syncing with your fulfillment centers, third-party logistics providers, and live inventory databases to fully automate store operations.",
    icon: "gear",
    color: "purple"
  }
]}
      whoItsFor="Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier E-Commerce Development."
      process={[
  {
    step: "01",
    title: "Platform selection consultation",
    description: "We analyze your product catalog complexity, fulfillment needs, and growth plans to recommend the optimal eCommerce platform, Shopify, WooCommerce, or a custom build."
  },
  {
    step: "02",
    title: "Theme design & development",
    description: "We custom code your storefront UI ensuring perfect brand aesthetic alignment without sacrificing load speed or Core Web Vitals performance scores."
  },
  {
    step: "03",
    title: "Product catalog structuring",
    description: "We logically categorize your products and optimize every product detail page with compelling descriptions, proper image alt text, and structured data for SEO."
  },
  {
    step: "04",
    title: "Payment gateway & shipping setup",
    description: "We integrate Stripe, PayPal, Apple Pay, and configure dynamic shipping rates, tax rules, and regional delivery zones based on your logistics setup."
  },
  {
    step: "05",
    title: "Test transaction flow thoroughly",
    description: "We simulate multiple test orders mimicking varied customer behaviors to verify the checkout logic, inventory updates, and confirmation email sequences fire correctly."
  },
  {
    step: "06",
    title: "Launch & merchant training",
    description: "We flip the site live and provide hands-on training covering order fulfillment, refund processing, adding new products, and running seasonal promotions."
  }
]}
      complementaryServices={[
  {
    name: "SEO Optimization",
    url: "/services/seo-optimization",
    desc: "Optimize your product and category pages to capture high-intent organic shoppers searching for exactly what you sell."
  },
  {
    name: "Ad Creatives (Image)",
    url: "/services/ad-creatives-image",
    desc: "Develop scroll-stopping product imagery ads to drive a constant stream of direct purchase traffic to your store."
  },
  {
    name: "Sales Funnel Design",
    url: "/services/sales-funnel-design",
    desc: "Implement post-purchase upsell flows and cross-sell pages engineered to significantly increase your average order value."
  }
]}
      faqs={[
  {
    question: "Which e-commerce platform is best for my business?",
    answer: "For most direct-to-consumer brands, we recommend Shopify for its robust app ecosystem, built-in security, and scalability. WooCommerce is ideal if you have a large WordPress content strategy already in place."
  },
  {
    question: "Can you migrate my store from another platform?",
    answer: "Yes. We safely migrate all product data, customer records, order history, and SEO redirect rules to ensure zero downtime or traffic loss during the transition."
  },
  {
    question: "What payment methods can you integrate?",
    answer: "We integrate Stripe, PayPal, Paystack, Flutterwave, Apple Pay, Google Pay, and buy-now-pay-later solutions like Klarna depending on your target market."
  },
  {
    question: "Can I sell digital products or memberships?",
    answer: "Absolutely. We configure automated digital product delivery, subscription billing, and membership access control natively within your store architecture."
  },
  {
    question: "Is the checkout process secure?",
    answer: "Yes. We follow strict PCI compliance protocols and utilize SSL certificates to ensure all customer payment data and personal information is deeply encrypted at every stage."
  },
  {
    question: "Do you set up abandoned cart recovery?",
    answer: "Yes. We configure automated abandoned cart email sequences designed to recover between 10–15% of otherwise lost sales through strategic follow-up messaging."
  }
]}
    />
  );
}
