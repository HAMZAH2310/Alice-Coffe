"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ReserveTable() {
  const [submited, setSubmited] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmited(true);

    formRef.current?.reset();

    setTimeout(() => {
      setSubmited(false);
    }, 3000);
  };

  const inputClass = `
    w-full
    pl-12
    pr-4
    py-3
    rounded-xl
    bg-[#F7E1BC]/90
    text-[#2B1B17]
    placeholder-[#2B1B17]/60
    outline-none
    focus:ring-2
    focus:ring-[#E0A872]
  `;

  return (
    <section className="w-full flex flex-col items-center mt-30 gap-8">

      {submited && (
        <div className="fixed top-8 right-8 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl animate-fade-in z-50">
          ✅ Reservation Successful!
        </div>
      )}

      <h1 className="dancing-script text-4xl text-secondary">
        Reserve Table
      </h1>

      <div className="w-300 h-105 bg-linear-to-l from-[#2B1B17] to-[#6B4633] rounded-4xl flex overflow-hidden">

        <div className="w-1/2 mt-20 flex items-center justify-center">
          <Image
            src="/Images/Reserve-Img.png"
            alt="Reserve Table"
            width={329}
            height={372}
            priority
          />
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            <div className="relative w-72">
              <input
                type="date"
                required
                className={`${inputClass} cursor-pointer
                  [&::-webkit-calendar-picker-indicator]:bg-transparent
                  [&::-webkit-calendar-picker-indicator]:absolute
                  [&::-webkit-calendar-picker-indicator]:left-0
                  [&::-webkit-calendar-picker-indicator]:w-full
                `}
              />
            </div>

            <div className="relative w-72">
              <input
                type="time"
                required
                className={`${inputClass} cursor-pointer
                  [&::-webkit-calendar-picker-indicator]:bg-transparent
                  [&::-webkit-calendar-picker-indicator]:absolute
                  [&::-webkit-calendar-picker-indicator]:left-0
                  [&::-webkit-calendar-picker-indicator]:w-full
                `}
              />
            </div>

            <Input
              type="text"
              placeholder="Your Name"
              icon="/Images/person.png"
            />

            <Input
              type="tel"
              placeholder="Your Phone"
              icon="/Images/Phone.png"
            />

            <Input
              type="email"
              placeholder="Your Email"
              icon="/Images/Email.png"
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                bg-[#E0A872]
                text-[#2B1B17]
                font-bold
                rounded-xl
                hover:bg-[#d19a65]
                transition-all
                active:scale-95
              "
            >
              Book Now
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}


function Input({
  type,
  placeholder,
  icon,
}: {
  type: string;
  placeholder: string;
  icon: string;
}) {
  return (
    <div className="relative w-72">
      <input
        type={type}
        placeholder={placeholder}
        required
        className="
          w-full
          pl-12
          pr-4
          py-3
          rounded-xl
          bg-[#F7E1BC]/90
          text-[#2B1B17]
          placeholder-[#2B1B17]/60
          outline-none
          focus:ring-2
          focus:ring-[#E0A872]
        "
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image src={icon} alt="icon" width={20} height={20} />
      </div>
    </div>
  );
}
