
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showLocalDevDialog, setShowLocalDevDialog] = useState(false);
  const [formSubmittedLocally, setFormSubmittedLocally] = useState(false);

  // Detect if we're in local development
  const isLocalDevelopment = window.location.hostname === 'localhost';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // For local development, show dialog with form data instead of API call
    if (isLocalDevelopment) {
      console.log('Development mode form submission:', formData);
      setFormSubmittedLocally(true);
      setShowLocalDevDialog(true);
      setIsSubmitting(false);
      
      // Reset form in local development
      setFormData({ name: '', email: '', phone: '', message: '' });
      return;
    }

    try {
      // Create the text for Telegram message
      const telegramText = `
🆕 *Нова заявка з сайту Leonforge*:

👤 *Ім'я:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Телефон:* ${formData.phone || 'Не вказано'}
📝 *Повідомлення:*
${formData.message}
      `;

      // Log the data being sent (useful for debugging)
      console.log('Sending form data:', formData);
      console.log('Telegram message:', telegramText);

      const apiUrl = 'https://fwwpidktaanowpaihgzy.supabase.co/functions/v1/swift-responder';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Handle different response types
      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // Handle non-JSON responses gracefully
        const textResponse = await response.text();
        console.log('Non-JSON response:', textResponse);
        
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}: ${textResponse || response.statusText}`);
        }
        
        data = { success: response.ok };
      }

      if (!response.ok) {
        throw new Error(data.error || `Помилка сервера: ${response.status}`);
      }

      // Show success message
      toast({
        title: "Повідомлення надіслано!",
        description: "Дякую за звернення — я зв'яжуся з вами найближчим часом.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      
      // Provide a more helpful error message in development
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
        
        // Check for 404 errors which are common in local development
        if (errorMessage.includes('404') || errorMessage.includes('Not Found')) {
          errorMessage = 'API endpoint не знайдено. У локальному середовищі ця функція недоступна без налаштованого сервера.';
        }
      } else {
        errorMessage = 'Щось пішло не так';
      }
      
      setError(errorMessage);
      
      toast({
        title: "Помилка!",
        description: "Щось пішло не так. Спробуйте ще раз або напишіть на email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="bg-card border border-border shadow-md text-card-foreground max-w-2xl mx-auto w-full">
      <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6">Замовити консультацію</h3>

          {error && (
            <Alert className="mb-6 border-red-300 bg-red-50 dark:bg-red-900/10">
              <AlertDescription className="text-red-800 dark:text-red-200">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {isLocalDevelopment && !error && (
            <Alert className="mb-6 border-amber-300 bg-amber-50 dark:bg-amber-900/10">
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Локальне середовище: форма працює в режимі симуляції без надсилання на сервер.
              </AlertDescription>
            </Alert>
          )}

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
                className="w-full p-3 rounded-lg bg-input text-foreground border border-border"
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
                  className="w-full p-3 rounded-lg bg-input text-foreground border border-border"
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
                  className="w-full p-3 rounded-lg bg-input text-foreground border border-border"
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
                className="w-full p-3 rounded-lg resize-none bg-input text-foreground border border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Відправляється...' : 'Відправити запит'}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Надсилаючи форму, ви погоджуєтесь з нашою політикою конфіденційності.
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Local Development Dialog - Shows form data for testing */}
      <Dialog open={showLocalDevDialog} onOpenChange={setShowLocalDevDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Форму відправлено (Локальне середовище)</DialogTitle>
            <DialogDescription>
              У реальному середовищі ця форма надсилає повідомлення через Telegram. В локальному середовищі ви можете побачити дані, які було б надіслано.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3 text-sm">
            <p><strong>Ім'я:</strong> {formSubmittedLocally ? formData.name || '(було очищено)' : ''}</p>
            <p><strong>Email:</strong> {formSubmittedLocally ? formData.email || '(було очищено)' : ''}</p>
            <p><strong>Телефон:</strong> {formSubmittedLocally ? formData.phone || 'Не вказано' : ''}</p>
            <p><strong>Повідомлення:</strong> {formSubmittedLocally ? formData.message || '(було очищено)' : ''}</p>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Для налаштування надсилання через Telegram, потрібно створити API сервер з відповідним токеном.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};
