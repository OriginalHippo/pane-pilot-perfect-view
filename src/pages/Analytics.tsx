
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Calendar,
  Clock,
  MapPin,
  Target,
  Download,
  Filter
} from "lucide-react";

const Analytics = () => {
  const kpis = [
    {
      title: "Monthly Revenue",
      value: "$12,450",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Active Clients",
      value: "156",
      change: "+12",
      trend: "up",
      icon: Users
    },
    {
      title: "Jobs Completed",
      value: "89",
      change: "-3.1%",
      trend: "down",
      icon: Calendar
    },
    {
      title: "Avg. Route Time",
      value: "5.2 hrs",
      change: "-15 min",
      trend: "up",
      icon: Clock
    }
  ];

  const topClients = [
    { name: "ABC Corporation", revenue: "$2,400", jobs: 8 },
    { name: "Green Valley Mall", revenue: "$1,800", jobs: 6 },
    { name: "Office Plaza", revenue: "$1,200", jobs: 4 },
    { name: "Downtown Hotel", revenue: "$980", jobs: 3 }
  ];

  const routePerformance = [
    { route: "Downtown Commercial", efficiency: 95, revenue: "$3,200" },
    { route: "Residential North", efficiency: 88, revenue: "$2,100" },
    { route: "Mall & Shopping", efficiency: 92, revenue: "$2,800" },
    { route: "Industrial Zone", efficiency: 85, revenue: "$1,900" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Reports</h1>
          <p className="text-muted-foreground">Track your business performance and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {kpi.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span className={`text-xs ${kpi.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <kpi.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Clients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Top Clients This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topClients.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.jobs} jobs completed</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{client.revenue}</p>
                    <Badge variant="secondary" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Route Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Route Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {routePerformance.map((route, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{route.route}</span>
                    <span className="text-sm text-muted-foreground">{route.revenue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${route.efficiency}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{route.efficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Revenue chart would be displayed here</p>
              <p className="text-sm">Integration with charts library needed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
