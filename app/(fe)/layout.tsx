import type { Metadata } from "next";
import NavbarLayout from "@COM/(fe)/navbar/NavbarLayout";
import SideBar from "@COM/(fe)/sideBar/SideBar";
import Footer from "@COM/(fe)/footer/Footer";
import Breadcrumb from "@COM/(fe)/breadcrumb/Breadcrumb";

export const metadata: Metadata = {
  title: "旅遊網站",
  description: "國內旅遊優質訂房網",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col py-0">
        {/* Navbar */}
        <NavbarLayout />
        {/* SideBar */}
        <SideBar />
      </div>
      {/* Page content here */}
      <Breadcrumb />
      {children}
      <Footer />
    </>
  );
}
