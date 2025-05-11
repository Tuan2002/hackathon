import { LayoutDashboard, LucideIcon, Shield, Users } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  adminOnly?: boolean;
}

export const dashboardNavbarItems: NavItem[] = [
  {
    title: "Bảng điều khiển",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Quản lý người dùng",
    href: "/admin/users",
    icon: Users,
    adminOnly: true,
  },
  {
    title: "Quản lý phân quyền",
    href: "/admin/roles",
    icon: Shield,
    adminOnly: true,
  },
];

export const mainNavbarItems: NavItem[] = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Giới thiệu",
    href: "/about",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
  {
    title: "Dịch vụ",
    href: "/services",
  },
  {
    title: "Sản phẩm",
    href: "/products",
  },
];
