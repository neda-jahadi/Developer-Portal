import { Activity, ApiKey, Stat } from '@/app/types/dashboard';
import { User } from '@/app/types/user';

export const currentUsers: User[] = [
  {
    id: '1',
    email: 'admin@test.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    status: 'active',
  },
  {
    id: '2',
    email: 'dev@test.com',
    password: 'dev123',
    name: 'Developer User',
    role: 'developer',
    status: 'active',
  },
];

export const stats: Stat[] = [
  { id: '1', title: 'API Requests', value: '1.2M', trend: '+12%' },
  { id: '2', title: 'Active Keys', value: '48', trend: '+4' },
  { id: '3', title: 'Error Rate', value: '0.12%', trend: '-0.03%' },
];

export const activities: Activity[] = [
  {
    id: '1',
    event: 'Created API key',
    actor: 'Neda Jahadi',
    timestamp: '2026-03-16 08:20',
    status: 'success',
  },
  {
    id: '2',
    event: 'Updated role permissions',
    actor: 'Admin User',
    timestamp: '2026-03-15 16:45',
    status: 'info',
  },
  {
    id: '3',
    event: 'Revoked API key',
    actor: 'Alex Developer',
    timestamp: '2026-03-15 11:10',
    status: 'warning',
  },
];

export const apiKeys: ApiKey[] = [
  {
    id: '1',
    name: 'Portal production',
    prefix: 'dp_live_29a4',
    createdAt: '2026-03-10',
    status: 'active',
  },
  {
    id: '2',
    name: 'Local testing',
    prefix: 'dp_test_91b2',
    createdAt: '2026-03-01',
    status: 'revoked',
  },
];

export const docs = [
  {
    slug: 'getting-started',
    title: 'Getting started',
    description: 'Set up your first integration in minutes.',
    content: `# Getting started\n\nUse the portal to generate an API key and call your first endpoint.`,
  },
  {
    slug: 'authentication',
    title: 'Authentication',
    description: 'Learn how token-based access works.',
    content: `# Authentication\n\nInclude your bearer token in the Authorization header.`,
  },
];

export function findUserByEmail(email: string) {
  return currentUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(id: string) {
  return currentUsers.find((u) => u.id === id);
}
