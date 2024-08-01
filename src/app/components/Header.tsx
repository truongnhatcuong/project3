"use client";
import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import { FaHome } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import Link from "next/link";
import DarkModeSwith from "./DarkModeSwicth";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // hoặc có thể trả về một loading spinner
  }
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItems title="home" address="/" Icon={FaHome} />
        <MenuItems title="about" address="/about" Icon={RiErrorWarningFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwith />
        <Link href="/" className="flex gap-2 items-center">
          <span className="text-2xl font-bold bg-amber-500 rounded-md">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
