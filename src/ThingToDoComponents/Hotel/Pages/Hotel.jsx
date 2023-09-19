import TitleHotel from "../Components/TitleHotel";
import HotelCarousel from "../Components/ListHotel/HotelCarousel";
import MapHotel from "../Components/MapHotel";

import Gambar6 from "/src/assets/hotel/gambar6.jpg";

const Hotel = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="mb-20 w-full h-screen relative">
          <img
            className="w-full h-full object-cover md:w-[1024px] lg:w-[1920px]"
            src={Gambar6}
            alt="/"
          />
        </div>
        <div className="absolute top-0 mt-[80px] lg:mt-[102px] h-screen flex flex-col space-y-10 justify-center items-center bg-[#020617] opacity-60 xl:w-1/3 sm:w-1/2 z-0">
          <div className="text-center space-y-5">
            <h3 className="text-4xl lg:text-5xl font-bold text-font1 font-lora">
              Place To Stay in Jogja
            </h3>
            <p className="mx-10 text-font1 font-poppins">
              Here are some of the many accommodation you find in Jogja
            </p>
          </div>
        </div>
      </div>
      <TitleHotel />
      <HotelCarousel />
      <div className="w-[100vw] bg-button2 flex justify-center items-center">
        <MapHotel />
      </div>
    </div>
  );
};

export default Hotel;
