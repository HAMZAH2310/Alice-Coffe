import Image from "next/image";

const imageServices = [
  { 
    src: "/Images/icon 1.png", 
    alt: "Service Icon 1", 
    desc: "Equipment",
    width: 107,
    height: 107,
  },
  { 
    src: "/Images/icon 2.png", 
    alt: "Service Icon 2", 
    desc: "Type Of Coffee",
    width: 107,
    height: 107,
    imgPadding: "pt-10"
  },
  { 
    src: "/Images/icon 3.png", 
    alt: "Service Icon 3", 
    desc: "Take A Way",
    width: 64,
    height: 64
  },
  { 
    src: "/Images/icon 4.png", 
    alt: "Service Icon 4", 
    desc: "Beans Variant",
    width: 107,
    height: 107,
    imgPadding: "pt-4"
  },
  { 
    src: "/Images/icon 5.png", 
    alt: "Service Icon 5", 
    desc: "Pastry",
    width: 107,
    height: 107,
    imgPadding: "pt-8"
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full flex flex-col items-center mt-40">
      <h1 className="dancing-script text-4xl text-secondary mb-10">
        Services
      </h1>

      <div className="flex gap-10">
        {imageServices.map((item, index) => (
          <div
            key={index}
            className="
              bg-accent 
              p-10 
              rounded-3xl 
              transition-all 
              duration-300 
              hover:-translate-y-3 
              hover:shadow-2xl 
              hover:scale-105 
              cursor-pointer
            "
          >
            <div className={`${item.imgPadding || ''} flex justify-center`}>
              <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="mx-auto"
            />
            </div>

            <p className="mt-2 text-shadow-md text-secondary max-w-45 text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}