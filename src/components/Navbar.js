"use client";
import React, { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
// import logo from "../../public/logo.png";

function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    console.log(resolvedTheme);
  }, [resolvedTheme]);

  const handleSwitchDarkMode = () => {
    console.log(resolvedTheme);
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="min-w-full flex flex-col justify-center items-center sticky top-0">
      <div className="flex flex-row justify-between w-full items-center bg-light dark:bg-dark px-24">
        <div className="font-black text-3xl w-72">
          {/* <Image src={logo} layout="fill" objectFit="contain" /> */}
          Logo
        </div>
        <div className="flex flex-row w-2/3 justify-center items-center gap-4 py-4">
          <Link
            href={"/"}
            className="flex flex-row items-center gap-2 hover:cursor-pointer rounded-lg py-2 px-3 duration-200 hover:bg-prim "
          >
            Home
          </Link>
          <Link
            href={"/reservation"}
            className="flex flex-row items-center gap-2 hover:cursor-pointer rounded-lg py-2 px-3 duration-200 hover:bg-prim "
          >
            Reservation
          </Link>
          <Link
            href={"/staff"}
            className="flex flex-row items-center gap-2 hover:cursor-pointer rounded-lg py-2 px-3 duration-200 hover:bg-prim "
          >
            Staff
          </Link>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center hover:cursor-pointer">
          <div
            onClick={handleSwitchDarkMode}
            className=" bg-prim text-light dark:text-dark p-3 rounded-full duration-200"
          >
            {resolvedTheme === "light" ? <FaRegSun /> : <FaRegMoon />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
