import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, MessageSquare, Shield, BookOpen, Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    // Initial check
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const navItems = [
    { name: "Explore", path: "/explore", icon: <Compass className="h-4 w-4 mr-2" /> },
    { name: "Travel Buddy", path: "/companion", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
    { name: "Safety", path: "/safety", icon: <Shield className="h-4 w-4 mr-2" /> },
    { name: "Journal", path: "/journal", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#9b87f5]">Soul</span>
            <span className="text-2xl font-bold text-[#7E69AB]">Trail</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center text-gray-600 hover:text-[#9b87f5] font-medium transition-colors"
              >
                {item.icon && item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Sign in / Sign up buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Button 
                  variant="outline" 
                  className="border-[#9b87f5] text-[#9b87f5]"
                  onClick={() => navigate('/auth')}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                  onClick={() => navigate('/auth')}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#9b87f5] hover:bg-[#E5DEFF]/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon && item.icon}
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              {!user ? (
                <>
                  <Button 
                    variant="outline" 
                    className="border-[#9b87f5] text-[#9b87f5] w-full mb-2"
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white w-full"
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <Button 
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white w-full"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
