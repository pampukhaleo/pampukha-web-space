
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      
      toast({
        title: "Повідомлення надіслано!",
        description: "Дякую за ваше звернення. Я зв'яжуся з вами найближчим часом.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Замовити <span className="gradient-text">консультацію</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto">
            Готові обговорити ваш проект? Заповніть форму нижче або зв'яжіться зі мною 
            будь-яким зручним для вас способом.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start">
              <div className="contact-icon-container bg-primary/10 mr-4">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Телефон</h4>
                <p className="contact-text">+380 12 345 6789</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="contact-icon-container bg-accent/10 mr-4">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="contact-text">leonid.pampukha@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="contact-icon-container bg-brand-orange/10 mr-4">
                <MapPin className="text-brand-orange" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Локація</h4>
                <p className="contact-text">Київ, Україна</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="contact-icon-container bg-brand-purple/10 mr-4">
                <Calendar className="text-brand-purple" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Робочі години</h4>
                <p className="contact-text">Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
            
            <Card className="bg-background-darker border-primary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <MessageSquare className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Давайте поговоримо</h4>
                </div>
                <p className="text-foreground-muted mb-4">
                  Маєте запитання чи хочете обговорити ваш проект? Не соромтеся звертатися до мене у будь-який час.
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = 'mailto:leonid.pampukha@example.com'}
                >
                  Написати листа
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="border-primary/20 bg-background-darker shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Замовити консультацію</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Ім'я
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Введіть ваше ім'я"
                      required
                      className="w-full p-3 rounded-lg bg-muted"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ваш@email.com"
                        required
                        className="w-full p-3 rounded-lg bg-muted"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Телефон
                      </label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+380 ХХ ХХХ ХХХХ"
                        className="w-full p-3 rounded-lg bg-muted"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Повідомлення
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Опишіть ваш проект чи побажання..."
                      rows={5}
                      required
                      className="w-full p-3 rounded-lg resize-none bg-muted"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Відправляється...' : 'Відправити запит'}
                  </Button>
                  
                  <p className="text-sm text-foreground-muted text-center">
                    Надсилаючи форму, ви погоджуєтесь з нашою політикою конфіденційності.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
