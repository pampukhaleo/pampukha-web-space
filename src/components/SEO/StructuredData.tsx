
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Organization' | 'WebSite' | 'Person' | 'Service' | 'FAQPage';
  data?: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const generateSchema = () => {
      // Используем новый домен leonforge.com
      const baseUrl = 'https://leonforge.com';
      
      switch (type) {
        case 'LocalBusiness':
          return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Leonforge",
            "description": t('hero.description'),
            "url": baseUrl,
            "telephone": "+380123456789",
            "email": "info@leonforge.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UA",
              "addressRegion": "Ukraine"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.4501",
              "longitude": "30.5234"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$300",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "50.4501",
                "longitude": "30.5234"
              },
              "geoRadius": "1000000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI SPA Development",
                    "description": t('services.service1.description')
                  },
                  "price": "300",
                  "priceCurrency": "USD"
                }
              ]
            }
          };

        case 'Organization':
          return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Leonforge",
            "description": t('footer.description'),
            "url": baseUrl,
            "logo": `${baseUrl}/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+380123456789",
              "contactType": "customer service",
              "availableLanguage": ["uk", "en", "pl"]
            },
            "sameAs": [
              "https://linkedin.com/in/leonforge",
              "https://github.com/leonforge"
            ]
          };

        case 'WebSite':
          return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Leonforge",
            "description": t('hero.description'),
            "url": baseUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            },
            "inLanguage": [
              {
                "@type": "Language",
                "name": "Ukrainian",
                "alternateName": "uk"
              },
              {
                "@type": "Language", 
                "name": "English",
                "alternateName": "en"
              },
              {
                "@type": "Language",
                "name": "Polish", 
                "alternateName": "pl"
              }
            ]
          };

        case 'Person':
          return {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Leonid Pampukha",
            "jobTitle": "Full Stack Developer",
            "description": t('about.introduction'),
            "url": baseUrl,
            "image": `${baseUrl}/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png`,
            "knowsAbout": [
              "React",
              "AI Development", 
              "Single Page Applications",
              "Web Development",
              "Google Analytics",
              "SEO"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Leonforge"
            }
          };

        case 'Service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI SPA Development",
            "description": t('services.service1.description'),
            "provider": {
              "@type": "Organization",
              "name": "Leonforge"
            },
            "areaServed": "Worldwide",
            "serviceType": "Web Development",
            "offers": {
              "@type": "Offer",
              "price": "300",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          };

        case 'FAQPage':
          return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": t('faq.question1'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.answer1')
                }
              },
              {
                "@type": "Question", 
                "name": t('faq.question2'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.answer2')
                }
              },
              {
                "@type": "Question",
                "name": t('faq.question3'), 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.answer3')
                }
              }
            ]
          };

        default:
          return data;
      }
    };

    const schema = generateSchema();
    const scriptId = `structured-data-${type}`;
    
    // Удаляем существующий скрипт если есть
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Добавляем новый скрипт
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data, i18n.language, t]);

  return null;
};
