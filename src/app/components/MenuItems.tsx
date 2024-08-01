import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface Imenu {
  title: string;
  address: string;
  Icon: IconType;
}

const MenuItems: React.FC<Imenu> = ({ title, address, Icon }) => {
  return (
    <div>
      <Link
        href={address}
        className="hover:text-amber-500 flex items-center space-x-2"
      >
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItems;
