import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
