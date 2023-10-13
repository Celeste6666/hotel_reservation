import React from "react";
import SideBar from "@COM/(admin)/sidebar/SideBar";
import NavbarLayout from "@COM/(admin)/navbar/NavbarLayout";
import NavHeader from "@COM/(admin)/navbar/NavHeader";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 ">
      <NavbarLayout />
      <SideBar />
      <div className="col-start-4 md:col-start-3 xl:col-start-2 col-end-12 py-20 ps-10">
        <NavHeader />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
