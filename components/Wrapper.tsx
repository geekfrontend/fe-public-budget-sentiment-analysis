"use client";
import { usePathname } from "next/navigation";

import AppBar from "./AppBar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <main>{children}</main>
      {pathname === "/" || pathname === "/about" ? <AppBar /> : null}{" "}
    </>
  );
};

export default Wrapper;
