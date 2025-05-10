'use server'
import { db } from "@/lib/db";
import { ActionrResponse } from "@/types/action.type";

export const getUsersAsync = async (): Promise<ActionrResponse> => {
  const users = await db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
    include: {
        role: true,
    },
  });
  return {
    success: true,
    message: "Users fetched successfully",
    data: users,
  }
}