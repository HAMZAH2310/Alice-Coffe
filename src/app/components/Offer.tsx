import Image from "next/image"

export default function Offer() {
  return(
    <section className="w-full flex justify-center mt-30">
    <div className="w-300 h-105 bg-linear-to-l from-[#2B1B17] to-[#6B4633] rounded-4xl flex overflow-hidden relative">
      <div className="w-1/2 p-12 flex flex-col justify-between text-secondary">
        <h1 className="dancing-script text-6xl absolute top-6 left-10">
          Offer
        </h1>
        <h1 className="text-3xl mt-20">Up To50% Off</h1>
        <p className="text-md">At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness. </p>

        <button className="p-0.5 rounded-3xl bg-[linear-gradient(to_right,rgba(224,168,114,0),rgba(248,228,190,0.44),rgba(255,243,224,0.55),#E0A872)] shadow-lg transition hover:scale-105">
          <div className="bg-[#F7E1BC]/30 rounded-3xl px-9 py-3 backdrop-blur-sm">
            <p className="text-[#F8E4BE] text-xl">Shop Now</p>
          </div>
        </button>
      </div>
      <div className="w-1/2 relative mt-20">
        <Image
          src="/Images/packet.png"
          alt="packet"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </section>
  )
}