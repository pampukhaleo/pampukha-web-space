
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, MonitorSmartphone, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-16 md:pt-32 pb-10 md:pb-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text content - mobile order 2, desktop order 1 */}
          <div className="order-2 md:order-1 z-20 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Потрібен <span className="gradient-text">сайт</span>?<br />
              Я створю його для вас
            </h1>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8">
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
          <div className="order-1 md:order-2 relative mb-6 md:mb-0">
            {/* Create a container that allows proper positioning of the image */}
            <div className="relative z-10 md:p-4 flex justify-center md:justify-end">
              <img 
                src="/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png" 
                alt="Веб-розробка" 
                className="rounded-2xl shadow-2xl animate-float w-full max-w-[280px] sm:max-w-[320px] md:max-w-md"
              />
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-brand-teal/20 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 bg-brand-orange/20 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <div 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce cursor-pointer bg-white p-2 rounded-full shadow-lg"
          >
            <ArrowDown className="text-brand-blue" />
          </div>
        </div>
      </div>
      
      {/* Floating icons - only visible on medium screens and larger */}
      <div className="hidden md:block absolute top-44 left-1/4 p-4 bg-white rounded-xl shadow-lg rotate-12 animate-float">
        <Code className="text-brand-blue" size={32} />
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 p-4 bg-white rounded-xl shadow-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
        <MonitorSmartphone className="text-brand-teal" size={32} />
      </div>
      <div className="hidden md:block absolute top-2/3 left-1/4 p-4 bg-white rounded-xl shadow-lg rotate-6 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="text-brand-orange" size={32} />
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 pattern-dots opacity-5 sm:opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 pattern-dots opacity-5 sm:opacity-10"></div>
    </section>
  );
};

export default HeroSection;
