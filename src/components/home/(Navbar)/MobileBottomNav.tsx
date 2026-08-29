"use client";

import Link from "next/link";
import {
  Home,
  LayoutGrid,
  Heart,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { GroupUsersIcon, HeartIcon, LayOutIcon, VendorBoxIcon } from "@/components/custom/icons";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "All Categories",
    href: "/categories",
    icon: LayOutIcon,
  },
  {
    label: "Favorite",
    href: "/favorite",
    icon: HeartIcon,
  },
  {
    label: "Cart list",
    href: "/cart",
    icon: VendorBoxIcon,
  },
  {
    label: "Account",
    href: "/account",
    icon: GroupUsersIcon,
  },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-[9999] w-full border-t border-[#E5E5E5] bg-white md:hidden">
      <div className="grid h-[78px] grid-cols-5">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex h-full flex-col items-center justify-center gap-[5px]"
          >
            <Icon
              className="h-[28px] w-[28px] stroke-[1.8] text-[#012C60]"
            />

            <span className="whitespace-nowrap text-[12px] font-normal leading-none text-[#777777]">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

{/* <Button
                  size="nav-icon"
                  variant="nav_menu"
                  title="Menu"
                  className="px-0">
                  <CustomMenuIcon className="size-5 sm:size-6 " />
                </Button> */}