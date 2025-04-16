
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function LocationSharing() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();

  const handleLocationSharing = () => {
    if (!isSharing) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setPosition(position);
            setIsSharing(true);
            toast({
              title: "Location Sharing Enabled",
              description: "Your emergency contacts can now see your location.",
            });
          },
          (error) => {
            console.error("Error getting location:", error);
            toast({
              title: "Location Error",
              description: "Unable to get your location. Please check your browser settings.",
              variant: "destructive",
            });
          }
        );
      } else {
        toast({
          title: "Location Not Supported",
          description: "Your browser doesn't support location sharing.",
          variant: "destructive",
        });
      }
    } else {
      setIsSharing(false);
      setPosition(null);
      toast({
        title: "Location Sharing Disabled",
        description: "Your location is no longer being shared.",
      });
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 mb-4">
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-[#7E69AB]" />
        <div>
          <p className="font-medium">Location Sharing</p>
          <p className="text-sm text-gray-500">
            {isSharing ? "Currently sharing your location" : "Share your location with emergency contacts"}
          </p>
        </div>
      </div>
      <Switch
        checked={isSharing}
        onCheckedChange={handleLocationSharing}
        className="data-[state=checked]:bg-[#7E69AB]"
      />
    </div>
  );
}
