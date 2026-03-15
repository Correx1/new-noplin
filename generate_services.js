const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('services_input.md', 'utf8');
const lines = content.split('\n');

let currentDept = 'Design';
let currentService = null;
const services = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.startsWith('# ')) {
    let deptName = line.replace('# ', '').trim();
    if (deptName === 'TRAINING & CONSULTING') deptName = 'Consulting'; // Map to valid union
    // Capitalize properly
    if (deptName === 'DESIGN') currentDept = 'Design';
    if (deptName === 'DEVELOPMENT') currentDept = 'Development';
    if (deptName === 'MARKETING') currentDept = 'Marketing';
    if (deptName === 'Consulting') currentDept = 'Consulting';
    if (deptName === 'AUTOMATION') currentDept = 'Automation';
  } else if (line.startsWith('## ')) {
    if (currentService) services.push(currentService);
    currentService = {
      name: line.replace('## ', '').trim(),
      department: currentDept,
      turnaround: 'TBD',
      deliverables: [],
      process: [],
    };
  } else if (line.startsWith('**Turnaround:**')) {
    currentService.turnaround = line.replace('**Turnaround:**', '').trim();
  } else if (line.startsWith('* ')) {
    currentService.deliverables.push(line.replace('* ', '').trim());
  } else if (line.match(/^\d+\.\s/)) {
    // Process step
    const stepMatch = line.match(/^(\d+)\.\s(.+)$/);
    if (stepMatch) {
      currentService.process.push({
        step: stepMatch[1].padStart(2, '0'),
        title: stepMatch[2].trim(),
        description: 'Our specialists handle this step meticulously to ensure top quality and seamless execution.',
      });
    }
  }
}
if (currentService) services.push(currentService);

// Load SEO Data
const seoDesign = require('./seo_design_data.js');
const seoDev1 = require('./seo_dev1_data.js');
const seoDev2 = require('./seo_dev2_data.js');
const seoMarketing = require('./seo_marketing_data.js');
const seoConsulting = require('./seo_consulting_automation_data.js');
const seoMissing = require('./seo_missing_data.js');

const allSeoData = { ...seoDesign, ...seoDev1, ...seoDev2, ...seoMarketing, ...seoConsulting, ...seoMissing };

services.forEach(svc => {
  svc.slug = svc.name.toLowerCase().replace(/[\/\(\)\s]+/g, '-').replace(/-+$/,'').replace(/^-+/,'');
  
  const seoInfo = allSeoData[svc.name] || {};

  svc.tagline = `Professional ${svc.name} services tailored to elevate your business.`;
  svc.about = `Our ${svc.name} offering is designed to provide you with the exact tools and expertise you need to succeed online. We focus on delivering high-quality, conversion-optimized results that align perfectly with your core objectives.`;
  svc.whoItsFor = `Perfect for businesses, founders, and ambitious teams looking to establish a dominant presence and scale operations with top-tier ${svc.name}.`;
  
  if (seoInfo.processSteps) {
    svc.process = Object.keys(seoInfo.processSteps).map((key, index) => ({
      step: String(index + 1).padStart(2, '0'),
      title: key,
      description: seoInfo.processSteps[key]
    }));
  }

  // --- Map the user's specific turnaround times ---
  const turnarounds = {
    'Social Branding': 'Not specified',
    'Ad Creatives (Video)': '48 Hours',
    'Ad Creatives (Image)': '24 Hours',
    'Infographics': '24 Hours',
    'Social Media Design (Content Pack)': '72 Hours',
    'Pitch Deck Design': '72 Hours',
    'Vector Illustration': '48 Hours',
    'Book / Publication Design': '5 Days',
    'UI/UX Design': '5–7 Days',
    'A-Grade Website Design': '7 Days',
    'Landing Page Design': '2 Days',
    'Landing Page Hosting & Setup': '24 Hours',
    'Sales Funnel Design': '48 Hours',
    'Funnel Hosting & Setup': '48 Hours',
    'Web Hosting': '24 Hours',
    'WordPress Development': '5–7 Days',
    'E-Commerce Development': '10–14 Days',
    'Custom Web Application': '3–10 Weeks',
    'MVP Development': '3–6 Weeks',
    'Custom API Development': '1–2 Weeks',
    'Third-Party Integration': '3–5 Days',
    'Website Hosting Setup': '24 Hours',
    'Debugging & Maintenance': '1–5 Days',
    'Social Media Management': 'Monthly Cycle',
    'Social Media Ads Management': 'Ongoing / Monthly',
    'Email Marketing': '48 Hours (per campaign)',
    'SEO Optimization': '7–14 Days',
    'Content Marketing': 'Weekly / Monthly',
    'Influencer Marketing': '1–2 Weeks',
    'Branding Consultation': '1–2 Sessions',
    'Website Strategy Session': 'Single Session',
    'Digital Marketing Consultation': '1 Session',
    'Marketing Automation Setup': '3–5 Days',
    'CRM Setup': '2–4 Days',
    'Lead Generation System': '3–7 Days'
  };

  svc.turnaround = turnarounds[svc.name] || 'Not specified';

  // --- Assign a placeholder unsplash image based on service category ---
  let unsplashKeyword = 'technology';
  if (svc.department === 'Design') unsplashKeyword = 'design,art,minimal';
  else if (svc.department === 'Development') unsplashKeyword = 'code,software,website';
  else if (svc.department === 'Marketing') unsplashKeyword = 'marketing,analytics,growth';
  else if (svc.department === 'Consulting') unsplashKeyword = 'business,strategy,meeting';
  else if (svc.department === 'Automation') unsplashKeyword = 'robot,automation,network';

  // Make it predictable but unique per service
  const imageIndex = svc.name.length % 10;
  svc.heroImage = `https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop`; // Generic tech background pattern for all for now, to ensure consistency until custom images are loaded
  if (svc.department === 'Design') svc.heroImage = 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop';
  else if (svc.department === 'Development') svc.heroImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop';
  else if (svc.department === 'Marketing') svc.heroImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop';
  else if (svc.department === 'Consulting') svc.heroImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop';
  else if (svc.department === 'Automation') svc.heroImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop';


  if (seoInfo.faqs && seoInfo.faqs.length > 0) {
    svc.faqs = seoInfo.faqs;
  } else {
    svc.faqs = [
      { question: `What is included in the ${svc.name} service?`, answer: 'This service includes all the deliverables listed above, customized specifically to your brand requirements and growth goals.' },
      { question: `How long does the ${svc.name} process take?`, answer: `The standard turnaround time is ${svc.turnaround}, although this may vary slightly depending on project complexity and feedback loops.` }
    ];
  }

  if (seoInfo.deliverables && seoInfo.deliverables.length > 0) {
    svc.deliverablesObj = seoInfo.deliverables;
  } else {
    svc.deliverablesObj = svc.deliverables.map((d, index) => {
      const colors = ['purple', 'pink', 'yellow', 'green', 'blue', 'orange'];
      const icons = ['star', 'rocket', 'target', 'chart', 'monitor', 'smartphone'];
      return {
        title: d,
        description: 'A premium deliverable expertly crafted to achieve your specific objectives and ensure optimal results.',
        icon: icons[index % icons.length],
        color: colors[index % colors.length]
      };
    });
  }

  if (seoInfo.complementaries && seoInfo.complementaries.length > 0) {
    svc.complementaryServices = seoInfo.complementaries;
  } else {
    svc.complementaryServices = [
      { name: 'Digital Strategy Consultation', url: '/services/digital-marketing-consultation' },
      { name: 'A-Grade Website Design', url: '/services/a-grade-website-design' }
    ];
  }
});

// Clear app/services except page.tsx
const servicesDir = path.join(__dirname, 'app', 'services');
if (fs.existsSync(servicesDir)) {
  fs.readdirSync(servicesDir).forEach(item => {
    if (item === 'page.tsx' || item === 'layout.tsx' || item === 'page.js') return;
    const itemPath = path.join(servicesDir, item);
    fs.rmSync(itemPath, { recursive: true, force: true });
  });
}

// Write the files
services.forEach(svc => {
  const dir = path.join(servicesDir, svc.slug);
  fs.mkdirSync(dir, { recursive: true });

  const processArrayStr = JSON.stringify(svc.process, null, 2).replace(/"([^"]+)":/g, '$1:');
  const faqsArrayStr = JSON.stringify(svc.faqs, null, 2).replace(/"([^"]+)":/g, '$1:');
  const compServicesStr = JSON.stringify(svc.complementaryServices, null, 2).replace(/"([^"]+)":/g, '$1:');
  const deliverablesArrayStr = JSON.stringify(svc.deliverablesObj, null, 2).replace(/"([^"]+)":/g, '$1:');

  const tsx = `import type { Metadata } from 'next';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: '${svc.name.replace(/'/g, "\\'")} | Noplin Digital',
  description: '${svc.tagline.replace(/'/g, "\\'")}',
};

export default function ServicePage() {
  return (
    <ServicePageTemplate
      serviceName="${svc.name.replace(/"/g, '\\"')}"
      department="${svc.department}"
      tagline="${svc.tagline.replace(/"/g, '\\"')}"
      turnaround="${svc.turnaround.replace(/"/g, '\\"')}"
      heroImage="${svc.heroImage || ''}"
      about="${svc.about.replace(/"/g, '\\"')}"
      whatItIncludes={${deliverablesArrayStr}}
      whoItsFor="${svc.whoItsFor.replace(/"/g, '\\"')}"
      process={${processArrayStr}}
      complementaryServices={${compServicesStr}}
      faqs={${faqsArrayStr}}
    />
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), tsx, 'utf8');
});

console.log(`Generated ${services.length} services successfully.`);
