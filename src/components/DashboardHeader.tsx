import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface DashboardHeaderProps {
  title: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function DashboardHeader({ title, breadcrumbs = [] }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 glass-card border-b border-border/50 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Breadcrumbs & Title */}
        <div>
          {breadcrumbs.length > 0 && (
            <Breadcrumb className="mb-1">
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center">
                    <BreadcrumbItem>
                      {crumb.href ? (
                        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )}
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="ค้นหา..."
              className="pl-10 w-64 rounded-full bg-muted/30 border-border/50"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-muted/50">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          </Button>

          {/* User Avatar */}
          <Avatar className="w-10 h-10 border-2 border-primary/20">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="User" />
            <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
