
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SafetyFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

export function SafetyFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  buttonText,
  onClick 
}: SafetyFeatureCardProps) {
  return (
    <Card className="border-[#E5DEFF]">
      <CardHeader>
        <div className="p-2 bg-[#E5DEFF] rounded-full w-fit mb-3">
          <Icon className="h-6 w-6 text-[#7E69AB]" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full border-[#9b87f5] text-[#9b87f5]"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
