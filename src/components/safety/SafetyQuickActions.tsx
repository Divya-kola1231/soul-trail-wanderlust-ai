
import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MapPin } from "lucide-react";

interface SafetyQuickActionsProps {
  panicMode: boolean;
  sharingLocation: boolean;
  onPanicMode: () => void;
  onLocationShare: () => void;
}

export function SafetyQuickActions({ 
  panicMode, 
  sharingLocation, 
  onPanicMode, 
  onLocationShare 
}: SafetyQuickActionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <Button 
        className={`h-auto py-4 flex items-center justify-center ${panicMode ? "bg-red-600 hover:bg-red-700" : "bg-[#F97316] hover:bg-[#F97316]/90"}`} 
        onClick={onPanicMode}
      >
        <AlertTriangle className="h-5 w-5 mr-2" />
        <div className="text-left">
          <div className="font-medium">Panic Button</div>
          <div className="text-xs opacity-90">Alerts your emergency contacts</div>
        </div>
      </Button>
      
      <Button 
        className="h-auto py-4 flex items-center justify-center bg-[#0EA5E9] hover:bg-[#0EA5E9]/90" 
        onClick={onLocationShare}
      >
        <MapPin className="h-5 w-5 mr-2" />
        <div className="text-left">
          <div className="font-medium">Share Location</div>
          <div className="text-xs opacity-90">
            {sharingLocation ? "Currently sharing" : "Send to trusted contacts"}
          </div>
        </div>
      </Button>
    </div>
  );
}
