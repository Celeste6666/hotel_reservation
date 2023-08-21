"use client";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickAway } from "ahooks";

function NavbarContent() {
  const [open, setOpen] = useState(false);

  const innerListRef = useRef<HTMLUListElement>(null);
  const recommendedARef = useRef<HTMLAnchorElement>(null);

  useClickAway(() => {
    setOpen(false);
  }, [innerListRef, recommendedARef]);

  return (
    <div className="navbar-center -translate-x-1/4 hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a>首頁</a>
        </li>
        <li tabIndex={0}>
          <a ref={recommendedARef} onClick={() => setOpen((pre) => !pre)}>
            地區住宿
          </a>
        </li>
        <li>
          <a>景點推薦</a>
        </li>
        <li>
          <a>活動</a>
        </li>
        <li>
          <a>服務</a>
        </li>
        <li>
          <a>關於我們</a>
        </li>
      </ul>
      {createPortal(
        <ul
          className={`bg-base-200 rounded-box absolute z-10 top-14 left-2/4 -translate-x-1/2 w-3/5 ${
            open ? "menu xl:menu-horizontal lg:min-w-max " : "hidden"
          }`}
          ref={innerListRef}
        >
          <li>
            <a>南竿</a>
            <ul>
              <li>
                <a>Design</a>
              </li>
              <li>
                <a>Development</a>
              </li>
              <li>
                <a>Hosting</a>
              </li>
              <li>
                <a>Domain register</a>
              </li>
            </ul>
          </li>
          <li>
            <a>北竿</a>
            <ul>
              <li>
                <a>CRM software</a>
              </li>
              <li>
                <a>Marketing management</a>
              </li>
              <li>
                <a>Security</a>
              </li>
              <li>
                <a>Consulting</a>
              </li>
            </ul>
          </li>
          <li>
            <a>莒光</a>
            <ul>
              <li>
                <a>UI Kit</a>
              </li>
              <li>
                <a>Wordpress themes</a>
              </li>
              <li>
                <a>Wordpress plugins</a>
              </li>
              <li>
                <a>Open source</a>
                <ul>
                  <li>
                    <a>Auth management system</a>
                  </li>
                  <li>
                    <a>VScode theme</a>
                  </li>
                  <li>
                    <a>Color picker app</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a>東莒</a>
            <ul>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
              <li>
                <a>Press kit</a>
              </li>
            </ul>
          </li>
          <li>
            <a>東引</a>
            <ul>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
              <li>
                <a>Press kit</a>
              </li>
            </ul>
          </li>
        </ul>,
        document.body
      )}
    </div>
  );
}

export default NavbarContent;
