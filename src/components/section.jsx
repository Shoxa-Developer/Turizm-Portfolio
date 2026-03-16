import React from "react";

const Section = () => {
  return (
    <div
      className="w-full mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[400px] gap-4"
      id="historical"
    >
      {/* Chap rasm */}
      <div className="overflow-hidden h-64 md:h-auto">
        <img
          src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYhtezFcCR1jSeCp3IGtlu7VBDsU5JPqM2KdkY"
          alt="Bukhara"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* O'rta - Matn */}
      <div className="flex flex-col justify-center items-center px-6 py-8 bg-[#f5f0e8] text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 uppercase tracking-widest">
          Uzbekiston Turizmi
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
          Uzbekiston — Markaziy Osiyoning durdonasi. Ming yillik tarixi, ajoyib
          me'morchiligi va boy madaniyati bilan dunyo sayyohlarini o'ziga jalb
          etib kelmoqda.
        </p>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          Samarqand, Buxoro, Xiva va Toshkent shaharlari — har biri o'ziga xos
          go'zalligi bilan sayyohlar qalbini zabt etadi.
        </p>
        <button className="bg-[#8B5E3C] text-white px-6 py-2 rounded-full text-sm hover:bg-[#6e4a2e] transition">
          Ko'proq o'qish
        </button>
      </div>

      {/* O'ng rasm */}
      <div className="overflow-hidden h-64 md:h-auto">
        <img
          src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYMpsElkUJiNslbWVE06cgZHxS7KfjDIYkhyv3"
          alt="Samarqand"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Section;
