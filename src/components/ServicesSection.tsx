
import React from 'react';
import { Command, Globe, Search, Palette, Gauge, CircleDollarSign } from 'lucide-react';

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
    icon: <CircleDollarSign size={36} className="text-brand-orange" />,
    title: 'Google and Facebook ads',
    description: 'Запуск реклами вашого вебсайту у Facebook/Instagram, Google',
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
    <section id="services" className="py-16 md:py-24 px-4 bg-background">
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
          { servicesData.map((service, index) => (
            <div
              key={ index }
              className={ `flex items-start gap-4 p-6 rounded-2xl border border-border shadow-md hover:shadow-lg transition-shadow bg-card text-card-foreground ${ service.color }` }
            >
              <div className="flex-shrink-0">{ service.icon }</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{ service.title }</h3>
                <p className="text-muted-foreground">{ service.description }</p>
              </div>
            </div>
          )) }
        </div>

        <div
          className="mt-16 p-8 rounded-2xl bg-background text-foreground shadow-xl transition-colors border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Чому варто обрати мене?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                { [
                  'Сучасний, адаптивний дизайн',
                  'Швидке завантаження сторінок',
                  'SEO-оптимізований код',
                  'Прозоре ціноутворення',
                  'Підтримка після запуску',
                ].map((text, i) => (
                  <div key={ i } className="flex items-center">
                    <div className="h-2 w-2 bg-muted-foreground rounded-full mr-3"/>
                    <p className="text-muted-foreground">{ text }</p>
                  </div>
                )) }
              </div>
            </div>
            <div className="text-center">
              <button
                className="w-full py-4 px-8 bg-primary text-primary-foreground rounded-xl font-bold transition-transform hover:scale-105"
                onClick={ () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
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
