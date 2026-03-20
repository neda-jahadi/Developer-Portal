import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Role } from '@/app/types/user';
import { AppSidebar } from './app-sidebar';

export function MobileSidebar({ role }: { role: Role }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="sr-only">
          <SheetTitle>Portal navigation</SheetTitle>
          <SheetDescription>Use these links to navigate through the portal.</SheetDescription>
        </SheetHeader>
        <AppSidebar role={role} />
      </SheetContent>
    </Sheet>
  );
}
