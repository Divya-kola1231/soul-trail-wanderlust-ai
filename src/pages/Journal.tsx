
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Camera, MapPin, Calendar, Plus, Smile, Heart, Edit2, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type JournalEntry = {
  id: string;
  title: string;
  date: string;
  location: string;
  content: string;
  mood: string;
  images: string[];
};

// Sample journal entries
const initialEntries: JournalEntry[] = [
  {
    id: "1",
    title: "Sunrise at Fushimi Inari Shrine",
    date: "2025-03-10",
    location: "Kyoto, Japan",
    content: "Woke up at 5 AM to beat the crowds at Fushimi Inari. The effort was absolutely worth it! Walking through the endless torii gates as the morning light filtered through was magical. I felt small yet connected to something larger than myself. Met a fellow solo traveler from Canada and we shared stories over breakfast after our hike.",
    mood: "peaceful",
    images: [
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "2",
    title: "Getting Lost in Barcelona",
    date: "2025-02-15",
    location: "Barcelona, Spain",
    content: "Sometimes the best experiences come from unplanned moments. I got completely lost in the Gothic Quarter today, wandering through narrow medieval streets that opened into charming plazas. Stumbled upon a small local concert in a hidden courtyard and stayed for hours listening to Spanish guitar. The feeling of discovery was exhilarating.",
    mood: "joyful",
    images: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    ]
  },
];

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>(initialEntries);
  const [newEntry, setNewEntry] = useState<Partial<JournalEntry>>({
    title: "",
    date: new Date().toISOString().split("T")[0],
    location: "",
    content: "",
    mood: "peaceful",
    images: []
  });
  
  const moodOptions = [
    { value: "peaceful", label: "Peaceful", icon: <Smile className="h-4 w-4 text-green-500" /> },
    { value: "joyful", label: "Joyful", icon: <Heart className="h-4 w-4 text-pink-500" /> },
    { value: "adventurous", label: "Adventurous", icon: <MapPin className="h-4 w-4 text-blue-500" /> },
    { value: "reflective", label: "Reflective", icon: <BookOpen className="h-4 w-4 text-purple-500" /> },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };

  const handleMoodChange = (mood: string) => {
    setNewEntry(prev => ({ ...prev, mood }));
  };

  const handleAddEntry = () => {
    const entryToAdd: JournalEntry = {
      id: Date.now().toString(),
      title: newEntry.title || "Untitled Entry",
      date: newEntry.date || new Date().toISOString().split("T")[0],
      location: newEntry.location || "Unknown Location",
      content: newEntry.content || "",
      mood: newEntry.mood || "peaceful",
      images: newEntry.images || []
    };
    
    setEntries(prev => [entryToAdd, ...prev]);
    setNewEntry({
      title: "",
      date: new Date().toISOString().split("T")[0],
      location: "",
      content: "",
      mood: "peaceful",
      images: []
    });
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const getMoodIcon = (mood: string) => {
    const foundMood = moodOptions.find(option => option.value === mood);
    return foundMood ? foundMood.icon : moodOptions[0].icon;
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-12 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7E69AB] mb-6">
              Your Travel Journal
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Capture memories, emotions, and growth moments from your journey
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mx-auto flex items-center bg-[#9b87f5] hover:bg-[#7E69AB] mb-8">
                <Plus className="h-5 w-5 mr-2" />
                Add New Entry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create New Journal Entry</DialogTitle>
                <DialogDescription>
                  Capture your memories, thoughts, and feelings from today's adventures.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="title" className="text-right font-medium text-sm">
                    Title
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={newEntry.title}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="Give your memory a title"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="date" className="text-right font-medium text-sm">
                    Date
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={newEntry.date}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="location" className="text-right font-medium text-sm">
                    Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={newEntry.location}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="Where are you now?"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <label htmlFor="content" className="text-right font-medium text-sm pt-2">
                    Entry
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={newEntry.content}
                    onChange={handleInputChange}
                    className="col-span-3 flex min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="What happened today? How did it make you feel?"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right font-medium text-sm">
                    Mood
                  </label>
                  <div className="col-span-3 flex space-x-2">
                    {moodOptions.map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleMoodChange(option.value)}
                        className={`flex items-center px-3 py-1.5 rounded-full ${
                          newEntry.mood === option.value
                            ? "bg-[#9b87f5] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option.icon}
                        <span className="ml-1.5">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right font-medium text-sm">
                    Photos
                  </label>
                  <div className="col-span-3">
                    <Button variant="outline" className="w-full border-dashed">
                      <Camera className="h-4 w-4 mr-2" />
                      Upload Images
                    </Button>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5]">
                  Cancel
                </Button>
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]" onClick={handleAddEntry}>
                  Save Entry
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#7E69AB] mb-6">
            Your Journey
          </h2>
          
          <div className="space-y-8">
            {entries.map((entry) => (
              <Card key={entry.id} className="border-[#E5DEFF] overflow-hidden">
                <CardHeader className="bg-[#E5DEFF]/30 pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{entry.title}</CardTitle>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{new Date(entry.date).toLocaleDateString()}</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{entry.location}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit2 className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0" 
                        onClick={() => handleDeleteEntry(entry.id)}
                      >
                        <Trash2 className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-0">
                  <div className="flex items-center mb-3">
                    <span className="flex items-center text-sm px-2.5 py-0.5 rounded-full bg-[#E5DEFF] text-[#7E69AB]">
                      {getMoodIcon(entry.mood)}
                      <span className="ml-1 capitalize">{entry.mood}</span>
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 whitespace-pre-line">{entry.content}</p>
                  
                  {entry.images.length > 0 && (
                    <div className="flex flex-wrap gap-2 pb-4">
                      {entry.images.map((image, index) => (
                        <div key={index} className="relative h-24 w-24 rounded-md overflow-hidden">
                          <img 
                            src={image} 
                            alt={`Journal image ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-0 pb-4 text-xs text-gray-500">
                  Added to your memory journal
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {entries.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Journal is Empty</h3>
              <p className="text-gray-500 mb-6">
                Start documenting your journey by adding your first entry
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                    <Plus className="h-5 w-5 mr-2" />
                    Create First Entry
                  </Button>
                </DialogTrigger>
                {/* Reusing the same dialog content */}
              </Dialog>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Journal;
