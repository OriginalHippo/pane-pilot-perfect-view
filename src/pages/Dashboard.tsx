
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Users, 
  Briefcase, 
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,450",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Clients",
      value: "24",
      change: "+3",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Jobs This Month",
      value: "48",
      change: "+8",
      icon: Briefcase,
      color: "text-purple-600"
    },
    {
      title: "Scheduled Today",
      value: "6",
      change: "2 pending",
      icon: Calendar,
      color: "text-orange-600"
    }
  ];

  const recentJobs = [
    {
      id: 1,
      client: "Jane Cooper",
      service: "Residential Cleaning",
      date: "Today, 2:00 PM",
      status: "scheduled",
      amount: "$150"
    },
    {
      id: 2,
      client: "ABC Corporation",
      service: "Commercial Windows",
      date: "Today, 4:30 PM",
      status: "in-progress",
      amount: "$450"
    },
    {
      id: 3,
      client: "Green Valley Mall",
      service: "Storefront Cleaning",
      date: "Tomorrow, 9:00 AM",
      status: "scheduled",
      amount: "$320"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "in-progress": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Job
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{job.client}</div>
                  <div className="text-sm text-muted-foreground">{job.service}</div>
                  <div className="text-sm text-muted-foreground">{job.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{job.amount}</div>
                  <Badge className={getStatusColor(job.status)} variant="secondary">
                    {job.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Add New Client
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Briefcase className="w-4 h-4 mr-2" />
              Create Job
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              View Schedule
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="w-4 h-4 mr-2" />
              Generate Invoice
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
