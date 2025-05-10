"use server";
import { db } from "@/lib/db";
import { ActionResponse } from "@/types/action.type";
import { Role } from "@/types/role.type";

export const getRolesAsync = async (): Promise<ActionResponse<Role[]>> => {
  const roles = await db.role.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
      users: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  const roleData = roles.map(
    (role) =>
      ({
        id: role.id,
        name: role.name,
        description: role.description || "N/A",
        users: role.users.map((user) => ({
          id: user.id,
          name: user.name,
        })),
      } as Role)
  );
  return {
    success: true,
    data: roleData,
  };
};
