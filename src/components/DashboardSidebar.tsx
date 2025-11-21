import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  FileCheck,
  ListTodo,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "แดชบอร์ด", icon: LayoutDashboard, path: "/" },
  { title: "ตรวจสอบเอกสาร", icon: FileCheck, path: "/documents" },
  { title: "จัดการงาน", icon: ListTodo, path: "/tasks" },
  { title: "ประเมินพนักงาน", icon: Users, path: "/employees" },
  { title: "ตั้งค่า", icon: Settings, path: "/settings" },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen sticky top-0 glass-card border-r border-border/50 transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">AI</span>
              </div>
              <span className="font-bold text-lg">ProDoc AI</span>
            </div>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mx-auto">
              <span className="text-sm font-bold text-primary-foreground">AI</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
              "hover:bg-muted/50 text-muted-foreground hover:text-foreground",
              collapsed && "justify-center px-0"
            )}
            activeClassName="bg-primary/10 text-primary font-medium cyber-glow"
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Toggle Button */}
      <div className="p-4 border-t border-border/50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full hover:bg-muted/50"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
