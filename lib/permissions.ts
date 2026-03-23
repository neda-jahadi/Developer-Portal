import { Role } from '@/app/[locale]/types/user';

export function canViewAdmin(role: Role) {
  return role === 'admin';
}

export function canManageKeys(role: Role) {
  return role === 'admin' || role === 'developer';
}

export function canViewUsage(role: Role) {
  return role === 'admin' || role === 'developer';
}
