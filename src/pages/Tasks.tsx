import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, CheckCircle2, AlertCircle, Plus } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Review Q4 Financial Reports",
    description: "Complete verification of all Q4 documents and submit for approval",
    status: "pending",
    priority: "high",
    assignee: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    dueDate: "2024-01-20",
    category: "Finance",
  },
  {
    id: 2,
    title: "Update Vendor Contracts",
    description: "Renew contracts with approved vendors for 2024",
    status: "in-progress",
    priority: "medium",
    assignee: {
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    dueDate: "2024-01-25",
    category: "Legal",
  },
  {
    id: 3,
    title: "AI Model Training Update",
    description: "Upload new training data for document classification model",
    status: "completed",
    priority: "low",
    assignee: {
      name: "Emily Park",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    dueDate: "2024-01-15",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Process Invoice Batch #247",
    description: "Verify and approve 45 pending invoices from suppliers",
    status: "pending",
    priority: "high",
    assignee: {
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
    dueDate: "2024-01-18",
    category: "Finance",
  },
  {
    id: 5,
    title: "Security Audit - Document Access",
    description: "Conduct quarterly security review of document permissions",
    status: "in-progress",
    priority: "high",
    assignee: {
      name: "Lisa Wang",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    },
    dueDate: "2024-01-22",
    category: "Security",
  },
  {
    id: 6,
    title: "Generate Monthly Analytics Report",
    description: "Compile AI usage statistics and document processing metrics",
    status: "pending",
    priority: "medium",
    assignee: {
      name: "Alex Turner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    },
    dueDate: "2024-01-30",
    category: "Analytics",
  },
];

const stats = [
  { label: "งานทั้งหมด", value: tasks.length, color: "text-foreground" },
  { label: "รอดำเนินการ", value: tasks.filter(t => t.status === "pending").length, color: "text-primary" },
  { label: "กำลังดำเนินการ", value: tasks.filter(t => t.status === "in-progress").length, color: "text-blue-600" },
  { label: "เสร็จสมบูรณ์", value: tasks.filter(t => t.status === "completed").length, color: "text-green-600" },
];

export default function Tasks() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 border-green-200">เสร็จสมบูรณ์</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">กำลังดำเนินการ</Badge>;
      case "pending":
        return <Badge className="bg-primary/10 text-primary border-primary/20">รอดำเนินการ</Badge>;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="outline" className="border-destructive/50 text-destructive">สูง</Badge>;
      case "medium":
        return <Badge variant="outline" className="border-primary/50 text-primary">กลาง</Badge>;
      case "low":
        return <Badge variant="outline" className="border-muted-foreground/50 text-muted-foreground">ต่ำ</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="จัดการงาน"
        breadcrumbs={[
          { label: "หน้าหลัก", href: "/" },
          { label: "งาน" }
        ]}
      />

      <div className="p-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card p-6 rounded-2xl border border-border/50">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
            </Card>
          ))}
        </div>

        {/* Task List */}
        <Card className="glass-card p-6 rounded-2xl border border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">งานทั้งหมด</h2>
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              งานใหม่
            </Button>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{task.title}</h3>
                      {getStatusBadge(task.status)}
                      {getPriorityBadge(task.priority)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{task.description}</p>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                          <AvatarFallback>{task.assignee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{task.assignee.name}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>ครบกำหนด {task.dueDate}</span>
                      </div>

                      <Badge variant="outline" className="text-xs">
                        {task.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    {task.status !== "completed" ? (
                      <Button size="sm" variant="outline" className="rounded-full">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        ทำให้เสร็จ
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" className="text-green-600 cursor-default">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        เสร็จแล้ว
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
