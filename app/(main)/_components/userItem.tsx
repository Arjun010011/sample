"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronsLeftRightIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/nextjs";
const UserItem = () => {
  const { user } = useUser();
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className="flex items-center p-3 w-full text-sm hover:bg-primary/5"
            role="button"
          >
            <div className="gap-x-2 flex items-center max-w-[150px]">
              <Avatar className="h-5 w-5 ">
                <AvatarImage src={user?.imageUrl} className="rounded-full" />
              </Avatar>
              <span className="text-start font-medium line-clamp-1">
                {user?.fullName}&apos;s cooper
              </span>
            </div>
            <ChevronsLeftRightIcon className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-80"
          align="start"
          alignOffset={11}
          forceMount
        >
          <div className="flex flex-col space-y-4 p-2">
            <p className="text-sm leading-none font-medium text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
            </p>
            <div className="flex items-center gap-x-2">
              <div className="rounded-md bg-secondary p-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.imageUrl} />
                </Avatar>
              </div>
              <div className="space-y-1">
                <p className="text-sm line-clamp-1">
                  {user?.fullName}&apos;s cooper
                </p>
              </div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="w-full cursor-pointer text-muted-foreground "
            asChild
          >
            <SignOutButton>Log out</SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserItem;
