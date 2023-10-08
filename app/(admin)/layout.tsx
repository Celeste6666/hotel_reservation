import React from "react";
import SideBar from "@COM/(admin)/sidebar/SideBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar />
    </div>
  );
};

export default RootLayout;
