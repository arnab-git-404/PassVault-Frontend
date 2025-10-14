import React, { useState, useEffect } from "react";
import { useLoadingBar } from "react-top-loading-bar";
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
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ModeToggle from "@/components/mode-toggle";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  Filter,
  Mail,
  MessageSquare,
  Search,
  Send,
  Ticket,
  User,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  RefreshCw,
} from "lucide-react";

export default function AdminSupport() {
  
  // State management
  const [tickets, setTickets] = useState([
    // Sample data - replace with API call
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-A1B2C3-000001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-D4E5F6-000002",
      name: "Alice Brown",
      email: "alice.brown@example.com",
      subject: "Payment not going through",
      priority: "medium",
      status: "open",
      description: "Tried multiple cards, but payment keeps failing.",
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "Tried multiple cards, but payment keeps failing.",
          timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-G7H8I9-000003",
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      subject: "Account locked after multiple login attempts",
      priority: "high",
      status: "open",
      description: "My account got locked, and I cannot access it.",
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "My account got locked, and I cannot access it.",
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-J1K2L3-000004",
      name: "Sophia Miller",
      email: "sophia.miller@example.com",
      subject: "App crashes on startup",
      priority: "high",
      status: "open",
      description: "The mobile app closes immediately after I open it.",
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "The mobile app closes immediately after I open it.",
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-M4N5O6-000005",
      name: "David Lee",
      email: "david.lee@example.com",
      subject: "Unable to download invoice",
      priority: "low",
      status: "open",
      description: "The invoice download link is broken.",
      createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "The invoice download link is broken.",
          timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-P7Q8R9-000006",
      name: "Emma Davis",
      email: "emma.davis@example.com",
      subject: "Subscription renewal failed",
      priority: "medium",
      status: "open",
      description: "My subscription renewal failed even with a valid card.",
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "My subscription renewal failed even with a valid card.",
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-S1T2U3-000007",
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
      subject: "Unable to verify email",
      priority: "low",
      status: "open",
      description: "I’m not receiving the verification link in my inbox.",
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "I’m not receiving the verification link in my inbox.",
          timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-V4W5X6-000008",
      name: "Ethan Taylor",
      email: "ethan.taylor@example.com",
      subject: "App notifications not working",
      priority: "medium",
      status: "open",
      description: "Push notifications are not being received on my device.",
      createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "Push notifications are not being received on my device.",
          timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-Y7Z8A9-000009",
      name: "Ava Johnson",
      email: "ava.johnson@example.com",
      subject: "Profile picture not updating",
      priority: "low",
      status: "open",
      description: "I uploaded a new photo, but it still shows the old one.",
      createdAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "I uploaded a new photo, but it still shows the old one.",
          timestamp: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251013-B1C2D3-000010",
      name: "Liam Martinez",
      email: "liam.martinez@example.com",
      subject: "Two-factor authentication not working",
      priority: "high",
      status: "open",
      description: "The OTP code is not being accepted during login.",
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "The OTP code is not being accepted during login.",
          timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },

    {
      id: "TKT-20251013-A3B7XY-234567",
      name: "John Doe",
      email: "john@example.com",
      subject: "Unable to reset password",
      priority: "high",
      status: "open",
      description:
        "I've been trying to reset my password but not receiving the email.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content:
            "I've been trying to reset my password but not receiving the email.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: null,
    },
    {
      id: "TKT-20251012-X9K2LP-123456",
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Feature request: Dark mode",
      priority: "low",
      status: "in-progress",
      description: "Would love to see a dark mode option in the app.",
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      messages: [
        {
          type: "user",
          content: "Would love to see a dark mode option in the app.",
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          type: "admin",
          content:
            "Thank you for your suggestion! We're currently working on this feature.",
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        },
      ],
      assignedTo: "Admin",
    },
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //Loading bar
  const { start, complete } = useLoadingBar({ color: "blue", height: 3 });

  // Statistics
  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in-progress").length,
    resolved: tickets.filter((t) => t.status === "resolved").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  // Filter tickets
  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus =
      filterStatus === "all" || ticket.status === filterStatus;
    const matchesPriority =
      filterPriority === "all" || ticket.priority === filterPriority;
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesPriority && matchesSearch;
  });

  // Pagination logic after filteredTickets
  const totalPages = Math.ceil(
    filteredTickets.filter(
      (ticket) => activeTab === "all" || ticket.status === activeTab
    ).length / rowsPerPage
  );

  const paginatedTickets = filteredTickets
    .filter((ticket) => activeTab === "all" || ticket.status === activeTab)
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filterStatus, filterPriority, searchQuery, activeTab, rowsPerPage]);

  // Status color helper
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

  // Priority color helper
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

  // Handle ticket view
  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsDialogOpen(true);
  };

  // Handle status update
  const handleStatusUpdate = (ticketId, newStatus) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              status: newStatus,
              updatedAt: new Date().toISOString(),
            }
          : ticket
      )
    );
    if (selectedTicket?.id === ticketId) {
      setSelectedTicket((prev) => ({ ...prev, status: newStatus }));
    }
  };

  // Handle priority update
  const handlePriorityUpdate = (ticketId, newPriority) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              priority: newPriority,
              updatedAt: new Date().toISOString(),
            }
          : ticket
      )
    );
    if (selectedTicket?.id === ticketId) {
      setSelectedTicket((prev) => ({ ...prev, priority: newPriority }));
    }
  };

  // Handle reply
  const handleReply = () => {
    if (!replyMessage.trim() || !selectedTicket) return;

    const newMessage = {
      type: "admin",
      content: replyMessage,
      timestamp: new Date().toISOString(),
    };

    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === selectedTicket.id
          ? {
              ...ticket,
              messages: [...ticket.messages, newMessage],
              updatedAt: new Date().toISOString(),
            }
          : ticket
      )
    );

    setSelectedTicket((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    setReplyMessage("");
  };

  // Handle delete
  const handleDelete = (ticketId) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
      if (selectedTicket?.id === ticketId) {
        setIsDialogOpen(false);
        setSelectedTicket(null);
      }
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    
    start();
    // Simulate a refresh operation with a promise
    const refreshPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        setIsRefreshing(false);
        complete();
      }, 2000);
    });

    toast.promise(refreshPromise, {
      loading: "Refreshing...",
      success: "Refreshed successfully!",
      error: "Failed to refresh",
    });

   
  };

  return (
    <div className="min-h-screen  p-4 md:p-8 dark:text-white ">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
              Admin Support Panel
            </h1>
            <p className="">Manage and respond to customer support tickets</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleRefresh}
              className="hover:cursor-pointer"
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 transition-transform duration-500 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
              />
              Refresh
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card
            className={`cursor-pointer transition-all ${
              activeTab === "all" ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveTab("all")}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium dark:text-white">
                Total Tickets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold dark:text-white">
                  {stats.total}
                </p>
                <Ticket className="h-8 w-8 text-slate-400" />
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all ${
              activeTab === "open" ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveTab("open")}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-600">
                Open
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-blue-600">{stats.open}</p>
                <AlertCircle className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all ${
              activeTab === "in-progress" ? "ring-2 ring-yellow-500" : ""
            }`}
            onClick={() => setActiveTab("in-progress")}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-600">
                In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-yellow-600">
                  {stats.inProgress}
                </p>
                <Clock className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all ${
              activeTab === "resolved" ? "ring-2 ring-green-500" : ""
            }`}
            onClick={() => setActiveTab("resolved")}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-600">
                Resolved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-green-600">
                  {stats.resolved}
                </p>
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all ${
              activeTab === "closed" ? "ring-2 ring-gray-500" : ""
            }`}
            onClick={() => setActiveTab("closed")}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Closed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-gray-600">
                  {stats.closed}
                </p>
                <XCircle className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>Ticket Management</CardTitle>
            <CardDescription>Filter and search support tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search by ID, subject, name, or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tickets Table */}

        <Card>
          <CardHeader>
            <CardTitle>
              {activeTab === "all"
                ? "All Tickets"
                : `${
                    activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
                  } Tickets`}
            </CardTitle>
            <CardDescription>
              {
                filteredTickets.filter(
                  (ticket) => activeTab === "all" || ticket.status === activeTab
                ).length
              }{" "}
              ticket(s) found
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredTickets.length === 0 ? (
              <div className="text-center py-12">
                <Ticket className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No tickets found</p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedTickets.map((ticket) => (
                        <TableRow
                          key={ticket.id}
                          className="cursor-pointer"
                          onClick={() => handleViewTicket(ticket)}
                        >
                          <TableCell className="font-mono text-xs">
                            {ticket.id}
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium text-sm">
                                {ticket.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {ticket.email}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {ticket.subject}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={getPriorityColor(ticket.priority)}
                            >
                              {ticket.priority.toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(ticket.status)}>
                              {ticket.status.toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-slate-600">
                            {formatDate(ticket.createdAt)}
                          </TableCell>
                          <TableCell className="text-sm text-slate-600">
                            {formatDate(ticket.updatedAt)}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewTicket(ticket);
                                }}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(ticket.id);
                                }}
                                className="cursor-pointer"
                              >
                                <Trash2 className="h-4 w-4 text-red-500 " />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Label className="text-sm ">Rows per page:</Label>
                    <Select
                      value={rowsPerPage.toString()}
                      onValueChange={(value) => setRowsPerPage(Number(value))}
                    >
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                        <SelectItem value="40">40</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-sm ">
                      Page {currentPage} of {totalPages}
                    </p>
                    <div className="flex gap-2 ">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="hover:cursor-pointer"
                      >
                        First
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(1, prev - 1))
                        }
                        disabled={currentPage === 1}
                        className="hover:cursor-pointer"
                      >
                        Previous
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:cursor-pointer"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(totalPages, prev + 1)
                          )
                        }
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:cursor-pointer"
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                      >
                        Last
                      </Button>
                    </div>
                  </div>

                  <div className="text-sm ">
                    Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                    {Math.min(
                      currentPage * rowsPerPage,
                      filteredTickets.filter(
                        (ticket) =>
                          activeTab === "all" || ticket.status === activeTab
                      ).length
                    )}{" "}
                    of{" "}
                    {
                      filteredTickets.filter(
                        (ticket) =>
                          activeTab === "all" || ticket.status === activeTab
                      ).length
                    }{" "}
                    entries
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Ticket Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">Ticket Details</DialogTitle>
              <DialogDescription>
                View and manage ticket #{selectedTicket?.id}
              </DialogDescription>
            </DialogHeader>

            {selectedTicket && (
              <div className="space-y-6">
                {/* Ticket Info Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-slate-500">
                        Customer Name
                      </Label>
                      <p className="font-medium">{selectedTicket.name}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">Email</Label>
                      <p className="font-medium">{selectedTicket.email}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">Subject</Label>
                      <p className="font-medium">{selectedTicket.subject}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-slate-500 mb-2 block">
                        Status
                      </Label>
                      <Select
                        value={selectedTicket.status}
                        onValueChange={(value) =>
                          handleStatusUpdate(selectedTicket.id, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="in-progress">
                            In Progress
                          </SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500 mb-2 block">
                        Priority
                      </Label>
                      <Select
                        value={selectedTicket.priority}
                        onValueChange={(value) =>
                          handlePriorityUpdate(selectedTicket.id, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">
                        Created At
                      </Label>
                      <p className="text-sm">
                        {new Date(selectedTicket.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages Thread */}
                <div className="border-t pt-6">
                  <Label className="text-sm font-semibold mb-4 block">
                    Conversation History
                  </Label>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {selectedTicket.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${
                          message.type === "user"
                            ? "bg-slate-50 border border-slate-200"
                            : "bg-blue-50 border border-blue-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {message.type === "user" ? (
                            <User className="h-5 w-5 text-slate-600" />
                          ) : (
                            <MessageSquare className="h-5 w-5 text-blue-600" />
                          )}
                          <span className="text-sm font-medium dark:text-black">
                            {message.type === "user"
                              ? selectedTicket.name
                              : "Support Team"}
                          </span>
                          <span className="text-xs text-slate-500 ml-auto">
                            {formatDate(message.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700">
                          {message.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reply Section */}
                <div className="border-t pt-6">
                  <Label htmlFor="reply" className="mb-2 block">
                    Reply to Customer
                  </Label>
                  <Textarea
                    id="reply"
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Type your response here..."
                    rows={4}
                    className="resize-none mb-3"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-500">
                      Your reply will be sent to {selectedTicket.email}
                    </p>
                    <Button
                      onClick={handleReply}
                      disabled={!replyMessage.trim()}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Reply
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
