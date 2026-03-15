module.exports = {
  'Landing Page Design': {
    deliverables: [
      {
        title: 'Direct-Response Copywriting',
        description: 'Psychologically engineered sales copy precisely formulated to eliminate visitor objections, build urgency, and push every reader toward one clear, decisive action.',
        icon: 'pen',
        color: 'pink'
      },
      {
        title: 'Frictionless Conversion UI',
        description: 'A stripped-down, laser-focused visual layout that removes competing navigation elements and channels 100% of visitor attention toward the primary call-to-action.',
        icon: 'target',
        color: 'orange'
      },
      {
        title: 'Conversion Optimization Hooks',
        description: 'Strategically positioned social proof, urgency triggers, and micro-commitment devices embedded at key friction points to dramatically improve conversion rates.',
        icon: 'chart',
        color: 'blue'
      }
    ],
    processSteps: {
      'Discovery & offer analysis': 'We dissect your product or service to identify the emotional triggers, key objections, and primary desire of your exact target audience before a single word of copy is written.',
      'Wireframe the conversion layout': 'We map the page\'s visual hierarchy—hero, benefits section, social proof placement, and CTA positioning—specifically optimized for fast scrolling and rapid decision-making.',
      'Write direct-response copy': 'Our copywriters draft compelling headlines, a clear benefits stack, trust-building testimonials, and a call-to-action that creates genuine urgency without resorting to empty hype.',
      'Create the high-fidelity design': 'We overlay your brand aesthetics onto the wireframe, producing a polished, persuasive page design that looks premium while preserving every element of the conversion structure.',
      'Client review & refinement': 'You review the complete design for brand accuracy and messaging alignment. We apply your feedback before finalizing all assets for the development handoff.',
      'Prepare annotated developer handoff': 'We package precise Figma files with spacing, typography, and interaction notes so the page can be developed into pixel-perfect, fast-loading code immediately.'
    },
    faqs: [
      { question: 'Do you write the copy for the landing page?', answer: 'Yes. Direct-response copywriting is a core component of this service. The words on a landing page are responsible for the majority of conversion performance, so we handle this with our specialist writers.' },
      { question: 'Is development included in Landing Page Design?', answer: 'This service focuses on the design and copywriting phase. For live deployment and hosting, our Landing Page Hosting & Setup service handles the development, tracking, and launch.' },
      { question: 'How is this different from a website homepage?', answer: 'A homepage serves multiple purposes and has full navigation. A landing page is engineered for one singular action—signing up, purchasing, or booking—with everything else stripped out to prevent distraction.' },
      { question: 'Can you design landing pages for product launches?', answer: 'Yes. We design waitlist pages, pre-launch registration pages, and full-scale product launch pages complete with countdown timers, early-bird offer sections, and launch sequences.' },
      { question: 'How many revisions are included in the design process?', answer: 'We include two structured revision rounds within the design process. Additional revision cycles beyond this are available at a fixed hourly rate agreed upfront.' },
      { question: 'Do you design for mobile as well as desktop?', answer: 'Absolutely. Every landing page is designed across mobile, tablet, and desktop breakpoints with special attention given to mobile, since the majority of paid ad traffic converts on small screens.' }
    ],
    complementaries: [
      { name: 'Social Media Ads Management', url: '/services/social-media-ads-management', desc: 'Drive a consistent stream of precisely targeted paid traffic from Meta and TikTok directly into your newly designed high-converting page.' },
      { name: 'Ad Creatives (Video)', url: '/services/ad-creatives-video', desc: 'Pair your landing page with compelling short-form video ads that pre-sell the offer before viewers even click through.' },
      { name: 'Sales Funnel Design', url: '/services/sales-funnel-design', desc: 'Extend the landing page into a complete multi-step funnel with upsell pages, thank-you sequences, and automated email follow-up.' }
    ]
  },
  'Web Hosting': {
    deliverables: [
      {
        title: 'Elastic Cloud Server Environment',
        description: 'Auto-scaling cloud infrastructure that dynamically expands server resources during traffic spikes and contracts during low periods to optimize both performance and hosting costs.',
        icon: 'rocket',
        color: 'blue'
      },
      {
        title: 'Enterprise Security & DDoS Protection',
        description: 'Cloudflare edge protection combined with Web Application Firewall rules that block malicious bots and brute-force attacks before they reach your web server.',
        icon: 'shield',
        color: 'pink'
      },
      {
        title: 'Automated Daily Backups',
        description: 'Scheduled offsite database and file backups retained for 30 days, ensuring complete restoration capability in the event of accidental data loss or server failure.',
        icon: 'gear',
        color: 'green'
      }
    ],
    processSteps: {
      'Audit hosting requirements': 'We assess your current traffic levels, application framework, database type, and expected growth trajectory to determine the correct server size and cloud provider.',
      'Provision cloud infrastructure': 'We set up your virtual server environment on AWS, DigitalOcean, or Vercel—configuring isolated network rules and ensuring clean, properly resourced environments from the start.',
      'Install & configure runtimes': 'We set up the exact server environment your application needs—Node.js, PHP, Python, Nginx, MySQL, or Redis—configured and tuned for optimal performance.',
      'Implement security hardening': 'We lock down SSH to key-only access, close all non-essential ports, configure automatic rate limiting, and integrate Cloudflare for edge-level DDoS mitigation.',
      'Deploy application & verify performance': 'We transfer your live application to the new server, verify all environment variables, test all critical functionality, and confirm load times are within target thresholds.',
      'Set up monitoring & uptime alerts': 'We configure real-time server monitoring tools to notify your team immediately via email or Slack if uptime drops below 99.9%, enabling rapid incident response.'
    },
    faqs: [
      { question: 'Which cloud provider do you recommend?', answer: 'For most sites and applications, we recommend Vercel for Next.js, DigitalOcean for straightforward cloud servers, and AWS for complex, enterprise-scale infrastructure needs.' },
      { question: 'Will I own the hosting accounts?', answer: 'Yes, 100%. All cloud accounts are set up in your name with your payment method. We never act as an intermediary between you and your hosting provider.' },
      { question: 'How is this different from shared hosting?', answer: 'Shared hosting places your site on a server shared with hundreds of other websites, causing unpredictable slowdowns. Our cloud hosting gives your application dedicated, scalable resources entirely to itself.' },
      { question: 'Do you monitor the server after setup?', answer: 'We include a 30-day monitoring period post-launch. For ongoing server management and uptime monitoring, we offer monthly DevOps retainer packages.' },
      { question: 'How do you handle traffic spikes?', answer: 'We configure auto-scaling policies that automatically increase server compute resources when traffic surges and reduce them afterward, so you never pay for idle capacity or suffer slowdowns during peaks.' },
      { question: 'Can you migrate my existing site to new hosting?', answer: 'Yes. We handle the complete transfer—copying files, migrating databases, updating DNS records, and installing SSL certificates—with zero downtime using a carefully managed blue-green deployment approach.' }
    ],
    complementaries: [
      { name: 'A-Grade Website Design', url: '/services/a-grade-website-design', desc: 'Pair your production-ready hosting environment with a blazing-fast, custom-built website that takes full advantage of your infrastructure.' },
      { name: 'WordPress Development', url: '/services/wordpress-development', desc: 'Deploy your custom WordPress site onto cloud hosting configured specifically for WordPress performance and security.' },
      { name: 'Debugging & Maintenance', url: '/services/debugging-maintenance', desc: 'Keep your hosted application running smoothly with proactive maintenance, security updates, and rapid bug resolution.' }
    ]
  },
  'WordPress Development': {
    deliverables: [
      {
        title: 'Custom-Coded WordPress Theme',
        description: 'A lean, built-from-scratch PHP and React theme that eliminates the performance drag and security holes found in every off-the-shelf ThemeForest template.',
        icon: 'brush',
        color: 'purple'
      },
      {
        title: 'Advanced Custom Fields Architecture',
        description: 'A tailored backend editing interface that lets your marketing team safely update page content within predefined design boundaries without ever touching code.',
        icon: 'gear',
        color: 'blue'
      },
      {
        title: 'Security Hardening Configuration',
        description: 'Database prefix changes, custom login URLs, two-factor authentication, Web Application Firewall setup, and automated offsite backups to lock down your WordPress installation.',
        icon: 'shield',
        color: 'pink'
      }
    ],
    processSteps: {
      'Define CMS architecture requirements': 'We assess your publishing workflows, team structure, and content types to design the right custom post types, taxonomies, and page templates before writing any code.',
      'Configure staging environment': 'We set up an isolated staging server and install a clean, minimal WordPress core with only the essential plugins required for the project—nothing more.',
      'Develop custom theme from scratch': 'We write every template file, stylesheet, and interaction from scratch in pure PHP and React, producing clean, fast code that no page builder or pre-written theme could match.',
      'Build backend editing interfaces': 'We structure the Advanced Custom Fields layout so your team can edit every content section safely through intuitive fields rather than raw HTML in the WordPress editor.',
      'Security hardening & caching setup': 'We harden the installation with login protections, firewall rules, and server-side caching to ensure the site loads almost instantly without compromising security.',
      'Handover with training walkthrough': 'We deliver ownership of the codebase and record a detailed walkthrough video showing your team how to publish posts, update team members, and handle routine content changes.'
    },
    faqs: [
      { question: 'Why choose a custom theme over a template?', answer: 'Templates ship with thousands of unused features that bloat your page size, destroy load speed, and create security vulnerabilities. Custom themes are built specifically for your site and nothing else.' },
      { question: 'Will my WordPress site load fast?', answer: 'Yes. We custom-code without page builders like Elementor, implement server-side object caching, and optimize every image and asset to achieve near-instant load times.' },
      { question: 'How do you protect the site from hackers?', answer: 'We combine database hardening, custom login URLs, two-factor authentication, login attempt limiting, and a Web Application Firewall to protect against the most common WordPress attack vectors.' },
      { question: 'Can you migrate content from Wix or Squarespace?', answer: 'Yes. We extract your existing content, reimport it correctly into the new WordPress structure, and set up all necessary 301 redirects to protect your current search engine rankings.' },
      { question: 'Can my team add blog posts and pages themselves?', answer: 'Yes. The entire purpose of a custom WordPress CMS is enabling your team to publish and edit content confidently without requiring a developer for every routine update.' },
      { question: 'Do you handle plugin updates and maintenance?', answer: 'Post-launch plugin and security updates are covered during the initial 30-day support window. For ongoing maintenance, we offer monthly retainer packages.' }
    ],
    complementaries: [
      { name: 'SEO Optimization', url: '/services/seo-optimization', desc: 'Leverage your new lean, fast WordPress codebase as the foundation for a comprehensive SEO strategy targeting high-value, buyer-intent keywords.' },
      { name: 'Content Marketing', url: '/services/content-marketing', desc: 'Use your new CMS capabilities to their full potential with a consistent, high-quality content publishing schedule that builds topical authority.' },
      { name: 'Web Hosting', url: '/services/web-hosting', desc: 'Deploy your WordPress site onto cloud hosting specifically tuned for WordPress performance, security, and scalability.' }
    ]
  },
  'Lead Generation System': {
    deliverables: [
      {
        title: 'Multi-Channel Lead Capture Funnels',
        description: 'Strategically designed opt-in flows deployed across paid social, organic search, and content marketing that attract and pre-qualify high-intent prospects before they reach your team.',
        icon: 'target',
        color: 'purple'
      },
      {
        title: 'Lead Qualification Scoring System',
        description: 'Automated behavioral and demographic scoring rules that rank every incoming lead by conversion probability, ensuring your sales team contacts the hottest prospects first.',
        icon: 'chart',
        color: 'blue'
      },
      {
        title: 'Instant Lead Routing & Notifications',
        description: 'Real-time lead delivery to the right sales representative via Slack, SMS, and CRM task creation the moment a prospect completes the qualification process.',
        icon: 'rocket',
        color: 'green'
      }
    ],
    processSteps: {
      'Define ideal customer profile': 'We work with your sales leadership to identify the exact characteristics of your highest-value customers, building audience targeting criteria around real conversion data rather than assumptions.',
      'Design lead capture assets': 'We build dedicated opt-in pages with compelling lead magnets—free audits, exclusive guides, or live training events—that give prospects a clear reason to exchange their contact information.',
      'Activate traffic sources': 'We launch the appropriate traffic channels for your audience—Meta Ads for B2C, LinkedIn Ads for B2B, or SEO content—calibrated to the purchase intent level of each platform.',
      'Configure tracking & attribution': 'We implement UTM parameter tracking, server-side conversion pixels, and CRM source tagging so every lead can be traced back to the exact campaign and creative that generated it.',
      'Build automated routing workflows': 'We connect the lead capture system to your CRM and configure assignment rules, instant notification alerts, and follow-up task creation based on lead quality score and product interest.',
      'Monitor and optimize cost per lead': 'We analyze weekly performance data across all active channels, identifying the lowest-cost, highest-quality traffic sources and reallocating budget to maximize volume within your target CPL.'
    },
    faqs: [
      { question: 'Are leads generated exclusively for my business?', answer: 'Yes, every lead is generated specifically for your brand through campaigns built around your offer. We never sell shared lists or split leads between multiple clients.' },
      { question: 'How fast will I get the first leads?', answer: 'Via paid advertising, leads typically begin arriving within 24 to 48 hours of campaign launch. Organic lead generation through SEO content builds over a 3 to 6 month timeline.' },
      { question: 'Can you control lead quality not just volume?', answer: 'Yes. We use qualification questions in the capture funnel, behavioral scoring in the CRM, and precise audience targeting upstream to filter out tire-kickers before they reach your team.' },
      { question: 'What is a lead magnet and why do I need one?', answer: 'A lead magnet is a valuable free resource offered in exchange for contact information. High-performing lead generation almost always requires a genuinely useful lead magnet that attracts the right audience.' },
      { question: 'Can you generate leads for high-ticket B2B services?', answer: 'Yes. We specialize in generating qualified B2B leads using LinkedIn advertising, intent-targeted Google Search campaigns, and gated content funnels that attract serious decision-makers.' },
      { question: 'Will leads appear automatically in our CRM?', answer: 'Yes. We integrate every lead capture touchpoint with your CRM so new contacts appear with full source attribution, qualification responses, and next-step tasks without any manual data entry.' }
    ],
    complementaries: [
      { name: 'CRM Setup', url: '/services/crm-setup', desc: 'Build the organized pipeline that your lead generation system routes every new prospect into the moment they opt in.' },
      { name: 'Social Media Ads Management', url: '/services/social-media-ads-management', desc: 'Fuel your lead generation funnels with precision-targeted paid social campaigns that deliver a consistent daily volume of qualified inquiries.' },
      { name: 'Landing Page Design', url: '/services/landing-page-design', desc: 'Maximize your lead capture rate with a dedicated, conversion-focused opt-in page designed specifically to attract and qualify your ideal customer.' }
    ]
  }
};
