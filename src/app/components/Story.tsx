"use client";
import Image from "next/image";
import { useState } from "react";


export default function Story() {
  const [open,setOpen] = useState(false);
  return (
    <>
      <section className="w-full flex justify-center mt-30">
      <div className="w-300 h-105 bg-linear-to-r from-[#2B1B17] to-[#6B4633] rounded-4xl flex overflow-hidden relative">

        <div className="w-1/2 relative mt-20">
          <Image
            src="/Images/Image-ourstory.png"
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-1/2 p-12 flex flex-col justify-between text-secondary">

          <h1 className="dancing-script text-4xl absolute top-6 right-10">
            Our Story
          </h1>

          <p className="text-base leading-relaxed max-w-105 mt-16">
            Eliza is an online coffee store that offers the widest selection of
            specially coffees and teas from around the world. From medium-dark
            roast single origin to flavored espresso beans, they offer a
            variety of ethically sourced products to tantalize any customer’s
            palate. For those looking for unique brewing equipment, Eliza also
            carries a full range of quality espresso makers, grinders,
            brewers...
          </p>

          <button
            onClick={() => setOpen(true)}
            className="self-end underline underline-offset-4 hover:text-white transition cursor-pointer"
          >
            More
          </button>
        </div>
      </div>
    </section>

    {open && (
      <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="w-225 max-h-[80vh] bg-linear-to-r from-[#2B1B17] to-[#6B4633] rounded-4xl p-12 relative overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-secondary text-2xl hover:text-white cursor-pointer"
          >
             ✕
          </button>

          <h1 className="dancing-script text-5xl text-secondary mb-8">Our Story</h1>

           <p className="text-secondary text-lg leading-relaxed">
              Eliza is an online coffee store that offers the widest selection of
              specialty coffees and teas from around the world. From medium-dark
              roast single origin to flavored espresso beans, they offer a wide
              variety of ethically sourced products to tantalize any customer’s
              palate.
              <br /><br />
              For those looking for unique brewing equipment, Eliza also carries
              a full range of quality espresso makers, grinders, brewers, and
              accessories. Our passion is delivering warmth, quality, and a
              memorable coffee experience to every customer.
            </p>
        </div>
      </div>
    )}
    </>

  );
}
