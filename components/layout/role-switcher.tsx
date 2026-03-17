"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RoleSwitcher({
  defaultRole,
}: {
  defaultRole: "developer" | "admin";
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  async function onValueChange(value: string) {
    await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: value }),
    });

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <Select defaultValue={defaultRole} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="developer">Developer</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  );
}
