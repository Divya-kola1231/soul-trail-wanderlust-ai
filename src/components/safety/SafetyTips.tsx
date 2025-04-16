
import React from "react";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SafetyTips() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <Shield className="h-16 w-16 text-[#7E69AB] mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-[#7E69AB] mb-4">
        Safety Recommendations
      </h2>
      <div className="mb-8">
        <p className="text-gray-700 mb-6">
          Our AI analyzes data from trusted sources to provide safety recommendations specific to your destination. Stay informed and travel smart.
        </p>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5DEFF] text-left">
          <h3 className="text-xl font-semibold text-[#7E69AB] mb-4">Safety Tips for Kyoto, Japan</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Japan has a very low crime rate, making it one of the safest countries for solo female travelers.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Public transportation is reliable, clean, and safe, even late at night.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Be aware of natural disasters such as earthquakes and typhoons. Follow local authority instructions.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>While English is not widely spoken, most signs in tourist areas are in English and Japanese.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
        Get Custom Safety Report
      </Button>
    </div>
  );
}
