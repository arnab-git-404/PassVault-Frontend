import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  Send,
  Ticket,
  Search,
  ArrowLeft,
  AlertCircle,
  XCircle,
} from "lucide-react";

export default function SupportPanel() {




  const [activeView, setActiveView] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    description: "",
  });
  const [tickets, setTickets] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const generateTicketId = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
    //   const timestamp = Date.now().toString().slice(-6);

    return `TKT-${day}${month}${year}-${randomStr}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      formData.description.length < 20 ||
      !formData.name ||
      !formData.email ||
      !formData.subject
    )
      return;

    const newTicket = {
      id: generateTicketId(),
      ...formData,
      status: "open",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [
        {
          type: "user",
          content: formData.description,
          timestamp: new Date().toISOString(),
        },
      ],
    };

    setTickets((prev) => [...prev, newTicket]);
    setSelectedTicket(newTicket);
    setActiveView("success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      priority: "medium",
      description: "",
    });
  };

  const handleSearch = () => {
    const found = tickets.find((t) => t.id === searchId.trim());
    if (found) {
      setSelectedTicket(found);
      setActiveView("ticket");
    } else {
      alert("Ticket not found! Please check the ID and try again.");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "resolved":
        return "bg-green-100 text-green-800 border-green-300";
      case "closed":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "low":
        return "bg-slate-100 text-slate-700";
      case "medium":
        return "bg-orange-100 text-orange-700";
      case "high":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const renderHome = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Support Center
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Submit tickets, track status, and get help from our support team
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card
          className="border-2 hover:shadow-lg transition-all cursor-pointer"
          onClick={() => setActiveView("create")}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Send className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Create Ticket</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Submit a new support request
            </p>
          </CardContent>
        </Card>

        <Card
          className="border-2 hover:shadow-lg transition-all cursor-pointer"
          onClick={() => setActiveView("search")}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Track Ticket</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Check your ticket status</p>
          </CardContent>
        </Card>

        <Card
          className="border-2 hover:shadow-lg transition-all cursor-pointer"
          onClick={() => setActiveView("mytickets")}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Ticket className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">My Tickets</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              View all your tickets ({tickets.length})
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">
                {tickets.filter((t) => t.status === "open").length}
              </p>
              <p className="text-sm text-slate-600">Open</p>
            </div>
            <div className="text-center p-4  rounded-lg">
              <p className="text-2xl font-bold text-yellow-600">
                {tickets.filter((t) => t.status === "in-progress").length}
              </p>
              <p className="text-sm text-slate-600">In Progress</p>
            </div>
            <div className="text-center p-4  rounded-lg">
              <p className="text-2xl font-bold text-green-600">
                {tickets.filter((t) => t.status === "resolved").length}
              </p>
              <p className="text-sm text-slate-600">Resolved</p>
            </div>
            <div className="text-center p-4  rounded-lg">
              <p className="text-2xl font-bold text-gray-600">
                {tickets.length}
              </p>
              <p className="text-sm text-slate-600">Total</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCreate = () => (
    <div>
      <Button
        variant="ghost"
        onClick={() => setActiveView("home")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2 hover:cursor-pointer" />
        Back to Home
      </Button>

      <Card className="border-2 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Ticket</CardTitle>
          <CardDescription>
            Fill out the form below to submit your support request
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief description of your issue"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low - General inquiry</option>
                <option value="medium">Medium - Issue affecting usage</option>
                <option value="high">High - Critical issue</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please provide as much detail as possible..."
                rows={6}
                className="resize-none"
              />
              <p className="text-xs text-slate-500">
                {formData.description.length}/20 characters minimum
              </p>
            </div>

            <Button
              onClick={handleSubmit}
              size="lg"
              disabled={
                formData.description.length < 20 ||
                !formData.name ||
                !formData.email ||
                !formData.subject
              }
              className="w-full bg-blue-600 dark:bg-white hover:cursor-pointer hover:bg-blue-700"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Ticket
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSuccess = () => (
    <div>
      <Button
        variant="ghost"
        onClick={() => setActiveView("home")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2 hover:cursor-pointer" />
        Back to Home
      </Button>

      <Card className="border-2 border-green-200 dark:text-white shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-12 w-12 text-green-300" />
            <div>
              <CardTitle className="text-2xl text-green-300">
                Ticket Created Successfully!
              </CardTitle>
              <CardDescription className="text-green-300">
                Your support request has been submitted
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className=" p-6 rounded-lg border-2 border-green-500">
            <p className="text-sm mb-2">Your Ticket ID:</p>
            <p className="text-3xl font-bold mb-4">
              {selectedTicket?.id}
            </p>
            <p className="text-sm ">
              Save this ID to track your ticket status. We'll also send updates
              to <strong>{selectedTicket?.email}</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className=" p-4 rounded-lg border-2">
              <p className="text-xs mb-1">Subject</p>
              <p className="font-semibold">
                {selectedTicket?.subject}
              </p>
            </div>
            <div className=" p-4 rounded-lg border-2">
              <p className="text-xs mb-1">Priority</p>
              <Badge className={getPriorityColor(selectedTicket?.priority)}>
                {selectedTicket?.priority.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => {
                setSelectedTicket(selectedTicket);
                setActiveView("ticket");
              }}
              className="flex-1 hover:cursor-pointer"
            >
              <Ticket className="h-4 w-4 mr-2" />
              View Ticket Details
            </Button>
            <Button
              onClick={() => setActiveView("create")}
              variant="outline"
              className="flex-1 hover:cursor-pointer"
            >
              Create Another Ticket
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSearch = () => (
    <div>
      <Button
        variant="ghost"
        onClick={() => setActiveView("home")}
        className="mb-6 hover:cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 mr-2 hover:cursor-pointer" />
        Back to Home
      </Button>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Track Your Ticket</CardTitle>
          <CardDescription>
            Enter your ticket ID to check the status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="search">Ticket ID</Label>
            <div className="flex gap-2">
              <Input
                id="search"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="TKT-XXXXXXXXX"
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={!searchId.trim()}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Enter the ticket ID you received when creating your support
              request
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );

  const renderMyTickets = () => (
    <div>
      <Button
        variant="ghost"
        onClick={() => setActiveView("home")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2 hover:cursor-pointer" />
        Back to Home
      </Button>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">All Tickets</CardTitle>
          <CardDescription>
            View and manage all your support tickets
          </CardDescription>
        </CardHeader>
        <CardContent>
          {tickets.length === 0 ? (
            <div className="text-center py-12">
              <Ticket className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No tickets found</p>
              <Button onClick={() => setActiveView("create")} className="mt-4">
                Create Your First Ticket
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => {
                    setSelectedTicket(ticket);
                    setActiveView("ticket");
                  }}
                  className="p-4 border-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {ticket.subject}
                      </p>
                      <p className="text-sm text-slate-500">{ticket.id}</p>
                    </div>
                    <Badge className={getStatusColor(ticket.status)}>
                      {ticket.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>
                      Priority:{" "}
                      <Badge
                        variant="outline"
                        className={getPriorityColor(ticket.priority)}
                      >
                        {ticket.priority}
                      </Badge>
                    </span>
                    <span>
                      Created: {new Date(ticket.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderTicket = () => (
    <div>
      <Button
        variant="ghost"
        onClick={() => setActiveView("mytickets")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2 hover:cursor-pointer " />
        Back to All Tickets
      </Button>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">
                    {selectedTicket?.subject}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Ticket ID: {selectedTicket?.id}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(selectedTicket?.status)}>
                  {selectedTicket?.status.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border">
                  <p className="text-sm text-slate-600 mb-2">
                    Original Request:
                  </p>
                  <p className="text-slate-900">
                    {selectedTicket?.description}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    {new Date(selectedTicket?.createdAt).toLocaleString()}
                  </p>
                </div>

                {selectedTicket?.status === "resolved" && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <p className="font-semibold text-green-900">
                        Response from Support Team
                      </p>
                    </div>
                    <p className="text-green-800">
                      Thank you for contacting us. Your issue has been resolved.
                      If you need further assistance, please don't hesitate to
                      create a new ticket.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Ticket Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">Status</p>
                <Badge className={getStatusColor(selectedTicket?.status)}>
                  {selectedTicket?.status.toUpperCase()}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Priority</p>
                <Badge className={getPriorityColor(selectedTicket?.priority)}>
                  {selectedTicket?.priority.toUpperCase()}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Created</p>
                <p className="text-sm font-medium">
                  {new Date(selectedTicket?.createdAt).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Last Updated</p>
                <p className="text-sm font-medium">
                  {new Date(selectedTicket?.updatedAt).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Contact</p>
                <p className="text-sm font-medium">{selectedTicket?.name}</p>
                <p className="text-xs text-slate-500">
                  {selectedTicket?.email}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-sm">Need More Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-600 mb-3">
                If this ticket doesn't resolve your issue, feel free to create a
                new one.
              </p>
              <Button
                onClick={() => setActiveView("create")}
                variant="outline"
                className="w-full"
                size="sm"
              >
                Create New Ticket
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {activeView === "home" && renderHome()}
        {activeView === "create" && renderCreate()}
        {activeView === "success" && renderSuccess()}
        {activeView === "search" && renderSearch()}
        {activeView === "mytickets" && renderMyTickets()}
        {activeView === "ticket" && renderTicket()}
      </div>
    </div>
  );
}
