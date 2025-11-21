import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Bell,
  Shield,
  Zap,
  Save,
  Upload
} from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="ตั้งค่า"
        breadcrumbs={[
          { label: "หน้าหลัก", href: "/" },
          { label: "ตั้งค่า" }
        ]}
      />

      <div className="p-8 max-w-5xl">
        {/* Profile Settings */}
        <Card className="glass-card p-6 rounded-2xl border border-border/50 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">การตั้งค่าโปรไฟล์</h2>
          </div>

          <div className="flex items-start gap-6 mb-6">
            <Avatar className="w-24 h-24 border-2 border-primary/20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="User" />
              <AvatarFallback className="bg-primary/10 text-primary text-2xl">AD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Admin User</h3>
              <p className="text-sm text-muted-foreground mb-3">admin@prodoc-ai.com</p>
              <Button size="sm" variant="outline" className="rounded-full">
                <Upload className="w-4 h-4 mr-2" />
                เปลี่ยนรูปประจำตัว
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">ชื่อจริง</Label>
              <Input id="firstName" placeholder="Admin" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">นามสกุล</Label>
              <Input id="lastName" placeholder="User" className="rounded-xl" />
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <Label htmlFor="email">อีเมล</Label>
            <Input id="email" type="email" placeholder="admin@prodoc-ai.com" className="rounded-xl" />
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="role">บทบาท</Label>
            <Input id="role" placeholder="System Administrator" className="rounded-xl" disabled />
          </div>

          <Button className="rounded-full bg-primary hover:bg-primary/90">
            <Save className="w-4 h-4 mr-2" />
            บันทึกการเปลี่ยนแปลง
          </Button>
        </Card>

        {/* Notification Settings */}
        <Card className="glass-card p-6 rounded-2xl border border-border/50 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">การตั้งค่าการแจ้งเตือน</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">การแจ้งเตือนทางอีเมล</p>
                <p className="text-sm text-muted-foreground">รับอีเมลอัปเดตสำหรับเหตุการณ์สำคัญ</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">การอนุมัติเอกสาร</p>
                <p className="text-sm text-muted-foreground">รับการแจ้งเตือนเมื่อเอกสารต้องการการอนุมัติ</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">การอัปเดตงาน</p>
                <p className="text-sm text-muted-foreground">รับการอัปเดตเมื่อมีการมอบหมายงานหรือเสร็จสิ้น</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">ข้อมูลเชิงลึก AI</p>
                <p className="text-sm text-muted-foreground">รับรายงานประสิทธิภาพและข้อมูลเชิงลึก AI รายสัปดาห์</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="glass-card p-6 rounded-2xl border border-border/50 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">ความปลอดภัย</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">รหัสผ่านปัจจุบัน</Label>
              <Input id="currentPassword" type="password" className="rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">รหัสผ่านใหม่</Label>
              <Input id="newPassword" type="password" className="rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">ยืนยันรหัสผ่านใหม่</Label>
              <Input id="confirmPassword" type="password" className="rounded-xl" />
            </div>
          </div>

          <Button className="rounded-full bg-primary hover:bg-primary/90">
            อัปเดตรหัสผ่าน
          </Button>

          <Separator className="my-6" />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">การยืนยันตัวตนสองปัจจัย</p>
              <p className="text-sm text-muted-foreground">เพิ่มความปลอดภัยอีกชั้นให้กับบัญชีของคุณ</p>
            </div>
            <Button variant="outline" className="rounded-full">
              เปิดใช้งาน 2FA
            </Button>
          </div>
        </Card>

        {/* AI Configuration */}
        <Card className="glass-card p-6 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">การกำหนดค่า AI</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">การประมวลผลเอกสารอัตโนมัติ</p>
                <p className="text-sm text-muted-foreground">ประมวลผลเอกสารที่อัปโหลดโดยอัตโนมัติด้วย AI</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">ตัวแทนเสียงตอบรับอัตโนมัติ</p>
                <p className="text-sm text-muted-foreground">อนุญาตให้ AI ตอบคำถามทั่วไปโดยอัตโนมัติ</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">คำแนะนำอัจฉริยะ</p>
                <p className="text-sm text-muted-foreground">เปิดใช้งานคำแนะนำเวิร์กโฟลว์ที่ขับเคลื่อนด้วย AI</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />

            <div className="space-y-2">
              <Label htmlFor="aiThreshold">เกณฑ์ความมั่นใจ AI (%)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="aiThreshold"
                  type="number"
                  placeholder="85"
                  className="rounded-xl max-w-xs"
                  min="0"
                  max="100"
                />
                <span className="text-sm text-muted-foreground">
                  เอกสารที่ต่ำกว่าเกณฑ์นี้ต้องได้รับการตรวจสอบด้วยตนเอง
                </span>
              </div>
            </div>
          </div>

          <Button className="rounded-full bg-primary hover:bg-primary/90 mt-6">
            <Save className="w-4 h-4 mr-2" />
            บันทึกการตั้งค่า AI
          </Button>
        </Card>
      </div>
    </div>
  );
}
