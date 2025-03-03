"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
const DocumentPage = () => {
  const { user } = useUser();
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src="/dark_empty_box.png"
        height="300"
        width="300"
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/light_empty_box.png"
        height="300"
        width="300"
        alt="empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg ">Welcome to {user?.firstName}&apos;s cooper</h2>
    </div>
  );
};

export default DocumentPage;
