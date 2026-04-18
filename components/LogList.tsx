import React from "react";

export function LogList() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-10 md:mb-16 gap-4">
        <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter">
          LATEST_NEWS
        </h2>
        <span className="font-mono text-xs text-outline">[ VIEW_ALL ]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        <div className="border-2 border-outline-variant p-6 md:p-8 group hover:border-primary transition-colors bg-surface-container-low">
          <div className="aspect-video bg-surface mb-6 overflow-hidden">
            <img
              alt="Mixing console"
              className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_NhBClZMSLXyFKSBKea52elSRK21OJbXyJQlu_ESbEr07zdXVu7KlgBWFbCRwKOzs-aaITaGQ5VGIje_1886FISNpq2ixwYj8L_mupOTgpdH6ROrpK_JbmHgy98AhEezEZ6yy9pzgfQkCSoaOtqgaT73Q1m8quoNvCG2IVrOEE0pkhS90mD2nca5pDDuikRRIxPdB1JvfEGejSmzmcFixm-bgn24l-KCKuZcad3ew-VcWctOWyPbByP4rk57RzJMsmqaMYcciukA"
            />
          </div>
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-[10px] bg-primary text-on-primary px-2 py-1">
              LOG_088
            </span>
            <span className="font-mono text-[10px] text-outline">
              2024.10.12
            </span>
          </div>
          <h4 className="font-headline text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">
            Drum Processing Chain #4
          </h4>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            Technical breakdown of the parallel compression and saturation used
            for the upcoming 'VOID' LP.
          </p>
          <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest">
              READ_MORE
            </span>
            <span className="material-symbols-outlined text-sm">north_east</span>
          </div>
        </div>
        <div className="border-2 border-outline-variant border-t-0 md:border-t-2 p-6 md:p-8 group hover:border-primary transition-colors bg-surface-container-low md:border-l-0">
          <div className="aspect-video bg-surface mb-6 overflow-hidden">
            <img
              alt="Reel to reel"
              className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNSL-EO87Ki8QEsSFlSmmNR-f96avl0e_6rfenj4vMjJUpHVwR3Hm5D0JhmH_zBtmR7fIsNXQR_0FNkuzWBoQsuvVm1SYguKBHFswuBn79OkpyQPj2d8AkIXZN4FlSeKgizLbd882BlDgYSgFe2jLME5MN5qlTwsnl-0JK9PZBzTclQuGcdeUyErMQjvtxARMH5n5n_9NY9Wr5ZlzuQsolspZyXBYhmfI_XeWeb3VCicf1weQilaiGbEAdeHqP9daWMBrYKEA_b2o"
            />
          </div>
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-[10px] bg-primary text-on-primary px-2 py-1">
              LOG_087
            </span>
            <span className="font-mono text-[10px] text-outline">
              2024.10.05
            </span>
          </div>
          <h4 className="font-headline text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">
            Analog Saturation Tests
          </h4>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            Comparison between various hardware tape machines and digital
            emulations in a blind test scenario.
          </p>
          <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest">
              READ_MORE
            </span>
            <span className="material-symbols-outlined text-sm">north_east</span>
          </div>
        </div>
        <div className="border-2 border-outline-variant border-t-0 lg:border-t-2 p-6 md:p-8 group hover:border-primary transition-colors bg-surface-container-low md:border-t-0 lg:border-l-0">
          <div className="aspect-video bg-surface mb-6 overflow-hidden">
            <img
              alt="Audio cables"
              className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjRXmxPg9YVuZDWMqf_yphu0CfFDNTzLU4Uzzqal-fCXWTVzIudgKUrCRyMMy8JKXqWn4FDOo9uF307XT7uig8_VI0E1dxmyAafoXNHKsDs5J8y1E0vQAwoXfLpWhx3yqfkys98ucDuP70SRUUCm4QIm4YonIesEU78tjPdc5pSIzuqpTyK-zcBjCFMS5PlrztbTS-QI7Ti25KowNSp8VXR3CMYf5KfbBuO3vncQUYdZzZtLgAaX0XtTdZNVPQy3-fEEsBfmeFW4w"
            />
          </div>
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-[10px] bg-primary text-on-primary px-2 py-1">
              LOG_086
            </span>
            <span className="font-mono text-[10px] text-outline">
              2024.09.28
            </span>
          </div>
          <h4 className="font-headline text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">
            Field Recording: Subway
          </h4>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            Capturing low-frequency vibrations and metallic screeching at the 42nd
            St station for cinematic layering.
          </p>
          <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest">
              READ_MORE
            </span>
            <span className="material-symbols-outlined text-sm">north_east</span>
          </div>
        </div>
      </div>
    </section>
  );
}
