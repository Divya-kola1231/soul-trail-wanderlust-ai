
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Sun, Cloud, CloudRain, Moon, Leaf, Coffee, Waves } from "lucide-react";

type Mood = {
  name: string;
  icon: React.ReactNode;
  description: string;
  destinations: string[];
};

export const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  
  const moods: Mood[] = [
    {
      name: "Happy",
      icon: <Smile className="h-8 w-8 text-yellow-500" />,
      description: "You're feeling joyful and want to celebrate life",
      destinations: ["Barcelona, Spain", "Rio de Janeiro, Brazil", "Sydney, Australia"]
    },
    {
      name: "Peaceful",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      description: "You seek tranquility and inner balance",
      destinations: ["Kyoto, Japan", "Sedona, Arizona", "Norwegian Fjords"]
    },
    {
      name: "Reflective",
      icon: <Moon className="h-8 w-8 text-indigo-500" />,
      description: "You're in a contemplative state of mind",
      destinations: ["Iceland", "Scottish Highlands", "New Zealand"]
    },
    {
      name: "Adventurous",
      icon: <Waves className="h-8 w-8 text-blue-500" />,
      description: "You crave excitement and new experiences",
      destinations: ["Costa Rica", "Bali, Indonesia", "South Africa"]
    },
    {
      name: "Energized",
      icon: <Sun className="h-8 w-8 text-orange-500" />,
      description: "You're full of energy and ready to explore",
      destinations: ["New York City", "Tokyo, Japan", "Berlin, Germany"]
    },
    {
      name: "Cozy",
      icon: <Coffee className="h-8 w-8 text-amber-700" />,
      description: "You want comfort and simple pleasures",
      destinations: ["Copenhagen, Denmark", "Vienna, Austria", "Quebec City, Canada"]
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setSelectedMood(mood)}
            className={`flex flex-col items-center p-6 rounded-xl transition-all ${
              selectedMood?.name === mood.name
                ? "bg-[#9b87f5] text-white"
                : "bg-white hover:bg-[#E5DEFF]"
            }`}
          >
            <div className={`mb-3 ${selectedMood?.name === mood.name ? "text-white" : ""}`}>
              {mood.icon}
            </div>
            <span className="font-medium">{mood.name}</span>
          </button>
        ))}
      </div>

      {selectedMood && (
        <Card className="border-[#E5DEFF] animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-[#7E69AB] flex items-center gap-3">
              {selectedMood.icon}
              <span>When you feel {selectedMood.name.toLowerCase()}</span>
            </CardTitle>
            <CardDescription>{selectedMood.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="font-medium mb-3">Recommended destinations:</h4>
            <ul className="space-y-2">
              {selectedMood.destinations.map((destination) => (
                <li key={destination} className="p-3 bg-[#E5DEFF]/30 rounded-lg">
                  {destination}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
              Explore These Destinations
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
