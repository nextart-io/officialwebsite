"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = (link: string) => {
    router.push(link);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Community & Governance", link: "/community" },
    { name: "Token Economy", link: "/token" },
  ];

  return (
    <nav className="z-50 w-full bg-gray-950 px-4">
      <div className="lg:h-[149px] flex container justify-between items-center">
        <div className="flex-shrink-0">
          <Image
            src={"/NextartLogo.png"}
            alt={"NextartLogo"}
            width={203}
            height={0}
            className="w-[204px]"
          />
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <Button
              key={item.name}
              className="text-white text-lg lg:text-2xl"
              variant={"link"}
              onClick={() => handleButtonClick(item.link)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <Button
          className="md:hidden text-white"
          variant={"ghost"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              className="text-white text-lg w-full justify-start"
              variant={"ghost"}
              onClick={() => handleButtonClick(item.link)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
