import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className=" flex items-center  w-full p-6  z-50">
      <Logo />
      <div className="ml-auto  w-full justify-between  md:justify-center"></div>
    </div>
  );
};
