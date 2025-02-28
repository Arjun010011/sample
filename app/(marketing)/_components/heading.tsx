"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Heading = () => {
  return (
    <div className="max-w-6xl  space-y-10 ">
      <h1 className="text-3xl sm:text-4xl  md:text-6xl font-bold pt-5 ">
        Your documents, plans and everything undified at one place. <br />
        <span className="underline">Cooper</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl  font-medium">
        Cooper is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      <Button>
        Enter Cooper
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
