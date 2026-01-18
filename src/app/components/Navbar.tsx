import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='w-full h-24 flex sticky top-0 z-50 overflow-hidden'>

      <div className='w-1/2 bg-[#1A1310] flex items-center justify-between px-27'>
        <Image
          src="/Images/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />

        <div className='flex items-center gap-6'>
          <button className="hover:opacity-70 transition-opacity">
            <Image src="/Images/people.png" alt="people" width={20} height={20} />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <Image src="/Images/shopping-cart.png" alt="shopping cart" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className='w-1/2 bg-[#43362D]/40 backdrop-blur-md flex items-center px-8 gap-2 border-l border-white/5'>
        {["Home", "Menu", "Services", "Product", "Blog", "Contact"].map((item) => (
          <button 
            key={item} 
            className='relative px-5 py-2 text-[#F8E4BE] cursor-pointer transition-all duration-300 group h-full flex items-center'
          >
            <span className='relative z-10 font-medium tracking-wide group-hover:text-[#1A1310] transition-colors duration-300'>
              {item}
            </span>
            
            <div className='
              absolute 
              top-0
              left-0 
              w-full 
              h-0
              bg-[#F8E4BE] 
              rounded-b-3xl
              transition-all 
              duration-300
              ease-out
              group-hover:h-[80%]
              z-0
            '></div>
          </button>
        ))}
      </div>
    </nav>
  )
}