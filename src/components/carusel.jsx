import { useState } from "react";

const slides = [
  {
    img: "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYJOcTLIEkWxlo9nBqT42wK30OZguXFELYCcNa",
    title: "Bukhara City",
    desc: "",
  },
  {
    img: "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYzi4Egqih8GZgP17XAxVODT9qkmpiFuboacL5",
    title: "Samarkand",
    desc: "",
  },
  {
    img: "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYgHJENIFsVXEoN6RFnzyahgscfudp1HbYPOGA",
    title: "Toshkent",
    desc: "",
  },
];

export default function Carusel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden" id="home">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.img} className="w-full h-full object-cover" alt="" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {slide.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 md:px-4 md:py-2 rounded-full text-lg md:text-xl"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 md:px-4 md:py-2 rounded-full text-lg md:text-xl"
      >
        ❯
      </button>
    </div>
  );
}
