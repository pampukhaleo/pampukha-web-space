
import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import { StructuredData } from './StructuredData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: Array<{
    type: 'LocalBusiness' | 'Organization' | 'WebSite' | 'Person' | 'Service' | 'FAQPage';
    data?: any;
  }>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  canonical,
  noindex,
  structuredData = []
}) => {
  useSEO({
    title,
    description,
    keywords,
    ogImage,
    ogType,
    canonical,
    noindex
  });

  return (
    <>
      {structuredData.map((schema, index) => (
        <StructuredData
          key={`${schema.type}-${index}`}
          type={schema.type}
          data={schema.data}
        />
      ))}
    </>
  );
};
