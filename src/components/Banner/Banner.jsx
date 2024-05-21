import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../src/assets/logo/BannerImage.png";
import vector from "../../../src/assets/logo/Vector (2).png";
import ovalImg from "../../../src/assets/logo/Oval.png";

const Banner = () => {
  return (
    <div className="bg-[#EAEAEA] h-screen overflow-hidden">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        {[slide1, slide1, slide1].map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-full"
          >
            <div className="font-primary relative w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between p-4 lg:p-8">
              {/* left div */}
              <div className="text-center md:text-left z-20 w-full md:w-auto p-4 md:static lg:absolute lg:top-[422px] lg:left-[240px] flex flex-col items-center md:items-start justify-center font-primary">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-14 md:mt-0">
                  Personalized Eyeglass <br /> Shopping
                </h1>
                <button className="text-white mb-4 flex gap-2 px-6 py-3 lg:px-10 lg:py-5 bg-[#383838] items-center justify-center rounded">
                  <img className="w-5 h-5" src={vector} alt="Vector" />
                  Buy Now
                </button>
              </div>
              {/* right div */}
              <div className="relative w-full md:w-auto flex items-center justify-center md:static lg:absolute lg:top-[165px] lg:left-[544px] mt-6 md:mt-0">
                <div
                  className="absolute inset-0 bg-no-repeat bg-contain max-w-full max-h-full"
                  style={{
                    backgroundImage: `url(${ovalImg})`,
                  }}
                ></div>
                <img
                  className="relative z-10 max-w-full h-auto object-contain"
                  src={slide}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
