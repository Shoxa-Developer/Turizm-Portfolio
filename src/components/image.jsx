import React from "react";

const Image = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-center text-center mt-6 px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
          Buxoro qadimiy diyorining maftunkor manzarasi
        </h1>
      </div>

      {/* Image */}
      <div className="w-full mt-10 sm:mt-14 md:mt-20 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative">
        <img
          src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYk3mdTctBRVhNtjqgAJKo34kW5ZavzC8u29i1"
          alt="Bukhara"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0 0 L100 0 L100 80 Q75 100 50 85 Q25 70 0 80 Z'/%3E%3C/svg%3E\")",
            maskSize: "100% 100%",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0 0 L100 0 L100 80 Q75 100 50 85 Q25 70 0 80 Z'/%3E%3C/svg%3E\")",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
    </div>
  );
};

export default Image;
