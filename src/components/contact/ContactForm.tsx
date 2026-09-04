import React, { useState, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { z } from 'zod';
import { isLang, type Lang } from '@/lib/i18n-routes';

interface FormCopy {
  heading: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  privacy: string;
  localMode: string;
  successTitle: string;
  successText: string;
  errorTitle: string;
  errorText: string;
  genericError: string;
  localDialogTitle: string;
  localDialogText: string;
  errors: {
    nameMin: string;
    nameMax: string;
    email: string;
    emailMax: string;
    phoneRequired: string;
    phoneFormat: string;
    phoneMin: string;
    phoneMax: string;
    messageMin: string;
    messageMax: string;
  };
}

const COPY: Record<Lang, FormCopy> = {
  uk: {
    heading: 'Замовити консультацію',
    name: "Ім'я",
    namePlaceholder: "Введіть ваше ім'я",
    email: 'Email',
    emailPlaceholder: 'ваш@email.com',
    phone: 'Телефон',
    phonePlaceholder: '+380 ХХ ХХХ ХХХХ',
    message: 'Повідомлення',
    messagePlaceholder: 'Опишіть ваш проєкт чи побажання...',
    submit: 'Відправити запит',
    submitting: 'Відправляється...',
    privacy: 'Надсилаючи форму, ви погоджуєтесь з політикою конфіденційності.',
    localMode: 'Локальне середовище: форма працює в режимі симуляції без надсилання на сервер.',
    successTitle: 'Повідомлення надіслано!',
    successText: "Дякую за звернення — я зв'яжуся з вами найближчим часом.",
    errorTitle: 'Помилка!',
    errorText: 'Щось пішло не так. Спробуйте ще раз або напишіть на email.',
    genericError: 'Щось пішло не так',
    localDialogTitle: 'Форму відправлено (локальне середовище)',
    localDialogText: 'У реальному середовищі форма надсилає повідомлення в Telegram. Тут показано дані, які було б надіслано.',
    errors: {
      nameMin: "Ім'я має містити мінімум 2 символи",
      nameMax: "Ім'я має бути коротшим за 100 символів",
      email: 'Невірний формат email',
      emailMax: 'Email має бути коротшим за 255 символів',
      phoneRequired: "Телефон обов'язковий",
      phoneFormat: 'Телефон може містити тільки цифри, +, -, пробіли, дужки',
      phoneMin: 'Телефон має містити мінімум 10 символів',
      phoneMax: 'Телефон має бути коротшим за 20 символів',
      messageMin: 'Повідомлення має містити мінімум 10 символів',
      messageMax: 'Повідомлення має бути коротшим за 1000 символів',
    },
  },
  en: {
    heading: 'Request a consultation',
    name: 'Name',
    namePlaceholder: 'Enter your name',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    phone: 'Phone',
    phonePlaceholder: '+44 XXXX XXX XXX',
    message: 'Message',
    messagePlaceholder: 'Describe your project or what you need...',
    submit: 'Send request',
    submitting: 'Sending...',
    privacy: 'By submitting this form you agree to the privacy policy.',
    localMode: 'Local environment: the form runs in simulation mode and does not send anything.',
    successTitle: 'Message sent!',
    successText: 'Thank you — I will get back to you shortly.',
    errorTitle: 'Error',
    errorText: 'Something went wrong. Please try again or send an email.',
    genericError: 'Something went wrong',
    localDialogTitle: 'Form submitted (local environment)',
    localDialogText: 'In production this form sends a Telegram message. Below is the data that would be sent.',
    errors: {
      nameMin: 'Name must be at least 2 characters',
      nameMax: 'Name must be under 100 characters',
      email: 'Invalid email format',
      emailMax: 'Email must be under 255 characters',
      phoneRequired: 'Phone is required',
      phoneFormat: 'Phone may contain only digits, +, -, spaces and brackets',
      phoneMin: 'Phone must be at least 10 characters',
      phoneMax: 'Phone must be under 20 characters',
      messageMin: 'Message must be at least 10 characters',
      messageMax: 'Message must be under 1000 characters',
    },
  },
  pl: {
    heading: 'Zamów konsultację',
    name: 'Imię',
    namePlaceholder: 'Wpisz swoje imię',
    email: 'Email',
    emailPlaceholder: 'twoj@email.com',
    phone: 'Telefon',
    phonePlaceholder: '+48 XXX XXX XXX',
    message: 'Wiadomość',
    messagePlaceholder: 'Opisz swój projekt lub potrzeby...',
    submit: 'Wyślij zapytanie',
    submitting: 'Wysyłanie...',
    privacy: 'Wysyłając formularz, akceptujesz politykę prywatności.',
    localMode: 'Środowisko lokalne: formularz działa w trybie symulacji i nic nie wysyła.',
    successTitle: 'Wiadomość wysłana!',
    successText: 'Dziękuję — skontaktuję się z Tobą wkrótce.',
    errorTitle: 'Błąd',
    errorText: 'Coś poszło nie tak. Spróbuj ponownie lub napisz e-mail.',
    genericError: 'Coś poszło nie tak',
    localDialogTitle: 'Formularz wysłany (środowisko lokalne)',
    localDialogText: 'W wersji produkcyjnej formularz wysyła wiadomość na Telegram. Poniżej dane, które zostałyby wysłane.',
    errors: {
      nameMin: 'Imię musi mieć co najmniej 2 znaki',
      nameMax: 'Imię musi mieć mniej niż 100 znaków',
      email: 'Nieprawidłowy format e-mail',
      emailMax: 'E-mail musi mieć mniej niż 255 znaków',
      phoneRequired: 'Telefon jest wymagany',
      phoneFormat: 'Telefon może zawierać tylko cyfry, +, -, spacje i nawiasy',
      phoneMin: 'Telefon musi mieć co najmniej 10 znaków',
      phoneMax: 'Telefon musi mieć mniej niż 20 znaków',
      messageMin: 'Wiadomość musi mieć co najmniej 10 znaków',
      messageMax: 'Wiadomość musi mieć mniej niż 1000 znaków',
    },
  },
};

const buildSchema = (e: FormCopy['errors']) =>
  z.object({
    name: z.string().trim().min(2, { message: e.nameMin }).max(100, { message: e.nameMax }),
    email: z.string().trim().email({ message: e.email }).max(255, { message: e.emailMax }),
    phone: z
      .string()
      .trim()
      .min(1, { message: e.phoneRequired })
      .regex(/^[\d\s+\-()]+$/, { message: e.phoneFormat })
      .min(10, { message: e.phoneMin })
      .max(20, { message: e.phoneMax }),
    message: z.string().trim().min(10, { message: e.messageMin }).max(1000, { message: e.messageMax }),
  });

export const ContactForm = () => {
  const { toast } = useToast();
  const { i18n } = useTranslation();
  const lang: Lang = isLang(i18n.language?.slice(0, 2)) ? (i18n.language.slice(0, 2) as Lang) : 'uk';
  const c = COPY[lang];
  const schema = useMemo(() => buildSchema(c.errors), [c]);

  const submitLockRef = useRef(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showLocalDevDialog, setShowLocalDevDialog] = useState(false);
  const [formSubmittedLocally, setFormSubmittedLocally] = useState(false);

  const isLocalDevelopment = window.location.hostname === 'localhost';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitLockRef.current) return;

    const validationResult = schema.safeParse(formData);
    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) errors[err.path[0].toString()] = err.message;
      });
      setFieldErrors(errors);
      return;
    }

    submitLockRef.current = true;
    setIsSubmitting(true);
    setError('');
    setFieldErrors({});

    if (isLocalDevelopment) {
      setFormSubmittedLocally(true);
      setShowLocalDevDialog(true);
      setIsSubmitting(false);
      submitLockRef.current = false;
      setFormData({ name: '', email: '', phone: '', message: '' });
      return;
    }

    try {
      const apiUrl = 'https://fwwpidktaanowpaihgzy.supabase.co/functions/v1/swift-responder';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang }),
      });

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const textResponse = await response.text();
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}: ${textResponse || response.statusText}`);
        }
        data = { success: response.ok };
      }

      if (!response.ok) {
        throw new Error(data.error || `Error ${response.status}`);
      }

      toast({ title: c.successTitle, description: c.successText });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : c.genericError);
      toast({ title: c.errorTitle, description: c.errorText });
    } finally {
      submitLockRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="bg-card border border-border shadow-md text-card-foreground max-w-2xl mx-auto w-full">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6">{c.heading}</h3>

          {error && (
            <Alert className="mb-6 border-destructive/40 bg-destructive/10">
              <AlertDescription className="text-destructive">{error}</AlertDescription>
            </Alert>
          )}

          {isLocalDevelopment && !error && (
            <Alert className="mb-6 border-border bg-muted/40">
              <AlertDescription className="text-muted-foreground">{c.localMode}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                {c.name}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={c.namePlaceholder}
                autoComplete="name"
                required
                className="w-full p-3 rounded-lg bg-input text-foreground border border-border"
              />
              {fieldErrors.name && <p className="text-destructive text-sm mt-1">{fieldErrors.name}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  {c.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={c.emailPlaceholder}
                  autoComplete="email"
                  required
                  className="w-full p-3 rounded-lg bg-input text-foreground border border-border"
                />
                {fieldErrors.email && <p className="text-destructive text-sm mt-1">{fieldErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  {c.phone}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={c.phonePlaceholder}
                  autoComplete="tel"
                  className="w-full p-3 rounded-lg bg-input text-foreground border border-border"
                />
                {fieldErrors.phone && <p className="text-destructive text-sm mt-1">{fieldErrors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                {c.message}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={c.messagePlaceholder}
                rows={5}
                required
                className="w-full p-3 rounded-lg resize-none bg-input text-foreground border border-border"
              />
              {fieldErrors.message && <p className="text-destructive text-sm mt-1">{fieldErrors.message}</p>}
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg" disabled={isSubmitting}>
              {isSubmitting ? c.submitting : c.submit}
            </Button>

            <p className="text-sm text-muted-foreground text-center">{c.privacy}</p>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showLocalDevDialog} onOpenChange={setShowLocalDevDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{c.localDialogTitle}</DialogTitle>
            <DialogDescription>{c.localDialogText}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3 text-sm">
            <p>
              <strong>{c.name}:</strong> {formSubmittedLocally ? formData.name || '—' : ''}
            </p>
            <p>
              <strong>{c.email}:</strong> {formSubmittedLocally ? formData.email || '—' : ''}
            </p>
            <p>
              <strong>{c.phone}:</strong> {formSubmittedLocally ? formData.phone || '—' : ''}
            </p>
            <p>
              <strong>{c.message}:</strong> {formSubmittedLocally ? formData.message || '—' : ''}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
