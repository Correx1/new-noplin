const fs = require('fs');
const validSlugs = fs.readdirSync('app/services').filter(f => f !== 'page.tsx');

const files = [
  'seo_design_data.js',
  'seo_dev1_data.js',
  'seo_dev2_data.js',
  'seo_marketing_data.js',
  'seo_consulting_automation_data.js',
  'seo_missing_data.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let matchCount = 0;
  
  // Custom replacer using simple string split to avoid regex hell
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('url: \'/services/')) {
       const urlMatch = lines[i].match(/url:\s*['"]\/services\/([^'"]+)['"]/);
       if (urlMatch) {
         const oldSlug = urlMatch[1];
         if (!validSlugs.includes(oldSlug)) {
           // We have a broken link
           let bestMatch = validSlugs.find(s => s === oldSlug.replace(/-/g, ''));
           if (!bestMatch) bestMatch = validSlugs.find(s => s.replace(/-/g, '') === oldSlug.replace(/-/g, ''));
           if (!bestMatch) bestMatch = validSlugs.find(s => s.includes(oldSlug));
           if (!bestMatch) bestMatch = validSlugs.find(s => oldSlug.includes(s));
           if (!bestMatch) {
              // Manual mappings
              if (oldSlug === 'ad-creatives') bestMatch = 'ad-creatives-video';
              if (oldSlug === 'website-design') bestMatch = 'a-grade-website-design';
              if (oldSlug === 'custom-api') bestMatch = 'custom-api-development';
              if (oldSlug === 'publication-design') bestMatch = 'book-publication-design';
              if (oldSlug === 'pitch-deck') bestMatch = 'pitch-deck-design';
              if (oldSlug === 'wordpress') bestMatch = 'wordpress-development';
              if (oldSlug === 'ecommerce') bestMatch = 'e-commerce-development';
              if (oldSlug === 'web-application') bestMatch = 'custom-web-application';
              if (oldSlug === 'landing-page') bestMatch = 'landing-page-design';
              if (oldSlug === 'social-management') bestMatch = 'social-media-management';
              if (oldSlug === 'social-ads') bestMatch = 'social-media-ads-management';
              if (oldSlug === 'seo') bestMatch = 'seo-optimization';
              if (oldSlug === 'marketing-consultation') bestMatch = 'digital-marketing-consultation';
              if (oldSlug === 'marketing-automation') bestMatch = 'marketing-automation-setup';
              if (oldSlug === 'lead-generation') bestMatch = 'lead-generation-system';
              if (oldSlug === 'social-media-design') bestMatch = 'social-media-design-content-pack';
              if (oldSlug === 'website-strategy') bestMatch = 'website-strategy-session';
              if (oldSlug === 'cloud-hosting-setup') bestMatch = 'website-hosting-setup';
              if (oldSlug === 'database-architecture') bestMatch = 'custom-api-development';
              if (oldSlug === 'zapier-make-automation') bestMatch = 'marketing-automation-setup';
           }
           
           if (bestMatch && validSlugs.includes(bestMatch)) {
             lines[i] = lines[i].replace(oldSlug, bestMatch);
             console.log(`Fixed in ${file}: ${oldSlug} -> ${bestMatch}`);
             matchCount++;
           } else {
             console.log(`STILL BROKEN in ${file}: ${oldSlug}`);
           }
         }
       }
    }
  }
  
  if (matchCount > 0) {
     fs.writeFileSync(file, lines.join('\n'), 'utf8');
  }
});
console.log('Script completed.');
