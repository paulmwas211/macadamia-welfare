// 📁 src/components/FormMessage.tsx
"use client";

import { cn } from "@/lib/utils"; // optional utility for combining classes

interface FormMessageProps {
  type?: "error" | "success";
  message?: string;
}

export default function FormMessage({ type = "error", message }: FormMessageProps) {
  if (!message) return null;

  return (
    <p
      className={cn(
        "text-sm mt-1",
        type === "error" ? "text-red-500" : "text-green-600"
      )}
    >
      {message}
    </p>
  );
}
