
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Database } from '@/integrations/supabase/types';
import { Home } from 'lucide-react';

type Profile = Database['public']['Tables']['profiles']['Row'];

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }
      
      setProfile(data);
    };

    checkSession();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  if (!profile) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader className="relative">
          <Link to="/" className="absolute top-4 left-4">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <CardTitle>Welcome{profile.full_name ? `, ${profile.full_name}` : ''}!</CardTitle>
          <CardDescription>Your account dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold mb-2">Payment Status</h3>
              {profile.has_paid ? (
                <div className="text-green-500">✓ Payment received</div>
              ) : (
                <div className="text-yellow-500">⚠ Payment pending</div>
              )}
            </div>
            
            {profile.has_paid && (
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Your Website</h3>
                  {profile.website_url ? (
                    <a 
                      href={profile.website_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View your website
                    </a>
                  ) : (
                    <p>Website URL not set</p>
                  )}
                </div>

                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Contact Support</h3>
                  <Button>Send Message</Button>
                </div>
              </div>
            )}

            <Button variant="outline" onClick={handleSignOut} className="mt-8">
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
