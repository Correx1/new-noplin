module.exports = {
  'Marketing Automation Setup': {
    deliverables: [
      {
        title: 'Multi-Trigger Automation Blueprints',
        description: 'Complex Zapier or Make scenarios linking your disparate SaaS tools into one automated system—triggered by lead form submissions, payment events, or user behavior.',
        icon: 'gear',
        color: 'orange'
      },
      {
        title: 'Error Handling & Fallback Logic',
        description: 'Bulletproof routing with automatic retry logic and instant Slack alerts sent to your team whenever a critical automation step fails or a webhook drops.',
        icon: 'shield',
        color: 'pink'
      },
      {
        title: 'Custom Data Transformation Scripts',
        description: 'Precisely crafted custom code steps that clean, format, and normalize data as it passes between platforms with conflicting field structures or naming conventions.',
        icon: 'rocket',
        color: 'yellow'
      }
    ],
    processSteps: {
      'Map manual processes & bottlenecks': 'We interview your operations and marketing teams to document every repetitive manual task—data entry, lead routing, follow-up emails—that consumes time without adding strategic value.',
      'Select the right automation platform': 'We evaluate Zapier versus Make (Integromat) based on your tool complexity, monthly trigger volume, and budget, selecting the platform that gives you the most power for the cost.',
      'Build core trigger sequences': 'We establish the foundational webhooks capturing events from Facebook Lead Ads, website forms, Stripe payments, or Shopify orders that kick off each automation chain.',
      'Add data transformation logic': 'We insert custom code steps to reformat dates, clean phone number formats, split full names into first and last, and merge data fields before sending to destination tools.',
      'Connect all output destinations': 'We precisely route the cleaned, formatted data into your CRM, email platform, Google Sheets, Slack channels, and any other tools in your workflow simultaneously.',
      'Stress test with edge-case data': 'We deliberately send malformed test data through every automation to verify the error handling routes behave correctly and alerts fire as expected before going live.'
    },
    faqs: [
      { question: 'Zapier or Make: which is better for my business?', answer: 'Zapier offers a gentler learning curve and works with more obscure apps. Make is significantly more powerful and cost-effective for complex multi-branch logic with high monthly task volumes.' },
      { question: 'What happens when an automation breaks?', answer: 'We build error-handling paths that catch failures, log the event, and immediately notify your team via Slack with the exact error payload so nothing falls through the cracks unnoticed.' },
      { question: 'Can you automate tools that are not on Zapier?', answer: 'If the tool has a REST API or sends webhooks, we can build a custom integration using Zapier or Make\'s webhook modules, effectively connecting any software with a public interface.' },
      { question: 'Do you need our login credentials to set this up?', answer: 'No. Both Zapier and Make use secure OAuth connections or API keys so you authorize access through the platform itself without ever sharing your actual account passwords.' },
      { question: 'Will this save us money?', answer: 'Dramatically. Eliminating even five hours of manual data entry per week across your team saves significant monthly payroll cost, often paying for the automation investment within 30 to 60 days.' },
      { question: 'How long does automation setup take?', answer: 'Simple two-platform automations are typically live within 3 to 5 days. Complex multi-step workflows involving custom logic and several tools usually take 1 to 2 weeks to build and test.' }
    ],
    complementaries: [
      { name: 'CRM Setup', url: '/services/crm-setup', desc: 'Build the organized CRM pipeline that your automations will route every new lead and contact into the moment they opt in.' },
      { name: 'Email Marketing', url: '/services/email-marketing', desc: 'Trigger deeply personalized email sequences the instant an automation event completes, creating seamless multi-touchpoint customer journeys.' },
      { name: 'Lead Generation System', url: '/services/lead-generation-system', desc: 'Connect your lead capture funnels directly into your new automation network so every prospect is instantly qualified and routed without human intervention.' }
    ]
  },
  'CRM Setup': {
    deliverables: [
      {
        title: 'Custom Pipeline Architecture',
        description: 'A purpose-built sales pipeline with deal stages, field requirements, and automation triggers designed to mirror exactly how your team actually closes business.',
        icon: 'gear',
        color: 'yellow'
      },
      {
        title: 'Safe Data Migration',
        description: 'A structured, rigorously validated import process that moves thousands of legacy contacts, deals, and notes into the new CRM with zero data loss or duplication.',
        icon: 'shield',
        color: 'pink'
      },
      {
        title: 'Automated Lifecycle Workflows',
        description: 'Intelligent background triggers that automatically send follow-up emails, assign tasks to reps, or alert managers when a high-value deal goes cold.',
        icon: 'chart',
        color: 'orange'
      }
    ],
    processSteps: {
      'Audit your actual sales process': 'We interview your sales reps and sales managers to understand how deals actually get closed—not how they are supposed to—so we model the CRM around real workflows.',
      'Select the right CRM platform': 'We provide an objective recommendation between HubSpot, Salesforce, and ActiveCampaign based on your team size, marketing tech stack, and long-term scalability requirements.',
      'Build custom fields & pipeline stages': 'We create tailored deal stages, contact properties, and company records that eliminate every irrelevant default field and make the CRM an accurate mirror of your business.',
      'Clean and import existing data': 'We sanitize your spreadsheets using deduplication and normalization logic before importing, ensuring the new CRM starts with clean, well-structured data free of duplicates.',
      'Configure automation workflows': 'We build smart triggers—deal stage changes, email opens, inactivity alerts—that automatically assign tasks, send internal notifications, and keep your pipeline moving.',
      'Train your team comprehensively': 'We deliver recorded video walkthroughs and written documentation ensuring your sales and marketing teams adopt the CRM confidently from the very first day.'
    },
    faqs: [
      { question: 'HubSpot vs Salesforce: which should we choose?', answer: 'HubSpot is the right choice for growing companies wanting a powerful yet easy-to-adopt platform with strong native marketing integration. Salesforce is for enterprises needing deep customization and complex reporting.' },
      { question: 'How do you prevent duplicate contacts during migration?', answer: 'We run fuzzy matching algorithms on your existing data before import, flagging and merging duplicates based on email addresses, phone numbers, and company names.' },
      { question: 'Will my team actually use the new CRM?', answer: 'We design the CRM around how your team works, removing unnecessary complexity. The result is an interface that feels intuitive rather than obstructive, dramatically improving adoption.' },
      { question: 'Can the CRM track website visitor behavior?', answer: 'Yes. With HubSpot or Salesforce tracking scripts installed on your site, reps can see exactly which pages a lead visited before a call, giving them critical context for personalized outreach.' },
      { question: 'Can you connect the CRM to our email and phone tools?', answer: 'Absolutely. We integrate your CRM bidirectionally with Gmail, Outlook, calling tools like Aircall, and marketing automation platforms so all activity logs automatically.' },
      { question: 'Do you offer ongoing CRM maintenance?', answer: 'Yes. CRMs degrade over time as teams add ad-hoc fields and pipelines. We offer monthly audit retainers to keep your architecture clean, your data accurate, and your automations running correctly.' }
    ],
    complementaries: [
      { name: 'Email Marketing', url: '/services/email-marketing', desc: 'Send behavioral email sequences triggered directly from contact stage changes in your CRM for true one-to-one personalization at scale.' },
      { name: 'Marketing Automation Setup', url: '/services/marketing-automation-setup', desc: 'Connect your CRM to the rest of your software stack through intelligent automations that route leads, sync data, and trigger actions across tools.' },
      { name: 'Lead Generation System', url: '/services/lead-generation-system', desc: 'Build the front-end lead capture system that feeds a steady stream of qualified prospects into your newly organized CRM pipeline.' }
    ]
  },
  'Lead Generation System': {
    deliverables: [
      {
        title: 'Omnichannel Lead Capture Funnels',
        description: 'Strategically designed opt-in flows across paid social, SEO, and organic content that attract high-intent prospects and qualify them before they reach your sales team.',
        icon: 'target',
        color: 'purple'
      },
      {
        title: 'Lead Scoring & Qualification Logic',
        description: 'Automated behavioral scoring criteria that ranks incoming leads by purchase intent, so your sales team focuses only on prospects most likely to convert quickly.',
        icon: 'chart',
        color: 'blue'
      },
      {
        title: 'Instant Lead Routing Notifications',
        description: 'Real-time Slack and SMS alerts delivering qualified leads to the right sales representative the moment they complete the qualification funnel, eliminating response delay.',
        icon: 'rocket',
        color: 'green'
      }
    ],
    processSteps: {
      'Define the ideal customer profile': 'We collaborate with your sales team to identify the precise firmographic, demographic, and behavioral characteristics of your highest-converting customers to target accurately.',
      'Design lead capture funnel assets': 'We build dedicated opt-in pages with lead magnets—free guides, audits, or webinars—specifically engineered to attract prospects at the right decision stage.',
      'Launch traffic acquisition channels': 'We activate the appropriate traffic sources—Meta Ads, Google Search Ads, LinkedIn Ads, or SEO content—calibrated to the buying intent level of each channel.',
      'Implement tracking & attribution': 'We configure UTM parameters, conversion pixels, and CRM source tracking so every generated lead is attributed back to the exact campaign, ad set, and creative that produced it.',
      'Configure automated lead routing': 'We connect the funnel directly to your CRM and set up instant notification workflows that route leads to the correct sales rep based on geography, product, or deal size.',
      'Analyze & optimize cost per lead': 'We monitor weekly performance data, identifying which channels, audiences, and lead magnets generate the lowest cost per qualified lead, then scaling what works and cutting what does not.'
    },
    faqs: [
      { question: 'Are the leads generated exclusively for my business?', answer: 'Yes, 100%. Every lead is generated specifically for your brand through campaigns built around your offer. We do not sell shared or pre-purchased lead lists under any circumstances.' },
      { question: 'How quickly will I receive the first leads?', answer: 'Via paid advertising campaigns, qualified leads typically begin flowing within 24 to 48 hours of launch. Organic SEO-based leads build steadily over a 3 to 6 month timeline.' },
      { question: 'Can you control the quality of leads rather than just volume?', answer: 'Yes. We implement qualification questions within the funnel, lead scoring logic in your CRM, and precise audience targeting upstream to filter out low-quality traffic before it reaches your team.' },
      { question: 'What is a lead magnet and do I need one?', answer: 'A lead magnet is a high-value free resource—guide, checklist, audit, or webinar—offered in exchange for contact information. High-converting lead generation almost always involves a compelling lead magnet.' },
      { question: 'Can you generate leads for high-ticket services or B2B?', answer: 'Yes. We specialize in generating qualified leads for high-ticket offers and B2B services using LinkedIn advertising, content-based funnels, and intent-targeted Google campaigns.' },
      { question: 'Will leads be automatically entered into our CRM?', answer: 'Yes. We integrate every lead capture point directly with your CRM so new contacts appear with full source attribution, qualification answers, and next-step tasks without any manual entry.' }
    ],
    complementaries: [
      { name: 'CRM Setup', url: '/services/crm-setup', desc: 'Build the organized pipeline architecture that captures and tracks every incoming lead correctly from the moment they first enter your system.' },
      { name: 'Social Media Ads Management', url: '/services/social-media-ads-management', desc: 'Fuel your lead generation system with precision-targeted paid social campaigns that drive a reliable daily volume of qualified prospects.' },
      { name: 'Landing Page Design', url: '/services/landing-page-design', desc: 'Ensure every lead capture touchpoint converts at the highest possible rate with a purpose-built, persuasive opt-in page.' }
    ]
  },
  'Website Strategy Session': {
    deliverables: [
      {
        title: 'Conversion Architecture Audit',
        description: 'A thorough review of your current website\'s user journey, CTA placement, messaging hierarchy, and conversion funnel to expose exactly where visitors drop off.',
        icon: 'magnifier',
        color: 'blue'
      },
      {
        title: 'Sitemap & Page Hierarchy Plan',
        description: 'A crystal-clear visual map of your proposed site structure, defining which pages to create, which to consolidate, and how to guide users from arrival to conversion.',
        icon: 'chart',
        color: 'green'
      },
      {
        title: 'Strategic Website Roadmap Document',
        description: 'A complete written strategy document outlining budget ranges, development priorities, technology recommendations, and a phased implementation timeline.',
        icon: 'document',
        color: 'purple'
      }
    ],
    processSteps: {
      'Pre-session business model review': 'Before the call, we analyze your current website analytics, top traffic sources, and primary conversion goals to arrive at the session with data-backed observations already prepared.',
      'Audit existing website performance': 'We walk through your current site together, identifying messaging gaps, UX friction points, missing trust signals, and technical issues that are costing you leads and sales.',
      'Map out the ideal site architecture': 'We collaboratively design the right page structure for your goals—whether that means consolidating a bloated site, building new service pages, or restructuring navigation for clarity.',
      'Define technology recommendations': 'We advise on the right platform and tech stack for your specific needs, team capabilities, and budget—whether that is WordPress, Next.js, Webflow, or Shopify.',
      'Align website strategy with marketing': 'We ensure your website structure supports your SEO strategy, paid ad funnels, and content marketing plan so every digital channel works together rather than in isolation.',
      'Deliver prioritized action roadmap': 'You receive a structured document listing every recommended change ranked by business impact and implementation effort so you know exactly what to do first.'
    },
    faqs: [
      { question: 'Who is this session designed for?', answer: 'This session is ideal for business owners planning a website rebuild or redesign, teams scaling their digital presence, and companies whose current site is not generating leads or revenue.' },
      { question: 'Do I need to have a website already?', answer: 'No. If you are starting from scratch, we map out the ideal site structure and strategy before any design or development begins, saving significant rework time and budget later.' },
      { question: 'How is this different from a Digital Marketing Consultation?', answer: 'A Digital Marketing Consultation covers your entire marketing ecosystem. A Website Strategy Session focuses specifically on the website itself—its structure, messaging, UX, and conversion architecture.' },
      { question: 'Will you build the site after the strategy session?', answer: 'Yes. The strategy session produces the roadmap, and our web design and development team executes it. Many clients combine this with our A-Grade Website Design service.' },
      { question: 'Do you provide any deliverable documents after the session?', answer: 'Yes. You receive a written strategic recommendations document, a proposed sitemap, and technology and budget guidance within 3 business days following the session.' },
      { question: 'How long does the session itself run?', answer: 'Website Strategy Sessions typically run 90 minutes and are conducted via video call. A follow-up session may be scheduled for complex projects requiring additional discovery depth.' }
    ],
    complementaries: [
      { name: 'A-Grade Website Design', url: '/services/a-grade-website-design', desc: 'Execute the website roadmap produced in your strategy session with a fully custom-designed, high-performance website.' },
      { name: 'Branding Consultation', url: '/services/branding-consultation', desc: 'Solidify your brand positioning, messaging, and visual identity before beginning any website design work.' },
      { name: 'SEO Optimization', url: '/services/seo-optimization', desc: 'Build SEO strategy into your website architecture from the very beginning, ensuring every new page is structured to rank from day one.' }
    ]
  },
  'Branding Consultation': {
    deliverables: [
      {
        title: 'Brand Positioning Framework',
        description: 'A clearly articulated brand positioning statement defining your unique value proposition, target audience, and differentiation from competitors in a single memorable sentence.',
        icon: 'target',
        color: 'pink'
      },
      {
        title: 'Voice & Tone Guidelines',
        description: 'A detailed linguistic rulebook defining exactly how your brand communicates—the vocabulary it uses, the emotions it evokes, and the personality it projects across all channels.',
        icon: 'pen',
        color: 'yellow'
      },
      {
        title: 'Brand Strategy Document',
        description: 'A comprehensive written strategy file encapsulating your brand archetype, mission, values, messaging pillars, and competitive positioning for consistent application company-wide.',
        icon: 'document',
        color: 'purple'
      }
    ],
    processSteps: {
      'Brand discovery workshop': 'We conduct an in-depth session exploring your origin story, core values, audience psychology, competitive landscape, and the emotional territory you want your brand to own.',
      'Define brand archetype & positioning': 'We identify the archetypal character your brand embodies—whether that is the Expert, the Rebel, the Nurturer, or another—and build your positioning around that core personality.',
      'Clarify target audience personas': 'We build detailed customer personas capturing the fears, ambitions, language, and decision-making triggers of your most valuable audience segments.',
      'Develop core messaging framework': 'We craft your primary value proposition, key messaging pillars, elevator pitch, and objection-handling statements that your team uses consistently across all channels.',
      'Write voice & tone guidelines': 'We define the vocabulary, sentence structure, emotional tone, and communication style that makes your brand sound distinctively like itself whether in a social post or a formal proposal.',
      'Present & refine the strategy': 'We walk through the complete brand strategy document together, refining specific elements based on your feedback before finalizing for organization-wide distribution.'
    },
    faqs: [
      { question: 'Do we need branding consultation before building a website?', answer: 'Strongly yes. Without a clear brand strategy, your website will have confusing messaging. A defined positioning foundation makes every design and copywriting decision dramatically faster and more effective.' },
      { question: 'Is this about logo and colors or something deeper?', answer: 'This consultation goes far deeper than visual identity. It establishes the strategic brand foundation—positioning, messaging, voice, and values—that all visual work should then translate and express.' },
      { question: 'We already have a logo. Do we still need this?', answer: 'Having a logo does not mean you have a brand strategy. Many businesses with logos still lack consistent messaging, a clear value proposition, and a defined audience. This session addresses those foundations.' },
      { question: 'How long does the branding consultation process take?', answer: 'The initial discovery session runs 2 hours. We deliver the complete Brand Strategy Document within 5 to 7 business days, with a follow-up review call to walk through and finalize the content.' },
      { question: 'Will you help us implement the brand strategy?', answer: 'Yes. Our team can apply the strategy to your website, social media, pitch decks, and advertising campaigns, ensuring consistent brand expression across every customer touchpoint.' },
      { question: 'Can you help rebrand an established business?', answer: 'Absolutely. Rebranding an existing business requires extra care to retain existing customer recognition while evolving the brand forward. We specialize in strategic repositioning alongside new visual direction.' }
    ],
    complementaries: [
      { name: 'A-Grade Website Design', url: '/services/a-grade-website-design', desc: 'Apply your new brand strategy to a completely custom, high-performance website that communicates your positioning to every visitor.' },
      { name: 'Social Branding', url: '/services/social-branding', desc: 'Translate your brand strategy into cohesive visual assets across every social media platform for a unified professional presence.' },
      { name: 'Pitch Deck Design', url: '/services/pitch-deck-design', desc: 'Present your newly defined brand and value proposition to investors or enterprise clients through a compelling, professional pitch deck.' }
    ]
  }
};
