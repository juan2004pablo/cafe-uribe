
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Café Uribe",
  "description": "Café colombiano de especialidad premium con trazabilidad garantizada. Cultivamos, procesamos, trillamos, tostamos y empacamos nuestro propio café.",
  "url": "https://cafeuribe.com",
  "logo": "https://cafeuribe.com/logo_oscuro.webp",
  "image": "https://cafeuribe.com/images/foto_24.jpeg",
  "telephone": "+57 320 373 7502",
  "email": "info@cafeuribe.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cr 11 6-88",
    "addressLocality": "Villa del Rosario",
    "addressRegion": "Norte de Santander",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "7.8358",
    "longitude": "-72.4622"
  },
  "sameAs": [
    "https://www.facebook.com/share/17fEZXoBLy/?mibextid=wwXIfr",
    "https://www.instagram.com/cafeuribe?igsh=MTNpbW9sZ3c0ODRjNQ=="
  ],
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Café Colombiano de Especialidad",
      "category": "Café"
    }
  },
  "foundingDate": "1990",
  "founders": {
    "@type": "Person",
    "name": "Familia Uribe"
  }
});

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
      "availability": "https://schema.org/InStock"
    }
  })
});

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
