
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Heart, Calendar, Umbrella, ArrowRight } from "lucide-react";
import { MoodSelector } from "@/components/MoodSelector";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const destinations = [
  {
    id: 1,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    mood: "Peaceful",
    season: "Spring",
    description: "Find tranquility in ancient temples, traditional gardens, and bamboo forests."
  },
  {
    id: 2,
    name: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    mood: "Happy",
    season: "Summer",
    description: "Experience vibrant culture, stunning architecture, and Mediterranean beaches."
  },
  {
    id: 3,
    name: "Norwegian Fjords",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    mood: "Reflective",
    season: "Summer",
    description: "Discover awe-inspiring landscapes, pristine nature, and serene waters."
  },
  {
    id: 4,
    name: "Costa Rica",
    image: "https://images.unsplash.com/photo-1518560043561-02e9c7f73ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    mood: "Adventurous",
    season: "Any time",
    description: "Embrace adventure in rainforests, volcanoes, and biodiversity hotspots."
  },
  {
    id: 5,
    name: "New York City, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    mood: "Energized",
    season: "Fall",
    description: "Get energized by iconic landmarks, diverse neighborhoods, and non-stop action."
  },
  {
    id: 6,
    name: "Copenhagen, Denmark",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    mood: "Cozy",
    season: "Winter",
    description: "Experience 'hygge' with charming streets, design aesthetics, and cozy cafes."
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.mood.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.season.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-12 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7E69AB] mb-6">
            Discover Your Perfect Destination
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Let us help you find the travel experience that matches your current mood and desires
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by destination, mood, or season"
                className="pl-10 h-12 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7E69AB] mb-4">
              How are you feeling today?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Your mood is our compass. Select how you're feeling to discover destinations that resonate with your emotional state.
            </p>
          </div>
          
          <div className="mb-16">
            <MoodSelector />
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#7E69AB] mb-6">
              {searchTerm ? "Search Results" : "Recommended Destinations"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination) => (
                  <Dialog key={destination.id}>
                    <DialogTrigger asChild>
                      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-transform hover:-translate-y-1 cursor-pointer">
                        <div className="relative h-48">
                          <img 
                            src={destination.image} 
                            alt={destination.name}
                            className="w-full h-full object-cover"
                          />
                          <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white">
                            <Heart className="h-5 w-5 text-[#F97316]" />
                          </button>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                              <div className="flex items-center mt-1 space-x-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E5DEFF] text-[#7E69AB]">
                                  {destination.mood}
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {destination.season}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 line-clamp-2">{destination.description}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-xl">
                      <DialogHeader>
                        <DialogTitle>{destination.name}</DialogTitle>
                        <DialogDescription>Perfect for when you feel {destination.mood.toLowerCase()}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-2">
                        <img 
                          src={destination.image} 
                          alt={destination.name}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E5DEFF] text-[#7E69AB]">
                            {destination.mood}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Calendar className="h-3 w-3 mr-1" />
                            {destination.season}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0EA5E9]/10 text-[#0EA5E9]">
                            <MapPin className="h-3 w-3 mr-1" />
                            Solo Friendly
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{destination.description}</p>
                        <p className="text-gray-700 mb-6">
                          Experience the unique blend of traditional and modern that makes this destination perfect for solo travelers seeking a {destination.mood.toLowerCase()} experience. With safe neighborhoods, friendly locals, and plenty of activities, you'll find exactly what your soul is searching for.
                        </p>
                        <div className="flex justify-between">
                          <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5]">
                            <Heart className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                            Plan Your Trip
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 mb-4">No destinations found matching your search.</p>
                  <Button 
                    variant="outline" 
                    className="border-[#9b87f5] text-[#9b87f5]"
                    onClick={() => setSearchTerm("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
