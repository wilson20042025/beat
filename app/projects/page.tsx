"use client";

import React from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-32 debug-grid overflow-x-hidden">
        {/* --- Header Section --- */}
        <header className="px-4 md:px-12 mb-8 border-l-4 md:border-l-2 border-primary ml-4 md:ml-12 pl-4">
          <p className="font-body text-sm md:text-base text-zinc-400 leading-tight md:leading-normal max-w-2xl">
            A professional collection of unique beats and creative projects. Built for artists who want to stand out.
          </p>
        </header>

        {/* --- Hit Projects Gallery --- */}
        <section className="px-4 md:px-12 pt-8 border-t border-zinc-900 pb-12">
          <div className="mb-8 flex justify-between items-end border-b-2 border-zinc-800 pb-4">
            <h3 className="font-headline text-2xl md:text-4xl font-black uppercase italic text-zinc-50 tracking-tighter">Hit Projects</h3>
            <span className="font-mono text-[10px] text-zinc-600">COUNT: 06_SELECTED</span>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-12 gap-2 md:gap-6">
            {/* ROW 1 */}
            {/* Project 01: VANTABLACK */}
            <div className="col-span-1 md:col-span-8 group flex flex-col gap-1 md:gap-0">
               <div className="relative aspect-square md:aspect-video bg-zinc-950 overflow-hidden border border-zinc-50 group-hover:border-primary transition-colors">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUp7kDdB6Le2B-cgqUeGpveh9QnEUJmlOHLYhf9nKrjBsy8abRYOdqSSWdCFUM4Le26PAF4tOJl75cRWswD2lO9lWmEovGCdkb2xJr1irR20LgSoDaOHbQ_QAi1l0tuFNuvKfNp0DyHtR1ejPj9Z82VavaWbDci8rG7talukO88hW6nCZ0vOBkITxGfX5N6YzZLVgJ-dw8Upvftz0xs4eXBD62ikEbiQYK_CDy-UvQ1NyJ28vpWnXScjoAIWQbVkVdxbLlTxun1FM"
                  alt="Vantablack Cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-1 right-1 md:top-4 md:right-4">
                   <span className="material-symbols-outlined text-[10px] md:text-4xl text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="p-1 md:p-8 bg-zinc-900 md:bg-zinc-950 border-t border-zinc-800 md:border-zinc-50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-1">
                  <div>
                    <h4 className="font-headline text-[10px] md:text-6xl font-black uppercase text-zinc-50 leading-none truncate mb-1 md:mb-2 tracking-tighter">VANTABLACK</h4>
                    <p className="font-mono text-[7px] md:text-sm text-zinc-400 font-bold uppercase tracking-widest">LUX_PRODUCED</p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="font-mono text-[7px] md:text-sm text-zinc-600 uppercase block font-bold">ACT_2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 02: MIDNIGHT_SIN */}
            <div className="col-span-1 md:col-span-4 group flex flex-col gap-1 md:gap-0">
              <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-zinc-800 group-hover:border-zinc-50 transition-colors">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA85zCXgMaWP4K9bPVJISMSXIir24PKsizNOkWP4nRQkXx2k_tntuTjrYqdmf0ke3tehm4E_Q3Mg4WclMPglIcLN1TskzclGEXmsGaS_z-7uoifNRcYdg5xeF3fUzw49gDx39-n6J3CicsbLHqDci292gHBIZ7aazkYHJYpKyDhqiNNqgX4Ai2fhC-xewTDZDvH0kDnr311aXWPLEJXE4L9NjbcozNXmIjPXahOEowRb1fypHVgtnQPl6EzDenFifjJ2sEVUbp-LQw"
                  alt="Midnight Sin Cover"
                />
                <div className="absolute top-1 right-1">
                   <span className="material-symbols-outlined text-[10px] md:text-base text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="p-1 md:p-4 bg-zinc-900 md:bg-zinc-950 border-t border-zinc-900">
                <h4 className="font-headline text-[10px] md:text-2xl font-black uppercase text-zinc-50 truncate mb-1 tracking-tighter">MIDNIGHT_SIN</h4>
                <div className="flex flex-col gap-0.5">
                  <p className="font-mono text-[7px] md:text-[11px] text-zinc-400 font-bold uppercase tracking-widest">LUX_MIXED</p>
                  <span className="font-mono text-[7px] md:text-[11px] text-zinc-600 font-bold uppercase">ACT_2024</span>
                </div>
              </div>
            </div>

            {/* Project 03: CITY_LIGHTS */}
            <div className="col-span-1 md:col-span-4 group flex flex-col gap-1 md:gap-0">
              <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-zinc-800 group-hover:border-zinc-50 transition-colors">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbgDRhkiAI4UQhh5zfoDbL5dE_R5ToCFhzPKMIBdYAAa6dplad2AfwCQgX9rS2wzqAkPf-7xQ7nN1cYq7E0jS1DTz43QZeGcDKYVrUFNBl9UrUz2eZ0ep7mUg_8Au30o5bu6OQmmypio1Gc06HpvJ2_jDsOQx-ohC4NxbTEuCmTrSM6n6D7YyRINwd8JW3T4aIs13OOtNr45nf6LjxUZeqVrsKSZVhsdUkhMV9dIuul1eeI_2m35VHuXNJH4ZXjt_EGbgzGdcmnEQ"
                  alt="City Lights Cover"
                />
                <div className="absolute top-1 right-1">
                   <span className="material-symbols-outlined text-[10px] md:text-base text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="p-1 md:p-4 bg-zinc-900 md:bg-zinc-950 border-t border-zinc-900">
                <h4 className="font-headline text-[10px] md:text-2xl font-black uppercase text-zinc-50 truncate mb-1 tracking-tighter">CITY_LIGHTS</h4>
                <div className="flex flex-col gap-0.5">
                  <p className="font-mono text-[7px] md:text-[11px] text-zinc-400 font-bold uppercase tracking-widest">LUX_MASTER</p>
                  <span className="font-mono text-[7px] md:text-[11px] text-zinc-600 font-bold uppercase">ACT_2024</span>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            {/* Project 04: URBAN_ECHO */}
            <div className="col-span-1 md:col-span-4 group flex flex-col gap-1 md:gap-0">
              <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-zinc-800 group-hover:border-zinc-50 transition-colors">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPidq-Y2u-J0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0Z"
                  alt="Urban Echo Cover"
                />
                <div className="absolute top-1 right-1">
                   <span className="material-symbols-outlined text-[10px] md:text-base text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="p-1 md:p-4 bg-zinc-900 md:bg-zinc-950 border-t border-zinc-900">
                <h4 className="font-headline text-[10px] md:text-2xl font-black uppercase text-zinc-50 truncate mb-1 tracking-tighter">URBAN_ECHO</h4>
                <div className="flex flex-col gap-0.5">
                  <p className="font-mono text-[7px] md:text-[11px] text-zinc-400 font-bold uppercase tracking-widest">LUX_PROD</p>
                  <span className="font-mono text-[7px] md:text-[11px] text-zinc-600 font-bold uppercase">ACT_2024</span>
                </div>
              </div>
            </div>

            {/* Project 05: NEON_FLUX */}
            <div className="col-span-1 md:col-span-4 group flex flex-col gap-1 md:gap-0">
              <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-zinc-800 group-hover:border-zinc-50 transition-colors">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMp_7lY2u-J0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0Z"
                  alt="Neon Flux Cover"
                />
                <div className="absolute top-1 right-1">
                   <span className="material-symbols-outlined text-[10px] md:text-base text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="p-1 md:p-4 bg-zinc-900 md:bg-zinc-950 border-t border-zinc-900">
                <h4 className="font-headline text-[10px] md:text-2xl font-black uppercase text-zinc-50 truncate mb-1 tracking-tighter">NEON_FLUX</h4>
                <div className="flex flex-col gap-0.5">
                  <p className="font-mono text-[7px] md:text-[11px] text-zinc-400 font-bold uppercase tracking-widest">LUX_MIXED</p>
                  <span className="font-mono text-[7px] md:text-[11px] text-zinc-600 font-bold uppercase">ACT_2024</span>
                </div>
              </div>
            </div>

            {/* Project 06: BRUTAL_FLOW */}
            <div className="col-span-1 md:col-span-4 group flex flex-col gap-1 md:gap-0">
              <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-zinc-800 group-hover:border-zinc-50 transition-colors">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMp_7lY2u-J0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0ZidZ0Z"
                  alt="Brutal Flow Cover"
                />
                <div className="absolute top-1 right-1">
                   <span className="material-symbols-outlined text-[10px] md:text-base text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
              <div className="p-1 md:p-4 bg-zinc-900 md:bg-zinc-950 border-t border-zinc-900">
                <h4 className="font-headline text-[10px] md:text-2xl font-black uppercase text-zinc-50 truncate mb-1 tracking-tighter">BRUTAL_FLOW</h4>
                <div className="flex flex-col gap-0.5">
                  <p className="font-mono text-[7px] md:text-[11px] text-zinc-400 font-bold uppercase tracking-widest">LUX_DESIGN</p>
                  <span className="font-mono text-[7px] md:text-[11px] text-zinc-600 font-bold uppercase">ACT_2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Collab Protocol Section --- */}
        <section className="px-4 md:px-12 mt-20 border-t-8 border-zinc-50 bg-zinc-950 overflow-hidden">
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            <div className="py-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-zinc-800 flex flex-col justify-between md:min-h-[500px]">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8 text-zinc-50">COLLAB<br />PROTOCOL</h2>
                <div className="space-y-4 font-mono text-xs text-zinc-600 uppercase">
                  <p>[ PHASE 01: INITIAL_CONTACT ]</p>
                  <p>[ PHASE 02: ASSET_EXCHANGE ]</p>
                  <p>[ PHASE 03: REFINEMENT_LOOP ]</p>
                  <p>[ PHASE 04: FINAL_RENDER ]</p>
                </div>
              </div>
              <div className="pt-10 md:pt-20">
                <p className="font-mono text-sm leading-relaxed max-w-sm text-zinc-400">
                  WE DO NOT ACCEPT UNSOLICITED DEMOS. FILL THE PROTOCOL FORM FOR ARCHITECTURAL EVALUATION.
                </p>
              </div>
            </div>
            <div className="hidden lg:block p-12 bg-black/50">
              <form className="space-y-8">
                <div className="group relative">
                  <label className="font-mono text-[10px] text-zinc-600 uppercase block mb-2">IDENTIFICATION / NAME</label>
                  <input className="w-full bg-transparent border-b-2 border-zinc-800 focus:border-zinc-50 text-zinc-50 font-mono uppercase text-sm p-2 outline-none transition-colors placeholder:text-zinc-800" placeholder="ENTITY_NAME_REQUIRED" type="text" />
                </div>
                <div className="group relative">
                  <label className="font-mono text-[10px] text-zinc-600 uppercase block mb-2">COMMS / EMAIL</label>
                  <input className="w-full bg-transparent border-b-2 border-zinc-800 focus:border-zinc-50 text-zinc-50 font-mono uppercase text-sm p-2 outline-none transition-colors placeholder:text-zinc-800" placeholder="COMMS_CHANNEL_REQUIRED" type="email" />
                </div>
                <div className="group relative">
                  <label className="font-mono text-[10px] text-zinc-600 uppercase block mb-2">PROJECT_TYPE</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border border-zinc-50 bg-zinc-50 text-zinc-950 py-2 font-mono text-[10px] uppercase" type="button">PRODUCTION</button>
                    <button className="border border-zinc-800 text-zinc-600 py-2 font-mono text-[10px] uppercase hover:border-zinc-50 hover:text-zinc-50 transition-colors" type="button">MIXING/MASTERING</button>
                    <button className="border border-zinc-800 text-zinc-600 py-2 font-mono text-[10px] uppercase hover:border-zinc-50 hover:text-zinc-50 transition-colors" type="button">SOUND_DESIGN</button>
                    <button className="border border-zinc-800 text-zinc-600 py-2 font-mono text-[10px] uppercase hover:border-zinc-50 hover:text-zinc-50 transition-colors" type="button">CONSULTATION</button>
                  </div>
                </div>
                <div className="group relative">
                  <label className="font-mono text-[10px] text-zinc-600 uppercase block mb-2">PROJECT_MANIFESTO</label>
                  <textarea className="w-full bg-transparent border-2 border-zinc-800 focus:border-zinc-50 text-zinc-50 font-mono uppercase text-sm p-4 outline-none transition-colors placeholder:text-zinc-800 resize-none" placeholder="DESCRIBE_THE_VISION" rows={4}></textarea>
                </div>
                <button className="group flex items-center justify-between w-full bg-zinc-50 text-zinc-950 p-6 font-headline font-black uppercase text-xl hover:bg-zinc-950 hover:text-zinc-50 border-2 border-zinc-50 transition-all" type="button">
                  <span>INITIATE_HANDSHAKE</span>
                  <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* --- Footer Visual --- */}
        <section className="hidden md:flex border-y-2 border-zinc-800 p-6 flex-wrap justify-between items-center gap-4 opacity-30 mt-12">
          <span className="font-mono text-[10px] uppercase">EST_2018</span>
          <span className="font-mono text-[10px] uppercase">ALL_RIGHTS_RESERVED</span>
          <span className="font-mono text-[10px] uppercase">LUXBEATZ_PRODUCER_SUITE</span>
          <span className="font-mono text-[10px] uppercase">BUILD_8832_STABLE</span>
        </section>
      </main>
      <BottomNav />
    </>
  );
}
