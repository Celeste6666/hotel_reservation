"use client";
import { useState, useRef } from "react";

function NavbarContent() {
  return (
    <div className="navbar-center py-0 hidden lg:flex">
      <ul className="px-1 text-lg py-0 flex flex-row">
        <li>
          <a className="nav-link">首頁</a>
        </li>
        <li tabIndex={0}>
          <a className="nav-link">地區住宿</a>
        </li>
        <li>
          <a className="nav-link">景點推薦</a>
        </li>
        <li>
          <a className="nav-link">活動</a>
        </li>
        <li>
          <a className="nav-link">服務</a>
        </li>
        <li>
          <a className="nav-link">關於我們</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarContent;
