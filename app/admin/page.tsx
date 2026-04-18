"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("inventory");

  const stats = [
    { label: "TOTAL_BEATS", value: "24", trend: "+2" },
    { label: "NEW_INQUIRIES", value: "08", trend: "URGENT" },
    { label: "CATEGORIES_ACTIVE", value: "12", trend: "SYSTEM_OK" },
    { label: "SYSTEM_STATUS", value: "ONLINE", trend: "0ms_LATENCY" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-32 px-4 md:px-12 lg:px-24 bg-zinc-950 text-zinc-50">
        {/* Admin Header */}
        <header className="mb-12 border-b-4 border-zinc-50 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase mb-2">ACCESS_LEVEL: SUPER_USER</p>
            <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter italic">ADMIN_TERMINAL</h1>
          </div>
          <div className="flex gap-4">
            <button className="border border-zinc-700 px-6 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-zinc-50 hover:text-zinc-950 transition-all">VIEW_STOREFRONT</button>
            <button className="bg-red-900/20 text-red-500 border border-red-900/50 px-6 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">TERMINATE_SESSION</button>
          </div>
        </header>

        {/* Analytics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border-2 border-zinc-800 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-zinc-950 p-6 flex flex-col gap-2">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{stat.label}</span>
              <span className="font-headline text-3xl font-black">{stat.value}</span>
              <span className={`font-mono text-[8px] uppercase tracking-tighter ${stat.trend.includes('+') ? 'text-green-500' : 'text-primary'}`}>{stat.trend}</span>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-zinc-800 mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {["inventory", "categories", "inquiries", "projects", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 font-mono text-[10px] uppercase tracking-[0.4em] transition-all border-b-2 ${
                activeTab === tab ? "border-zinc-50 text-zinc-50" : "border-transparent text-zinc-600 hover:text-zinc-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <section className="min-h-[400px]">
          {activeTab === "inventory" && (
            <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
              <div className="flex justify-between items-center">
                <h2 className="font-headline text-3xl font-black uppercase italic">BEAT_ARCHIVE</h2>
                <button className="bg-zinc-50 text-zinc-950 px-8 py-3 font-headline font-black text-xs uppercase tracking-widest hover:invert transition-all flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">add</span>
                    UPLOAD_NEW_BEAT
                </button>
              </div>

              <div className="border border-zinc-800 overflow-x-auto">
                <table className="w-full text-left font-mono text-[10px] md:text-sm whitespace-nowrap">
                  <thead>
                    <tr className="bg-zinc-900 border-b border-zinc-800">
                      <th className="p-4 uppercase tracking-widest text-zinc-500">ID</th>
                      <th className="p-4 uppercase tracking-widest text-zinc-500">TRACK_TITLE</th>
                      <th className="p-4 uppercase tracking-widest text-zinc-500">CATEGORY</th>
                      <th className="p-4 uppercase tracking-widest text-zinc-500">STATUS</th>
                      <th className="p-4 uppercase tracking-widest text-zinc-500 text-right">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "001", title: "KINETIC_FLOW", category: "Trap", status: "ACTIVE" },
                      { id: "002", title: "BRUTAL_VOID", category: "Drill", status: "ACTIVE" },
                      { id: "004", title: "URBAN_ECHO", category: "R&B", status: "PENDING" },
                    ].map((beat) => (
                      <tr key={beat.id} className="border-b border-zinc-900 hover:bg-zinc-900/30 transition-colors">
                        <td className="p-4 text-zinc-600">{beat.id}</td>
                        <td className="p-4 font-bold">{beat.title}</td>
                        <td className="p-4">
                            <span className="bg-zinc-900 px-2 py-1 border border-zinc-800 text-[9px] uppercase">{beat.category}</span>
                        </td>
                        <td className="p-4 text-[9px]">
                          <span className={`px-2 py-0.5 rounded-full ${beat.status === 'ACTIVE' ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 text-primary'}`}>
                            {beat.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="material-symbols-outlined text-sm text-zinc-500 hover:text-zinc-50 mr-4">edit</button>
                          <button className="material-symbols-outlined text-sm text-zinc-500 hover:text-red-500">delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "categories" && (
            <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
                <div className="flex justify-between items-center">
                    <h2 className="font-headline text-3xl font-black uppercase italic">SIGNAL_CATEGORIES</h2>
                </div>

                {/* Add Category Tool */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 max-w-2xl">
                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 underline decoration-zinc-800 underline-offset-8">ADD_NEW_CATEGORY_PROTOCOL</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="CATEGORY_NAME (e.g. Jersey Club)" className="flex-1 bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs focus:border-zinc-50 outline-none transition-colors" />
                        <button className="bg-zinc-50 text-zinc-950 px-8 py-4 font-headline font-black text-xs uppercase tracking-widest hover:invert transition-all">INITIALIZE_CATEGORY</button>
                    </div>
                </div>

                {/* Categories Table */}
                <div className="border border-zinc-800 max-w-4xl">
                    <table className="w-full text-left font-mono text-[10px] md:text-sm">
                        <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-500">
                            <tr>
                                <th className="p-4 uppercase tracking-tighter">CATEGORY_IDENTIFIER</th>
                                <th className="p-4 uppercase tracking-tighter text-center">LINKED_BEATS</th>
                                <th className="p-4 uppercase tracking-tighter text-right">MODIFICATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "Trap", count: "12" },
                                { name: "Drill", count: "05" },
                                { name: "Phonk", count: "03" },
                                { name: "R&B", count: "04" },
                            ].map((cat) => (
                                <tr key={cat.name} className="border-b border-zinc-900 group">
                                    <td className="p-4 font-bold md:text-lg">{cat.name}</td>
                                    <td className="p-4 text-center">
                                        <span className="bg-zinc-900 px-3 py-1 border border-zinc-800 text-zinc-500">{cat.count}</span>
                                    </td>
                                    <td className="p-4 text-right opacity-50 group-hover:opacity-100 transition-opacity">
                                        <button className="material-symbols-outlined text-sm text-zinc-500 hover:text-red-500">delete_forever</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-zinc-900">
              <span className="material-symbols-outlined text-5xl text-zinc-800 mb-4">mail</span>
              <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest">No_Active_Transmission_Protocols</p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="max-w-xl space-y-8 animate-[fadeIn_0.5s_ease-out]">
                <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase">STORE_NAME</label>
                    <input type="text" defaultValue="LUXBEATZ_OFFICIAL" className="bg-zinc-900 border border-zinc-800 p-4 font-headline font-bold text-xl focus:border-zinc-50 outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase">MAINTENANCE_MODE</label>
                    <div className="flex gap-4">
                        <button className="flex-1 border-2 border-zinc-50 py-3 font-bold uppercase tracking-widest">OFF</button>
                        <button className="flex-1 border border-zinc-800 py-3 font-bold text-zinc-600 uppercase tracking-widest">ON</button>
                    </div>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 font-headline font-black text-xl uppercase tracking-widest hover:invert transition-all">SAVE_RECONFIGURATION</button>
            </div>
          )}
        </section>
      </main>
      <BottomNav />
    </>
  );
}
