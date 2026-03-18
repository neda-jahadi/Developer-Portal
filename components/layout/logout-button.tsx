"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTransition } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = async () => {
    await fetch("/api/login", { method: "DELETE" });

    startTransition(() => {
      router.push("/login");
      router.refresh();
    });
  };

  return (
    <Button variant="outline" onClick={handleLogout} disabled={isPending}>
      {isPending ? "Signing out" : "Sign out"}
    </Button>
  );
};

export default LogoutButton;
