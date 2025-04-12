
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Phone, MapPin, Bell, Clock, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-12 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7E69AB] mb-6">
              Your Safety Is Our Priority
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Travel with confidence using our comprehensive safety tools designed specifically for solo travelers
            </p>
          </div>
          
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <Button 
                    className={`h-auto py-4 flex items-center justify-center ${panicMode ? "bg-red-600 hover:bg-red-700" : "bg-[#F97316] hover:bg-[#F97316]/90"}`} 
                    onClick={activatePanicMode}
                  >
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    <div className="text-left">
                      <div className="font-medium">Panic Button</div>
                      <div className="text-xs opacity-90">Alerts your emergency contacts</div>
                    </div>
                  </Button>
                  
                  <Button 
                    className="h-auto py-4 flex items-center justify-center bg-[#0EA5E9] hover:bg-[#0EA5E9]/90" 
                    onClick={toggleLocationSharing}
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
                  <Button variant="outline" className="flex-1 border-[#7E69AB] text-[#7E69AB]">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Calls
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 border-[#7E69AB] text-[#7E69AB]">
                        <Bell className="h-4 w-4 mr-2" />
                        Safety Alerts
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Safety Alerts</DialogTitle>
                        <DialogDescription>
                          Receive notifications about safety concerns in your area.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="flex items-center justify-between mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="flex items-center">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-3" />
                            <div>
                              <p className="font-medium text-amber-800">Protest Scheduled</p>
                              <p className="text-sm text-amber-700">Central Plaza, 2pm-5pm</p>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">1h ago</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center">
                            <Bell className="h-5 w-5 text-blue-500 mr-3" />
                            <div>
                              <p className="font-medium text-blue-800">Weather Advisory</p>
                              <p className="text-sm text-blue-700">Heavy rain expected tonight</p>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">3h ago</span>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                          View All Alerts
                        </Button>
                      </DialogFooter>
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
          <h2 className="text-3xl font-bold text-[#7E69AB] mb-8 text-center">
            Essential Safety Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-[#E5DEFF]">
              <CardHeader>
                <div className="p-2 bg-[#E5DEFF] rounded-full w-fit mb-3">
                  <MapPin className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <CardTitle>Live Location Sharing</CardTitle>
                <CardDescription>Share your real-time location with trusted contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Choose who can see your location and for how long. Perfect for letting friends or family know you're safe during your solo adventures.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5]">
                  Configure Sharing
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-[#E5DEFF]">
              <CardHeader>
                <div className="p-2 bg-[#E5DEFF] rounded-full w-fit mb-3">
                  <Users className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>Set up trusted people to contact in emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Add contacts who will be automatically notified in case of an emergency. They'll receive your location and can take action to help.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5]">
                  Manage Contacts
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-[#E5DEFF]">
              <CardHeader>
                <div className="p-2 bg-[#E5DEFF] rounded-full w-fit mb-3">
                  <Clock className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <CardTitle>Check-in Reminders</CardTitle>
                <CardDescription>Set scheduled check-ins to confirm your safety</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Schedule regular check-ins. If you miss one, your emergency contacts will be automatically notified with your last known location.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5]">
                  Set Schedule
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-[#E5DEFF]/30">
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
      </section>
    </div>
  );
};

export default Safety;
