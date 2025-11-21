import { Card } from "@/components/ui/card";
import { FileCheck } from "lucide-react";

export function DocumentAnalyticsCard() {
  const total = 150;
  const approved = 112;
  const rejected = 38;
  const approvedPercent = (approved / total) * 100;
  const rejectedPercent = (rejected / total) * 100;

  return (
    <Card className="glass-card p-6 rounded-2xl border border-border/50 h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">การวิเคราะห์เอกสาร</h3>
          <p className="text-sm text-muted-foreground">30 วันที่ผ่านมา</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <FileCheck className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Doughnut Chart Simulation */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="12"
            />
            {/* Approved segment */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="12"
              strokeDasharray={`${approvedPercent * 2.51} 251.2`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
            {/* Rejected segment */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="12"
              strokeDasharray={`${rejectedPercent * 2.51} 251.2`}
              strokeDashoffset={`-${approvedPercent * 2.51}`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{total}</span>
            <span className="text-sm text-muted-foreground">ทั้งหมด</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">อนุมัติแล้ว</span>
          </div>
          <span className="text-sm font-medium">{approved} ({approvedPercent.toFixed(0)}%)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-sm text-muted-foreground">ปฏิเสธ</span>
          </div>
          <span className="text-sm font-medium">{rejected} ({rejectedPercent.toFixed(0)}%)</span>
        </div>
      </div>
    </Card>
  );
}
