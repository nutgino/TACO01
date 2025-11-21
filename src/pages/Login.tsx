import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://taco-backend-pi.vercel.app/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'เข้าสู่ระบบไม่สำเร็จ');
            }

            console.log("Login successful:", data);

            // Store user data from response
            localStorage.setItem("user", JSON.stringify(data.user || data));

            toast.success("เข้าสู่ระบบสำเร็จ");
            navigate("/");
        } catch (error: any) {
            console.error("Login error:", error);
            toast.error(error.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
            </div>

            <Card className="w-full max-w-md glass-card p-8 border-border/50 cyber-glow">
                <div className="text-center mb-8">
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4">
                        <img src="/taco-logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">ยินดีต้อนรับ</h1>
                    <p className="text-muted-foreground">เข้าสู่ระบบเพื่อจัดการงานของคุณ</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                                name="email"
                                placeholder="อีเมล"
                                type="email"
                                required
                                className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 transition-all"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                                name="password"
                                placeholder="รหัสผ่าน"
                                type="password"
                                required
                                className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 transition-all"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        disabled={isLoading}
                    >
                        {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                        {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm">

                    <Link
                        to="/register"
                        className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors underline"
                    >
                        ลงทะเบียน
                    </Link>
                    <span className="text-muted-foreground">   เพื่อขอเข้าใช้ระบบ </span>

                </div>
            </Card>
        </div>
    );
}
