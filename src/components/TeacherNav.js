"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
function TeacherNav() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleSwitchDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="flex flex-col w-96 h-full bg-primary dark:bg-dark_sec justify-between  absolute px-6 py-10">
      <div className="flex flex-col gap-4">
        <Link href={"/teacher/dashboard/add"}>Add Reservation</Link>
        <Link href={"/teacher/dashboard/edit"}>Edit Reservation</Link>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center hover:cursor-pointer">
        <div
          onClick={handleSwitchDarkMode}
          className=" bg-primary text-light dark:text-dark p-3 rounded-full duration-200"
        >
          {resolvedTheme === "light" ? <FaRegSun /> : <FaRegMoon />}
        </div>
      </div>
      {/* <Button variant="secondary">Secondary</Button> */}
    </div>
  );
}

export default TeacherNav;
