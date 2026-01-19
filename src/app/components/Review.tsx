"use client";
import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "Tyler",
    role: "Student",
    img: "/Images/Profile1.png",
    rating: 4,
    desc: "I Love Spending My Downtime In A Cozy Coffee Shop, Surrounded By The Sweet Aroma Of Freshly Brewed Drinks And Pastries."
  },
  {
    name: "James",
    role: "Designer",
    img: "/Images/Profile.png",
    rating: 5,
    desc: "The ambiance is perfect for working and relaxing. Their coffee tastes amazing and always fresh."
  },
  {
    name: "Amelia",
    role: "Freelancer",
    img: "/Images/Profile2.png",
    rating: 4,
    desc: "A calm place with friendly staff and excellent pastries. Highly recommended."
  }
];


function Starts({count} : {count: number}) {
  return(
    <div className="flex gap-1 justify-center mt-3">
      {[...Array(5)].map((_,i) =>(
        <span key={i} className={i < count ? "text-[#E0A872]" : "text-secondary/30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function CustomerReview() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((p) => (p === 0 ? reviews.length - 1 : p - 1));
  const next = () => setActive((p) => (p === reviews.length - 1 ? 0 : p + 1));

  return (
    <section id="review" className="w-full flex flex-col items-center mt-40 gap-12">
      <h1 className="dancing-script text-5xl text-secondary">
        Customer Review
      </h1>

      <div className="relative w-275 h-105 bg-linear-to-br from-[#2B1B17] via-[#422B22] to-[#6B4633] rounded-[50px] flex items-center justify-center overflow-hidden shadow-2xl">
        <button onClick={prev} className="absolute left-6 text-secondary text-4xl hover:text-[#E0A872] transition">
          ‹
        </button>

         <button onClick={next} className="absolute right-6 text-secondary text-4xl hover:text-[#E0A872] transition">
          ›
        </button>

        <div className="flex items-center gap-10">
          {reviews.map((item,i) => {
            const isActive = i === active;

            return(
              <div
                key={i}
                className={`
                  transition-all duration-500
                  ${isActive ? "scale-100 opacity-100 z-10" : "scale-75 opacity-40 blur-sm"}
                `}
              >
                <div className={`
                  w-75 h-86=5 rounded-[30px] p-8 text-center
                  ${isActive ? "bg-[#6B4633]" : "bg-[#3A2A24]"}
                `}>
                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-[#E0A872]"
                    />
                  </div>

                  <h3 className="text-secondary text-xl font-serif">{item.name}</h3>
                  <p className="text-secondary/60 text-sm">{item.role}</p>

                  <Starts count={item.rating}/>

                  <p className="text-secondary/80 text-sm mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}