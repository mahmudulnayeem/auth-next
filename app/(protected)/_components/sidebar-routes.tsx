"use client";
import { BarChart, Layout, List, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const adminRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: UserRound,
    label: "Doctors",
    href: "/admin/doctors",
  },
  {
    icon: UserRound,
    label: "Pathologies",
    href: "/admin/pathologies",
  },
];

const doctorsRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  let routes: Array<any> = [];
  if (pathname.includes("/admin")) {
    routes = adminRoutes;
  } else if (pathname.includes("/doctor")) {
    routes = doctorsRoutes;
  }

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
