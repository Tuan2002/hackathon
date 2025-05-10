import { User } from "./user.type";

export type Role = {
  id: string;
  name: string;
  description: string;
  users: User[];
  createdAt: string;
};
