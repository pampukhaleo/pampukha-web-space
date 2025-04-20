
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Home, Save } from 'lucide-react';
import type { Database } from '@/integrations/supabase/types';

type Profile = Database['public']['Tables']['profiles']['Row'];

// Define the website content structure - this could be expanded based on needs
type WebsiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  contactInfo: string;
};

const Admin = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  // Default content - in a real implementation, this would be loaded from the database
  const [content, setContent] = useState<WebsiteContent>({
    heroTitle: 'Потрібен сайт? Я створю його для вас',
    heroSubtitle: 'Професійна розробка сучасних веб-сайтів для малого бізнесу. Стильно, функціонально, доступно.',
    aboutText: 'Мій досвід дозволяє мені створювати сайти, які не лише виглядають привабливо, але й працюють швидко та ефективно. Кожен проект починається з глибокого розуміння ваших бізнес-потреб і цілей.',
    contactInfo: 'Готові обговорити ваш проект? Заповніть форму нижче або зв\'яжіться зі мною будь-яким зручним для вас способом.',
  });

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      
      // Check for admin user - in a real implementation you would check for an admin role
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        navigate('/dashboard');
        return;
      }
      
      setProfile(data);
      setIsLoading(false);
      
      // In a real implementation, you would fetch the content from the database here
      // For now, we're using the default state values
    };

    checkSession();
  }, [navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof WebsiteContent
  ) => {
    setContent({
      ...content,
      [field]: e.target.value,
    });
  };

  const handleSave = async (section: string) => {
    setIsSaving(true);
    
    // In a real implementation, this would save to the database
    // For now, we'll just simulate a save with a timeout
    setTimeout(() => {
      toast.success(`${section} content updated successfully!`);
      setIsSaving(false);
    }, 1000);
    
    // Real implementation would be something like:
    // const { error } = await supabase
    //   .from('website_content')
    //   .upsert({
    //     user_id: profile?.id,
    //     section: section,
    //     content: JSON.stringify(content)
    //   })
    
    // if (error) {
    //   toast.error('Failed to save changes.');
    //   console.error('Save error:', error);
    // } else {
    //   toast.success(`${section} content updated successfully!`);
    // }
    // setIsSaving(false);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon" className="p-0">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>
              <CardTitle>
                Website Content Manager
              </CardTitle>
            </div>
            <Link to="/" target="_blank">
              <Button variant="outline" size="sm">
                View Website
              </Button>
            </Link>
          </div>
          <CardDescription>Edit your website content here</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="hero" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hero">Hero Section</TabsTrigger>
              <TabsTrigger value="about">About Section</TabsTrigger>
              <TabsTrigger value="contact">Contact Section</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hero" className="space-y-4 pt-4">
              <h3 className="text-lg font-medium">Hero Section Content</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="heroTitle">Main Title</Label>
                  <Input 
                    id="heroTitle" 
                    value={content.heroTitle} 
                    onChange={(e) => handleChange(e, 'heroTitle')} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="heroSubtitle">Subtitle</Label>
                  <Textarea 
                    id="heroSubtitle" 
                    value={content.heroSubtitle} 
                    onChange={(e) => handleChange(e, 'heroSubtitle')} 
                    rows={4}
                  />
                </div>
                
                <Button 
                  onClick={() => handleSave('Hero')} 
                  disabled={isSaving}
                  className="mt-2"
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                  {!isSaving && <Save className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="about" className="space-y-4 pt-4">
              <h3 className="text-lg font-medium">About Section Content</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="aboutText">About Text</Label>
                  <Textarea 
                    id="aboutText" 
                    value={content.aboutText} 
                    onChange={(e) => handleChange(e, 'aboutText')} 
                    rows={8}
                  />
                </div>
                
                <Button 
                  onClick={() => handleSave('About')} 
                  disabled={isSaving}
                  className="mt-2"
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                  {!isSaving && <Save className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="space-y-4 pt-4">
              <h3 className="text-lg font-medium">Contact Section Content</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contactInfo">Contact Information</Label>
                  <Textarea 
                    id="contactInfo" 
                    value={content.contactInfo} 
                    onChange={(e) => handleChange(e, 'contactInfo')} 
                    rows={4}
                  />
                </div>
                
                <Button 
                  onClick={() => handleSave('Contact')} 
                  disabled={isSaving}
                  className="mt-2"
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                  {!isSaving && <Save className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4 pt-4">
              <h3 className="text-lg font-medium">Website Settings</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="websiteUrl">Your Website URL</Label>
                  <Input 
                    id="websiteUrl" 
                    value={profile?.website_url || ''} 
                    placeholder="https://your-website.com"
                    disabled
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    This is the URL displayed in your client's dashboard. 
                    To change this, please update it in your Supabase profiles table.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Admin Dashboard Demo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This is a demonstration of how your clients could manage their website content
                    after you build a site for them. In a real implementation, these changes would 
                    be saved to a database and reflected on the website.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Current implementation is for demonstration purposes only.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8">
            <Button variant="outline" onClick={() => navigate('/dashboard')} className="mr-2">
              Back to Dashboard
            </Button>
            <Button variant="outline" onClick={() => supabase.auth.signOut().then(() => navigate('/auth'))}>
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
