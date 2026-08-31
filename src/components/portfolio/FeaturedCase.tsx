import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrowserFrame from '@/components/portfolio/BrowserFrame';
import { UI } from '@/data/ui-copy';
import { casePath, type Lang } from '@/lib/i18n-routes';
import type { CaseStudy } from '@/data/cases';

interface FeaturedCaseProps {
  item: CaseStudy;
  lang: Lang;
  onQuickPreview: (item: CaseStudy) => void;
}

const FeaturedCase = ({ item, lang, onQuickPreview }: FeaturedCaseProps) => {
  const copy = UI[lang];
  const content = item.content[lang];
  const href = casePath(lang, item.slug);

  return (
    <article className="group grid items-center gap-8 rounded-xl border border-border bg-card/40 p-5 transition-colors duration-300 hover:border-primary/40 md:p-8 lg:grid-cols-2 lg:gap-12">
      <Link to={href} aria-label={content.title} className="block">
        <BrowserFrame
          src={item.previewImage}
          alt={`${content.title} — ${content.category}`}
          url={item.liveUrl}
          imageClassName="aspect-[16/10]"
          loading="eager"
          priority
        />
      </Link>

      <div>
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider">
          <span className="rounded-md border border-primary/40 px-2 py-1 text-primary">
            {copy.featuredCase}
          </span>
          <span className="text-muted-foreground">{content.category}</span>
        </div>

        <h3 className="mb-4 text-2xl font-semibold leading-tight text-foreground md:text-3xl">
          <Link to={href} className="transition-colors hover:text-primary">
            {content.title}
          </Link>
        </h3>

        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          {content.result}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <dl className="mb-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="text-muted-foreground">{copy.country}:</dt>
            <dd className="text-foreground">{item.country[lang]}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted-foreground">{copy.year}:</dt>
            <dd className="text-foreground">{item.year}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to={href}>
              {copy.viewCase}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
              {copy.visitSite}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" onClick={() => onQuickPreview(item)}>
            <Maximize2 className="mr-2 h-4 w-4" />
            {copy.quickPreview}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCase;
