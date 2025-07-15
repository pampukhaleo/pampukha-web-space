
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items = [] }) => {
  const { t } = useTranslation();

  const defaultItems: BreadcrumbItem[] = [
    { label: t('footer.home'), href: '#', current: true }
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <a 
            href="#" 
            className="flex items-center hover:text-primary transition-colors"
            aria-label={t('footer.home')}
          >
            <Home size={16} />
          </a>
        </li>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight size={16} className="text-muted-foreground/50" />
            <li>
              {item.current ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a 
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
