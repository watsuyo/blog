"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
    </nav>
  );
}
