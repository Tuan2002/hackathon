'use server'
import { db } from "@/lib/db";
import { ActionrResponse } from "@/types/action.type";

export const getRolesAsync = async (): Promise<ActionrResponse> => {
  const roles = await db.role.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });
  return {
    success: true,
    data: roles,
  }
}