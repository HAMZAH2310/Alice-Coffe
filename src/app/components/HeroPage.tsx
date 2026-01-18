import Link from "next/link";
import Image from "next/image";

export default function HeroPage() {
  return (
    <section className="w-full min-h-screen flex bg-[#1A1310]"> 
      <div className="w-1/2 flex flex-col justify-center pl-27 relative z-10">
        <h1 className="custom-text text-[112px] leading-none">
          Alice Coffee
        </h1>

        <h3 className="text-secondary text-[24px] mt-21.5 max-w-130">
          Today&apos;s good mood is sponsored by coffee
          search for your coffee now
        </h3>

        <div className="flex gap-6 mt-12">
          <Link href="#">
            <button className="p-0.5 rounded-full bg-[linear-gradient(to_right,rgba(224,168,114,0),rgba(248,228,190,0.44),rgba(255,243,224,0.55),#E0A872)] shadow-lg transition hover:scale-105">
              <div className="bg-[#F7E1BC]/30 rounded-full px-9 py-3 backdrop-blur-sm">
                <p className="text-[#F8E4BE] text-xl">Shop Now</p>
              </div>
            </button>
          </Link>

          <Link href="#">
            <button className="p-0.5 rounded-full bg-linear-to-r from-[#E0A872] via-[#F8E4BE] to-[#E0A872] shadow-lg transition hover:scale-105">
              <div className="bg-[#43362D] rounded-full px-8 py-3">
                <p className="text-[#F8E4BE] text-xl">Catalog</p>
              </div>
            </button>
          </Link>
        </div>

        <div className="relative mt-20 flex items-center translate-x-10"> 
          <div className="flex items-center bg-linear-to-r from-transparent via-[#43362D]/60 to-transparent backdrop-blur-md rounded-4xl p-6 border-l border-white/10 shadow-2xl">
            
            <div className="relative w-40 h-40 shrink-0">
                <Image
                src="/Images/Cup1.png"
                fill
                className="object-contain drop-shadow-2xl"
                alt="cup"
                />
            </div>

            <div className="flex flex-col ml-6">
              <h3 className="dancing-script text-3xl text-[#F8E4BE] drop-shadow-md">
                But First Coffee
              </h3>

              <button className="mt-4 border border-[#F8E4BE]/40 rounded-full w-fit px-4 py-1 hover:bg-[#F8E4BE]/10 transition-colors flex items-center gap-2 group">
                <p className="text-[#F8E4BE] text-sm font-medium">Hurry Up</p>
                <span className="text-[#F8E4BE] group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
        <div className="absolute inset-0 z-10 bg-linear-to-r from-[#1A1310] via-transparent to-transparent w-1/4" />
        <Image
          src="/Images/coffee.png"
          alt="coffee"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}