"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import Link from "next/link";

interface Beat {
  id: string;
  title: string;
  genre: string;
  bpm: string;
  tags: string[];
  description: string;
}

const BEAT_DATA: Record<string, Beat> = {
  "001": { id: "001", title: "KINETIC_FLOW", genre: "TRAP / DARK", bpm: "140", tags: ["Trap", "Dark"], description: "Aggressive industrial trap with heavy distorted 808s and sharp percussive layers." },
  "002": { id: "002", title: "BRUTAL_VOID", genre: "DRILL / INDUSTRIAL", bpm: "144", tags: ["Drill"], description: "Experimental drill atmosphere inspired by brutalist architecture and rhythmic distortion." },
  "003": { id: "003", title: "NEON_DEBT", genre: "SYNTH / PHONK", bpm: "128", tags: ["Phonk"], description: "Low-fidelity synth layers meeting high-energy phonk percussion." },
  "004": { id: "004", title: "URBAN_ECHO", genre: "R&B / SOUL", bpm: "95", tags: ["R&B"], description: "Chilled late-night R&B textures with warm analog saturation and soulful harmonic shifts." },
};

export default function BeatDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const beat = BEAT_DATA[id];
  const [isHoveringArt, setIsHoveringArt] = useState(false);

  if (!beat) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-zinc-50 font-mono">
        <p className="text-xl animate-pulse uppercase tracking-[0.5em]">Beat_Not_Found</p>
        <Link href="/catalog" className="mt-8 border border-zinc-700 px-6 py-2 hover:bg-zinc-50 hover:text-zinc-950 transition-all uppercase text-[10px] tracking-widest">Return_to_Catalog</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-32 px-4 md:px-12 lg:px-24">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-12 opacity-50 hover:opacity-100 transition-opacity">
          <Link href="/catalog" className="font-mono text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back_to_Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Visual & Controls */}
          <div className="lg:col-span-7 space-y-12">
            <div 
              className="relative aspect-square bg-zinc-900 border-2 border-zinc-800 overflow-hidden group cursor-crosshair shadow-2xl"
              onMouseEnter={() => setIsHoveringArt(true)}
              onMouseLeave={() => setIsHoveringArt(false)}
            >
              {/* Grayscale Cover Art Placeholder/Visualizer */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-headline text-[20vw] font-black italic text-zinc-800 select-none group-hover:scale-110 transition-transform duration-700">
                    {beat.id}
                 </span>
              </div>
              
              {/* Corner Metadata */}
              <div className="absolute top-6 left-6 flex flex-col gap-1">
                <span className="bg-zinc-50 text-zinc-950 px-2 py-0.5 text-[10px] font-black uppercase">LXB_SNC_PRTCL</span>
                <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">SRL_000{beat.id}</span>
              </div>

              {/* Scanned Texture Overlay */}
              <div className="absolute inset-0 grainy-overlay opacity-30 mix-blend-overlay pointer-events-none"></div>
              <div className={`absolute inset-0 bg-white mix-blend-difference transition-opacity duration-500 pointer-events-none ${isHoveringArt ? 'opacity-5' : 'opacity-0'}`}></div>
            </div>

            {/* Integrated Player Control */}
            <div className="bg-zinc-900/50 border-2 border-zinc-800 p-8 flex flex-col gap-8">
              <div className="flex justify-between items-center mr-4">
                <button className="w-20 h-20 bg-zinc-50 text-zinc-950 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </button>
                <div className="flex-1 ml-10 flex flex-col gap-4">
                   <div className="flex justify-between font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      <span>00:00:00</span>
                      <span>STREAM_QUALITY_FIX_320K</span>
                      <span>03:45:00</span>
                   </div>
                   <div className="h-[4px] bg-zinc-800 relative group cursor-pointer overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-zinc-50 w-1/3"></div>
                      <div className="absolute inset-0 bg-zinc-50/10 group-hover:bg-zinc-50/20 transition-colors"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Licensing */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs bg-zinc-800 px-3 py-1 text-zinc-400">NO_{beat.id}</span>
                <span className="font-mono text-xs border border-zinc-800 px-3 py-1 text-zinc-500">2024_RELEASE_ALPHA</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic leading-none break-words">
                {beat.title}
              </h1>
              <p className="font-mono text-sm uppercase tracking-widest text-zinc-400 pt-2 border-t-4 border-zinc-50 inline-block">
                {beat.genre} // {beat.bpm} BPM
              </p>
              <p className="text-base text-zinc-500 leading-relaxed max-w-sm pt-4">
                {beat.description}
              </p>
            </div>

            {/* Licensing Stream */}
            <div className="space-y-4">
              <p className="font-headline text-[10px] tracking-[0.4em] text-zinc-600 uppercase mb-6">SELECT_LICENSE_PROTOCOL</p>
              
              <div className="group flex justify-between items-center border-2 border-zinc-800 p-6 hover:border-zinc-50 transition-colors cursor-pointer bg-zinc-950">
                <div className="flex flex-col gap-1">
                  <span className="font-headline font-bold text-lg uppercase group-hover:text-primary transition-colors">Basic_Lease</span>
                  <span className="font-mono text-[9px] text-zinc-600 uppercase">MP3 + WAVE_FILE // USAGE_LIMITS_APPLY</span>
                </div>
                <span className="font-headline font-black text-2xl">$29.99</span>
              </div>

              <div className="group flex justify-between items-center border-4 border-zinc-50 p-6 bg-zinc-50 text-zinc-950 transition-colors cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="font-headline font-bold text-lg uppercase">Premium_Lease</span>
                  <span className="font-mono text-[9px] text-zinc-950/60 uppercase">TRACKOUTS + WAV_FILE // UNLIMITED_STREAMS</span>
                </div>
                <span className="font-headline font-black text-2xl">$79.99</span>
              </div>

              <div className="group flex justify-between items-center border-2 border-zinc-800 p-6 hover:border-zinc-50 transition-colors cursor-pointer bg-zinc-950">
                <div className="flex flex-col gap-1">
                  <span className="font-headline font-bold text-lg uppercase group-hover:text-primary transition-colors">Exclusive_Ownership</span>
                  <span className="font-mono text-[9px] text-zinc-600 uppercase">FULL_RIGHTS // CONTRACT_PERSONALIZATION</span>
                </div>
                <span className="font-headline font-black text-2xl">$499+</span>
              </div>
            </div>

            <button className="w-full bg-zinc-50 text-zinc-950 py-8 font-headline font-black text-2xl uppercase tracking-tighter hover:invert transition-all flex justify-between items-center px-12 group">
              <span>SECURE_FILE_NOW</span>
              <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-all">shopping_cart</span>
            </button>
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
