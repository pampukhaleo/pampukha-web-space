import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from './JsonLd';
import { BASE_URL } from '@/lib/i18n-routes';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageBreadcrumbsProps {
  items: Crumb[];
}

export const PageBreadcrumbs = ({ items }: PageBreadcrumbsProps) => (
  <>
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <React.Fragment key={`${item.label}-${index}`}>
            {index > 0 && (
              <ChevronRight size={14} className="text-muted-foreground/40" aria-hidden="true" />
            )}
            <li>
              {item.href && index < items.length - 1 ? (
                <Link to={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
    <JsonLd
      id="breadcrumbs"
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
        })),
      }}
    />
  </>
);

export default PageBreadcrumbs;
