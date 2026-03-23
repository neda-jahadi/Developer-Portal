import { Role } from '@/app/[locale]/types/user';
import { cookies } from 'next/headers';

const ROLE_COOKIE = 'portal-role';

export async function getCurrentRole(): Promise<Role> {
  const store = await cookies();
  const role = store.get(ROLE_COOKIE)?.value;
  return role === 'admin' ? 'admin' : 'developer';
}
