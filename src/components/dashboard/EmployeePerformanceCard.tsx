import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface Employee {
    id: string;
    name: string;
    role: string;
    avatar: string;
    overallProgress: number;
    currentTask: string;
    taskProgress: number;
    status: "on-track" | "delayed" | "completed";
}

const employees: Employee[] = [
    {
        id: "1",
        name: "Sarah Wilson",
        role: "UI Designer",
        avatar: "SW",
        overallProgress: 92,
        currentTask: "Dashboard Redesign",
        taskProgress: 85,
        status: "on-track"
    },
    {
        id: "2",
        name: "Michael Chen",
        role: "Frontend Dev",
        avatar: "MC",
        overallProgress: 78,
        currentTask: "API Integration",
        taskProgress: 45,
        status: "delayed"
    },
    {
        id: "3",
        name: "Emma Davis",
        role: "Product Manager",
        avatar: "ED",
        overallProgress: 95,
        currentTask: "Q4 Roadmap",
        taskProgress: 90,
        status: "completed"
    },
    {
        id: "4",
        name: "James Rodriguez",
        role: "Backend Dev",
        avatar: "JR",
        overallProgress: 64,
        currentTask: "Database Migration",
        taskProgress: 30,
        status: "on-track"
    }
];

export function EmployeePerformanceCard() {
    return (
        <Card className="glass-card p-6 rounded-2xl border border-border/50 h-full">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-foreground">ประสิทธิภาพพนักงาน</h3>
                    <p className="text-sm text-muted-foreground">ติดตามงานและความคืบหน้าแบบเรียลไทม์</p>
                </div>
                <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                    {employees.length} สมาชิกที่ใช้งาน
                </Badge>
            </div>

            <div className="space-y-6 h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {employees.map((employee) => (
                    <div key={employee.id} className="group">
                        <div className="flex items-start gap-4 mb-3">
                            <Avatar className="h-10 w-10 border-2 border-background">
                                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                    {employee.avatar}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <div>
                                        <h4 className="font-medium text-sm truncate">{employee.name}</h4>
                                        <p className="text-xs text-muted-foreground">{employee.role}</p>
                                    </div>
                                    {employee.status === "on-track" && <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-0"><CheckCircle2 className="w-3 h-3 mr-1" /> ตามกำหนด</Badge>}
                                    {employee.status === "delayed" && <Badge variant="secondary" className="bg-red-500/10 text-red-600 hover:bg-red-500/20 border-0"><AlertCircle className="w-3 h-3 mr-1" /> ล่าช้า</Badge>}
                                    {employee.status === "completed" && <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-0"><Clock className="w-3 h-3 mr-1" /> เสร็จสิ้น</Badge>}
                                </div>
                            </div>
                        </div>

                        <div className="pl-14 space-y-4">
                            {/* Overall Progress */}
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">ความสำเร็จโดยรวม</span>
                                    <span className="font-medium">{employee.overallProgress}%</span>
                                </div>
                                <Progress value={employee.overallProgress} className="h-1.5 bg-muted/50" />
                            </div>

                            {/* Current Task */}
                            <div className="p-3 rounded-xl bg-muted/30 border border-border/50 space-y-2">
                                <div className="flex justify-between items-center text-xs mb-1">
                                    <span className="font-medium text-foreground">งานปัจจุบัน: {employee.currentTask}</span>
                                    <span className="text-muted-foreground">{employee.taskProgress}%</span>
                                </div>
                                <Progress
                                    value={employee.taskProgress}
                                    className="h-1.5 bg-background"
                                // Custom indicator color based on status could be added here if Progress component supports it or via CSS variables
                                />
                            </div>
                        </div>

                        {/* Divider except for last item */}
                        {employee.id !== employees[employees.length - 1].id && (
                            <div className="h-px bg-border/40 mt-6" />
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}
