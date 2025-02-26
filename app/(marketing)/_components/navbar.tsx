"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-button";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        " z-50 bg-background dark:bg-slate-800 fixed top-0 flex items-center w-full p-6 gap-x-10",
        scrolled && "border-b shadow-lg"
      )}
    >
      <Logo />
      <ModeToggle />
      <div className="md:ml-auto md:justify-end justify-between items-center w-full flex gap-x-2">
        <Button variant="ghost" size="sm">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
