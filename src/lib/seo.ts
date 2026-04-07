interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  lang?: string;
}

export const SITE_URL = "https://battletechgaming.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
export const BUSINESS_NAME = "Battletech Gaming Cafe";

const defaultRobots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  url: `${SITE_URL}/`,
  image: DEFAULT_OG_IMAGE,
  description:
    "Jaipur's premier esports and gaming cafe with high-performance PCs, 144Hz and 240Hz monitors, and affordable hourly pricing.",
  telephone: "+919660034000",
  priceRange: "₹40-₹50/hr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1/130, Near KPS Udaan School, Sector 1, Vidhyadhar Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302023",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9511301,
    longitude: 75.776076,
  },
  hasMap:
    "https://www.google.com/maps/place/Battletech+Gaming+Cafe/@26.9511301,75.776076,17z/",
  areaServed: [
    {
      "@type": "City",
      name: "Jaipur",
    },
    {
      "@type": "AdministrativeArea",
      name: "Rajasthan",
    },
  ],
  sameAs: [
    "https://facebook.com/btgcvdn",
    "https://www.instagram.com/battletechgamingcafe/",
    "https://wa.me/919660034000",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+919660034000",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BUSINESS_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-IN",
};

const setMetaTag = (selector: string, attrs: Record<string, string>) => {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => {
      if (key !== "content") {
        tag?.setAttribute(key, value);
      }
    });
    document.head.appendChild(tag);
  }

  Object.entries(attrs).forEach(([key, value]) => tag?.setAttribute(key, value));
};

const setLinkTag = (selector: string, attrs: Record<string, string>) => {
  let tag = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement("link");
    Object.entries(attrs).forEach(([key, value]) => {
      if (key !== "href") {
        tag?.setAttribute(key, value);
      }
    });
    document.head.appendChild(tag);
  }

  Object.entries(attrs).forEach(([key, value]) => tag?.setAttribute(key, value));
};

const removeTag = (selector: string) => {
  document.head.querySelector(selector)?.remove();
};

export const addStructuredData = (data: Record<string, unknown>) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-dynamic-seo", "true");
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export const removeStructuredData = () => {
  const scripts = document.querySelectorAll(
    'script[type="application/ld+json"][data-dynamic-seo="true"]',
  );
  scripts.forEach((script) => script.remove());
};

export const updatePageSEO = (config: SEOConfig) => {
  removeStructuredData();

  document.documentElement.lang = config.lang || "en";
  document.title = config.title;

  setMetaTag('meta[name="description"]', {
    name: "description",
    content: config.description,
  });

  if (config.keywords) {
    setMetaTag('meta[name="keywords"]', {
      name: "keywords",
      content: config.keywords,
    });
  }

  setMetaTag('meta[name="robots"]', {
    name: "robots",
    content: config.robots || defaultRobots,
  });

  setMetaTag('meta[name="author"]', {
    name: "author",
    content: BUSINESS_NAME,
  });

  setMetaTag('meta[name="theme-color"]', {
    name: "theme-color",
    content: "#150d08",
  });

  if (config.canonicalUrl) {
    setLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: config.canonicalUrl,
    });

    setLinkTag('link[rel="alternate"][hreflang="en-IN"]', {
      rel: "alternate",
      hreflang: "en-IN",
      href: config.canonicalUrl,
    });

    setLinkTag('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: config.canonicalUrl,
    });
  } else {
    removeTag('link[rel="canonical"]');
    removeTag('link[rel="alternate"][hreflang="en-IN"]');
    removeTag('link[rel="alternate"][hreflang="x-default"]');
  }

  const ogImage = config.ogImage || DEFAULT_OG_IMAGE;
  const ogImageAlt = config.ogImageAlt || `${BUSINESS_NAME} preview image`;

  setMetaTag('meta[property="og:title"]', {
    property: "og:title",
    content: config.ogTitle || config.title,
  });
  setMetaTag('meta[property="og:description"]', {
    property: "og:description",
    content: config.ogDescription || config.description,
  });
  setMetaTag('meta[property="og:site_name"]', {
    property: "og:site_name",
    content: BUSINESS_NAME,
  });
  setMetaTag('meta[property="og:locale"]', {
    property: "og:locale",
    content: "en_IN",
  });
  setMetaTag('meta[property="og:type"]', {
    property: "og:type",
    content: config.ogType || "website",
  });
  setMetaTag('meta[property="og:image"]', {
    property: "og:image",
    content: ogImage,
  });
  setMetaTag('meta[property="og:image:alt"]', {
    property: "og:image:alt",
    content: ogImageAlt,
  });

  if (config.canonicalUrl) {
    setMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: config.canonicalUrl,
    });
  } else {
    removeTag('meta[property="og:url"]');
  }

  setMetaTag('meta[name="twitter:card"]', {
    name: "twitter:card",
    content: "summary_large_image",
  });
  setMetaTag('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: config.ogTitle || config.title,
  });
  setMetaTag('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: config.ogDescription || config.description,
  });
  setMetaTag('meta[name="twitter:image"]', {
    name: "twitter:image",
    content: ogImage,
  });
  setMetaTag('meta[name="twitter:image:alt"]', {
    name: "twitter:image:alt",
    content: ogImageAlt,
  });

  if (config.structuredData) {
    const items = Array.isArray(config.structuredData)
      ? config.structuredData
      : [config.structuredData];
    items.forEach((item) => addStructuredData(item));
  }
};

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const pageSEOConfig = {
  home: {
    title: "Battletech Gaming Cafe Jaipur | 240Hz PCs & Esports",
    description:
      "Battletech Gaming Cafe in Vidhyadhar Nagar, Jaipur offers high-performance gaming PCs, 144Hz/240Hz monitors, up to 400 FPS, and affordable hourly pricing.",
    keywords:
      "gaming cafe jaipur, esports cafe jaipur, gaming cafe vidhyadhar nagar, 240hz gaming cafe jaipur, battletech gaming cafe",
    ogType: "website",
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Battletech Gaming Cafe logo and brand preview",
    structuredData: [
      websiteSchema,
      localBusinessSchema,
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Battletech Gaming Cafe Jaipur",
        url: `${SITE_URL}/`,
        description:
          "Explore Battletech Gaming Cafe in Jaipur for gaming PCs, esports-ready setups, and affordable hourly sessions.",
        isPartOf: {
          "@type": "WebSite",
          name: BUSINESS_NAME,
          url: `${SITE_URL}/`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Battletech Gaming Sessions",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Drop-in gaming session",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              minPrice: 40,
              maxPrice: 50,
              priceCurrency: "INR",
              unitText: "hour",
            },
          },
          {
            "@type": "Offer",
            name: "Squad session booking",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Tournament slot booking",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    ],
  },
  about: {
    title: "About Battletech Gaming Cafe Jaipur | Story & Values",
    description:
      "Learn the story behind Battletech Gaming Cafe in Jaipur, from its start in 2000 to its player-first approach, premium gaming setup, and community-focused values.",
    keywords:
      "about battletech, gaming cafe history, jaipur esports, gaming community, battletech values",
    ogType: "article",
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Battletech Gaming Cafe logo and brand preview",
  },
  contact: {
    title: "Contact Battletech Gaming Cafe Jaipur | Book by WhatsApp",
    description:
      "Contact Battletech Gaming Cafe in Vidhyadhar Nagar, Jaipur for bookings, squad sessions, tournament inquiries, directions, phone support, and WhatsApp contact.",
    keywords:
      "battletech contact, gaming cafe location, jaipur gaming address, gaming cafe phone",
    ogType: "website",
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Battletech Gaming Cafe logo and contact preview",
  },
  setups: {
    title: "Gaming PC Setups Jaipur | 144Hz & 240Hz Rigs",
    description:
      "Explore Battletech Gaming Cafe setups in Jaipur, including 144Hz and 240Hz gaming rigs, high-performance hardware, competitive-ready peripherals, and fast esports play.",
    keywords:
      "gaming pc setups, 240hz monitor gaming, gaming rig specifications, battletech hardware",
    ogType: "website",
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Battletech Gaming Cafe setups preview",
  },
  notFound: {
    title: "404 - Page Not Found | Battletech Gaming Cafe",
    description:
      "The page you're looking for doesn't exist. Return to Battletech Gaming Cafe home page to explore our gaming setups, pricing, and services.",
    ogType: "website",
    robots: "noindex,nofollow",
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Battletech Gaming Cafe logo",
  },
};
