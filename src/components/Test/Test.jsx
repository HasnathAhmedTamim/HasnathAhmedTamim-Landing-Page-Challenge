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
        <div className="font-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[88px]">
          {products?.map((product) => (
            <div
              key={product.id}
              className="relative lg:w-[417px] lg:h-[630px] w-full lg:p-2 cursor-pointer hover:-translate-y-3 transition-all duration-300 items-center justify-center"
            >
              <div className="bg-[#F7F7F7] items-center justify-center p-24 lg:justify-center lg:flex-col grid lg:pl-[37px] lg:pt-[145px] lg:pb-[115px] lg:pr-[37px] relative">
                {product.price >= 100 && (
                  <img
                    className="absolute top-[10px] left-[10px] w-[60px]"
                    src={DiscountImg}
                    alt="Discount"
                  />
                )}
                <img
                  className="lg:w-[343px] lg:h-[212px] w-1/2"
                  src={product.image || ProductImg1}
                  alt={product.name}
                />
                {product.price >= 100 && (
                  <img
                    className="absolute top-[10px] right-[10px] w-[60px]"
                    src={SaleImg}
                    alt="Sale"
                  />
                )}
              </div>
              <h1 className="font-normal leading-[40px] lg:text-[30px] text-[#383838] font-primary">
                {product.name}
              </h1>
              <div className="flex gap-2">
                <p className="font-bold leading-[30px] lg:text-[20px] text-[#383838]">
                  <span>$</span>
                  {product.discountPrice}
                </p>
                <p className="font-bold leading-[30px] lg:text-[20px] text-[#545454] line-through">
                  {product.price !== null ? (
                    <>
                      <span>$</span>
                      {product.price}
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div>
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
