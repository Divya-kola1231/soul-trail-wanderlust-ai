
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Compass, Shield, MessageSquare, BookOpen } from "lucide-react";
import { MoodSelector } from "@/components/MoodSelector";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5DEFF] to-white">
      <HeroSection />
      
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7E69AB] mb-4">
            Find Your Perfect Destination
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tell us how you're feeling today, and we'll suggest destinations that match your mood
          </p>
        </div>
        
        <MoodSelector />
      </section>

      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7E69AB] mb-12">
            Why Travel Solo With SoulTrail?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Compass className="h-10 w-10 text-[#9b87f5]" />}
              title="Personalized Journeys"
              description="Get AI-powered destination recommendations based on your current mood and preferences"
            />
            
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-[#9b87f5]" />}
              title="Travel Safely"
              description="Feel secure with safety alerts, emergency contacts, and location sharing features"
            />
            
            <FeatureCard 
              icon={<MessageSquare className="h-10 w-10 text-[#9b87f5]" />}
              title="Virtual Companion"
              description="Never feel alone with your AI travel buddy providing support and guidance"
            />
            
            <FeatureCard 
              icon={<BookOpen className="h-10 w-10 text-[#9b87f5]" />}
              title="Travel Journal"
              description="Capture memories, track moods, and document your personal growth journey"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-[#E5DEFF]/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7E69AB] mb-6">
            Begin Your Solo Adventure
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join thousands of solo travelers discovering themselves through meaningful journeys
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              <Link to="/explore">Start Exploring</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#9b87f5] text-[#9b87f5]">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
