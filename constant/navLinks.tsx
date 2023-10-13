import { NaveLink } from "@/types";
import {
  HomeIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  NewspaperIcon,
  MegaphoneIcon,
  IdentificationIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navLinks: NaveLink[] = [
  {
    name: "首頁",
    href: "/",
    key: "Home",
  },
  {
    name: "地區住宿",
    href: "/list",
    key: "list",
  },
  {
    name: "景點推薦",
    href: "/spot",
    key: "spot",
  },
  {
    name: "活動",
    href: "/activity",
    key: "activity",
  },
  {
    name: "服務",
    href: "/service",
    key: "service",
  },
  {
    name: "關於我們",
    href: "/about",
    key: "about",
  },
];

export const admin_navLinks: NaveLink[] = [
  {
    name: "首頁",
    href: "/dashboard",
    key: "dashboard",
    icon: ({ className }: { className: string }) => (
      <HomeIcon className={className} />
    ),
  },
  {
    name: "訂單管理",
    href: "/order-management",
    key: "order-management",
    icon: ({ className }: { className: string }) => (
      <CalendarDaysIcon className={className} />
    ),
  },
  {
    name: "民宿管理",
    href: "/hotel-management",
    key: "hotel-management",
    icon: ({ className }: { className: string }) => (
      <BuildingOffice2Icon className={className} />
    ),
  },
  {
    name: "房間管理",
    href: "/accommodation-management",
    key: "accommodation-management",
    icon: ({ className }: { className: string }) => (
      <RectangleGroupIcon className={className} />
    ),
  },
  {
    name: "活動管理",
    href: "/activity-management",
    key: "activity-management",
    icon: ({ className }: { className: string }) => (
      <RocketLaunchIcon className={className} />
    ),
  },
  {
    name: "服務管理",
    href: "/service-management",
    key: "service-management",
    icon: ({ className }: { className: string }) => (
      <NewspaperIcon className={className} />
    ),
  },
  {
    name: "設備管理",
    href: "/device-management",
    key: "device-management",
    icon: ({ className }: { className: string }) => (
      <MegaphoneIcon className={className} />
    ),
  },
  {
    name: "權限管理",
    href: "/role-management",
    key: "role-management",
    icon: ({ className }: { className: string }) => (
      <IdentificationIcon className={className} />
    ),
    description: "創建角色以便將管理後臺使用者",
  },
  {
    name: "用戶管理",
    href: "/user-management",
    key: "user-management",
    icon: ({ className }: { className: string }) => (
      <UsersIcon className={className} />
    ),
  },
  // {
  //   name: "個人資料",
  //   href: "/setting",
  //   key: "setting",
  // },
];
