
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Mic, MapPin, Info, Globe, Bot } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  id: string;
  text: string;
  sender: "user" | "buddy";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! I'm your AI travel buddy. I'm here to provide companionship and guidance during your solo journey. How can I assist you today?",
    sender: "buddy",
    timestamp: new Date(),
  },
];

const suggestedQuestions = [
  "What safety tips do you have for solo female travelers?",
  "Can you recommend some local food to try?",
  "What are some off-the-beaten-path attractions nearby?",
  "How do I say 'thank you' in the local language?",
  "What's the best way to meet other travelers here?",
];

const Companion = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Call our Supabase Edge Function
      const { data, error } = await supabase.functions.invoke("travel-buddy-chat", {
        body: { 
          message: input, 
          messageHistory: messages.map(msg => ({
            text: msg.text,
            sender: msg.sender
          }))
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      // Add AI response
      const buddyMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: "buddy",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, buddyMessage]);
    } catch (error) {
      console.error("Error calling AI:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });

      // Add fallback message if AI fails
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: "buddy",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5DEFF]/30 to-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#7E69AB] mb-4">Your Virtual Travel Buddy</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Never feel alone on your adventures. Your AI companion is here to provide guidance, support, and friendly conversation.
          </p>
        </div>

        <Card className="border-[#E5DEFF] shadow-md mb-8">
          <CardContent className="p-0">
            <div className="bg-[#9b87f5] text-white p-3 flex items-center rounded-t-lg">
              <Bot className="h-6 w-6 mr-2" />
              <div>
                <h3 className="font-medium">SoulTrail Buddy</h3>
                <p className="text-xs opacity-90">Always here for you</p>
              </div>
            </div>
            
            <div className="h-[500px] overflow-y-auto p-4 flex flex-col">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[80%] mb-4 ${
                    message.sender === "user" ? "self-end" : "self-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-[#9b87f5] text-white rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                  <div
                    className={`text-xs mt-1 text-gray-500 ${
                      message.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="self-start max-w-[80%] mb-4">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center mb-3 overflow-x-auto py-2 -mx-3 px-3 space-x-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="px-3 py-1 bg-[#E5DEFF] text-[#7E69AB] rounded-full text-sm whitespace-nowrap hover:bg-[#9b87f5] hover:text-white transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
              
              <div className="flex">
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2"
                  aria-label="Voice input"
                >
                  <Mic className="h-5 w-5 text-[#7E69AB]" />
                </Button>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  className="ml-2 bg-[#9b87f5] hover:bg-[#7E69AB]"
                  onClick={handleSend}
                  disabled={input.trim() === ""}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-[#E5DEFF]">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-[#7E69AB]" />
                </div>
                <h3 className="font-semibold text-lg text-[#7E69AB]">Location Aware</h3>
              </div>
              <p className="text-gray-700">
                Your buddy knows your location and can provide relevant information about nearby attractions, transportation options, and safety advisories.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-[#E5DEFF]">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-3">
                  <Globe className="h-5 w-5 text-[#7E69AB]" />
                </div>
                <h3 className="font-semibold text-lg text-[#7E69AB]">Language Support</h3>
              </div>
              <p className="text-gray-700">
                Need help with translations? Your travel buddy can translate phrases, help you learn common expressions, and even interpret signs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-[#E5DEFF]">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#E5DEFF] rounded-full mr-3">
                  <Info className="h-5 w-5 text-[#7E69AB]" />
                </div>
                <h3 className="font-semibold text-lg text-[#7E69AB]">Cultural Insights</h3>
              </div>
              <p className="text-gray-700">
                Get valuable information about local customs, etiquette, and traditions to ensure you have a respectful and authentic experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Companion;
