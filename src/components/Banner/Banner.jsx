import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../src/assets/logo/BannerImage.png";
// import slide2 from "../../../src/assets/logo/BannerImage.png";
// import slide3 from "../../../src/assets/logo/BannerImage.png";
import vector from "../../../src/assets/logo/Vector (2).png";
import ovalImg from "../../../src/assets/logo/Oval.png";

const Banner = () => {
  return (
    <div className="bg-[#EAEAEA]">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[100vh]"
      >
        {[slide1, slide1, slide1].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center h-full p-8">
              {/* left div */}
              <div className="text-center lg:text-left p-4 relative lg:left-14 z-20">
                <h1 className="text-xl lg:text-4xl font-bold mb-4">
                  Personalized Eyeglass <br /> Shopping
                </h1>
                <button className="text-white mb-4 flex gap-2 p-4 lg:pl-10 lg:pt-5 lg:pr-10 lg:pb-5 bg-[#383838] items-center justify-center rounded">
                  <img className="w-5 h-5" src={vector} alt="Vector" />
                  Buy Now
                </button>
              </div>
              {/* right div */}
              <div className="relative lg:w-1/2 flex items-center justify-center lg:justify-end lg:right-14">
                <div
                  className="absolute inset-0 bg-no-repeat bg-contain"
                  style={{
                    backgroundImage: `url(${ovalImg})`,
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
                <img
                  className="relative z-10 max-w-full h-auto"
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
