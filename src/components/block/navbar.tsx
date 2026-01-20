"use client";

import { Home, BookOpen, Lightbulb, Folder, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useScroll } from "motion/react";
import { ModeToggle } from "../buttons/mode-toggle";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

const navigation = [
  { name: "Home", href: "/", icon: <Home size={16} /> },
  { name: "Case Studies", href: "/studies", icon: <BookOpen size={16} /> },
  { name: "Insights", href: "/insights", icon: <Lightbulb size={16} /> },
  { name: "Projects", href: "/projects", icon: <Folder size={16} /> },
];

export function NavBar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* style:lg */}
      <nav className="z-[999] backdrop-filter backdrop-blur-md px-[20px] fixed h-[60px] w-full flex items-center justify-between lg:justify-around">
        <div className="flex gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="absolute mt-[18px] ml-[18px] z-50 border-2 border-background bg-yellow-500 rounded-full h-[10px] w-[10px]"></div>
            <Avatar className="w-[25px] h-[25px]">
              <AvatarImage src="https://github.com/jkbicierro.png" alt="John Bicierro" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <span className="text-sm">John Bicierro</span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:block">
            <ul className="text-zinc-400 flex gap-8 text-[12px] uppercase font-bold">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li
                    key={index}
                    className={`${
                      isActive
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-slate-500"
                    }`}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            {/* <Button>
              <Sparkles />
              Unlock Resources
            </Button> */}

            <ModeToggle />
          </div>
        </div>
      </nav>
      <div className="h-[60px]"></div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 60,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
        }}
        className="bg-blue-500 z-50"
      />

      {/* style:xs,sm,base */}
      <div className="block lg:hidden">
        <nav className="bg-background h-[50px] fixed bottom-0 border-t w-full flex items-center justify-center">
          <ul className="w-full flex justify-around">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`${isActive && "text-blue-500"} 
                                            flex flex-col text-[6px] gap-1 uppercase font-semibold items-center`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
