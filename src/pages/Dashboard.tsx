import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card } from "@/components/ui/card";
import { VoiceAgentCard } from "@/components/dashboard/VoiceAgentCard";
import { DocumentAnalyticsCard } from "@/components/dashboard/DocumentAnalyticsCard";
import { RAGInsightsCard } from "@/components/dashboard/RAGInsightsCard";
import { EmployeePerformanceCard } from "@/components/dashboard/EmployeePerformanceCard";
import { Users, FileCheck, AlertCircle, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="แดชบอร์ด"
        breadcrumbs={[
          { label: "หน้าหลัก", href: "/" },
          { label: "แดชบอร์ด" }
        ]}
      />

      <div className="p-8">
        {/* Stats Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="glass-card p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-200 hover:scale-105">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">ผู้ใช้ทั้งหมด</p>
                <h3 className="text-3xl font-bold text-foreground">5</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="space-y-1.5 h-[60px] overflow-y-auto pr-1 custom-scrollbar">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">UI Designer</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Frontend Dev</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Backend Dev</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Product Manager</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
          <StatsCard
            title="รอการอนุมัติ"
            value="10"
            icon={FileCheck}
            change="3 เร่งด่วน"
            changeType="neutral"
          />
          <StatsCard
            title="งานที่เกินกำหนด"
            value="7"
            icon={AlertCircle}
            change="-2 จากเมื่อวาน"
            changeType="positive"
          />
          <StatsCard
            title="การใช้เครดิต AI"
            value="73%"
            icon={Zap}
            change="ของโควต้าต่อเดือน"
            changeType="neutral"
          />
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - spans 3 columns */}
          <div className="lg:col-span-3 space-y-6">

            <DocumentAnalyticsCard />
          </div>

          {/* Center Column - spans 6 columns */}
          <div className="lg:col-span-6">
            <EmployeePerformanceCard />
          </div>

          {/* Right Column - spans 3 columns */}
          <div className="lg:col-span-3">
            <RAGInsightsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
