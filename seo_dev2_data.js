module.exports = {
  'Custom API Development': {
    deliverables: [
      {
        title: 'Custom RESTful Core API',
        description: 'A deeply secure, meticulously structured backend API built in Node.js or Python to serve the exact data your frontend applications require efficiently.',
        icon: 'rocket',
        color: 'green'
      },
      {
        title: '3rd-Party Service Integration',
        description: 'Flawless code bridges connecting your system to external platforms like Stripe, Twilio, Salesforce, or OpenAI with rigorous error handling.',
        icon: 'shield',
        color: 'purple'
      },
      {
        title: 'Swagger API Documentation',
        description: 'A meticulously mapped interactive endpoint dictionary enabling your engineering team or external partners to integrate your API confidently and immediately.',
        icon: 'document',
        color: 'blue'
      }
    ],
    processSteps: {
      'Define data structures & endpoints': 'We map out the exact data payloads your application consumes, designing logical, consistent, and predictable route structures before any server code is written.',
      'Set up secure server environment': 'We provision the cloud infrastructure and configure deep authentication protocols including JWT tokens and OAuth 2.0 to protect all sensitive data access.',
      'Develop core API functionality': 'We write the robust backend logic handling database queries, data transformations, and returning clean, predictable JSON responses to your frontends.',
      'Integrate 3rd-party webhooks & APIs': 'We establish secure API handshakes with external software, handling payment processing events, CRM data synchronization, and real-time webhook callbacks.',
      'Stress testing & rate limiting': 'We bombard the API with intense traffic simulations to ensure it scales correctly and implements protective rate limiting to prevent abuse.',
      'Publish interactive documentation': 'We hand over elegant Swagger documentation detailing every available endpoint, parameter, required header, and expected response object for clear developer reference.'
    },
    faqs: [
      { question: 'Do you build REST or GraphQL APIs?', answer: 'We build whatever your frontend technology demands. We default to well-structured REST APIs for predictability, but we build GraphQL for applications requiring highly flexible, nested data queries.' },
      { question: 'How do you secure the API?', answer: 'We implement strict JWT authentication, OAuth 2.0 for social logins, rate-limiting to prevent DDoS attacks, and thorough input sanitization to block SQL injection attempts.' },
      { question: 'Can you integrate with our legacy systems?', answer: 'Yes. If your legacy system exposes webhooks, a SOAP interface, or any REST endpoint, we build custom middleware to bridge the gap cleanly.' },
      { question: 'What backend languages do you use?', answer: 'We primarily engineer scalable APIs in Node.js using Express or NestJS, and Python using FastAPI or Django REST Framework depending on the project requirements.' },
      { question: 'Do you handle the database as well?', answer: 'Yes. API development and database design are deeply interconnected. We design both the API layer and the underlying schema together for optimal performance.' },
      { question: 'Will you document the API for our team?', answer: 'Absolutely. Every API we build ships with full Swagger/OpenAPI documentation so your frontend team or third-party partners can integrate immediately without guessing.' }
    ],
    complementaries: [
      { name: 'Custom Web Application', url: '/services/custom-web-application', desc: 'Build the full-stack application that consumes your new API, handling both frontend UI and backend architecture together.' },
      { name: 'Third-Party Integration', url: '/services/third-party-integration', desc: 'Connect your new API to the full ecosystem of tools your business already uses, from CRMs to payment gateways.' },
      { name: 'Website Hosting & Setup', url: '/services/website-hosting-setup', desc: 'Deploy your custom API to a secure, auto-scaling cloud server environment with proper monitoring and CI/CD pipelines.' }
    ]
  },
  'Third-Party Integration': {
    deliverables: [
      {
        title: 'Audit & Integration Map',
        description: 'A thorough mapping of your current software stack, identifying exactly which tools need to communicate and the optimal data flow path between them.',
        icon: 'chart',
        color: 'blue'
      },
      {
        title: 'Custom Webhook Architecture',
        description: 'Precisely crafted webhook listeners and event handlers capturing real-time data exchanges between your platforms without data loss or duplication.',
        icon: 'gear',
        color: 'orange'
      },
      {
        title: 'Error Handling & Fallback Logic',
        description: 'Bulletproof error routing that automatically retries failed API calls and sends instant Slack alerts if a critical integration breaks at any point.',
        icon: 'shield',
        color: 'pink'
      }
    ],
    processSteps: {
      'Map the software ecosystem': 'We interview your operations team to document every tool in your stack—CRM, payment processor, email platform, analytics—and understand the exact data flow you need.',
      'Design integration architecture': 'We create a visual map of all proposed connections, including trigger points, transformation steps, and destination endpoints for every data stream.',
      'Build core API connections': 'We write the custom code connecting each platform, using native APIs and webhooks to establish direct, reliable data channels between your tools.',
      'Implement data transformation logic': 'We add formatting steps to clean, normalize, and structure data as it moves between systems, ensuring compatibility even between platforms with conflicting data formats.',
      'Conduct edge-case testing': 'We deliberately trigger failure scenarios—API timeouts, malformed data, duplicate events—to verify the error handling and retry logic behaves correctly under stress.',
      'Deploy & monitor live integrations': 'We push the integrations to production and establish monitoring dashboards so your team can see integration health at a glance and get alerted on failures.'
    },
    faqs: [
      { question: 'Which platforms can you integrate?', answer: 'We integrate virtually any platform with a public API: Salesforce, HubSpot, Stripe, PayPal, Shopify, Mailchimp, Twilio, Slack, Google Analytics, and hundreds more.' },
      { question: 'What if a platform does not have a native API?', answer: 'If a platform supports webhooks or exposes any structured data, we can build custom middleware to intercept and route it, effectively creating our own bridge.' },
      { question: 'How do you prevent data duplication in integrations?', answer: 'We implement idempotency keys and deduplication logic at every entry point to ensure the same event never triggers duplicate records, even if delivered multiple times.' },
      { question: 'Can you replace Zapier automations with custom code?', answer: 'Yes. We often replace costly Zapier plans with custom webhook code that is faster, more reliable, and costs a fraction of the monthly platform fees.' },
      { question: 'Will you maintain the integrations over time?', answer: 'We offer optional ongoing maintenance retainers, since third-party APIs occasionally change their endpoints or authentication methods, which requires updates to your integration code.' },
      { question: 'How long does a typical integration project take?', answer: 'Simple two-platform integrations can be completed in 3 to 5 business days. Complex multi-system architectures with custom transformation logic typically run 2 to 4 weeks.' }
    ],
    complementaries: [
      { name: 'CRM Setup', url: '/services/crm-setup', desc: 'Set up the central CRM hub that your integrations will push all incoming leads and customer data into automatically.' },
      { name: 'Marketing Automation Setup', url: '/services/marketing-automation-setup', desc: 'Chain your integrations together into intelligent marketing workflows that execute multi-step actions based on user behavior.' },
      { name: 'Custom API Development', url: '/services/custom-api-development', desc: 'Build a custom API layer that acts as the central data broker for all your third-party integration points.' }
    ]
  },
  'Website Hosting & Setup': {
    deliverables: [
      {
        title: 'Elastic Cloud Infrastructure',
        description: 'A precisely configured AWS or DigitalOcean environment that automatically scales server capacity during traffic spikes and back down during quiet periods to control costs.',
        icon: 'rocket',
        color: 'blue'
      },
      {
        title: 'Zero-Downtime CI/CD Pipeline',
        description: 'Automated deployment workflows using GitHub Actions so your developers can push updates to production safely and instantly without manual file uploads or server restarts.',
        icon: 'gear',
        color: 'orange'
      },
      {
        title: 'DDoS Protection & SSL Certificate',
        description: 'Military-grade edge security via Cloudflare, preventing malicious bot attacks, and forcing all traffic through HTTPS encryption for complete user data protection.',
        icon: 'shield',
        color: 'pink'
      }
    ],
    processSteps: {
      'Audit tech stack requirements': 'We evaluate your application framework, expected traffic volume, and database type to specify the exact server configuration and cloud provider that fits your needs.',
      'Configure cloud environments': 'We provision the virtual servers, setting up isolated Virtual Private Clouds with strict port security rules so your application runs in a clean, contained environment.',
      'Install runtimes & dependencies': 'We configure Node.js, PHP, Python, Docker, Nginx, or whichever runtime your codebase requires to execute correctly on the cloud environment.',
      'Establish CI/CD deployment pipelines': 'We link your GitHub or GitLab repository to the server, automating the build, test, and deployment process so code updates reach production without manual steps.',
      'Set up SSL, monitoring & backups': 'We install and renew SSL certificates, configure server uptime monitoring alerts, and schedule automated daily database backups to a separate storage bucket.',
      'Handoff infrastructure access': 'We deliver all SSH keys, environment variable documentation, and root cloud-provider access credentials directly to you so you own everything outright.'
    },
    faqs: [
      { question: 'Which cloud provider do you recommend?', answer: 'For most web applications, we recommend Vercel for Next.js frontends and Supabase or Render for backends. For larger infrastructure, AWS and DigitalOcean are our preferred choices.' },
      { question: 'What is the difference between shared and cloud hosting?', answer: 'Shared hosting puts your site on a crowded server with hundreds of others, causing slowdowns. Cloud hosting gives your app dedicated, scalable resources that only serve your traffic.' },
      { question: 'Do you provide ongoing server monitoring?', answer: 'This service includes initial setup and a one-month monitoring period. For long-term server management, we offer monthly DevOps retainer agreements.' },
      { question: 'How is my application protected from hackers?', answer: 'We implement strict inbound firewall rules, SSH-key-only access, and Cloudflare edge protection. No open ports mean attackers have no surface to target.' },
      { question: 'Will I own the AWS or DigitalOcean accounts?', answer: 'Yes, 100%. We configure all environments inside your own cloud accounts from day one so there is never any risk of being locked out of your own infrastructure.' },
      { question: 'Can you migrate my existing site to a faster server?', answer: 'Absolutely. We handle the complete migration including database transfers, DNS cutover, and SSL reconfiguration, ensuring zero downtime during the transition.' }
    ],
    complementaries: [
      { name: 'A-Grade Website Design', url: '/services/a-grade-website-design', desc: 'Pair your powerful hosting infrastructure with a blazing-fast, custom-built website designed to convert visitors into customers.' },
      { name: 'Custom Web Application', url: '/services/custom-web-application', desc: 'Build and deploy a full-stack web application onto this hosting environment with end-to-end engineering from our team.' },
      { name: 'WordPress Development', url: '/services/wordpress-development', desc: 'Deploy your custom WordPress site onto high-performance cloud hosting configured specifically for WordPress workloads.' }
    ]
  },
  'Sales Funnel Design': {
    deliverables: [
      {
        title: 'Multi-Step Funnel Architecture',
        description: 'A strategically sequenced set of pages—optin, sales, upsell, downsell, and thank-you—engineered to maximize the revenue extracted from every single visitor.',
        icon: 'chart',
        color: 'green'
      },
      {
        title: 'Persuasive Sales Page Copy',
        description: 'Long-form direct-response sales copy built on proven psychological frameworks designed to answer objections, build desire, and drive high-ticket conversions.',
        icon: 'pen',
        color: 'yellow'
      },
      {
        title: 'Order Bump & Upsell Logic',
        description: 'Strategically placed one-click upsell offers that increase your average order value without adding friction to the core purchase decision.',
        icon: 'rocket',
        color: 'orange'
      }
    ],
    processSteps: {
      'Map the customer journey': 'We audit your current offer, pricing, and existing traffic to design a funnel architecture that aligns with your buyer\'s level of awareness and urgency at each stage.',
      'Write persuasive funnel copy': 'Our direct-response copywriters craft high-converting opt-in copy, long-form sales pages, and upsell scripts tailored to your specific audience\'s language and buying triggers.',
      'Design every funnel page': 'We design each page step in the sequence—optin page, VSL page, checkout, one-time offers—using visual hierarchy that naturally guides users toward the next step.',
      'Code & integrate payment checkout': 'We build the funnel onto your chosen platform (ClickFunnels, ThriveCart, or custom) and integrate order bumps and one-click upsells into the checkout flow.',
      'Connect email automation sequences': 'We link the funnel directly to your email marketing platform to trigger automated nurture sequences for leads who did not convert immediately on the first visit.',
      'Test all flows & launch': 'We run the entire funnel through end-to-end testing, verifying payments, upsell triggers, email firing, and thank-you page redirects before opening it to live traffic.'
    },
    faqs: [
      { question: 'What is a sales funnel exactly?', answer: 'A sales funnel is a structured sequence of pages designed to take a visitor from cold prospect to paying customer through increasingly strong value propositions and logical next steps.' },
      { question: 'Do I need a sales funnel or just a website?', answer: 'If you are selling products, courses, or premium services, a dedicated sales funnel will consistently outperform a standard website at converting traffic into revenue.' },
      { question: 'Do you build funnels on ClickFunnels?', answer: 'We build on ClickFunnels, ThriveCart, Kartra, or as completely custom-coded pages depending on your existing tech stack and budget.' },
      { question: 'Can you write all the copy for the funnel?', answer: 'Yes. Copywriting is the most critical element of a high-converting funnel. Our direct-response writers handle every headline, bullet point, and call-to-action in the sequence.' },
      { question: 'What is an order bump?', answer: 'An order bump is a checkbox offer shown at checkout that adds a complementary product to the cart with a single click. It typically increases average order value by 20–30%.' },
      { question: 'Do you integrate email follow-up sequences into the funnel?', answer: 'Yes. We connect your funnel to a platform like Klaviyo or ActiveCampaign and build out automated email sequences for non-buyers, new customers, and upsell follow-ups.' }
    ],
    complementaries: [
      { name: 'Social Media Ads Management', url: '/services/social-media-ads-management', desc: 'Drive a consistent flow of paid traffic from Meta and TikTok into the top of your newly built conversion funnel.' },
      { name: 'Landing Page Design', url: '/services/landing-page-design', desc: 'Start with a highly optimized lead capture page as the entry point to your funnel sequence.' },
      { name: 'Email Marketing', url: '/services/email-marketing', desc: 'Build automated email sequences to nurture everyone who enters the funnel but does not yet convert.' }
    ]
  },
  'Funnel Hosting & Setup': {
    deliverables: [
      {
        title: 'Fast Funnel Deployment',
        description: 'Pixel-perfect translation of your funnel designs into high-speed code deployed on a reliable, low-latency hosting environment built for conversion.',
        icon: 'rocket',
        color: 'blue'
      },
      {
        title: 'Full Tracking Integration',
        description: 'Precise installation of Meta Pixel, Google Tag, and conversion event tracking to ensure every lead and purchase is attributed back to its exact traffic source.',
        icon: 'chart',
        color: 'green'
      },
      {
        title: 'Domain & SSL Configuration',
        description: 'Complete DNS record updates and SSL certificate provisioning so your funnel runs on your custom branded domain with airtight HTTPS security from launch.',
        icon: 'shield',
        color: 'purple'
      }
    ],
    processSteps: {
      'Review designs & requirements': 'We collect your Figma files or design assets and clarify which analytics tools, payment gateways, and email platforms need to be connected to the funnel.',
      'Provision hosting environment': 'We set up a fast, isolated hosting environment optimized for single-page applications, ensuring sub-2-second load times that prevent paid traffic from bouncing.',
      'Code the funnel pages': 'We translate every step of the funnel—optin, sales, checkout, upsell, thank-you—into clean, lightweight code that renders perfectly across all devices and browsers.',
      'Install tracking pixels & events': 'We deploy and verify conversion-level events in Meta Events Manager and Google Tag Manager so your ad platforms receive accurate purchase and lead signals.',
      'Integrate payment & email systems': 'We connect your payment processor, autoresponder platform, and CRM to the live funnel so transactions and subscriber actions flow automatically.',
      'Go-live QA & handoff': 'We run a final end-to-end test of every click path, form submission, payment confirmation, and email trigger before handing over a fully live, verified funnel.'
    },
    faqs: [
      { question: 'Do I need this if I already have ClickFunnels?', answer: 'If you are using an all-in-one platform like ClickFunnels, this service may not be needed. This service is for clients who prefer custom-coded funnels on their own hosting for speed and flexibility.' },
      { question: 'How fast will the pages load?', answer: 'We optimize every page to load within 1–2 seconds. Paid traffic funnels live and die on page speed, and we treat it as a top engineering priority.' },
      { question: 'Can you set up split tests on the funnel?', answer: 'Yes. We structure the codebase to make A/B testing of headlines, offers, and page layouts straightforward, feeding winning data back to your ad campaigns.' },
      { question: 'Will you connect the funnel to my email platform?', answer: 'Yes. We integrate your funnel with Klaviyo, Mailchimp, ActiveCampaign, or ConvertKit so opt-ins and purchases trigger the right automated sequences automatically.' },
      { question: 'Who hosts the funnel—you or me?', answer: 'You own and control the hosting. We set everything up on your accounts (AWS, Vercel, or Netlify) so you are never dependent on us for access to your live funnel.' },
      { question: 'Do you handle the domain for the funnel?', answer: 'Yes. We handle all DNS configuration, SSL certificate installation, and subdomain routing to ensure your funnel runs on a clean, branded URL from day one.' }
    ],
    complementaries: [
      { name: 'Sales Funnel Design', url: '/services/sales-funnel-design', desc: 'Have a professional funnel designed from scratch before we build and deploy it for you.' },
      { name: 'Social Media Ads Management', url: '/services/social-media-ads-management', desc: 'Drive consistent paid traffic into your live funnel with expert campaign management across Meta and TikTok.' },
      { name: 'Email Marketing', url: '/services/email-marketing', desc: 'Set up automated sequences that follow up with everyone who enters your funnel but leaves without converting.' }
    ]
  },
  'Debugging & Maintenance': {
    deliverables: [
      {
        title: 'Root Cause Bug Analysis',
        description: 'A systematic forensic investigation of your broken codebase to identify the exact origin of the error rather than patching surface-level symptoms.',
        icon: 'magnifier',
        color: 'yellow'
      },
      {
        title: 'Performance Optimization Report',
        description: 'A detailed audit identifying slow database queries, memory leaks, and rendering bottlenecks, complete with specific recommendations and implemented fixes.',
        icon: 'chart',
        color: 'purple'
      },
      {
        title: 'Documented Fix Implementation',
        description: 'All applied fixes are thoroughly documented in clear language so your team understands exactly what was broken, why it broke, and how it was resolved.',
        icon: 'document',
        color: 'green'
      }
    ],
    processSteps: {
      'Reproduce the bug systematically': 'We deliberately trigger the error in a controlled environment on the exact browser, device, and data configuration that causes it, capturing the full stack trace.',
      'Trace the root cause': 'We follow the error backwards through the call stack—from the UI through the API to the database—to isolate the exact line or logic responsible for the failure.',
      'Propose and review the fix': 'Before applying any changes to production, we write the solution and review it with your team to ensure the fix does not introduce new regressions.',
      'Implement and test thoroughly': 'We apply the fix, run unit and integration tests, and verify the original bug no longer reproduces across all affected user flows and edge cases.',
      'Conduct regression sweep': 'We test all features adjacent to the fixed area to confirm nothing else broke as a side effect, using a defined checklist appropriate to the codebase.',
      'Document & deliver summary': 'We provide a written incident report detailing the bug origin, the fix applied, and preventive measures recommended to reduce the likelihood of recurrence.'
    },
    faqs: [
      { question: 'Can you fix bugs in code you did not write?', answer: 'Yes. We regularly debug legacy codebases, inherited WordPress installs, and applications built by previous development agencies regardless of the original tech stack.' },
      { question: 'What if the bug is in a third-party plugin?', answer: 'We identify plugin conflicts and either find a non-conflicting alternative, patch the plugin directly, or write custom code that bypasses the problematic behaviour.' },
      { question: 'How quickly can you fix a critical production bug?', answer: 'For critical outages, we prioritize emergency response and typically deliver a production fix within 4 to 8 business hours depending on code complexity.' },
      { question: 'Do you offer ongoing maintenance retainers?', answer: 'Yes. We offer monthly retainer packages that cover proactive monitoring, security updates, CMS updates, and a dedicated number of developer hours for feature additions.' },
      { question: 'What counts as a bug versus a new feature request?', answer: 'A bug is existing functionality behaving differently from what was intended. A new feature is additional functionality that was not part of the original specification. We treat them differently in scope and billing.' },
      { question: 'Can you audit our site for security vulnerabilities?', answer: 'Yes. We perform security audits covering common vulnerabilities including XSS, CSRF, SQL injection, broken authentication, and exposed sensitive data in version control.' }
    ],
    complementaries: [
      { name: 'WordPress Development', url: '/services/wordpress-development', desc: 'If your WordPress site has accumulated irreparable technical debt, a clean rebuild is often faster and more cost-effective than ongoing debugging.' },
      { name: 'Website Hosting & Setup', url: '/services/website-hosting-setup', desc: 'Move your application to a properly configured cloud environment to eliminate server-related bugs caused by incorrect hosting configurations.' },
      { name: 'Custom Web Application', url: '/services/custom-web-application', desc: 'When debugging reveals deep architectural problems, our team can plan and execute a clean, modern rebuild on a solid engineering foundation.' }
    ]
  }
};
