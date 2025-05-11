"use server";
import { db } from "@/lib/db";
import { ActionResponse } from "@/types/action.type";
import { CreateAndUpdateUserRequest, User } from "@/types/user.type";

export const getUsersAsync = async (): Promise<ActionResponse<User[]>> => {
  const users = await db.user.findMany({
    include: {
      role: {
        select: {
          name: true,
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const userData = users.map(
    (user) =>
      ({
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified
          ? user.emailVerified.toISOString()
          : null,
        image: user.image,
        password: user.password,
        roleId: user.roleId,
        role: user.role
          ? {
              id: user.role.id || "",
              name: user.role.name || "",
            }
          : { id: "", name: "" },
      } as User)
  );
  return {
    success: true,
    message: "Users fetched successfully",
    data: userData,
  };
};

export const createNewUserAsync = async (
  data: CreateAndUpdateUserRequest
): Promise<ActionResponse<User>> => {
  const { name, email, image, roleId } = data;
  const user = await db.user.create({
    data: {
      name,
      email,
      image,
      roleId,
    },
    include: {
      role: true,
    },
  });
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    emailVerified: user.emailVerified ? user.emailVerified.toISOString() : null,
    image: user.image,
    password: user.password,
    roleId: user.roleId,
    role: user.role
      ? {
          id: user.role.id || "",
          name: user.role.name || "",
        }
      : { id: "", name: "" },
  } as User;
  return {
    success: true,
    message: "User created successfully",
    data: userData,
  };
};
