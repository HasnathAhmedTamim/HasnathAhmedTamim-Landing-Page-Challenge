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
            <div className="font-primary relative lg:w-[1800px] lg:h-[918px]  w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between  lg:p-8">
              {/* left div */}
              <div className="text-center lg:w-[556px] lg:h-[237px] md:text-left z-20 w-full md:w-auto p-4 md:static lg:absolute lg:top-[422px] lg:left-[240px] flex flex-col items-center md:items-start justify-center font-primary">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-14 md:mt-0">
                  Personalized Eyeglass <br /> Shopping
                </h1>
                <button className="text-white mb-4 flex gap-2 p-2 lg:px-[10px] lg:py-[14px] bg-[#383838] items-center justify-center rounded lg:w-[184px] lg:h-[54px]">
                  <img className="" src={vector} alt="Vector" />
                  Buy Now
                </button>
              </div>
              {/* right div */}
              <div className="relative w-full md:w-auto flex items-center justify-center md:static lg:absolute lg:top-[165px] lg:left-[544px] mt-6 md:mt-0 lg:w-[668px] lg:h-[860px]">
                <div
                  className="absolute inset-0 bg-no-repeat bg-contain w-3/4  lg:w-[762px] lg:h-[762px] "
                  style={{
                    backgroundImage: `url(${ovalImg})`,
                  }}
                ></div>
                <img
                  className="relative lg:top-4 lg:left-12 z-10 lg:w-[819px] lg:h-[837px]  object-contain"
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
