
import React from 'react';
import { Command, Globe, Cpu, Search, Palette, Gauge } from 'lucide-react';

const servicesData = [
  {
    icon: <Globe size={36} className="text-brand-blue" />,
    title: 'Розробка веб-сайтів',
    description: 'Створення сучасних, адаптивних веб-сайтів для вашого бізнесу з нуля.',
    color: 'bg-brand-blue/10',
  },
  {
    icon: <Command size={36} className="text-brand-teal" />,
    title: 'Лендінг-сторінки',
    description: 'Розробка ефективних одно-сторінкових сайтів для презентації товарів чи послуг.',
    color: 'bg-brand-teal/10',
  },
  {
    icon: <Cpu size={36} className="text-brand-orange" />,
    title: 'Інтернет-магазини',
    description: 'Створення функціональних онлайн-магазинів з інтеграцією платіжних систем.',
    color: 'bg-brand-orange/10',
  },
  {
    icon: <Palette size={36} className="text-brand-purple" />,
    title: 'Редизайн сайтів',
    description: 'Оновлення дизайну та функціоналу існуючих сайтів для покращення їх ефективності.',
    color: 'bg-brand-purple/10',
  },
  {
    icon: <Search size={36} className="text-brand-red" />,
    title: 'SEO-оптимізація',
    description: 'Налаштування сайту для кращої видимості в пошукових системах.',
    color: 'bg-brand-red/10',
  },
  {
    icon: <Gauge size={36} className="text-brand-yellow" />,
    title: 'Оптимізація швидкості',
    description: 'Прискорення завантаження сайту для кращого користувацького досвіду.',
    color: 'bg-brand-yellow/10',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Мої <span className="gradient-text">послуги</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Пропоную комплексні рішення для веб-представництва вашого бізнесу.
            Від розробки до оптимізації - все, що потрібно для успішної присутності в Інтернеті.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`service-card card-gradient group ${service.color}`}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Чому варто обрати мене?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-white rounded-full mr-3"></div>
                  <p>Сучасний, адаптивний дизайн</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-white rounded-full mr-3"></div>
                  <p>Швидке завантаження сторінок</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-white rounded-full mr-3"></div>
                  <p>SEO-оптимізований код</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-white rounded-full mr-3"></div>
                  <p>Прозоре ціноутворення</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-white rounded-full mr-3"></div>
                  <p>Зручна CMS для керування</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-white rounded-full mr-3"></div>
                  <p>Підтримка після запуску</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button 
                className="w-full py-4 px-8 bg-white text-brand-blue rounded-xl font-bold transition-transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Замовити зараз
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
