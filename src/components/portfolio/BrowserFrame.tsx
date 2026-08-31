import React from 'react';
import { LazyImage } from '@/components/SEO/LazyImageLoader';

interface BrowserFrameProps {
  src: string;
  alt: string;
  /** Full URL of the live site — the host is shown in the address bar. */
  url: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
}

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

/**
 * Presentational browser-window mockup that normalises screenshots
 * of different sites into one consistent visual language.
 */
const BrowserFrame = ({
  src,
  alt,
  url,
  className = '',
  imageClassName = 'aspect-[16/10]',
  priority = false,
  loading = 'lazy',
}: BrowserFrameProps) => (
  <div
    className={`overflow-hidden rounded-lg border border-border bg-card ${className}`}
  >
    <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-2">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
      </span>
      <span className="mx-auto max-w-[70%] truncate rounded-md bg-background/70 px-3 py-0.5 text-[11px] text-muted-foreground">
        {hostOf(url)}
      </span>
    </div>
    <div className={`relative overflow-hidden bg-muted ${imageClassName}`}>
      <LazyImage
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        loading={loading}
        priority={priority}
      />
    </div>
  </div>
);

export default BrowserFrame;
