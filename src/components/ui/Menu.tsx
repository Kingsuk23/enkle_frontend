"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const route = [
  {
    href: "/buy",
    route_name: "Buy",
  },
  {
    href: "/rent",
    route_name: "Rent",
  },
  {
    href: "/sell",
    route_name: "Sell",
  },
  {
    href: "/mortgage",
    route_name: "Mortgage",
  },
  {
    href: "/contact",
    route_name: "Contact",
  },
];

const MenuItem: React.FC<MenuProps> = ({ children, href, onClick }) => {
  const pathname = usePathname();
  const [, activePath] = pathname.split("/") ?? [];
  return (
    <li className="inline-flex items-center justify-center md:fit w-full">
      <Link
        href={href}
        data-active={activePath === href.replace("/", "")}
        onClick={onClick}
        className={
          "inline-flex md:justify-center items-center h-8 px-2 scroll-m-2 text-base transition-colors rounded-md text-token-text-secondary-default hover:bg-token-bg-primary-hover hover:text-token-text-primary-hover focus:outline-none focus:bg-token-bg-primary-hover focus:text-token-text-primary-hover focus:ring-slate-300 data-[active=true]:bg-token-bg-primary-inverted data-[active=true]:text-token-text-primary-inverted md:fit w-full"
        }
      >
        {children}
      </Link>
    </li>
  );
};

export const MenuItems = ({ onItemClick }: { onItemClick?: () => void }) => {
  return (
    <>
      {route.map(({ href, route_name }, idx) => (
        <MenuItem onClick={onItemClick} href={href} key={idx}>
          {route_name}
        </MenuItem>
      ))}
    </>
  );
};
