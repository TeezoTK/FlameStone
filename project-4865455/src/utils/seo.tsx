import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogType = 'website',
  schema,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (ogTitle) {
      updateMetaTag('og:title', ogTitle, true);
    }

    if (ogDescription) {
      updateMetaTag('og:description', ogDescription, true);
    }

    if (ogType) {
      updateMetaTag('og:type', ogType, true);
    }

    // Update canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Add or update schema
    if (schema) {
      const schemaId = 'page-schema';
      let schemaScript = document.getElementById(schemaId);
      
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = schemaId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      const schemaScript = document.getElementById('page-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogType, schema]);
};

export const getBaseUrl = () => {
  return import.meta.env.VITE_SITE_URL || 'https://flameandstonepizza.co.uk';
};