import React from "react";

export function Newsletter() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-32 bg-primary text-on-primary">
      <div className="max-w-4xl">
        <h3 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-none break-words">
          JOIN_THE_FREQUENCY_LIST
        </h3>
        <p className="text-lg md:text-xl mb-8 md:mb-12 font-medium">
          RECEIVE EXCLUSIVE SAMPLE PACKS AND TECHNICAL LOGS DIRECTLY TO YOUR
          TERMINAL.
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
          <input
            className="flex-1 bg-transparent border-2 md:border-4 border-on-primary p-4 md:p-6 text-on-primary placeholder:text-on-primary/50 focus:ring-0 focus:outline-none font-mono text-base md:text-xl"
            placeholder="ENTER_EMAIL_ADDRESS"
            type="email"
          />
          <button className="bg-on-primary text-primary px-8 md:px-12 py-4 md:py-6 font-headline font-black text-lg md:text-xl hover:invert transition-all">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
