import React from "react";
import Image from "next/image";

export function AudioPlayer() {
  return (
    <section className="px-4 md:px-12 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-outline-variant">
      <div className="lg:col-span-4 border-r-0 lg:border-r-2 border-outline-variant p-4 md:p-8 bg-surface-container-lowest">
        <div className="aspect-square bg-surface-variant relative overflow-hidden group">
          <img
            alt="Industrial audio equipment"
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDmvatSPKhQ3RvL4RNtXWFlEjJWul_kzsNmyExvuKDWO_glgj9hlAGzzXo2DtEmmTiTUdZBfArg48ZImO0Yc1KOs-RipL0KqmaePHiG9vegSEUMf1wjHFVkNwVlXi5m2Cu71_Akw_TV8mWlZjlXFmfYQFpahE5pJmuy4EmjI5_zyaxDm0UsEIKHTCOUys3-Rr1kbFCkV169PduXfQ5r4xuKx9kv5jCYNGgB1_bWLQN0AQY21L8DmIDU5JJqh4v4Cp7t6F2wftc5io"
          />
          <div className="absolute inset-0 border-8 border-surface-container-lowest pointer-events-none"></div>
        </div>
      </div>
      <div className="lg:col-span-8 p-4 md:p-8 flex flex-col justify-between bg-surface-container">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h3 className="font-headline text-2xl md:text-4xl font-bold uppercase text-primary tracking-tighter break-words">
              DISTORTION_LOOP_X4
            </h3>
            <p className="font-mono text-xs text-outline mt-2">
              BPM: 128 // KEY: D# MIN // DUR: 04:22
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">shuffle</span>
            </button>
            <button className="w-12 h-12 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">repeat</span>
            </button>
          </div>
        </div>
        <div className="my-12">
          <div className="h-24 w-full flex items-end gap-[2px]">
            <div className="bg-primary flex-1 h-[20%]"></div>
            <div className="bg-primary flex-1 h-[40%]"></div>
            <div className="bg-primary flex-1 h-[70%]"></div>
            <div className="bg-primary flex-1 h-[90%]"></div>
            <div className="bg-outline flex-1 h-[60%] opacity-50"></div>
            <div className="bg-outline flex-1 h-[30%] opacity-50"></div>
            <div className="bg-primary flex-1 h-[50%]"></div>
            <div className="bg-primary flex-1 h-[80%]"></div>
            <div className="bg-primary flex-1 h-[100%]"></div>
            <div className="bg-primary flex-1 h-[60%]"></div>
            <div className="bg-outline flex-1 h-[40%] opacity-50"></div>
            <div className="bg-outline flex-1 h-[20%] opacity-50"></div>
            <div className="bg-primary flex-1 h-[40%]"></div>
            <div className="bg-primary flex-1 h-[70%]"></div>
            <div className="bg-primary flex-1 h-[90%]"></div>
            <div className="bg-primary flex-1 h-[100%]"></div>
            <div className="bg-outline flex-1 h-[80%] opacity-50"></div>
            <div className="bg-outline flex-1 h-[50%] opacity-50"></div>
            <div className="bg-primary flex-1 h-[30%]"></div>
            <div className="bg-primary flex-1 h-[60%]"></div>
            <div className="bg-primary flex-1 h-[85%]"></div>
            <div className="bg-primary flex-1 h-[40%]"></div>
            <div className="bg-outline flex-1 h-[20%] opacity-50"></div>
          </div>
          <div className="flex justify-between font-mono text-[10px] mt-2 text-outline">
            <span>00:00:00</span>
            <span>00:04:22</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 md:mt-0">
          <button className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 font-headline font-black text-lg md:text-xl hover:bg-on-primary hover:text-primary border-2 border-primary transition-colors">
            PLAY_SIGNAL
          </button>
          <div className="flex-1 h-[2px] bg-outline-variant relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-primary"></div>
          </div>
          <span className="material-symbols-outlined text-primary">
            volume_up
          </span>
        </div>
      </div>
    </section>
  );
}
