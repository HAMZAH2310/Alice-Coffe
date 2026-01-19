import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="w-full mt-40 relative">
      <div className="bg-linear-to-br from-[#2B1B17] via-[#422B22] to-[#6B4633] pt-20 pb-10 px-10 border-t border-secondary/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="flex flex-wrap justify-between items-start gap-12">

            <div className="flex-1 min-w-62.5">
              <Image 
                src="/Images/CoffeMachine.png" 
                alt="Eliza Coffee Logo"
                width={200}
                height={200}
                className="brightness-0 invert opacity-80"
              />
            </div>

            <div className="flex flex-col gap-6 min-w-37.5">
              <h4 className="font-serif text-2xl text-secondary">About</h4>
              <ul className="flex flex-col gap-3 text-secondary text-sm">
                <li className="hover:text-secondary cursor-pointer transition">Our Story</li>
                <li className="hover:text-secondary cursor-pointer transition">FAQ</li>
                <li className="hover:text-secondary cursor-pointer transition">Careers</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 min-w-37.5">
              <h4 className="font-serif text-2xl text-secondary">Customer Resources</h4>
              <ul className="flex flex-col gap-3 text-secondary text-sm">
                <li className="hover:text-secondary cursor-pointer transition">Menu</li>
                <li className="hover:text-secondary cursor-pointer transition">Locations</li>
                <li className="hover:text-secondary cursor-pointer transition">Support</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 min-w-37.5">
              <h4 className="font-serif text-2xl text-secondary">Services</h4>
              <ul className="flex flex-col gap-3 text-secondary text-sm">
                <li className="hover:text-secondary cursor-pointer transition">Payment Options</li>
                <li className="hover:text-secondary cursor-pointer transition">Refunds & Exchanges</li>
                <li className="hover:text-secondary cursor-pointer transition">Limitation Of Liability</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 min-w-62.5">
              <div className="flex items-center gap-4 text-secondary group">
                <div className="p-2 bg-secondary/5 rounded-full text-secondary group-hover:bg-secondary group-hover:text-accent transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">12 Jhon Avenue #35 - New York</span>
              </div>

              <div className="flex items-center gap-4 text-secondary group">
                <div className="p-2 bg-secondary/5 rounded-full text-secondary group-hover:bg-secondary group-hover:text-accent transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-sm">Alice@Coffee.Com</span>
              </div>

              <div className="flex items-center gap-4 text-secondary group">
                <div className="p-2 bg-secondary/5 rounded-full text-secondary group-hover:bg-secondary group-hover:text-accent transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+1-222-34-Alice</span>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary/5 pt-10 flex flex-col items-center gap-2">
            <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-bold">
              Created By Elinaui9
            </p>
            <p className="text-secondary text-xs tracking-widest uppercase font-medium">
              Copyright 2026 Alice Coffee . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}