import { DataTable } from "@/components/admin/roles/data-table"
import { columns } from "@/components/admin/roles/columns"
import { db } from "@/lib/db"
import { requireAdmin } from "@/lib/auth-utils"

export default async function RolesPage() {
  await requireAdmin()

  const roles = await db.role.findMany({
    include: {
      _count: {
        select: {
          users: true,
        },
      },
    },
  })

  const formattedRoles = roles.map((role) => ({
    id: role.id,
    name: role.name,
    description: role.description || "N/A",
    userCount: role._count.users,
    createdAt: role.createdAt,
  }))

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Roles Management</h2>
        <p className="text-muted-foreground">Manage user roles and permissions</p>
      </div>
      <DataTable columns={columns} data={formattedRoles} />
    </div>
  )
}
