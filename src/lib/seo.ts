/**
 * SEO Utility Module
 * Provides functions for managing page metadata and SEO optimization
 * Following Google's SEO Starter Guide best practices
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

/**
 * Update page title and meta description
 * Following Google's recommendation for unique, accurate titles and descriptions
 */
export const updatePageSEO = (config: SEOConfig) => {
  // Update title tag
  document.title = config.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', config.description);

  // Update keywords if provided
  if (config.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords);
  }

  // Update canonical URL
  if (config.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonicalUrl);
  }

  // Update Open Graph tags
  updateOGTag('og:title', config.ogTitle || config.title);
  updateOGTag('og:description', config.ogDescription || config.description);

  if (config.ogImage) {
    updateOGTag('og:image', config.ogImage);
  }

  if (config.ogType) {
    updateOGTag('og:type', config.ogType);
  }
};

/**
 * Helper function to update or create Open Graph meta tags
 */
const updateOGTag = (property: string, content: string) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Generate structured data (Schema.org JSON-LD)
 * Helps search engines understand page content
 */
export const addStructuredData = (data: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Remove existing structured data script
 */
export const removeStructuredData = () => {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach((script) => {
    if (script !== scripts[0]) { // Keep the main one in index.html
      script.remove();
    }
  });
};

/**
 * Page SEO configurations following Google's guide
 * Each page has unique, descriptive titles and meta descriptions
 */
export const pageSEOConfig = {
  home: {
    title: 'Battletech Gaming Cafe | Best Gaming Cafe in Jaipur',
    description: 'Jaipur\'s premier esports cafe in Vidhyadhar Nagar. High-performance PCs, 240Hz monitors, 400 FPS. Open daily 9 AM–9 PM. ₹40–₹50/hr.',
    keywords: 'gaming cafe jaipur, esports cafe, gaming zone vidhyadhar nagar, battletech gaming, gaming center jaipur',
    ogType: 'website',
  },
  about: {
    title: 'About Battletech Gaming Cafe | Our Story & Values',
    description: 'Learn about Battletech Gaming Cafe\'s journey since 2000. From humble beginnings to Jaipur\'s highest-rated gaming destination. Premium hardware, affordable prices, community-first approach.',
    keywords: 'about battletech, gaming cafe history, jaipur esports, gaming community, battletech values',
    ogType: 'website',
  },
  contact: {
    title: 'Contact Battletech Gaming Cafe | Location & Support',
    description: 'Visit Battletech Gaming Cafe in Vidhyadhar Nagar, Jaipur. Phone: +919660034000. Hours: 9 AM–9 PM daily. Get directions and contact information.',
    keywords: 'battletech contact, gaming cafe location, jaipur gaming address, gaming cafe phone',
    ogType: 'website',
  },
  setups: {
    title: 'Gaming PC Setups | High-Performance Rigs at Battletech',
    description: 'Explore Battletech\'s gaming PC setups. High-refresh monitors (240Hz), powerful processors, and latest graphics cards for competitive gaming and content creation.',
    keywords: 'gaming pc setups, 240hz monitor gaming, gaming rig specifications, battletech hardware',
    ogType: 'website',
  },
  notFound: {
    title: '404 - Page Not Found | Battletech Gaming Cafe',
    description: 'The page you\'re looking for doesn\'t exist. Return to Battletech Gaming Cafe home page to explore our gaming setups, pricing, and services.',
    ogType: 'website',
  },
};
