"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/utils/supabase/client";

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
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.push("/dashboard");
      }
    });

    return () => subscription.unsubscribe(); // cleanup
  }, [router]);

  return (
    <Button variant="outline" onClick={handleSignIn} className="w-full">
      <FcGoogle className="mr-2 h-5 w-5" />
      Sign in with Google
    </Button>
  );
}