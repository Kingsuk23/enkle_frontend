"use client";

import { BiMenu, BiX } from "react-icons/bi";
import { MenuItems } from "./ui/Menu";
import { useState } from "react";
import Logo from "./svg/Logo";
import Link from "next/link";

const MobMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen((prv) => !prv);
  };
  return (
    <div className="md:hidden block">
      <BiMenu
        size={24}
        className="text-token-icon-primary-default cursor-pointer"
        onClick={handleMenu}
      />
      {isMenuOpen && (
        <nav className="absolute top-0 inset-0 transition-all duration-300 left-0 z-10 bg-token-bg-primary-default w-full h-screen">
          <div className="flex justify-between items-center pb-2">
            <Link href="/" onAbort={handleMenu}>
              <Logo />
            </Link>
            <BiX
              size={24}
              className="text-token-icon-primary-default cursor-pointer"
              onClick={handleMenu}
            />
          </div>
          <ul className="flex flex-col gap-2">
            <MenuItems onItemClick={handleMenu} />
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobMenu;
