
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  MessageSquare, 
  Star, 
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Send,
  Search
} from "lucide-react";

const CustomerPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [feedback, setFeedback] = useState("");

  const recentJobs = [
    {
      id: 1,
      client: "ABC Corporation",
      service: "Commercial Window Cleaning",
      date: "2024-04-22",
      time: "10:00 AM",
      status: "completed",
      rating: 5,
      feedback: "Excellent work! Very professional team."
    },
    {
      id: 2,
      client: "Green Valley Mall",
      service: "Storefront Cleaning",
      date: "2024-04-20",
      time: "2:00 PM",
      status: "completed",
      rating: 4,
      feedback: "Good job, windows are crystal clear."
    },
    {
      id: 3,
      client: "Office Plaza",
      service: "Building Exterior",
      date: "2024-04-25",
      time: "9:00 AM",
      status: "scheduled",
      rating: null,
      feedback: null
    }
  ];

  const messages = [
    {
      id: 1,
      client: "ABC Corporation",
      message: "Can we schedule an additional cleaning next week?",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      client: "Downtown Hotel",
      message: "Thank you for the excellent service yesterday!",
      time: "1 day ago",
      unread: false
    },
    {
      id: 3,
      client: "Green Valley Mall",
      message: "Could you arrive 30 minutes earlier tomorrow?",
      time: "2 days ago",
      unread: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "in-progress": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Customer Portal</h1>
          <p className="text-muted-foreground">Manage customer communications and feedback</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Send className="w-4 h-4 mr-2" />
          Send Update
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Jobs & Feedback */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs or clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Jobs List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Jobs & Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{job.client}</h4>
                        <p className="text-sm text-muted-foreground">{job.service}</p>
                      </div>
                      <Badge className={getStatusColor(job.status)} variant="secondary">
                        {job.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{job.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.time}</span>
                      </div>
                    </div>

                    {job.rating && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Rating:</span>
                          <div className="flex items-center gap-1">
                            {renderStars(job.rating)}
                          </div>
                        </div>
                        {job.feedback && (
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm italic">"{job.feedback}"</p>
                          </div>
                        )}
                      </div>
                    )}

                    {job.status === "scheduled" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="w-3 h-3 mr-1" />
                          Contact Client
                        </Button>
                        <Button variant="outline" size="sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          View Location
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages & Communications */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">Unread Messages</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-xs text-muted-foreground">Avg Rating</p>
              </CardContent>
            </Card>
          </div>

          {/* Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Recent Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`p-3 rounded-lg border ${message.unread ? 'bg-blue-50 border-blue-200' : 'bg-muted/50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{message.client}</p>
                      <div className="flex items-center gap-1">
                        {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{message.message}</p>
                    <Button variant="outline" size="sm" className="mt-2 w-full">
                      Reply
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Feedback Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Feedback Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Ask for feedback or send a message..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={3}
              />
              <Button className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerPortal;
