import { Role } from "./role.type";

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  password: string;
  roleId: string;
  accounts: string;
  createdAt: string;
  role: Role;
};
