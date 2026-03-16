import React from "react";

const ContactPage = () => {
  return (
    <div
      className="w-full mt-24 grid grid-cols-1 md:grid-cols-2 min-h-[400px]"
      id="gallery"
    >
      {/* Chap - Kontakt ma'lumotlari */}
      <div className="flex flex-col justify-center px-6 md:px-10 py-10 bg-[#8B5E3C]">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-widest">
          Контакты
        </h2>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-lg">
            📧
          </div>
          <div>
            <p className="text-white/60 text-xs md:text-sm mb-1">email</p>
            <p className="text-white text-sm md:text-base font-medium">
              info@uzbektour.uz
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-lg">
            📞
          </div>
          <div>
            <p className="text-white/60 text-xs md:text-sm mb-1">Телефон</p>
            <p className="text-white text-sm md:text-base font-medium">
              +998 90 123 45 67
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-lg">
            📍
          </div>
          <div>
            <p className="text-white/60 text-xs md:text-sm mb-1">Адрес</p>
            <p className="text-white text-sm md:text-base font-medium">
              Бухара Узбекистан
            </p>
          </div>
        </div>
      </div>

      {/* O'ng - Form */}
      <div className="flex flex-col justify-center px-6 md:px-10 py-10 bg-[#f5f0e8]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 uppercase tracking-widest">
          Зарегистрироваться
        </h2>

        <input
          type="text"
          placeholder="Имя"
          className="w-full mb-4 px-4 py-3 rounded-full border border-[#c9b99a] bg-white text-gray-700 text-sm md:text-base outline-none focus:border-[#8B5E3C] transition"
        />

        <input
          type="email"
          placeholder="Електроная почта"
          className="w-full mb-4 px-4 py-3 rounded-full border border-[#c9b99a] bg-white text-gray-700 text-sm md:text-base outline-none focus:border-[#8B5E3C] transition"
        />

        <button className="w-full bg-[#8B5E3C] text-white py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#6e4a2e] transition">
          Дальше
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
