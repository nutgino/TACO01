import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const topQuestions = [
  { question: "เกณฑ์การอนุมัติคืออะไร?", count: 24, trending: true },
  { question: "วิธีการส่งรายงานค่าใช้จ่าย?", count: 18, trending: false },
  { question: "ข้อกำหนดรูปแบบเอกสาร", count: 15, trending: true },
  { question: "เวลาประมวลผลใบแจ้งหนี้", count: 12, trending: false },
  { question: "แนวทางการปฏิบัติตามภาษี", count: 9, trending: false },
];

export function RAGInsightsCard() {
  return (
    <Card className="glass-card p-6 rounded-2xl border border-border/50 h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">ข้อมูลเชิงลึก RAG Bot</h3>
          <p className="text-sm text-muted-foreground">คำถามยอดนิยมวันนี้</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="space-y-3">
        {topQuestions.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary">{index + 1}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-sm font-medium text-foreground line-clamp-1">
                  {item.question}
                </p>
                {item.trending && (
                  <Badge variant="outline" className="border-primary/20 text-primary text-xs flex-shrink-0">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Hot
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{item.count} ครั้ง</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
