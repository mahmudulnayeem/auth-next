"use client";
import { BarChart, Layout, List, LockIcon, UserRound ,Contact2Icon,HistoryIcon,PaperclipIcon} from "lucide-react";
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
  {
    icon: UserRound,
    label: "Patient",
    href: "/admin/user",
  },
  {
    icon: LockIcon ,
    label: "Make Admin",
    href: "/admin/makeAdmin",
  },
];

const doctorsRoutes = [
  {
    icon: Contact2Icon,
    label: "Appointment",
    href: "/doctors/appointment",
  },
  {
    icon: HistoryIcon,
    label: "History",
    href: "/doctors/history",
  },
  {
    icon: PaperclipIcon,
    label: "Patient Report",
    href: "/doctors/patientReport",
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
