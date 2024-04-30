"use client";
import React, { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";
import Container from "./Container";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Clean up the scroll event listener when the component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const { setTheme, resolvedTheme } = useTheme();

  const handleSwitchDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Container>
      <div className={`min-w-full flex flex-col justify-center items-center py-8 sticky top-0 z-50 bg-white ${isScrolled && "shadow-xl shadow-blue-100"}`}>
        <div className="flex flex-row justify-between w-full items-center bg-light dark:bg-dark">
          <div className="font-black text-3xl">Logo</div>
          <div className="flex flex-row items-center gap-10">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-row items-center p-2 gap-2 hover:cursor-pointer rounded-lg duration-200 hover:bg-prim"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-row items-center p-2 gap-2 hover:cursor-pointer rounded-lg duration-200 hover:bg-prim"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="members"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-row items-center p-2 gap-2 hover:cursor-pointer rounded-lg duration-200 hover:bg-prim"
            >
              Members
            </ScrollLink>
            <ScrollLink
              to="publications"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-row items-center p-2 gap-2 hover:cursor-pointer rounded-lg duration-200 hover:bg-prim"
            >
              Publications
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-row items-center p-2 gap-2 hover:cursor-pointer rounded-lg duration-200 hover:bg-prim"
            >
              Contact
            </ScrollLink>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center hover:cursor-pointer">
            <div
              onClick={handleSwitchDarkMode}
              className="bg-prim text-light dark:text-dark p-3 rounded-full duration-200"
            >
              {resolvedTheme === "light" ? <FaRegSun /> : <FaRegMoon />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
