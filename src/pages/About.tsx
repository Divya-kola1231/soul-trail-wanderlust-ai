
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Map, Shield, MessageSquare, BookOpen, Compass } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-12 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#7E69AB] mb-6 leading-tight">
                About SoulTrail
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                SoulTrail was born from a simple yet powerful idea: solo travel should be an enriching, safe, and emotionally fulfilling experience for everyone.
              </p>
              <p className="text-gray-700 mb-6">
                We combine cutting-edge AI technology with thoughtful design to create a platform that truly understands and supports solo travelers. Whether you're seeking adventure, personal growth, or simply a break from routine, SoulTrail is your trusted companion.
              </p>
              <Button asChild className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                <Link to="/explore">Start Your Journey</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Woman looking at mountains"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#9b87f5]/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-[#7E69AB]/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#7E69AB] mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To transform solo travel into a journey of self-discovery, connection, and safety through thoughtful technology and empathetic design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-[#E5DEFF]">
              <CardHeader>
                <div className="p-2 bg-[#E5DEFF] rounded-full w-fit mb-3">
                  <Heart className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <CardTitle>Emotional Intelligence</CardTitle>
                <CardDescription>Matching destinations to your emotional needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We believe that travel should nourish your soul. Our AI algorithms understand the emotional context of destinations and match them to your current mood and emotional needs, creating more meaningful experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-[#E5DEFF]">
              <CardHeader>
                <div className="p-2 bg-[#E5DEFF] rounded-full w-fit mb-3">
                  <Shield className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <CardTitle>Safety First</CardTitle>
                <CardDescription>Creating secure environments for solo travelers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Safety is our priority, especially for women traveling alone. We've designed comprehensive safety features that provide peace of mind while preserving the sense of independence that makes solo travel special.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-[#E5DEFF]">
              <CardHeader>
                <div className="p-2 bg-[#E5DEFF] rounded-full w-fit mb-3">
                  <MessageSquare className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <CardTitle>Companionship</CardTitle>
                <CardDescription>Never truly alone unless you want to be</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Solo doesn't have to mean lonely. Our AI travel buddy provides companionship, guidance, and someone to share your experiences with, available whenever you need connection while preserving your independence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-[#E5DEFF]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#7E69AB] mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Thoughtfully designed tools to enhance every aspect of your solo travel experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-start mb-8">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-4 mt-1">
                  <Compass className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Mood-Based Destination Suggestions</h3>
                  <p className="text-gray-700">
                    Our AI analyzes your current emotional state and suggests destinations that align with your mood. Feeling introspective? We might recommend a peaceful nature retreat. Energetic and social? Perhaps a vibrant cultural hub would be perfect.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-4 mt-1">
                  <MessageSquare className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Virtual Travel Buddy</h3>
                  <p className="text-gray-700">
                    Our AI companion provides conversation, local recommendations, safety alerts, and emotional support throughout your journey. It's like traveling with a knowledgeable friend who's always there when you need them.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-4 mt-1">
                  <BookOpen className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Travel Journal</h3>
                  <p className="text-gray-700">
                    Document your inner and outer journey with our digital memory journal. Capture moments of growth, emotional milestones, and beautiful memories to reflect on later.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-8">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-4 mt-1">
                  <Shield className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Safety Tools</h3>
                  <p className="text-gray-700">
                    Comprehensive safety features including location sharing with trusted contacts, emergency assistance, safety alerts, and a panic button give you peace of mind while maintaining your independence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-4 mt-1">
                  <Map className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Cultural Experience Bookings</h3>
                  <p className="text-gray-700">
                    Discover and book unique cultural experiences that match your interests. From cooking classes to local guided tours, find authentic ways to connect with your destination.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-4 mt-1">
                  <Heart className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Emotional Support</h3>
                  <p className="text-gray-700">
                    Solo travel can be an emotional rollercoaster. Our app acknowledges and supports you through all the emotions that arise, from excitement and joy to homesickness and anxiety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7E69AB] mb-6">
            Ready to Transform Your Solo Travel Experience?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of solo travelers who have discovered the perfect balance of independence and support with SoulTrail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              <Link to="/explore">Start Exploring</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#9b87f5] text-[#9b87f5]">
              <Link to="/safety">Discover Safety Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
