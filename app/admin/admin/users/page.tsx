import { PageHeader } from '@/components/layout/page-header';
import { UsersTable } from '@/components/admin/users-table';
import { currentUsers } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

export default function AdminUsersPage() {
  return (
    <div>
      <PageHeader
        title="Users"
        description="Manage invited users, active members and access status."
        actions={<Button>Invite user</Button>}
      />
      <UsersTable users={currentUsers} />
    </div>
  );
}
