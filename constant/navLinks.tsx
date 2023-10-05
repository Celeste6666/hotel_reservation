import { NaveLink } from "@TYPES/types";

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
  {
    name: "註冊",
    href: "/register",
    key: "register",
    isShow: false,
  },
  {
    name: "登入",
    href: "/sign-in",
    key: "login",
    isShow: false,
  },
];
