
import React from 'react';
import { Phone, Mail, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/components/SEO/Analytics';

const contactItems = [
  {
    icon: <Phone className="text-primary" size={24} />,
    title: "Telegram",
    value: "@leonid_kiev",
    bg: "bg-primary/10",
    link: "https://t.me/leonid_kiev",
    type: "telegram",
  },
  {
    icon: <Mail className="text-accent" size={24} />,
    title: "Email",
    value: "lgpampukha@gmail.com",
    bg: "bg-accent/10",
    link: "mailto:lgpampukha@gmail.com",
    type: "email",
  },
  {
    icon: <MapPin className="text-brand-orange" size={24} />,
    title: "Локація",
    value: "Київ, Україна",
    bg: "bg-brand-orange/10",
  },
  {
    icon: <Calendar className="text-brand-purple" size={24} />,
    title: "Робочі години",
    value: "Пн-Пт: 9:00 - 18:00",
    bg: "bg-brand-purple/10",
  },
];

export const ContactInfoCard = () => {
  const { trackEmailClick, trackTelegramClick } = useAnalytics();

  const handleContactClick = (type?: string) => {
    if (type === 'email') {
      trackEmailClick();
    } else if (type === 'telegram') {
      trackTelegramClick();
    }
  };

  return (
    <div className="space-y-8">
      {contactItems.map((item, i) => (
        <div key={i} className="flex items-start">
          <div className={`contact-icon-container ${item.bg} mr-4`}>
            {item.icon}
          </div>
          <div>
            <h4 className="font-semibold mb-1">{item.title}</h4>
            {item.link ? (
              <a
                href={item.link}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => handleContactClick(item.type)}
                target={item.type === 'telegram' ? '_blank' : undefined}
                rel={item.type === 'telegram' ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            ) : (
              <p className="text-muted-foreground">{item.value}</p>
            )}
          </div>
        </div>
      ))}

      <Card className="bg-card border border-border text-card-foreground">
        <CardContent className="p-6">
          <div className="flex mb-4">
            <div className="p-3 bg-primary/10 rounded-lg mr-4">
              <MessageSquare className="text-primary" size={24} />
            </div>
            <h4 className="text-xl font-semibold">Давайте поговоримо</h4>
          </div>
          <p className="text-muted-foreground mb-4">
            Маєте запитання чи хочете обговорити ваш проект? Не соромтеся звертатися до мене у будь-який час.
          </p>
          <Button
            className="w-full bg-primary hover:bg-primary/90"
            asChild
          >
            <a
              href="mailto:lgpampukha@gmail.com"
              onClick={() => trackEmailClick()}
            >
              Написати листа
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
