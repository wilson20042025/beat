import React from "react";

export function Footer() {
  return (
    <footer className="hidden md:flex border-t-2 border-outline-variant px-12 py-4 justify-between items-center bg-surface-container-lowest font-mono text-[10px] text-outline uppercase tracking-widest">
      <div className="flex gap-8">
        <span>LUXBEATZ PRODUCTION</span>
        <span>BASED IN NYC</span>
        <span>EST. 2024</span>
      </div>
      <div className="flex gap-8">
        <a className="hover:text-primary" href="#">
          TWITTER/X
        </a>
        <a className="hover:text-primary" href="#">
          INSTAGRAM
        </a>
        <a className="hover:text-primary" href="#">
          BANDCAMP
        </a>
      </div>
      <div>©2024 ALL_RIGHTS_RESERVED</div>
    </footer>
  );
}
