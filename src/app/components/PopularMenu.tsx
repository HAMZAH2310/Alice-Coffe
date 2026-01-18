import Image from "next/image";

const leftMenu = [
  { name: "Chocolate", price: "$40.00" },
  { name: "Double Espresso", price: "$25.00" },
  { name: "Caramel Latte", price: "$45.00" },
  { name: "Doppio Coffee", price: "$50.00" },
];

const rightMenu = [
  { name: "Espresso", price: "$30.00" },
  { name: "Cappuccino", price: "$30.00" },
  { name: "Mocha Macchiato", price: "$25.00" },
  { name: "Vanilla Latte", price: "$25.00" },
];

export default function PopularMenu() {
  return (
    <section className="w-full flex flex-col items-center mt-30 gap-12">
      
      <div className="flex items-center gap-6">
        <div className="w-12 h-px bg-secondary/40"></div>
        <h1 className="dancing-script text-5xl text-secondary">Popular Menu</h1>
        <div className="w-12 h-px bg-secondary/40"></div>
      </div>

      <div className="w-7xl min-h-125 bg-linear-to-br from-[#2B1B17] via-[#422B22] to-[#6B4633] rounded-[60px] flex items-center justify-between px-16 shadow-2xl relative overflow-visible">

        <div className="absolute inset-0 opacity-10 pointer-events-none rounded-[60px]" 
             style={{ backgroundImage: 'radial-gradient(circle, #F7E1BC 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="flex flex-col gap-12 w-[30%] z-10">
          {leftMenu.map((item, i) => (
            <div key={i} className="group flex items-end gap-2 text-secondary cursor-default">
              <div className="flex flex-col">
                <span className="text-xl font-medium group-hover:text-[#F7E1BC] transition-colors">{item.name}</span>
                <span className="text-sm text-secondary/60 tracking-widest uppercase font-light">Specialty</span>
              </div>
              <div className="flex-1 border-b border-dotted border-secondary/30 mb-2 group-hover:border-secondary transition-all"></div>
              <span className="text-lg font-bold text-[#E0A872]">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="relative w-[35%] flex justify-center z-20">
          <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full"></div>
          <Image
            src="/Images/Popularmenu Img.png"
            alt="Popular Menu"
            width={450}
            height={550}
            className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] animate-pulse-slow hover:scale-105 transition-transform duration-700"
            style={{ animationDuration: '6s' }}
            priority
          />
        </div>

        <div className="flex flex-col gap-12 w-[30%] z-10">
          {rightMenu.map((item, i) => (
            <div key={i} className="group flex items-end gap-2 text-secondary cursor-default text-right">
              <span className="text-lg font-bold text-[#E0A872]">{item.price}</span>
              <div className="flex-1 border-b border-dotted border-secondary/30 mb-2 group-hover:border-secondary transition-all"></div>
              <div className="flex flex-col">
                <span className="text-xl font-medium group-hover:text-[#F7E1BC] transition-colors">{item.name}</span>
                <span className="text-sm text-secondary/60 tracking-widest uppercase font-light">Fresh Brewed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}