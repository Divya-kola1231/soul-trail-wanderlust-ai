
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-[#7E69AB] mb-6 leading-tight">
              Your Solo Journey, <span className="text-[#9b87f5]">Enriched</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              SoulTrail is your AI-powered companion for safer, more meaningful solo travel experiences. Discover destinations that match your mood, connect with your virtual travel buddy, and explore with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                <Link to="/explore">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#9b87f5] text-[#9b87f5]">
                <Link to="/companion">Meet Your Travel Buddy</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 order-first md:order-last mb-8 md:mb-0">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Woman enjoying solo travel"
                className="object-cover w-full h-full rounded-2xl shadow-lg transform rotate-3 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-[#E5DEFF] rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-[#E5DEFF] rounded-tr-full opacity-50"></div>
    </section>
  );
};
