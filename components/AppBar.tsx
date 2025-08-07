"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  HiOutlineHome as HomeIcon,
  HiOutlineInformationCircle as AboutIcon,
} from "react-icons/hi";

interface MenuProps {
  name: string;
  icon: ReactNode;
  path: string;
}

const iconSize: number = 18;

const MENU: MenuProps[] = [
  {
    name: "Home",
    icon: <HomeIcon size={iconSize} />,
    path: "/",
  },
  {
    name: "About",
    icon: <AboutIcon size={iconSize} />,
    path: "/about",
  },
];

const AppBar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full max-w-[480px] mx-auto z-50">
      <div
        className="flex gap-1 justify-center px-0 py-3 bg-white rounded-t-3xl border-t shadow-lg dark:bg-gray-900 border-t-purple-100 dark:border-t-gray-800 text-neutral-600 dark:text-neutral-300"
      >
        {MENU.map((menu) => (
          <Link href={menu?.path} key={menu?.name}>
            <button
              className={clsx(
                "py-3 px-5 flex items-center cursor-pointer gap-2 rounded-full ",
                "hover:text-neutral-700",
                {
                  "bg-neutral-100 text-neutral-800 ": pathname === menu?.path,
                }
              )}
            >
              <div>{menu?.icon}</div>
              <div className="text-sm font-medium">{menu?.name}</div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
