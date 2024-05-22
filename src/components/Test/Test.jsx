import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import ProductImg1 from "../../assets/productimages/block1mg.png";
import DiscountImg from "../../assets/logo/Discount.png";
import SaleImg from "../../assets/logo/Sale.png";

const Test = (props) => {
  const products = props.products;

  return (
    <div className="flex flex-col font-primary mb-24 lg:mb-[205px]">
      <div>
        <h1 className="font-primary font-bold text-[38px] leading-[48px] text-left">
          Our Products
        </h1>
      </div>
      <div className="flex items-center justify-between mb-10 font-primary">
        <div className="font-primary justify-start">
          <p className="font-normal text-[16px] leading-[26px] text-left lg:text-left">
            Experience crystal clear vision and elevated style with our <br />
            premium collection of eyeglasses.
          </p>
        </div>
        <div className="lg:w-[248px] lg:h-[36px] text-[#545454] font-primary flex flex-col lg:flex-row justify-end">
          <button className="lg:px-[5px] lg:py-[20px] bg-white text-center items-center justify-center flex font-normal text-[16px]">
            Latest
          </button>
          <button className="lg:px-[5px] lg:py-[20px] bg-white border text-center items-center justify-center flex font-normal text-[16px]">
            Special
          </button>
          <button className="lg:px-[5px] lg:py-[20px] bg-white text-center items-center justify-center flex font-normal text-[16px]">
            Best sell
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="font-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[88px]">
          {products?.map((product) => (
            <div
              key={product.id}
              className="relative w-full max-w-[417px] lg:w-[417px] p-4 cursor-pointer hover:-translate-y-3 transition-all duration-300"
            >
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                className="mySwiper"
              >
                {[
                  product.image || ProductImg1,
                  product.image || ProductImg1,
                  product.image || ProductImg1,
                ].map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-[#F7F7F7] flex items-center justify-center lg:flex-col lg:p-24 relative">
                      {product.price >= 100 && (
                        <img
                          className="absolute top-[10px] left-[10px] w-[60px]"
                          src={DiscountImg}
                          alt="Discount"
                        />
                      )}
                      <img
                        className="lg:w-[343px]"
                        src={image}
                        alt={product.name}
                      />
                      <img
                        className="absolute top-[10px] right-[10px] w-[60px]"
                        src={SaleImg}
                        alt="Sale"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <h1 className="font-normal leading-[40px] lg:text-[30px] text-[#383838] font-primary mt-4 text-left lg:text-left">
                {product.name}
              </h1>
              <div className="flex gap-2 mt-2 justify-left lg:justify-start">
                <p className="font-bold leading-[30px] lg:text-[20px] text-[#383838]">
                  <span>$</span>
                  {product.discountPrice}
                </p>
                {product.price && (
                  <p className="font-bold leading-[30px] lg:text-[20px] text-[#545454] line-through">
                    <span>$</span>
                    {product.price}
                  </p>
                )}
              </div>
              <div className="mt-2 flex justify-left lg:justify-start">
                <button
                  onClick={() => props.addToCart(product)}
                  className="underline cursor-pointer"
                >
                  Add To cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
