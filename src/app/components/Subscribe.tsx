"use client"; 
import { useState, useRef } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Subscribe() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubscribed(true);

    if (formRef.current) {
      formRef.current.reset();
    }

    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section id="subscribe" className="w-full flex flex-col items-center mt-40 px-4 relative">

      {isSubscribed && (
        <div className="fixed top-10 right-5 md:right-10 z-100 animate-in slide-in-from-right duration-500">
          <div className="bg-[#E0A872] text-[#2B1B17] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
            <CheckCircle2 className="text-[#2B1B17]" size={24} />
            <div className="flex flex-col">
              <span className="font-bold text-sm">Success!</span>
              <span className="text-xs opacity-80">You&apos;ve joined our coffee club.</span>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl bg-linear-to-br from-[#2B1B17] via-[#422B22] to-[#6B4633] rounded-[50px] p-12 md:p-16 shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-10 border border-[#F7E1BC]/5">

        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #F7E1BC 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <h2 className="dancing-script text-4xl md:text-5xl text-secondary">
            Join Our Coffee Club
          </h2>
          <p className="text-[#F7E1BC]/70 text-sm md:text-base max-w-md tracking-wide leading-relaxed">
            Subscribe to our newsletter for exclusive discounts, brewing tips, and new bean promotions.
          </p>
        </div>

        <form 
          ref={formRef}
          onSubmit={handleSubscribe}
          className="relative z-10 w-full max-w-lg flex flex-col md:flex-row gap-4"
        >
          <div className="relative flex-1 group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#F7E1BC]/40 group-focus-within:text-[#E0A872] transition-colors">
              <Mail size={20} />
            </div>
            
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="w-full pl-14 pr-6 py-4 rounded-full bg-[#F7E1BC]/5 border border-[#F7E1BC]/10 text-[#F7E1BC] placeholder-[#F7E1BC]/30 outline-none focus:ring-2 focus:ring-[#E0A872] focus:bg-[#F7E1BC]/10 transition-all"
            />
          </div>

          <button 
            type="submit"
            className="px-10 py-4 bg-secondary text-accent font-bold uppercase tracking-widest rounded-full hover:bg-[#d19a65] hover:shadow-[0_0_20px_rgba(224,168,114,0.3)] active:scale-95 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="relative z-10 text-[10px] text-[#F7E1BC]/30 uppercase tracking-[0.2em]">
          No spam, just freshly brewed content.
        </p>

      </div>
    </section>
  );
}