"use client";
import React, { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  //   const [theme, setTheme] = useState(null);

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
        <div className="font-black text-3xl w-72">Logo</div>
        <div className="flex flex-row w-2/3 justify-center items-center gap-4">
          <Link
            href={"/"}
            className="flex flex-row items-center gap-2 hover:cursor-pointer rounded-t-lg py-4 px-3 duration-200"
          >
            Home
          </Link>
          <Link
            href={"/reservation"}
            className="flex flex-row items-center gap-2 hover:cursor-pointer rounded-t-lg py-4 px-3 duration-200"
          >
            Reservation
          </Link>
          <Link
            href={"/staff"}
            className="flex flex-row items-center gap-2 hover:cursor-pointer rounded-t-lg py-4 px-3 duration-200"
          >
            Staff
          </Link>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center hover:cursor-pointer">
          <div
            onClick={handleSwitchDarkMode}
            className=" bg-dark dark:bg-light text-light dark:text-dark p-3 rounded-full duration-200"
          >
            {resolvedTheme === "light" ? <FaRegSun /> : <FaRegMoon />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
