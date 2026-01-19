"use client";
import { useState } from "react";

const blogs = [
  {
    title: "How To Make A Great Coffee",
    date: "15 JAN 2026",
    category: "TIPS & TRICKS",
    desc: "Making a cup of coffee doesn’t have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press. Measure out two tablespoons of ground coffee per eight ounces of water for the perfect balance. \n\nThe next step is to ensure the water temperature is between 90-96 degrees Celsius. Do not use boiling water, as it will burn the coffee grounds and destroy their natural flavor. Let the coffee steep for 4 minutes before slowly pressing the plunger."
  },
  {
    title: "Why Does Caffeine Stay Awake?",
    date: "18 JAN 2026",
    category: "HEALTH",
    desc: "Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy. \n\nAdenosine is a molecule that accumulates in the brain throughout the day and makes us feel sleepy. When caffeine enters the body, it tricks the brain into occupying these receptors, temporarily delaying the feeling of tiredness."
  },
  {
    title: "Different Types Of Coffee",
    date: "20 JAN 2026",
    category: "KNOWLEDGE",
    desc: "Coffee is a staple in the lives of many people around the world. From espresso to latte, each type offers a unique flavor profile. Exploring these varieties can help you find your perfect cup. \n\nEspresso is the base of almost all popular coffee drinks. Latte has a higher proportion of milk compared to Cappuccino which emphasizes foam. Meanwhile, Americano is espresso diluted with hot water for a lighter taste."
  }
];

export default function OurBlog() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  const nextSlide = () => {
    if (startIndex + 3 < blogs.length) setStartIndex(startIndex + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <section id="blog" className="w-full flex flex-col items-center mt-30 gap-12 px-10 relative">
 
      <div className="flex items-center gap-6">
        <div className="w-12 h-px bg-secondary/40" />
        <h1 className="dancing-script text-5xl text-secondary">Our Blog</h1>
        <div className="w-12 h-px bg-secondary/40" />
      </div>

      <div className="relative w-full max-w-7xl group">

        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <button onClick={prevSlide} disabled={startIndex === 0} className={`p-4 rounded-full transition-all ${startIndex === 0 ? 'text-secondary/20' : 'text-secondary hover:bg-secondary hover:text-accent'}`}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>

        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <button onClick={nextSlide} disabled={startIndex + 3 >= blogs.length} className={`p-4 rounded-full transition-all ${startIndex + 3 >= blogs.length ? 'text-secondary/20' : 'text-secondary hover:bg-secondary hover:text-accent'}`}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <div className="w-full min-h-110 bg-linear-to-br from-[#2B1B17] via-[#422B22] to-[#6B4633] rounded-[60px] px-12 py-16 shadow-2xl overflow-hidden">
          <div className="flex gap-8">
            {blogs.slice(startIndex, startIndex + 3).map((blog, i) => (
              <div key={i} className="flex-1 bg-[#F7E1BC]/10 border border-secondary/10 rounded-[40px] p-10 flex flex-col justify-between text-secondary transition-all duration-500 hover:bg-[#F7E1BC]/20 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] tracking-[0.3em] font-bold text-[#E0A872] uppercase">{blog.category}</span>
                    <span className="text-[10px] text-secondary/40 font-medium">{blog.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 leading-snug text-secondary">{blog.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary/70 line-clamp-4">{blog.desc}</p>
                </div>
                
                <div 
                  onClick={() => setSelectedBlog(blog)} 
                  className="mt-8 flex items-center gap-3 cursor-pointer w-fit group"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary/70 group-hover:text-[#E0A872] transition">Read Story</span>
                  <div className="h-px w-8 bg-secondary/30 group-hover:w-14 group-hover:bg-[#E0A872] transition-all"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

{selectedBlog && (
  <div 
    className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
    onClick={() => setSelectedBlog(null)} // Klik di luar untuk tutup
  >
    <div 
      className="relative w-full max-w-2xl bg-[#2B1B17] border border-secondary/30 rounded-[40px] p-10 shadow-2xl animate-in zoom-in-95 duration-300"
      onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam ikut menutup modal
    >
      
      {/* Close Button - Diperjelas warnanya */}
      <button 
        onClick={() => setSelectedBlog(null)}
        className="absolute top-8 right-8 text-secondary hover:text-white hover:rotate-90 transition-all duration-300 z-[110]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Modal Content */}
      <div className="flex flex-col">
        <span className="text-[10px] tracking-[0.4em] font-bold text-[#E0A872] mb-3 uppercase">
          {selectedBlog.category}
        </span>
        
        {/* Judul dibuat Putih/Sangat Terang agar kontras */}
        <h2 className="font-serif text-4xl text-[#F7E1BC] mb-4 leading-tight">
          {selectedBlog.title}
        </h2>
        
        <span className="text-xs text-secondary/60 mb-8 font-medium italic">
          {selectedBlog.date} — 5 Min Read
        </span>
        
        <div className="w-16 h-1 bg-[#E0A872] mb-8" />
        
        <div className="max-h-80 overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-secondary/20 scrollbar-track-transparent">
          <p className="text-[#F7E1BC]/90 leading-[1.8] text-lg whitespace-pre-line font-light">
            {selectedBlog.desc}
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
}