
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, MonitorSmartphone, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 mobile:pt-32 pb-16 mobile:pb-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-8 items-center">
          <div className="order-2 mobile:order-1">
            <h1 className="text-4xl mobile:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Потрібен <span className="gradient-text">сайт</span>?<br />
              Я створю його для вас
            </h1>
            <p className="text-lg mobile:text-xl text-gray-700 mb-8">
              Професійна розробка сучасних веб-сайтів для малого бізнесу. 
              Стильно, функціонально, доступно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="text-lg bg-brand-blue hover:bg-brand-blue/90 px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Замовити консультацію
              </Button>
              <Button 
                variant="outline" 
                className="text-lg border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Переглянути роботи
              </Button>
            </div>
          </div>
          <div className="order-1 mobile:order-2 relative">
            <div className="relative z-10 p-4">
              <img 
                src="/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png" 
                alt="Веб-розробка" 
                className="rounded-2xl shadow-2xl animate-float"
              />
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/30 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/30 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-16 mobile:mt-24 flex justify-center">
          <div 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce cursor-pointer bg-white p-2 rounded-full shadow-lg"
          >
            <ArrowDown className="text-brand-blue" />
          </div>
        </div>
      </div>
      
      {/* Floating icons */}
      <div className="hidden mobile:block absolute top-44 left-1/4 p-4 bg-white rounded-xl shadow-lg rotate-12 animate-float">
        <Code className="text-brand-blue" size={32} />
      </div>
      <div className="hidden mobile:block absolute bottom-1/4 right-1/4 p-4 bg-white rounded-xl shadow-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
        <MonitorSmartphone className="text-brand-teal" size={32} />
      </div>
      <div className="hidden mobile:block absolute top-2/3 left-1/4 p-4 bg-white rounded-xl shadow-lg rotate-6 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="text-brand-orange" size={32} />
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 pattern-dots opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 pattern-dots opacity-20"></div>
    </section>
  );
};

export default HeroSection;
