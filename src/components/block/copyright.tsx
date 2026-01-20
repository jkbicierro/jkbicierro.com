"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Copyright() {
  return (
    <div className="hidden lg:block">
      <span className="flex gap-2 items-center fixed z-50 bottom-3 left-3 text-slate-500 text-xs">
        <Avatar className="w-[12px] h-[12px]">
          <AvatarImage src="https://github.com/jkbicierro.png" alt="John Bicierro" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        &copy; John Bicierro
      </span>
    </div>
  );
}
