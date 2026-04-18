"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-zinc-950 text-zinc-50 font-['Space_Grotesk'] font-bold text-[10px] uppercase fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch z-50 border-t-4 border-zinc-50 md:hidden">
      <Link 
        href="/" 
        className={`h-full flex items-center justify-center w-full transition-colors ${
          pathname === "/" 
          ? "bg-zinc-50 text-zinc-950" 
          : "text-zinc-50 hover:bg-zinc-800"
        }`}
      >
        <span className="material-symbols-outlined">home</span>
      </Link>
      
      <Link 
        href="/catalog" 
        className={`h-full flex items-center justify-center w-full transition-colors ${
          pathname === "/catalog" 
          ? "bg-zinc-50 text-zinc-950" 
          : "text-zinc-50 hover:bg-zinc-800"
        }`}
      >
        <span className="material-symbols-outlined">grid_view</span>
      </Link>
      
      <Link 
        href="/projects" 
        className={`h-full flex items-center justify-center w-full transition-colors ${
          pathname === "/projects" 
          ? "bg-zinc-50 text-zinc-950" 
          : "text-zinc-50 hover:bg-zinc-800"
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === "/projects" ? "'FILL' 1" : "'FILL' 0" }}>layers</span>
      </Link>
      
      <Link 
        href="/contact" 
        className={`h-full flex items-center justify-center w-full transition-colors ${
          pathname === "/contact" 
          ? "bg-zinc-50 text-zinc-950" 
          : "text-zinc-50 hover:bg-zinc-800"
        }`}
      >
        <span className="material-symbols-outlined">mail</span>
      </Link>
    </nav>
  );
}
