module.exports = {
  'Social Media Management': {
    deliverables: [
      {
        title: 'Custom Monthly Content Calendar',
        description: 'An intensely strategic grid of educational carousels, engaging reels, and promotional posts meticulously scheduled weeks in advance for your review and approval.',
        icon: 'calendar',
        color: 'blue'
      },
      {
        title: 'Community Engagement Management',
        description: 'Proactive daily interaction responding to comments, managing DMs, and strategically engaging with related industry accounts to compound organic reach.',
        icon: 'chat',
        color: 'orange'
      },
      {
        title: 'Monthly Performance Analytics Report',
        description: 'A transparent monthly deep-dive tracking follower growth, post reach, engagement rates, and the demographic evolution of your growing audience.',
        icon: 'chart',
        color: 'yellow'
      }
    ],
    processSteps: {
      'Audit existing audience & content': 'We analyze your current follower base, top-performing posts, and competitor strategies to understand which content pillars create the most algorithmic engagement for your niche.',
      'Develop brand-specific content strategy': 'We construct a customized monthly calendar balancing value-driven educational posts, behind-the-scenes content, social proof, and subtle promotional touches that avoid feeling salesy.',
      'Design & write daily content': 'Our designers create thumb-stopping graphics and our copywriters draft hook-driven captions tailored to each platform\'s specific culture, optimal post length, and algorithm preferences.',
      'Client approval workflow': 'We send the month\'s complete content payload through your review dashboard so you can approve, request tweaks, or redirect any piece before anything goes public.',
      'Publish at peak-engagement hours': 'We use enterprise scheduling tools to post at the exact times your specific audience is most active, maximizing early engagement signals that trigger broader algorithmic distribution.',
      'Engage & grow community actively': 'We moderate your timeline in real time—responding to key comments, engaging with industry hashtags, and strategically interacting with accounts in your target audience\'s following list.'
    },
    faqs: [
      { question: 'Which social media platforms do you manage?', answer: 'We specialize in LinkedIn for B2B authority building, Instagram and TikTok for visual consumer brands, and Facebook and X for broader community and engagement campaigns.' },
      { question: 'Do I need to provide the photos and videos?', answer: 'For businesses that serve physical locations or sell physical products, you supply raw content. We handle all editing, graphic design, captioning, and scheduling entirely.' },
      { question: 'Is social media for brand building or direct sales?', answer: 'Organic social media is a long-term investment in community trust and brand authority. For immediate direct-response sales, pair this with our Social Media Ads Management service.' },
      { question: 'Do you reply to customer inquiries in DMs?', answer: 'We handle general engagement and filter DMs. Complex customer service complaints or purchase-specific questions are flagged and forwarded to your internal team immediately.' },
      { question: 'Will the content sound like my brand voice?', answer: 'Yes. We spend the entire onboarding phase documenting your exact tone, language preferences, and content direction guide before writing a single caption.' },
      { question: 'How many posts do you publish per week?', answer: 'Our packages typically range from 5 to 14 posts per week depending on your platform mix and chosen plan. We agree on a specific cadence during onboarding.' }
    ],
    complementaries: [
      { name: 'Social Media Design (Content Pack)', url: '/services/social-media-design-content-pack', desc: 'Give your team editable Canva templates so they can supplement our managed posts with their own branded assets any time.' },
      { name: 'Social Branding', url: '/services/social-branding', desc: 'Ensure your profile banners and highlights look polished and professional before we drive any significant traffic to your profiles.' },
      { name: 'Social Media Ads Management', url: '/services/social-media-ads-management', desc: 'Amplify your best-performing organic content with targeted advertising spend to dramatically accelerate audience and revenue growth.' }
    ]
  },
  'Social Media Ads Management': {
    deliverables: [
      {
        title: 'Full-Funnel Campaign Architecture',
        description: 'A strategically structured Meta, TikTok, or LinkedIn ad account using cold audiences, warm retargeting layers, and exclusion lists to maximize every dollar of ad spend.',
        icon: 'target',
        color: 'pink'
      },
      {
        title: 'Continuous A/B Creative Testing',
        description: 'Systematic split-testing of video hooks, static image variations, and primary text angles to consistently lower your Cost-Per-Acquisition over time.',
        icon: 'play',
        color: 'green'
      },
      {
        title: 'Pixel & Server-Side Tracking Setup',
        description: 'Flawless Conversions API integration ensuring every purchase or lead generation event is accurately reported back to the platform, defeating iOS privacy signal loss.',
        icon: 'shield',
        color: 'purple'
      }
    ],
    processSteps: {
      'Onboard & audit existing pixel tracking': 'We audit your Meta Pixel or LinkedIn Insight Tag setup, correcting any misfiring events and confirming purchase and lead events are passing server-side via CAPI.',
      'Develop full-funnel campaign strategy': 'We map a Top-of-Funnel awareness layer, Mid-Funnel engagement layer, and Bottom-of-Funnel retargeting structure aligned precisely to your buyer\'s decision timeline.',
      'Write direct-response ad copy': 'Our copywriters deploy proven frameworks like AIDA and PAS to craft headlines and primary text that scroll-stop the exact audience you are targeting without relying on discounts.',
      'Launch initial testing campaigns': 'We deploy controlled budget across multiple audiences and creative variations simultaneously, gathering statistically significant performance data within the first 7 to 10 days.',
      'Scale winning ad sets strategically': 'We identify the best-performing audience and creative combinations, cutting underperformers immediately and scaling the winning sets with increased daily budgets.',
      'Monthly reporting & creative refresh': 'We deliver transparent ROI reports every month and continuously rotate fresh creatives into your active ad sets to prevent audience fatigue from eroding performance.'
    },
    faqs: [
      { question: 'Which platforms do you run paid social ads on?', answer: 'We execute campaigns on Meta (Facebook and Instagram), TikTok, and LinkedIn. Platform selection depends on where your ideal customer actually spends their time.' },
      { question: 'Do you create the ad videos and images?', answer: 'This service focuses on media buying and campaign management. Our Ad Creatives team produces the high-converting visuals that we deploy and test within your account.' },
      { question: 'What is the minimum ad budget required?', answer: 'We recommend a minimum ad spend of $1,500 per month to exit the platform learning phase and gather enough data to optimize. Higher budgets accelerate results significantly.' },
      { question: 'How quickly will I see profitable results?', answer: 'Paid social generates traffic within 24 hours of launch. Achieving consistently profitable ROAS typically requires 3 to 6 weeks of structured testing and iteration.' },
      { question: 'Do you guarantee a specific return on ad spend?', answer: 'No ethical agency guarantees specific ROAS without data from your actual account. We guarantee a disciplined, data-driven methodology that kills losing ads and scales winners.' },
      { question: 'Can you take over an existing ad account?', answer: 'Yes. We audit your existing account structure, creative library, and historical data before implementing our own campaign architecture and optimization process.' }
    ],
    complementaries: [
      { name: 'Ad Creatives (Video)', url: '/services/ad-creatives-video', desc: 'Feed our media buyers an ongoing supply of fresh, platform-native short-form video creatives to continuously test and scale.' },
      { name: 'Landing Page Design', url: '/services/landing-page-design', desc: 'Maximize your ad spend ROI by sending clicks to a purpose-built, heavily optimized conversion page rather than a generic website homepage.' },
      { name: 'Lead Generation System', url: '/services/lead-generation-system', desc: 'Combine paid social traffic with a complete automated lead qualification and routing system to turn raw clicks into booked calls.' }
    ]
  },
  'SEO Optimization': {
    deliverables: [
      {
        title: 'Comprehensive Technical SEO Audit',
        description: 'A deep crawl of your entire website uncovering indexation errors, broken canonicals, slow Core Web Vitals, crawl budget waste, and mobile usability failures.',
        icon: 'gear',
        color: 'pink'
      },
      {
        title: 'Keyword & Content Architecture Plan',
        description: 'A structured map assigning high-value, buyer-intent keywords to dedicated pages and blog clusters, establishing clear topical authority across your niche.',
        icon: 'chart',
        color: 'green'
      },
      {
        title: 'Link Acquisition Strategy & Execution',
        description: 'White-hat backlink generation through targeted digital PR outreach, guest articles on authoritative publications, and linkable asset creation to boost Domain Authority.',
        icon: 'rocket',
        color: 'purple'
      }
    ],
    processSteps: {
      'Audit site infrastructure thoroughly': 'We deploy enterprise crawlers to identify critical technical failures—broken internal links, missing metadata, lazy-loading issues, and duplicate content causing keyword cannibalization.',
      'Conduct keyword gap analysis': 'We analyze which high-value keywords your top competitors rank for that your site does not, prioritizing low-competition opportunities that can generate traffic quickly.',
      'Optimize on-page semantic structure': 'We rewrite title tags, meta descriptions, H1 and H2 headings, and body copy on your key service and product pages to align precisely with target search intent.',
      'Develop topic cluster content plan': 'We design a pillar-cluster content architecture where a comprehensive pillar page is supported by a series of related blog articles, signaling deep topical authority to Google.',
      'Build high-quality targeted backlinks': 'We conduct personalized outreach to relevant publications and industry blogs to acquire authoritative do-follow backlinks that directly improve your domain-level ranking power.',
      'Monitor rankings & iterate monthly': 'We track precise keyword position changes weekly, update declining pages, improve internal link distribution, and adjust targeting based on algorithm changes and competitor activity.'
    },
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Depending on domain age, niche competitiveness, and starting technical health, meaningful ranking improvements and organic traffic growth typically surface within 4 to 6 months of consistent execution.' },
      { question: 'Do you guarantee a number one ranking?', answer: 'No. Any agency that guarantees specific rankings is being dishonest. We guarantee methodical execution of the technical, on-page, and off-page strategies that reliably move rankings upward.' },
      { question: 'What is the difference between technical and on-page SEO?', answer: 'Technical SEO ensures search engines can crawl, render, and index your site correctly. On-page SEO ensures the actual content, headings, and metadata answer the user\'s search intent precisely.' },
      { question: 'Do you buy low-quality backlinks?', answer: 'Never. We build backlinks exclusively through manual outreach and content-based strategies. Toxic backlinks from link farms will trigger Google penalties and destroy your rankings.' },
      { question: 'Is SEO a one-time project?', answer: 'No. SEO is an ongoing process. If you stop publishing content and building authority, competitors will gradually reclaim the rankings you worked to achieve.' },
      { question: 'Can you fix an existing Google penalty?', answer: 'Yes. We audit your backlink profile for toxic links, submit disavow files to Google, resolve any manual action violations, and rebuild the site\'s trust signals systematically.' }
    ],
    complementaries: [
      { name: 'Content Marketing', url: '/services/content-marketing', desc: 'Produce the high-authority blog cluster articles required to build topical depth and capture long-tail keyword traffic consistently.' },
      { name: 'A-Grade Website Design', url: '/services/a-grade-website-design', desc: 'Migrate to a blazing-fast, semantically correct website architecture that gives Google exactly what it needs to rank you above competitors.' },
      { name: 'Website Strategy Session', url: '/services/website-strategy-session', desc: 'Align your SEO roadmap with your broader digital marketing strategy to ensure every organic ranking feeds directly into revenue-generating funnels.' }
    ]
  },
  'Email Marketing': {
    deliverables: [
      {
        title: 'Automated Drip Sequences',
        description: 'Strategic, multi-step automated email flows designed to nurture cold subscribers into warm buyers through relevant value, social proof, and timely offers.',
        icon: 'chat',
        color: 'green'
      },
      {
        title: 'Deliverability Configuration',
        description: 'Complete DNS record setup including DKIM, DMARC, and SPF authentication to permanently protect your sender reputation and ensure inbox placement.',
        icon: 'shield',
        color: 'purple'
      },
      {
        title: 'Branded HTML Email Templates',
        description: 'Beautifully designed, mobile-responsive HTML newsletter templates that render consistently across all major email clients including Outlook, Gmail, and Apple Mail.',
        icon: 'brush',
        color: 'blue'
      }
    ],
    processSteps: {
      'Audit deliverability & sender health': 'We analyze your sending domain reputation, check for blacklist appearances, and fully configure DKIM, SPF, and DMARC records to maximize inbox placement rates.',
      'Map automated sequence architecture': 'We design the full automation blueprint—Welcome Series, Lead Nurture sequences, Abandoned Cart flows, Win-Back campaigns, and post-purchase upsell chains.',
      'Design branded email templates': 'Our design team creates responsive HTML email layouts that match your visual brand guidelines and display correctly across every major email client and device type.',
      'Write persuasive email copy': 'Our copywriters craft attention-commanding subject lines, preview text that drives opens, and persuasive body copy engineered to guide the reader toward a specific action.',
      'Configure segmentation & logic': 'We build conditional branching inside your platform—Klaviyo, ActiveCampaign, or Mailchimp—so each subscriber receives emails triggered by their specific behavior rather than a generic blast.',
      'Test across clients & launch sequences': 'We run every email through Litmus to verify correct rendering across 50+ client and device combinations before activating any live automation or scheduling any broadcast.'
    },
    faqs: [
      { question: 'Why are my emails going to spam?', answer: 'The most common causes are broken DKIM and DMARC DNS records, sending to disengaged lists without cleaning them, or using spam-trigger phrases in subject lines. We fix all three.' },
      { question: 'Which email marketing platform is best?', answer: 'For e-commerce brands, Klaviyo is the dominant choice due to its deep integration with Shopify and behavioral segmentation. For B2B and service businesses, ActiveCampaign offers superior automation logic.' },
      { question: 'Do you create both HTML and plain-text emails?', answer: 'Yes. We design rich HTML emails for promotional campaigns and use strategic plain-text formatting for B2B drip sequences, which consistently achieve higher open and reply rates.' },
      { question: 'How do you personalize email content at scale?', answer: 'We use dynamic merge tags, conditional content blocks, and behavioral triggers so each subscriber receives contextually relevant copy based on their industry, actions, or purchase history.' },
      { question: 'Are you going to manage the newsletters every week too?', answer: 'This service covers foundational setup and automated sequences. Ongoing weekly newsletter management is a separate retainer. We can discuss that scope during your onboarding call.' },
      { question: 'What results should I expect from email marketing?', answer: 'A well-architected email system typically generates 20 to 40% of total e-commerce revenue. Results depend on list quality, automation depth, and how relevant the offers are to your segments.' }
    ],
    complementaries: [
      { name: 'Landing Page Design', url: '/services/landing-page-design', desc: 'Capture email subscribers through a dedicated high-converting opt-in page before routing them into your automated sequences.' },
      { name: 'Content Marketing', url: '/services/content-marketing', desc: 'Populate your email newsletters with authoritative blog content that keeps subscribers engaged and drives repeat traffic to your site.' },
      { name: 'CRM Setup', url: '/services/crm-setup', desc: 'Build the organized contact database and pipeline structure needed to send truly personalized emails based on deal stage and lead status.' }
    ]
  },
  'Content Marketing': {
    deliverables: [
      {
        title: 'Pillar & Cluster Blog Articles',
        description: 'Deeply researched, 1,500 to 3,000-word editorial pieces built to rank on Google, establish topical authority, and position your brand as the trusted expert in your field.',
        icon: 'document',
        color: 'yellow'
      },
      {
        title: 'Lead Magnet Assets',
        description: 'Highly valuable downloadable resources—checklists, whitepapers, templates, or guides—designed to capture qualified email addresses from your target readership.',
        icon: 'target',
        color: 'blue'
      },
      {
        title: 'Content Distribution System',
        description: 'A strategic multi-channel repurposing engine that extracts maximum value from every article by transforming it into social posts, email content, and short-form video scripts.',
        icon: 'chart',
        color: 'green'
      }
    ],
    processSteps: {
      'Research audience search behavior': 'We use SEO tools to map the exact questions your target customers are typing into Google, selecting keywords with high buyer intent and achievable ranking difficulty.',
      'Build a 90-day editorial calendar': 'We create a structured publishing schedule targeting pillar topics and supporting cluster keywords, ensuring consistent content velocity that signals authority to search engines.',
      'Research and draft each article': 'Our writers go beyond surface-level summaries, incorporating original data, expert quotes, and unique angles to produce genuinely useful content that earns links and shares.',
      'Optimize for on-page SEO': 'We apply proper heading hierarchy, semantic keyword placement, internal linking to related pages, optimized meta titles and descriptions, and image alt-text to every article.',
      'Design supporting visual assets': 'We create custom charts, infographic sections, and cover images for each post to increase time-on-page, improve social shareability, and reinforce key data points visually.',
      'Publish, distribute & repurpose': 'We format each article correctly in your CMS with proper schema markup, distribute it via your email list, and transform the key insights into social media content.'
    },
    faqs: [
      { question: 'Do you use AI to write the articles?', answer: 'We use AI for heavy research and first-draft outlining, but every final article is written and refined by a human expert. Generic AI-only content gets penalized by Google\'s Helpful Content system.' },
      { question: 'How is content marketing different from SEO?', answer: 'SEO is the technical and strategic framework. Content marketing is the production of the actual articles, guides, and resources that build the topical authority that SEO depends on.' },
      { question: 'Will you upload the articles to our website?', answer: 'Yes. We format and publish every piece directly inside your WordPress, Webflow, or Sanity CMS with all SEO metadata, cover images, and internal links correctly configured.' },
      { question: 'Can you write highly technical or niche industry articles?', answer: 'Absolutely. We pair our writers with your internal experts or conduct thorough industry research to produce technically accurate, authoritative content even in specialized fields.' },
      { question: 'How long before content marketing drives significant traffic?', answer: 'Content compounds over time. Most clients see meaningful organic traffic growth within 4 to 6 months of consistent publishing, with compounding returns accelerating significantly in months 9 through 12.' },
      { question: 'Do you repurpose blog content into social media posts?', answer: 'Yes. As part of our distribution system, we extract key insights from each article and transform them into carousel posts, LinkedIn threads, and short-form video scripts.' }
    ],
    complementaries: [
      { name: 'SEO Optimization', url: '/services/seo-optimization', desc: 'Deploy the technical and off-page SEO strategies required to ensure your high-quality content actually ranks on page one of Google.' },
      { name: 'Social Media Management', url: '/services/social-media-management', desc: 'Transform your published articles into a steady stream of daily social posts that drive continuous traffic back to your growing content library.' },
      { name: 'Infographics', url: '/services/infographics', desc: 'Turn complex data from your best-performing articles into shareable infographics that generate backlinks and exponentially expand your reach.' }
    ]
  },
  'Influencer Marketing': {
    deliverables: [
      {
        title: 'Influencer Discovery & Vetting Report',
        description: 'A curated shortlist of rigorously vetted influencers aligned with your brand values, audience demographics, and engagement quality rather than raw follower count.',
        icon: 'magnifier',
        color: 'purple'
      },
      {
        title: 'Campaign Brief & Creative Guidelines',
        description: 'A comprehensive creative brief giving influencers clear messaging direction while allowing authentic expression, ensuring content feels native rather than overtly promotional.',
        icon: 'document',
        color: 'yellow'
      },
      {
        title: 'Performance Tracking Dashboard',
        description: 'Real-time visibility into reach, engagement rate, swipe-up clicks, promo code redemptions, and attributable revenue generated by each individual influencer partnership.',
        icon: 'chart',
        color: 'green'
      }
    ],
    processSteps: {
      'Define ideal influencer profile': 'We work with you to build the exact criteria for potential partners—niche alignment, minimum engagement rate, audience demographic breakdown, and geographic focus.',
      'Research & vet candidate list': 'We identify and deeply audit potential influencers, checking for fake follower patterns, audience authenticity scores, content quality, and brand safety history.',
      'Negotiate partnership terms': 'We handle all outreach, rate negotiation, deliverable agreements, and legal contract prep so you are protected and paying fair market rates for genuine reach.',
      'Develop campaign creative brief': 'We craft a crystal-clear brief that gives influencers the messaging pillars, required disclosures, key talking points, and visual guidelines while preserving their authentic voice.',
      'Manage content review & approval': 'Before anything goes live, influencer content passes through our review process to verify brand safety, disclosure compliance, and messaging accuracy.',
      'Track performance & report results': 'We monitor all live posts in real time, capturing reach, engagement, trackable clicks, and promo code usage to calculate true campaign ROI and inform future partnerships.'
    },
    faqs: [
      { question: 'How do you find the right influencers?', answer: 'We use a combination of platform analytics tools and manual research to identify influencers whose audience demographics and engagement quality genuinely match your target customer profile.' },
      { question: 'Is follower count the most important metric?', answer: 'No. Engagement rate is far more important. A micro-influencer with 15,000 highly engaged followers in your niche will consistently outperform a celebrity with a passive million-follower audience.' },
      { question: 'How do you track ROI from influencer posts?', answer: 'We use unique trackable links, custom promo codes, and UTM parameters so every click, signup, or purchase generated by each specific influencer is attributed accurately.' },
      { question: 'Do you manage nano and micro influencers?', answer: 'Yes. We specialize in micro-influencer campaigns involving creators with 10,000 to 200,000 followers because this tier consistently delivers the highest engagement and conversion rates per dollar spent.' },
      { question: 'Do you handle the legal contracts with influencers?', answer: 'Yes. We prepare standardized partnership agreements covering content usage rights, exclusivity clauses, performance deliverables, and FTC disclosure requirements for every campaign.' },
      { question: 'Can influencer marketing work for B2B brands?', answer: 'Absolutely. LinkedIn thought leaders and podcast hosts in your industry are highly effective B2B influencers for generating qualified leads and positioning you as an authority.' }
    ],
    complementaries: [
      { name: 'Social Media Management', url: '/services/social-media-management', desc: 'Maintain active, professional social profiles so every influencer-driven visitor arrives at a credible, engaging brand presence.' },
      { name: 'Ad Creatives (Video)', url: '/services/ad-creatives-video', desc: 'Repurpose the best-performing influencer video content into paid ads to dramatically extend its reach beyond the influencer\'s existing audience.' },
      { name: 'Landing Page Design', url: '/services/landing-page-design', desc: 'Direct campaign traffic to a dedicated, conversion-optimized landing page that captures leads and conversions generated by influencer promotion.' }
    ]
  },
  'Digital Marketing Consultation': {
    deliverables: [
      {
        title: 'Full Ecosystem Audit',
        description: 'A thorough, objective teardown of your current marketing channels, ad accounts, website conversion performance, and funnel structure to identify specific revenue leaks and growth gaps.',
        icon: 'magnifier',
        color: 'purple'
      },
      {
        title: 'Strategic Growth Roadmap',
        description: 'A highly actionable master plan mapping exactly which marketing channels to prioritize first, the required budget allocation, key milestones, and realistic ROI timelines.',
        icon: 'chart',
        color: 'blue'
      },
      {
        title: 'Competitor Intelligence Report',
        description: 'Detailed reconnaissance into your top three competitors exposing their ad strategies, organic keywords, content positioning, and gaps your brand can immediately exploit.',
        icon: 'target',
        color: 'yellow'
      }
    ],
    processSteps: {
      'Pre-consultation discovery': 'We send a detailed intake questionnaire gathering your business model, average customer value, historical marketing spend, and current challenges before the session to maximize consulting time on strategy.',
      'Identify funnel bottlenecks': 'During the strategy session, we systematically identify exactly where your current funnel is losing high-intent prospects—traffic, conversion, retention, or monetization.',
      'Analyze competitive landscape': 'We reverse-engineer your top competitors to reveal which channels they are investing in, which keywords they dominate, and which positioning angles they are missing.',
      'Formulate tailored channel strategy': 'We construct a bespoke multi-channel growth plan selecting the exact combination of SEO, Paid Ads, Email, and Content most aligned with your offer, audience, and budget.',
      'Present prioritized action plan': 'We deliver a structured document outlining the exact next steps ranked by impact and implementation effort, making it easy to know what to execute first.',
      'Connect to specialist execution teams': 'We route you directly to the right Noplin specialists—Ads, SEO, Web—to begin implementing the strategy immediately after the consultation is complete.'
    },
    faqs: [
      { question: 'What do I need to prepare before the consultation?', answer: 'We send an intake form requesting your current KPIs, ad spend history, website analytics access, and your biggest business challenges so the session focuses entirely on strategy.' },
      { question: 'Is this consultation suitable for any industry?', answer: 'Yes. We regularly craft growth strategies for e-commerce brands, B2B SaaS companies, local service businesses, high-ticket coaching, and professional services firms.' },
      { question: 'Do you execute the strategy after presenting it?', answer: 'Absolutely. The consultation produces the strategic blueprint. Our specialized internal teams then execute every element—ads, content, web, and automation—based on that roadmap.' },
      { question: 'Will you push services we do not need?', answer: 'No. We are ROI-focused above all else. If your model performs best on search alone, we tell you to ignore social media entirely rather than waste budget on it.' },
      { question: 'How long does the full consultation process take?', answer: 'The strategy session itself runs 90 to 120 minutes. We deliver the formatted Strategic Growth Roadmap document within 5 business days following the session.' },
      { question: 'Can this replace an in-house marketing director?', answer: 'For early-stage businesses, yes. Our strategic consultation combined with our execution services provides the marketing leadership function without the cost of a full-time CMO hire.' }
    ],
    complementaries: [
      { name: 'SEO Optimization', url: '/services/seo-optimization', desc: 'Execute the organic search component of your strategic roadmap to build long-term inbound traffic that compounds in value every month.' },
      { name: 'Social Media Ads Management', url: '/services/social-media-ads-management', desc: 'Launch the paid social campaigns identified in your growth roadmap with expert media buying and creative testing.' },
      { name: 'Website Strategy Session', url: '/services/website-strategy-session', desc: 'Pair marketing strategy with website architecture planning to ensure your site is designed to convert the traffic your campaigns generate.' }
    ]
  }
};
