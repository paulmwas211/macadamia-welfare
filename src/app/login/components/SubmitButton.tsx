// 📁 src/components/SubmitButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus(); // only works in server actions or form

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : children}
    </Button>
  );
}
