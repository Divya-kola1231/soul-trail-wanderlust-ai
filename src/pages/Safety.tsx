
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Users, Clock } from "lucide-react";
import { EmergencyContacts } from "@/components/safety/EmergencyContacts";
import { SafetyAlerts } from "@/components/safety/SafetyAlerts";
import { SafetyHeader } from "@/components/safety/SafetyHeader";
import { SafetyQuickActions } from "@/components/safety/SafetyQuickActions";
import { SafetyFeatureCard } from "@/components/safety/SafetyFeatureCard";
import { SafetyTips } from "@/components/safety/SafetyTips";

const Safety = () => {
  const [panicMode, setPanicMode] = useState(false);
  const [sharingLocation, setSharingLocation] = useState(false);
  
  const toggleLocationSharing = () => {
    setSharingLocation(!sharingLocation);
  };
  
  const activatePanicMode = () => {
    setPanicMode(true);
    // In a real app, this would trigger emergency protocols
    setTimeout(() => {
      setPanicMode(false);
    }, 5000);
  };

  const safetyFeatures = [
    {
      icon: MapPin,
      title: "Live Location Sharing",
      description: "Choose who can see your location and for how long. Perfect for letting friends or family know you're safe during your solo adventures.",
      buttonText: "Configure Sharing"
    },
    {
      icon: Users,
      title: "Emergency Contacts",
      description: "Add contacts who will be automatically notified in case of an emergency. They'll receive your location and can take action to help.",
      buttonText: "Manage Contacts"
    },
    {
      icon: Clock,
      title: "Check-in Reminders",
      description: "Schedule regular check-ins. If you miss one, your emergency contacts will be automatically notified with your last known location.",
      buttonText: "Set Schedule"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-12 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="max-w-7xl mx-auto">
          <SafetyHeader />
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-[#E5DEFF]">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-[#F97316] p-6 flex items-center justify-center">
                <div className="text-center">
                  <AlertTriangle className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Emergency Access</h3>
                  <p className="text-white/90">Quick access to safety features when you need them most</p>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <SafetyQuickActions 
                  panicMode={panicMode}
                  sharingLocation={sharingLocation}
                  onPanicMode={activatePanicMode}
                  onLocationShare={toggleLocationSharing}
                />
                
                {(panicMode || sharingLocation) && (
                  <div className={`p-3 rounded-lg mb-4 ${panicMode ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}`}>
                    {panicMode ? (
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
                        <span>Emergency protocol activated. Contacting your emergency contacts...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Location sharing is active. Your trusted contacts can see your location.</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 border-[#7E69AB] text-[#7E69AB]">
                        Emergency Calls
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Emergency Contacts</DialogTitle>
                        <DialogDescription>
                          Quickly call or message your emergency contacts
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <EmergencyContacts />
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 border-[#7E69AB] text-[#7E69AB]">
                        Safety Alerts
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Safety Alerts</DialogTitle>
                        <DialogDescription>
                          Stay informed about safety concerns in your area
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <SafetyAlerts />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#7E69AB] mb-6">Emergency Contacts</h2>
            <EmergencyContacts />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#7E69AB] mb-8 text-center">
            Essential Safety Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <SafetyFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                buttonText={feature.buttonText}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-[#E5DEFF]/30">
        <SafetyTips />
      </section>
    </div>
  );
};

export default Safety;
