import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  Award,
  Target,
  Star,
  UserPlus
} from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Document Analyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    department: "Operations",
    performance: 94,
    tasksCompleted: 127,
    aiAccuracy: 98,
    rating: 4.8,
    status: "excellent",
  },
  {
    id: 2,
    name: "Mike Johnson",
    role: "Procurement Specialist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    department: "Procurement",
    performance: 88,
    tasksCompleted: 103,
    aiAccuracy: 95,
    rating: 4.5,
    status: "good",
  },
  {
    id: 3,
    name: "Emily Park",
    role: "AI Training Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    department: "Technology",
    performance: 96,
    tasksCompleted: 145,
    aiAccuracy: 99,
    rating: 4.9,
    status: "excellent",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Finance Analyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    department: "Finance",
    performance: 82,
    tasksCompleted: 89,
    aiAccuracy: 92,
    rating: 4.2,
    status: "good",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Security Compliance Officer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    department: "Security",
    performance: 91,
    tasksCompleted: 112,
    aiAccuracy: 97,
    rating: 4.7,
    status: "excellent",
  },
];

const performanceMetrics = [
  { label: "ประสิทธิภาพเฉลี่ย", value: "90%", change: "+5%", icon: TrendingUp },
  { label: "ผู้ที่มีผลงานยอดเยี่ยม", value: "3", change: "จาก 5", icon: Award },
  { label: "งานที่เสร็จสมบูรณ์", value: "576", change: "+12%", icon: Target },
  { label: "คะแนนเฉลี่ย", value: "4.6", change: "+0.3", icon: Star },
];

export default function Employees() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-primary/10 text-primary border-primary/20";
      case "good":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "average":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "text-primary";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="การประเมินพนักงาน"
        breadcrumbs={[
          { label: "หน้าหลัก", href: "/" },
          { label: "พนักงาน" }
        ]}
      />

      <div className="p-8">
        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="glass-card p-6 rounded-2xl border border-border/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <h3 className="text-3xl font-bold text-foreground">{metric.value}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-sm text-primary font-medium">{metric.change}</p>
              </Card>
            );
          })}
        </div>

        {/* Employee List */}
        <Card className="glass-card p-6 rounded-2xl border border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">ประสิทธิภาพทีม</h2>
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              <UserPlus className="w-4 h-4 mr-2" />
              เพิ่มพนักงาน
            </Button>
          </div>

          <div className="space-y-4">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-6">
                  {/* Avatar & Info */}
                  <Avatar className="w-16 h-16 border-2 border-primary/20">
                    <AvatarImage src={employee.avatar} alt={employee.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{employee.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{employee.role}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {employee.department}
                          </Badge>
                          <Badge className={getStatusColor(employee.status)}>
                            {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold">{employee.rating}</span>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-6 mt-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">ประสิทธิภาพ</span>
                          <span className={`text-sm font-semibold ${getPerformanceColor(employee.performance)}`}>
                            {employee.performance}%
                          </span>
                        </div>
                        <Progress value={employee.performance} className="h-2" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">ความแม่นยำ AI</span>
                          <span className={`text-sm font-semibold ${getPerformanceColor(employee.aiAccuracy)}`}>
                            {employee.aiAccuracy}%
                          </span>
                        </div>
                        <Progress value={employee.aiAccuracy} className="h-2" />
                      </div>

                      <div className="flex items-center justify-center border-l border-border/50 pl-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{employee.tasksCompleted}</p>
                          <p className="text-xs text-muted-foreground">งานที่เสร็จสมบูรณ์</p>
                        </div>
                      </div>
                    </div>
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
