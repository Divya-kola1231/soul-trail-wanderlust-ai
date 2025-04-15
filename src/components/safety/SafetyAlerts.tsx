
import { useState } from "react";
import { Bell, AlertTriangle, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Alert = {
  id: number;
  type: "warning" | "info" | "danger";
  title: string;
  location: string;
  time: string;
};

const MOCK_ALERTS: Alert[] = [
  {
    id: 1,
    type: "warning",
    title: "Protest Scheduled",
    location: "Central Plaza",
    time: "2pm-5pm today"
  },
  {
    id: 2,
    type: "info",
    title: "Weather Advisory",
    location: "City Center",
    time: "Next 24 hours"
  }
];

export function SafetyAlerts() {
  const [alerts] = useState<Alert[]>(MOCK_ALERTS);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[#7E69AB]">Active Alerts</h3>
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          {alerts.length} Active
        </Badge>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`border-l-4 ${
            alert.type === "warning" ? "border-l-amber-500" :
            alert.type === "danger" ? "border-l-red-500" :
            "border-l-blue-500"
          }`}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${
                  alert.type === "warning" ? "bg-amber-100" :
                  alert.type === "danger" ? "bg-red-100" :
                  "bg-blue-100"
                }`}>
                  {alert.type === "warning" ? (
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  ) : alert.type === "danger" ? (
                    <Bell className="h-5 w-5 text-red-600" />
                  ) : (
                    <Bell className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium">{alert.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{alert.location}</span>
                    <span>•</span>
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
