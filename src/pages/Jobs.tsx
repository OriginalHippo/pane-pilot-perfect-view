
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Search, 
  Plus, 
  Calendar, 
  DollarSign,
  Clock,
  User,
  MapPin,
  Filter
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Residential Window Cleaning",
      client: "Jane Cooper",
      address: "123 Main St, Springfield, IL",
      date: "2024-04-25",
      time: "10:00 AM",
      status: "scheduled",
      amount: "$150",
      duration: "2 hours",
      notes: "Prefers afternoon appointments"
    },
    {
      id: 2,
      title: "Commercial Building - Monthly Clean",
      client: "ABC Corporation",
      address: "456 Business Ave, Springfield, IL",
      date: "2024-04-24",
      time: "2:00 PM",
      status: "in-progress",
      amount: "$450",
      duration: "4 hours",
      notes: "Access code required"
    },
    {
      id: 3,
      title: "Storefront Deep Clean",
      client: "Green Valley Mall",
      address: "789 Shopping Blvd, Springfield, IL",
      date: "2024-04-22",
      time: "9:00 AM",
      status: "completed",
      amount: "$320",
      duration: "3 hours",
      notes: "Customer satisfied"
    },
    {
      id: 4,
      title: "Emergency Clean - Storm Damage",
      client: "Smith Residence",
      address: "321 Oak St, Springfield, IL",
      date: "2024-04-26",
      time: "8:00 AM",
      status: "urgent",
      amount: "$200",
      duration: "1.5 hours",
      notes: "Storm damage cleanup needed"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "in-progress": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-green-100 text-green-800";
      case "urgent": return "bg-red-100 text-red-800";
      case "cancelled": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled": return <Calendar className="w-4 h-4" />;
      case "in-progress": return <Clock className="w-4 h-4" />;
      case "completed": return <Briefcase className="w-4 h-4" />;
      case "urgent": return <Clock className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Jobs</h1>
          <p className="text-muted-foreground">Manage your window cleaning appointments</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Job
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {job.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.date} at {job.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {job.address}
                  </div>
                  
                  {job.notes && (
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm"><strong>Notes:</strong> {job.notes}</p>
                    </div>
                  )}
                </div>
                
                <div className="text-right space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(job.status)} variant="secondary">
                      {getStatusIcon(job.status)}
                      <span className="ml-1 capitalize">{job.status}</span>
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-lg font-bold">
                      <DollarSign className="w-4 h-4" />
                      {job.amount.replace('$', '')}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      {job.status === "scheduled" ? "Start" : "View"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
