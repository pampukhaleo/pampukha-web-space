
import React from 'react';
import { Phone, Mail, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactItems = [
  {
    icon: <Phone className="text-primary" size={24} />,
    title: "Telegram",
    value: "@leonid_kiev",
    bg: "bg-primary/10",
  },
  {
    icon: <Mail className="text-accent" size={24} />,
    title: "Email",
    value: "lgpampukha@gmail.com",
    bg: "bg-accent/10",
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
  return (
    <div className="space-y-8">
      {contactItems.map((item, i) => (
        <div key={i} className="flex items-start">
          <div className={`contact-icon-container ${item.bg} mr-4`}>
            {item.icon}
          </div>
          <div>
            <h4 className="font-semibold mb-1">{item.title}</h4>
            <p className="text-muted-foreground">{item.value}</p>
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
            onClick={() => window.location.href = 'mailto:lgpampukha@gmail.com'}
          >
            Написати листа
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
