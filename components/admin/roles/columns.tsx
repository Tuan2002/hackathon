"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export type Role = {
  id: string;
  name: string;
  description: string;
  userCount: number;
  createdAt: Date;
};

export const columns: ColumnDef<Role>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-center">Tên vai trò</div>,
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return (
        <div className="flex items-center justify-center space-x-2">
          <Badge variant={name === "admin" ? "destructive" : "secondary"}>
            {name}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="text-center">Mô tả</div>,
    cell: ({ row }) => {
      const description = row.getValue("description") as string;
      return <div className="text-center">{description || "N/A"}</div>;
    },
  },
  {
    accessorKey: "userCount",
    header: () => <div className="text-center">Số người dùng</div>,
    cell: ({ row }) => {
      const userCount = row.getValue("userCount") as number;
      return <div className="text-center">{userCount}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center">Ngày tạo</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div className="text-center">{date.toLocaleDateString()}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const role = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Tác vụ</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(role.id)}
            >
              Sao chép ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cập nhật</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Xoá bỏ
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
