export type Role = "developer" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: "active" | "invited" | "disabled";
};