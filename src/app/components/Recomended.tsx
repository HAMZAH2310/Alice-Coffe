"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  { 
    src: "/Images/Arabica.png", 
    alt: "Arabica", 
    name: "Arabica",
    roast: "Dark Roast",
    info: "Smooth taste with floral aroma and balanced acidity."
  },
  { 
    src: "/Images/House Blend.png", 
    alt: "House Blend", 
    name: "House Blend",
    roast: "Dark Roast",
    info: "Signature blend with bold flavor and rich body."
  },
  { 
    src: "/Images/Robusa.png", 
    alt: "Robusta", 
    name: "Robusta",
    roast: "Dark Roast",
    info: "Strong caffeine, earthy notes, and intense bitterness."
  },
];

export default function Recommended() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full flex flex-col items-center mt-40 px-4">
      <h1 className="dancing-script text-5xl text-secondary mb-16 tracking-wide">
        Our Best Recommendations
      </h1>

      <div className="flex flex-wrap justify-center gap-12">
        {products.map((item, index) => (
          <div
            key={index}
            className="
              group relative
              bg-radial from-[#422B22] to-accent 
              p-8 rounded-[40px] 
              w-72
              flex flex-col items-center
              transition-all duration-500 
              hover:-translate-y-4 
              hover:shadow-[0_20px_50px_rgba(43,27,23,0.4)]
            "
          >
            {/* Info Button - Lebih Stylist */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="
                absolute top-6 left-6
                w-8 h-8 rounded-full
                bg-secondary/20 backdrop-blur-md
                border border-secondary/30
                text-secondary text-sm font-serif italic
                flex items-center justify-center
                hover:bg-secondary hover:text-accent
                transition-all duration-300 z-30
              "
            >
              i
            </button>

            {/* Info Tooltip/Pop-up dengan Animasi Sederhana */}
            {openIndex === index && (
              <div className="
                absolute inset-0 z-20 
                bg-[#2B1B17]/95 backdrop-blur-sm
                rounded-[40px] p-8 
                flex items-center justify-center text-center
                animate-in fade-in zoom-in duration-300
              ">
                <button 
                  onClick={() => setOpenIndex(null)}
                  className="absolute top-6 right-6 text-[#F8E4BE]/50 hover:text-[#F8E4BE]"
                >
                  ✕
                </button>
                <p className="text-[#F8E4BE] text-sm leading-relaxed font-light italic">
                  {item.info}
                </p>
              </div>
            )}

            <div className="relative w-48 h-48 flex justify-center items-center group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full" />
              <Image
                src={item.src}
                alt={item.alt}
                width={180}
                height={180}
                className="relative z-10 object-contain drop-shadow-2xl"
              />
            </div>

            <div className="mt-8 flex flex-col items-center w-full">
              <h3 className="text-secondary text-2xl font-bold tracking-tight mb-1">
                {item.name}
              </h3>
              <p className="text-secondary/60 text-xs uppercase tracking-[0.2em] font-medium mb-6">
                {item.roast}
              </p>
              
              <button className="
                w-full py-3 
                bg-secondary text-accent 
                rounded-2xl font-bold 
                hover:bg-[#d19a65] active:scale-95 
                transition-all duration-300
                shadow-lg shadow-black/20
              ">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}