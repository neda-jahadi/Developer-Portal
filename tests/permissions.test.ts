import { canManageKeys, canViewAdmin } from "@/lib/permissions";
import { describe, expect, it } from "vitest";

describe("permissions", () => {
  it("allows admin to view admin area", () => {
    expect(canViewAdmin("admin")).toBe(true);
  });

  it("prevents developer from viewing admin area", () => {
    expect(canViewAdmin("developer")).toBe(false);
  });

  it("allows developer to manage keys", () => {
    expect(canManageKeys("developer")).toBe(true);
  });
});