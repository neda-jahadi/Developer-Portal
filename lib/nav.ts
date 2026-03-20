import { Role } from '@/app/types/user';

export function getPortalNav(role: Role) {
  const common = [
    { title: 'Dashboard', href: '/portal/dashboard' },
    { title: 'Docs', href: '/marketing/docs' },
    { title: 'API Keys', href: '/portal/api-keys' },
    { title: 'Usage', href: '/portal/usage' },
    { title: 'Settings', href: '/portal/settings' },
  ];

  if (role === 'admin') {
    return [
      ...common,
      { title: 'Users', href: '/admin/admin/users' },
      { title: 'Roles', href: '/admin/admin/roles' },
      { title: 'System', href: '/admin/admin/system' },
    ];
  }

  return common;
}
