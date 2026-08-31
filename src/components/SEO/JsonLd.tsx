import { useEffect } from 'react';

interface JsonLdProps {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Injects a JSON-LD script into <head> and cleans it up on unmount. */
export const JsonLd = ({ id, data }: JsonLdProps) => {
  useEffect(() => {
    const elementId = `jsonld-${id}`;
    let script = document.getElementById(elementId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = elementId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      document.getElementById(elementId)?.remove();
    };
  }, [id, data]);

  return null;
};
