export type Role = "developer" | "admin";

export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: Role;
  status: "active" | "invited" | "disabled";
};