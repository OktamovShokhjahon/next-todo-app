"use client";

import { navItems } from "@/utils/nav.utils";
import Link from "next/link";
import { NavItem } from "@/interfaces/nav.interface";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className=" py-[20px] shadow-lg">
      <div className="container flex justify-between items-center">
        <div>
          <Link href={"/"} className="text-[30px] uppercase">
            Logo
          </Link>
        </div>

        <nav className="flex gap-[20px]">
          {navItems &&
            navItems.map((item: NavItem) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  className={pathname === item.link ? "text-red-500" : ""}
                >
                  {item.title}
                </Link>
              );
            })}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
