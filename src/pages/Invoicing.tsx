
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  DollarSign, 
  FileText, 
  Send, 
  Download,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Check,
  Clock,
  AlertTriangle
} from "lucide-react";

const Invoicing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    {
      id: "INV-001",
      client: "ABC Corporation",
      amount: "$850.00",
      date: "2024-04-20",
      dueDate: "2024-05-20",
      status: "paid",
      services: "Commercial Window Cleaning"
    },
    {
      id: "INV-002",
      client: "Green Valley Mall",
      amount: "$1,200.00",
      date: "2024-04-18",
      dueDate: "2024-05-18",
      status: "pending",
      services: "Storefront Cleaning"
    },
    {
      id: "INV-003",
      client: "Office Plaza",
      amount: "$650.00",
      date: "2024-04-15",
      dueDate: "2024-05-15",
      status: "overdue",
      services: "Building Exterior"
    },
    {
      id: "INV-004",
      client: "Downtown Hotel",
      amount: "$420.00",
      date: "2024-04-22",
      dueDate: "2024-05-22",
      status: "draft",
      services: "Residential Cleaning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "overdue": return "bg-red-100 text-red-800";
      case "draft": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return <Check className="w-3 h-3" />;
      case "pending": return <Clock className="w-3 h-3" />;
      case "overdue": return <AlertTriangle className="w-3 h-3" />;
      case "draft": return <Edit className="w-3 h-3" />;
      default: return <FileText className="w-3 h-3" />;
    }
  };

  const summaryStats = [
    { title: "Total Outstanding", value: "$2,270.00", color: "text-yellow-600" },
    { title: "Paid This Month", value: "$4,820.00", color: "text-green-600" },
    { title: "Overdue Amount", value: "$650.00", color: "text-red-600" },
    { title: "Draft Invoices", value: "3", color: "text-blue-600" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Invoicing & Payments</h1>
          <p className="text-muted-foreground">Manage invoices and track payments</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <DollarSign className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{invoice.id}</p>
                      <Badge className={getStatusColor(invoice.status)} variant="secondary">
                        {getStatusIcon(invoice.status)}
                        <span className="ml-1 capitalize">{invoice.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{invoice.client}</p>
                    <p className="text-xs text-muted-foreground">{invoice.services}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-lg">{invoice.amount}</p>
                  <p className="text-sm text-muted-foreground">Due: {invoice.dueDate}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  {invoice.status === "draft" && (
                    <Button size="sm">
                      <Send className="w-3 h-3 mr-1" />
                      Send
                    </Button>
                  )}
                  {invoice.status === "pending" && (
                    <Button size="sm" variant="outline">
                      <Send className="w-3 h-3 mr-1" />
                      Remind
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoicing;
