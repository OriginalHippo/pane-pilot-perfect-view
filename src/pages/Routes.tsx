
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Route, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Zap,
  Navigation,
  Plus,
  Search
} from "lucide-react";

const Routes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const routes = [
    {
      id: 1,
      name: "Downtown Commercial Route",
      stops: 8,
      estimatedTime: "6.5 hours",
      distance: "24.3 miles",
      revenue: "$850",
      efficiency: 92,
      status: "optimized"
    },
    {
      id: 2,
      name: "Residential North",
      stops: 12,
      estimatedTime: "4.2 hours",
      distance: "18.7 miles",
      revenue: "$480",
      efficiency: 88,
      status: "needs-optimization"
    },
    {
      id: 3,
      name: "Mall & Shopping Centers",
      stops: 5,
      estimatedTime: "8.1 hours",
      distance: "31.2 miles",
      revenue: "$1,200",
      efficiency: 95,
      status: "optimized"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimized": return "bg-green-100 text-green-800";
      case "needs-optimization": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return "text-green-600";
    if (efficiency >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Route Optimization</h1>
          <p className="text-muted-foreground">Optimize your daily routes for maximum efficiency</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Zap className="w-4 h-4 mr-2" />
            Auto-Optimize All
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Route
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search routes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Route Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {routes.map((route) => (
          <Card key={route.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{route.name}</CardTitle>
                <Badge className={getStatusColor(route.status)} variant="secondary">
                  {route.status.replace('-', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Stops</p>
                    <p className="font-semibold">{route.stops}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Est. Time</p>
                    <p className="font-semibold">{route.estimatedTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Distance</p>
                    <p className="font-semibold">{route.distance}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="font-semibold">{route.revenue}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Efficiency</span>
                  <span className={`font-semibold ${getEfficiencyColor(route.efficiency)}`}>
                    {route.efficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${route.efficiency}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Route className="w-3 h-3 mr-1" />
                  View
                </Button>
                <Button size="sm" className="flex-1">
                  <Zap className="w-3 h-3 mr-1" />
                  Optimize
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Routes;
