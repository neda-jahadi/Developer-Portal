import { NextResponse } from 'next/server';
import { createSession, deleteSession } from '@/lib/session';
import { findUserByEmail } from '@/lib/mock-data';

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body?.email ?? '').trim();
  const password = String(body?.password ?? '').trim();

  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return NextResponse.json({ ok: false, message: 'Invalid email or password' }, { status: 401 });
  }

  await createSession(user.id, user.role);

  return NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}

export async function DELETE() {
  await deleteSession();
  return NextResponse.json({ ok: true });
}
