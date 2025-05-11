"use client";

import { type LucideIcon, LayoutDashboard, Shield, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Role } from "@prisma/client";
import { dashboardNavbarItems } from "@/constants/menuItems";

interface DashboardNavProps {
  user: {
    role?: Role;
  };
}

export function DashboardNav({ user }: DashboardNavProps) {
  const pathname = usePathname();
  const isAdmin = user?.role?.name === "admin";

  return (
    <nav className="grid items-start gap-2 p-4">
      {dashboardNavbarItems.map((item) => {
        // Skip admin-only items for non-admin users
        if (item.adminOnly && !isAdmin) {
          return null;
        }

        return (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "justify-start",
              pathname === item.href && "bg-muted font-medium"
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon && <item.icon className="mr-2 h-4 w-4" />}
              {item.title}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
