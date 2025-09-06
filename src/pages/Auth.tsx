import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Home } from 'lucide-react';
import { SEO } from '@/components/SEO/SEO';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleEmailSignUp() {
    try {
      setLoading(true);
      
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}${import.meta.env.BASE_URL}dashboard`,
        }
      });
      
      if (error) throw error;
      
      if (data?.user) {
        // Пробуем создать профиль если его нет (дополнительная проверка)
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: data.user.id,
            full_name: data.user.user_metadata?.full_name || data.user.email,
            has_paid: false,
            website_url: null
          });
        
        if (profileError) {
          console.error('Profile creation error:', profileError);
        }
        
        toast.success('Sign up successful! You can now sign in.');
        navigate('/dashboard');
      } else {
        toast.success('Check your email for the confirmation link!');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailSignIn() {
    try {
      setLoading(true);
      
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      if (data?.user) {
        // Проверяем есть ли профиль, если нет - создаем
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .maybeSingle();
        
        if (!profile && !profileError) {
          await supabase
            .from('profiles')
            .upsert({
              id: data.user.id,
              full_name: data.user.user_metadata?.full_name || data.user.email,
              has_paid: false,
              website_url: null
            });
        }
        
        toast.success('Signed in successfully!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}dashboard`,
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Google sign in error:', error);
      toast.error(error.message);
    }
  }

  return (
    <>
      <SEO 
        title="Sign In | Leonforge"
        description="Sign in to your Leonforge account to access your dashboard and manage your website."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
        <Card className="w-full max-w-md">
        <CardHeader>
          <Link to="/">
            <Button variant="ghost" className="flex items-center space-x-2 text-sm font-medium mb-2 p-2">
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Button>
          </Link>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Sign in to your account or create a new one</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-4">
            <Button 
              className="w-full" 
              onClick={handleEmailSignIn}
              disabled={loading}
            >
              Sign In
            </Button>
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleEmailSignUp}
              disabled={loading}
            >
              Sign Up
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              Sign in with Google
            </Button>
          </div>
        </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Auth;
