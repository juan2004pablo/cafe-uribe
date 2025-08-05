
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  image = '/logo_oscuro.webp',
  url,
  type = 'website',
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Café Uribe - 100% Colombiano`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const currentUrl = url || window.location.href;
    const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', fullImageUrl);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:site_name', 'Café Uribe');

    // Update Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', fullImageUrl);
    updateMetaTag('name', 'twitter:site', '@cafe_uribe');

    // Add structured data
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (scriptTag) {
        scriptTag.textContent = JSON.stringify(structuredData);
      } else {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.textContent = JSON.stringify(structuredData);
        document.head.appendChild(scriptTag);
      }
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, url, type, structuredData]);
};

const updateMetaTag = (attribute: string, value: string, content: string) => {
  let metaTag = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, value);
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', content);
};
