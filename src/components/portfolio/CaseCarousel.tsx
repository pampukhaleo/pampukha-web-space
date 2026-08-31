import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import BrowserFrame from '@/components/portfolio/BrowserFrame';
import { UI } from '@/data/ui-copy';
import { casePath, type Lang } from '@/lib/i18n-routes';
import type { CaseStudy } from '@/data/cases';

interface CaseCarouselProps {
  items: CaseStudy[];
  lang: Lang;
  onQuickPreview: (item: CaseStudy) => void;
}

const CaseCarousel = ({ items, lang, onQuickPreview }: CaseCarouselProps) => {
  const copy = UI[lang];
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft + track.offsetLeft;
    let closest = 0;
    let min = Number.POSITIVE_INFINITY;
    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - left);
      if (distance < min) {
        min = distance;
        closest = index;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (items.length === 0) return null;

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const content = item.content[lang];
          const href = casePath(lang, item.slug);
          return (
            <li
              key={item.slug}
              className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                <Link to={href} aria-label={content.title} className="block">
                  <BrowserFrame
                    src={item.previewImage}
                    alt={`${content.title} — ${content.category}`}
                    url={item.liveUrl}
                    className="rounded-none border-0 border-b"
                    imageClassName="aspect-[16/10]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs uppercase tracking-wider text-primary">
                    {content.category}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground">
                    <Link to={href} className="transition-colors hover:text-primary">
                      {content.title}
                    </Link>
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {content.result}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                    <Link
                      to={href}
                      className="inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-80"
                    >
                      {copy.viewCase}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => onQuickPreview(item)}
                      aria-label={`${copy.quickPreview}: ${content.title}`}
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Maximize2 className="h-4 w-4" />
                      <span className="sr-only sm:not-sr-only">{copy.quickPreview}</span>
                    </button>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label={copy.prevCase}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={item.content[lang].title}
              aria-current={index === active}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? 'w-6 bg-primary' : 'w-1.5 bg-muted-foreground/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
          disabled={active === items.length - 1}
          aria-label={copy.nextCaseNav}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CaseCarousel;
