import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import { StructuredData } from './StructuredData';
import { MetaViewport } from './MetaViewport';
import { PreloadResources } from './PreloadResources';
import { PerformanceOptimizer } from './PerformanceOptimizer';
import { SecurityHeaders } from './SecurityHeaders';
import type { Lang } from '@/lib/i18n-routes';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  altPaths?: Partial<Record<Lang, string>>;
  structuredData?: Array<{
    type: 'LocalBusiness' | 'Organization' | 'WebSite' | 'Person' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'ItemList';
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
  altPaths,
  structuredData = []
}) => {
  useSEO({
    title,
    description,
    keywords,
    ogImage,
    ogType,
    canonical,
    noindex,
    altPaths,
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
