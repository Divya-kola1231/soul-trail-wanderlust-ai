
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-[#E5DEFF] bg-white transition-all duration-300 hover:shadow-md hover:border-[#9b87f5]">
      <CardHeader className="flex flex-col items-center">
        <div className="mb-4 p-3 bg-[#E5DEFF] rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#7E69AB] text-center">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};
