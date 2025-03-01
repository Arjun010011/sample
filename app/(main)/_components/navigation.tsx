"use client";

import { ChevronsLeft } from "lucide-react";

const Navigation = () => {
  return (
    <>
      <aside className="group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-99999">
        <div
          className="h-5 w-5 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-3 opacity-0 group-hover/sidebar:opacity-100 transition"
          role="button"
        >
          <ChevronsLeft className="h-5 w-5" />
        </div>
        <div className="">
          <p>action items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        {/* this is the sidebar */}
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10  right-0 top-0" />
      </aside>
    </>
  );
};

export default Navigation;
