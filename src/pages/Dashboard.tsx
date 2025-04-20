
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Database } from '@/integrations/supabase/types';
import { Home, Settings } from 'lucide-react';

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
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Link to="/">
              <Button variant="ghost" size="icon" className="p-0">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <CardTitle>
              Welcome{profile.full_name ? `, ${profile.full_name}` : ''}!
            </CardTitle>
          </div>
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
                  <a href="https://t.me/YourTelegramBot" target="_blank" rel="noopener noreferrer">
                    <Button>Contact via Telegram</Button>
                  </a>
                </div>
                
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Website Management</h3>
                  <p className="mb-3">Access your website content management system (CMS)</p>
                  <Link to="/admin">
                    <Button className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Open Admin Panel
                    </Button>
                  </Link>
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
