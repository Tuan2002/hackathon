import { columns } from "@/components/admin/users/columns";
import { DataTable } from "@/components/admin/users/data-table";
import { requireAdmin } from "@/lib/auth-utils";
import { getUsersAsync } from "@/services/users.action";

export default async function UsersPage() {
  await requireAdmin();
  const response = await getUsersAsync();

  const formattedUsers = response.data?.map((user) => ({
    id: user.id,
    name: user.name || "N/A",
    email: user.email || "N/A",
    role: user.role?.name || "User",
    createdAt: new Date(user.createdAt),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Quản lý người dùng
        </h2>
        <p className="text-muted-foreground">
          Quản lý tất cả người dùng hệ thống
        </p>
      </div>
      <DataTable columns={columns} data={formattedUsers || []} />
    </div>
  );
}
