
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    title: 'Інтернет-магазин',
    category: 'E-commerce',
    description: 'Сучасний онлайн-магазин з каталогом товарів, корзиною та оплатою.',
    image: '/lovable-uploads/de7b20fa-92c3-40c7-a0ae-65a24b565e47.png',
    color: 'from-brand-blue/20 to-brand-teal/20',
  },
  {
    id: 2,
    title: 'Корпоративний сайт',
    category: 'Бізнес',
    description: 'Професійний сайт для представлення компанії у мережі Інтернет.',
    image: '/lovable-uploads/86b7cf5d-0df5-43a4-bdc1-11e628046549.png',
    color: 'from-brand-orange/20 to-brand-red/20',
  },
  {
    id: 3,
    title: 'Лендінг для продукту',
    category: 'Маркетинг',
    description: 'Продаюча сторінка для презентації товару чи послуги.',
    image: '/lovable-uploads/79663af5-95cf-4efe-87d0-0c991bff6be3.png',
    color: 'from-brand-purple/20 to-brand-blue/20',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Моє <span className="gradient-text">портфоліо</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Перегляньте приклади моїх робіт. Кожен проект розроблений з урахуванням 
            індивідуальних потреб клієнта та сучасних тенденцій веб-дизайну.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={16} className="text-brand-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Замовити схожий проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
