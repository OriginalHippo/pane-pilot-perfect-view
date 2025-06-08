
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Clock,
  User,
  MapPin
} from "lucide-react";

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Sample schedule data
  const scheduleData = {
    "2024-04-22": [
      {
        id: 1,
        time: "9:00 AM",
        duration: "2 hours",
        client: "Jane Cooper",
        service: "Residential Cleaning",
        address: "123 Main St",
        status: "scheduled"
      }
    ],
    "2024-04-23": [
      {
        id: 2,
        time: "10:00 AM",
        duration: "3 hours",
        client: "ABC Corporation",
        service: "Commercial Windows",
        address: "456 Business Ave",
        status: "scheduled"
      },
      {
        id: 3,
        time: "2:00 PM",
        duration: "1.5 hours",
        client: "Green Valley Mall",
        service: "Storefront Cleaning",
        address: "789 Shopping Blvd",
        status: "confirmed"
      }
    ],
    "2024-04-24": [
      {
        id: 4,
        time: "8:00 AM",
        duration: "4 hours",
        client: "Office Plaza",
        service: "Building Exterior",
        address: "321 Corporate Dr",
        status: "in-progress"
      }
    ]
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getWeekDays = (date: Date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = getWeekDays(currentDate);
  const today = new Date();

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "confirmed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const isToday = (date: Date) => {
    return formatDate(date) === formatDate(today);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-muted-foreground">Manage your weekly appointments</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Job
        </Button>
      </div>

      {/* Week Navigation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Week of {weekDays[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => navigateWeek('prev')}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentDate(today)}>
                Today
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigateWeek('next')}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Weekly Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {weekDays.map((day, index) => {
          const dayKey = formatDate(day);
          const dayJobs = scheduleData[dayKey] || [];
          const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
          const dayNumber = day.getDate();
          
          return (
            <Card key={index} className={`${isToday(day) ? 'ring-2 ring-blue-500' : ''}`}>
              <CardHeader className="pb-3">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{dayName}</div>
                  <div className={`text-2xl font-bold ${isToday(day) ? 'text-blue-600' : ''}`}>
                    {dayNumber}
                  </div>
                  {isToday(day) && (
                    <div className="text-xs text-blue-600 font-medium">Today</div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {dayJobs.length === 0 ? (
                  <div className="text-center text-muted-foreground text-sm py-4">
                    No appointments
                  </div>
                ) : (
                  dayJobs.map((job) => (
                    <div key={job.id} className="p-3 bg-muted/50 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <Clock className="w-3 h-3" />
                          {job.time}
                        </div>
                        <Badge className={getStatusColor(job.status)} variant="secondary">
                          {job.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">{job.service}</div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <User className="w-3 h-3" />
                          {job.client}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {job.address}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Duration: {job.duration}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="w-3 h-3 mr-1" />
                  Add
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
