const DiscountProducts = () => {
  return (
    <div className="font-primary grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center mb-24 md:mb-32 lg:mb-48 mx-auto max-w-screen-xl px-4">
      <div className="relative lg:top-10 flex justify-center items-center w-full lg:w-[643px] lg:h-[633px]">
        <img
          src="/src/assets/logo/Image.png"
          alt="Product Image"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              Bravo Sunglasses
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 80% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative lg:left-8 lg:bottom-5 flex justify-center items-center w-full lg:w-[643px] lg:h-[509px]">
        <img
          src="/src/assets/logo/Image (1).png"
          alt="Product Image 1"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] right-4 p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              Tommy Hilfiger
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 30% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center w-full lg:w-[643px] lg:h-[509px]">
        <img
          src="/src/assets/logo/Image (2).png"
          alt="Product Image 2"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              John Jacobs
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 40% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative lg:left-8 lg:bottom-16 flex justify-center items-center w-full lg:w-[643px] lg:h-[633px]">
        <img
          src="/src/assets/logo/Image (3).png"
          alt="Product Image 3"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              Vincent Chase
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 10% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;
