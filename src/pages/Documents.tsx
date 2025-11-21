import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, AlertTriangle, CheckCircle, Upload, Eye, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const initialDocuments = [
  {
    id: 1,
    name: "Invoice_Q4_2024.pdf",
    status: "warning",
    uploadDate: "2024-01-15",
    issues: 2,
  },
  {
    id: 2,
    name: "Tax_Report_2024.pdf",
    status: "error",
    uploadDate: "2024-01-14",
    issues: 5,
  },
  {
    id: 3,
    name: "Contract_Vendor_A.pdf",
    status: "approved",
    uploadDate: "2024-01-13",
    issues: 0,
  },
  {
    id: 4,
    name: "Expense_Report_Jan.pdf",
    status: "warning",
    uploadDate: "2024-01-12",
    issues: 1,
  },
];

const issueDetails = [
  {
    type: "error",
    message: "ตรวจพบความไม่ตรงกันของภาษี",
    description: "จำนวนภาษีที่คำนวณได้ (18%) ไม่ตรงกับอัตราที่ระบุ (15%)",
    location: "หน้า 2, บรรทัด 47",
  },
  {
    type: "warning",
    message: "มีการใช้ภาษาที่ไม่เป็นทางการ",
    description: "เอกสารมีภาษาที่ไม่เป็นทางการซึ่งอาจไม่เป็นไปตามมาตรฐานการปฏิบัติตามกฎระเบียบ",
    location: "หน้า 3, ย่อหน้า 2",
  },
  {
    type: "error",
    message: "ไม่มีช่องลายเซ็น",
    description: "ไม่มีช่องลายเซ็นที่จำเป็นในเอกสาร",
    location: "หน้า 5",
  },
];

export default function Documents() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [selectedDoc, setSelectedDoc] = useState(initialDocuments[1]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("กรุณาอัปโหลดไฟล์ PDF เท่านั้น");
      return;
    }

    setIsUploading(true);
    try {
      const fileName = `${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from("documents")
        .upload(fileName, file);

      if (error) throw error;

      toast.success("อัปโหลดเอกสารสำเร็จ");

      // Simulate adding to the list
      const newDoc = {
        id: documents.length + 1,
        name: file.name,
        status: "approved", // Default status for new upload
        uploadDate: new Date().toISOString().split('T')[0],
        issues: 0,
      };

      setDocuments([newDoc, ...documents]);
      setSelectedDoc(newDoc);

    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(`การอัปโหลดล้มเหลว: ${error.message}`);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="การตรวจสอบเอกสาร"
        breadcrumbs={[
          { label: "หน้าหลัก", href: "/" },
          { label: "เอกสาร" }
        ]}
      />

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Document List - Left Panel */}
          <Card className="glass-card p-6 rounded-2xl border border-border/50 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">เอกสารที่อัปโหลด</h3>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".pdf"
                onChange={handleFileChange}
              />
              <Button
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90"
                onClick={handleUploadClick}
                disabled={isUploading}
              >
                {isUploading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4 mr-2" />
                )}
                {isUploading ? "กำลังอัปโหลด..." : "อัปโหลด"}
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md ${selectedDoc.id === doc.id
                    ? "border-primary bg-primary/5 cyber-glow"
                    : "border-border/50 bg-card/50 hover:border-primary/30"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm mb-1 truncate">{doc.name}</p>
                      <p className="text-xs text-muted-foreground mb-2">{doc.uploadDate}</p>
                      <Badge
                        variant="outline"
                        className={
                          doc.status === "approved"
                            ? "border-green-500/20 text-green-600"
                            : doc.status === "error"
                              ? "border-destructive/20 text-destructive"
                              : "border-primary/20 text-primary"
                        }
                      >
                        {doc.status === "approved" ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertTriangle className="w-3 h-3 mr-1" />
                        )}
                        {doc.issues > 0 ? `${doc.issues} ปัญหา` : "อนุมัติแล้ว"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          

          
          
        </div>
      </div>
    </div>
  );
}
