const fs = require('fs');

try {
  const validSlugs = fs.readdirSync('app/services').filter(f => f !== 'page.tsx');

  const mappings = {
    'ad-creatives': 'ad-creatives-video',
    'website-design': 'a-grade-website-design',
    'custom-api': 'custom-api-development',
    'publication-design': 'book-publication-design',
    'pitch-deck': 'pitch-deck-design',
    'wordpress': 'wordpress-development',
    'ecommerce': 'e-commerce-development',
    'web-application': 'custom-web-application',
    'landing-page': 'landing-page-design',
    'social-management': 'social-media-management',
    'social-ads': 'social-media-ads-management',
    'seo': 'seo-optimization',
    'marketing-consultation': 'digital-marketing-consultation',
    'marketing-automation': 'marketing-automation-setup',
    'lead-generation': 'lead-generation-system',
    'social-media-design': 'social-media-design-content-pack',
    'website-strategy': 'website-strategy-session',
    'cloud-hosting-setup': 'website-hosting-setup',
    'database-architecture': 'custom-api-development',
    'zapier-make-automation': 'marketing-automation-setup',
    'search-engine-optimization': 'seo-optimization'
  };

  const files = [
    'seo_design_data.js',
    'seo_dev1_data.js',
    'seo_dev2_data.js',
    'seo_marketing_data.js',
    'seo_consulting_automation_data.js',
    'seo_missing_data.js'
  ];

  let totalFixed = 0;
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    content = content.replace(/url:\s*['"]\/services\/([^'"]+)['"]/g, (match, oldSlug) => {
      if (validSlugs.includes(oldSlug)) {
        return match;
      }
      
      let bestMatch = mappings[oldSlug];
      if (!bestMatch) {
        bestMatch = validSlugs.find(s => s.replace(/-/g, '') === oldSlug.replace(/-/g, ''));
      }
      if (!bestMatch) {
        bestMatch = validSlugs.find(s => s.includes(oldSlug) || oldSlug.includes(s));
      }
      
      if (bestMatch && validSlugs.includes(bestMatch)) {
        totalFixed++;
        console.log('Fixed:', oldSlug, '->', bestMatch);
        return 'url: \'/services/' + bestMatch + '\'';
      }
      console.log('UNABLE TO FIX:', oldSlug);
      return match;
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
    }
  });
  console.log('Total fixed:', totalFixed);
} catch (e) {
  console.error(e);
}
