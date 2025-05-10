import { DataTable } from "@/components/admin/roles/data-table";
import { columns } from "@/components/admin/roles/columns";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth-utils";
import { getRolesAsync } from "@/services/roles.action";

export default async function RolesPage() {
  await requireAdmin();

  const response = await getRolesAsync();
  const formattedRoles = response.data?.map((role) => ({
    id: role.id,
    name: role.name,
    description: role.description || "N/A",
    userCount: role.users?.length ?? 0,
    createdAt: new Date(role.createdAt),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Quản lý phân quyền
        </h2>
        <p className="text-muted-foreground">
          Quản lý phân quyền cho người dùng trong hệ thống
        </p>
      </div>
      <DataTable columns={columns} data={formattedRoles || []} />
    </div>
  );
}
