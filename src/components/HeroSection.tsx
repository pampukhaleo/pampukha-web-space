import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, MonitorSmartphone, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Text content - mobile order 2, desktop order 1 */}
          <div className="order-2 lg:order-1 z-20 relative text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Потрібен <span className="gradient-text">сайт</span>?<br />
              Я створю його для вас
            </h1>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl">
              Професійна розробка сучасних веб-сайтів для малого бізнесу.
              Стильно, функціонально, доступно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="text-base bg-brand-blue hover:bg-brand-blue/90 px-5 py-4 sm:px-6 sm:py-5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Замовити консультацію
              </Button>
              <Button
                variant="outline"
                className="text-base border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-5 py-4 sm:px-6 sm:py-5"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Переглянути роботи
              </Button>
            </div>
          </div>

          {/* Image content - mobile order 1, desktop order 2 */}
          <div className="order-1 lg:order-2 relative mb-6 lg:mb-0">
            <div className="relative z-10 lg:p-4 flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png"
                alt="Веб-розробка"
                className="rounded-2xl shadow-2xl w-full max-w-sm"
              />
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-brand-teal/20 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 bg-brand-orange/20 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 lg:mt-16 flex justify-center">
          <div
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce cursor-pointer bg-white p-2 rounded-full shadow-lg"
          >
            <ArrowDown className="text-brand-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
