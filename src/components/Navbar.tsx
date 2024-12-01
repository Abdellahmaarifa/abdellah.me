"use client";
import React from "react";

import { Icons } from "@/config/site";
import { buttonVariants } from "@/ui/button";
import { Dock, DockIcon } from "@/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
export type IconProps = React.HTMLAttributes<SVGElement>;

export function Navbar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-[20px] bg-black/50 backdrop-blur-md  rounded-xl  w-fit z-[520] left-1/2 -translate-x-1/2">
      <TooltipProvider>
        <Dock
          direction="bottom"
          magnification={55}
          className="px-6 rounded-xl py-3 border-[0.5px] border-white/[0.15]"
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={clsx(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full"
                  )}
                >
                  <Icons.nav.home
                    className={clsx(
                      "size-6",
                      pathname === "/" ? "text-white" : "text-white/[0.25]"
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="text-xs text-white">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/about"
                  className={clsx(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full"
                  )}
                >
                  <Icons.nav.about
                    className={clsx(
                      "size-6",
                      pathname === "/about" ? "text-white" : "text-white/[0.25]"
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="text-xs text-white">
                <p>About</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/experience"
                  className={clsx(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full"
                  )}
                >
                  <Icons.nav.projects
                    className={clsx(
                      "size-6",
                      pathname === "/experience"
                        ? "text-white"
                        : "text-white/[0.25]"
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="text-xs text-white">
                <p>Projects</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/contact"
                  className={clsx(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full"
                  )}
                >
                  <Icons.nav.contact
                    className={clsx(
                      "size-6",
                      pathname === "/contact"
                        ? "text-white"
                        : "text-white/[0.25]"
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="text-xs text-white">
                <p>Contact</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
