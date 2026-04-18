import React from "react";

export function Hero({ title = "THE_\nBEAT_\nVAULT" }: { title?: string }) {
  return (
    <section className="px-4 md:px-12 pt-8 md:pt-12 pb-16 md:pb-24 border-b-4 border-primary">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12">
        <div className="flex-1 w-full">
          <p className="font-headline text-[0.6rem] md:text-[0.6875rem] tracking-[0.2em] md:tracking-[0.3em] text-outline mb-3 md:mb-4 uppercase">
            NEW_RELEASES / 2024_COLLECTION
          </p>
          <h2 className="font-headline text-[4.5rem] leading-[0.85] md:text-7xl lg:text-[10rem] font-black md:leading-[0.8] tracking-tighter uppercase text-primary break-words whitespace-pre-line">
            {title}
          </h2>
        </div>

        <div className="w-full md:w-[40%] flex flex-col gap-6">
          <p className="text-sm text-on-surface-variant max-w-full md:max-w-xs leading-relaxed border-l-2 border-primary pl-4">
            PROFESSIONAL BEATS AND PRODUCTION SERVICES TAILORED FOR INDEPENDENT ARTISTS. 
            SECURE YOUR SIGNATURE SOUND TODAY.
          </p>
          <div className="group flex items-center justify-between bg-primary text-on-primary p-4 md:p-6 cursor-pointer hover:bg-surface-container-highest hover:text-primary transition-colors duration-100">
            <span className="font-headline font-bold uppercase tracking-widest text-sm md:text-base">
              BROWSE_BEATS
            </span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>

      </div>
    </section>
  );
}
