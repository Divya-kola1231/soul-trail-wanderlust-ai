
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Companion from "./pages/Companion";
import Safety from "./pages/Safety";
import Journal from "./pages/Journal";
import About from "./pages/About";
import Auth from "./pages/Auth";  // New Auth page
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<User | null>(null);

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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={user ? <Explore /> : <Navigate to="/auth" />} />
              <Route path="/companion" element={user ? <Companion /> : <Navigate to="/auth" />} />
              <Route path="/safety" element={user ? <Safety /> : <Navigate to="/auth" />} />
              <Route path="/journal" element={user ? <Journal /> : <Navigate to="/auth" />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
