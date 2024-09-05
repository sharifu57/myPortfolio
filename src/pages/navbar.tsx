import { Space, Switch } from "antd";
import React, { useContext, useState } from "react";
import { ColorModeContext } from "../contexts/color-mode";

export default function Navbar() {
  const { mode, setMode } = useContext(ColorModeContext);
  const navLinks = [
    {
        label: "Home",
        link: "/",
      
    },
    {
        label: "About",
        link: "/about",
    },
    {
        label: "Portfolio",
        link: "/porfolio",
    },
    {
        label: "Contact",
        link: "/contact",
    }
  ]
  return (
    <div className="md:container md:mx-auto font-['raleway']">
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center"
          >
            <img src="/S.svg" className="h-10" alt="Flowbite Logo" />
          </a>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <Space>
              <Switch
                checkedChildren="🌛"
                unCheckedChildren="🔆"
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
                defaultChecked={mode === "dark"}
              />
            </Space>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                {navLinks.map((navlink)=> (
                    <li key={navlink.label}>
                    <a
                      href={navlink.link}
                      className="block rounded text-gray-500 hover:text-gray-700"
                      style={{ transition: "0.5s" }}
                    >
                      { navlink.label }
                    </a>
                  </li>
                ))}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
