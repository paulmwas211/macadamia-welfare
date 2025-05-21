"use client";

import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function SignInWithGoogle() {
  const router = useRouter();

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      alert("Google sign-in failed");
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.push("/dashboard");
      }
    });
  }, []);

  return <Button onClick={handleSignIn}>Sign in with Google</Button>;
}
