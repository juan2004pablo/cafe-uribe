// =========================
// ORGANIZATION
// =========================
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Café Uribe",
  "description": "Café colombiano de especialidad premium con trazabilidad garantizada. Cultivamos, procesamos, trillamos, tostamos y empacamos nuestro propio café.",
  "url": "https://cafeuribe.com",
  "logo": "https://cafeuribe.com/logo_oscuro.webp",
  "image": "https://cafeuribe.com/images/mejor_calidad_en_tu_taza.jpeg",
  "telephone": "+57 320 373 7502",
  "email": "info@cafeuribe.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cr 11 6-88",
    "addressLocality": "Ragonvalia",
    "addressRegion": "Norte de Santander",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "7.8358",
    "longitude": "-72.4622"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+57 320 373 7502",
    "contactType": "customer service",
    "areaServed": "CO",
    "availableLanguage": ["es", "en"]
  },
  "sameAs": [
    "https://www.facebook.com/share/17fEZXoBLy/?mibextid=wwXIfr",
    "https://www.instagram.com/cafeuribe?igsh=MTNpbW9sZ3c0ODRjNQ=="
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "COP",
    "price": "25000",
    "availability": "https://schema.org/InStock",
    "itemOffered": {
      "@type": "Product",
      "name": "Café Colombiano de Especialidad",
      "category": "Café"
    }
  },
  "foundingDate": "1990",
  "founders": [
    {
      "@type": "Person",
      "name": "Álvaro Javier Uribe Riago"
    }
  ]
});

// =========================
// PRODUCT
// =========================
export const getProductStructuredData = (product: {
  name: string;
  description: string;
  image: string;
  price?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": "Café Uribe"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Café Uribe"
  },
  "category": "Café Colombiano",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Origen",
      "value": "Norte de Santander, Colombia"
    },
    {
      "@type": "PropertyValue",
      "name": "Certificación",
      "value": "Denominación de Origen Colombiano"
    }
  ],
  ...(product.price && {
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "COP",
      "availability": "https://schema.org/InStock",
      "url": "https://cafeuribe.com"
    }
  })
});

// =========================
// FAQ
// =========================
export const getFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// =========================
// BREADCRUMB
// =========================
export const getBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});
