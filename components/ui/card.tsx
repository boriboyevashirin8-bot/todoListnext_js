import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("bg-white p-4 rounded-2xl shadow", className)}>{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
