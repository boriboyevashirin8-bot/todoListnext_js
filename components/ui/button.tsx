import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-black text-white rounded-xl active:scale-95 transition disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
