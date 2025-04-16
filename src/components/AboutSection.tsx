
import React from 'react';
import { Code, Laptop, Palette, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Про <span className="gradient-text">мене</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Привіт! Мене звати Леонід Пампуха. Я - веб-розробник, що спеціалізується 
            на створенні елегантних та функціональних сайтів для малого бізнесу.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png"
                alt="Леонід Пампуха, Веб-розробник" 
                className="rounded-2xl shadow-xl mx-auto"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-2xl transform -rotate-3 -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-teal/20 to-brand-yellow/20 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Мій підхід до веб-розробки</h3>
            <p className="text-gray-700 mb-8">
              Мій досвід дозволяє мені створювати сайти, які не лише виглядають привабливо, 
              але й працюють швидко та ефективно. Кожен проект починається з глибокого 
              розуміння ваших бізнес-потреб і цілей.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-brand-blue/10 rounded-lg mr-4">
                  <Code className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Чистий код</h4>
                  <p className="text-gray-700">Створюю добре структурований, зрозумілий код для легкого обслуговування</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-brand-teal/10 rounded-lg mr-4">
                  <Laptop className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адаптивний дизайн</h4>
                  <p className="text-gray-700">Ваш сайт буде чудово виглядати на всіх пристроях - від мобільних до десктопів</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-brand-orange/10 rounded-lg mr-4">
                  <Palette className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Сучасний дизайн</h4>
                  <p className="text-gray-700">Створюю стильні, сучасні інтерфейси, які справляють враження</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-brand-purple/10 rounded-lg mr-4">
                  <User className="text-brand-purple" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Клієнтоорієнтованість</h4>
                  <p className="text-gray-700">Завжди ставлю ваші потреби та цілі на перше місце</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
