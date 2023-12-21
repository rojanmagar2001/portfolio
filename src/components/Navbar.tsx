"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const desableScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (openMenu) {
      desableScroll();
    } else {
      enableScroll();
    }
  }, [openMenu]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="w-full">
      {/* bigger screen navbar */}
      <div className="hidden mx-10 p-3 md:flex justify-between">
        <Link href="/">
          <h1 className="text-2xl dark:text-[#F9FAFB] text-gray-900 font-bold tracking-wide">
            {"<RR />"}
          </h1>
        </Link>
        <div className="flex justify-between items-center gap-x-10 ">
          <div className="flex justify-between gap-x-4 items-center text-[16px]">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <span className="text-gray-200">|</span>
          </div>
          <div className="flex justify-between gap-x-4 items-center">
            <button className="text-xl" onClick={toggleTheme}>
              <BsSun />
            </button>
            <button className="text-[14px] dark:bg-gray-100 dark:text-gray-900 font-[500] bg-gray-900 text-white/90 p-1 w-[120px] rounded-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>
      {/* smaller screen navbar */}
      <div className="flex md:hidden mx-4 p-2 items-center justify-between transition-all duration-200">
        <Link href="/">
          <h1 className="text-3xl text-gray-900 dark:text-[#F9FAFB] font-bold tracking-wide">
            {"<RR />"}
          </h1>
        </Link>
        <button
          onClick={handleOpenMenu}
          className="text-2xl  transition duration-200"
        >
          {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {/* smaller screen navbar menu */}
      <div
        className={`${
          openMenu
            ? "max-h-full border-t-[1px] dark:border-t-gray-800"
            : "max-h-0"
        } fixed bg-white dark:bg-[#030712]   w-full h-full overflow-hidden left-0 transition-all duration-300 xl:hidden z-50 `}
      >
        <div className={`flex flex-col gap-y-6 items-start   mt-4 mx-6`}>
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#Testimonials">Testimonials</Link>
          <Link href="#Contact">Contact</Link>
        </div>

        <div className="w-full border-t-[1px]  dark:border-t-gray-800 mt-4">
          <div className="flex flex-col gap-y-6 items-center text-[16px]  mx-6">
            <div className="w-full flex items-center justify-between mt-6">
              <span>Switch Theme</span>
              <button className="text-[24px]" onClick={toggleTheme}>
                <BsSun />
              </button>
            </div>
            <button className="text-[24px] font-semibold dark:bg-[#F9FAFB] dark:text-gray-900 bg-gray-900 text-gray-50 p-3 w-full rounded-[12px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
