import { Card } from "@/components/ui/card";
import { Phone, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function VoiceAgentCard() {
  return (
    <Card className="glass-card p-6 rounded-2xl border border-border/50 h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">ตัวแทนเสียง AI</h3>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            กำลังสนทนา
          </Badge>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Phone className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Waveform Visualizer */}
      <div className="mb-6">
        <div className="flex items-end justify-center gap-1 h-24 bg-muted/30 rounded-xl p-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full"
              style={{
                animation: `waveform ${0.8 + Math.random() * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Call Info */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">ผู้โทรปัจจุบัน</span>
          <span className="font-medium">John Supplier</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">ระยะเวลา</span>
          <span className="font-medium">02:34</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">สถานะ</span>
          <span className="font-medium text-primary">กำลังประมวลผลคำขอ</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 rounded-full">
          <Pause className="w-4 h-4 mr-2" />
          หยุดชั่วคราว
        </Button>
        <Button
          size="sm"
          className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          วางสาย
        </Button>
      </div>
    </Card>
  );
}
