
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Plus, 
  Search,
  MapPin,
  Clock,
  Star,
  Phone,
  Mail,
  Calendar,
  Award,
  TrendingUp
} from "lucide-react";

const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "Lead Technician",
      email: "john@panepilot.com",
      phone: "(555) 123-4567",
      avatar: "/api/placeholder/40/40",
      status: "active",
      currentJob: "Downtown Commercial Route",
      rating: 4.9,
      completedJobs: 156,
      schedule: "Full-time"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Senior Cleaner",
      email: "sarah@panepilot.com",
      phone: "(555) 234-5678",
      avatar: "/api/placeholder/40/40",
      status: "active",
      currentJob: "Residential North Route",
      rating: 4.8,
      completedJobs: 89,
      schedule: "Part-time"
    },
    {
      id: 3,
      name: "Mike Wilson",
      role: "Equipment Specialist",
      email: "mike@panepilot.com",
      phone: "(555) 345-6789",
      avatar: "/api/placeholder/40/40",
      status: "off-duty",
      currentJob: null,
      rating: 4.7,
      completedJobs: 203,
      schedule: "Full-time"
    },
    {
      id: 4,
      name: "Lisa Brown",
      role: "Quality Inspector",
      email: "lisa@panepilot.com",
      phone: "(555) 456-7890",
      avatar: "/api/placeholder/40/40",
      status: "active",
      currentJob: "Mall & Shopping Centers",
      rating: 4.9,
      completedJobs: 134,
      schedule: "Full-time"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "off-duty": return "bg-gray-100 text-gray-800";
      case "busy": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const teamStats = [
    { title: "Total Team Members", value: "12", icon: Users },
    { title: "Active Today", value: "8", icon: Clock },
    { title: "Avg. Rating", value: "4.8", icon: Star },
    { title: "Jobs This Week", value: "47", icon: Award }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Management</h1>
          <p className="text-muted-foreground">Manage your cleaning crew and track performance</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Team Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Team Members */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(member.status)} variant="secondary">
                  {member.status}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{member.schedule}</span>
                </div>
                {member.currentJob && (
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-blue-600">{member.currentJob}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{member.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">{member.completedJobs}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Jobs</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">
                    Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
