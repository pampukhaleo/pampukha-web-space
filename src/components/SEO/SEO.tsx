
import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import { StructuredData } from './StructuredData';
import { MetaViewport } from './MetaViewport';
import { PreloadResources } from './PreloadResources';
import { PerformanceOptimizer } from './PerformanceOptimizer';
import { SecurityHeaders } from './SecurityHeaders';

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
      <MetaViewport />
      <PreloadResources />
      <PerformanceOptimizer />
      <SecurityHeaders />
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
