import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const role = body?.role === "admin" ? "admin" : "developer";
  const store = await cookies();
  store.set("portal-role", role, { path: "/" });
  return NextResponse.json({ ok: true });
}