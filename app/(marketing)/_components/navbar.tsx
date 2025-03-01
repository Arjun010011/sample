"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
        {isLoading && <Spinner size="lg" />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Cooper</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/document">Enter Cooper</Link>
            </Button>
            <UserButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
