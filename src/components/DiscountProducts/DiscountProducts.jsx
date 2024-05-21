

const DiscountProducts = () => {
  return (
    <div className="font-primary grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-[35px] items-center justify-center mb-24 md:mb-32 lg:mb-48">
      <div className="relative lg:top-10 flex justify-center items-center w-full h-auto md:h-[633px] lg:h-[633px]">
        <img
          src="/src/assets/logo/Image.png"
          alt="Product Image"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-10 left-20 right-0 p-4">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary lg:w-[483px] lg:h-[225px]">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">
              Bravo Sunglasses
            </h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 80% off on selected items
            </p>
            <button className="text-white  mb-8 font-bold gap-4 px-6 md:w-1/2  py-6 lg:rounded-md lg:px-3 lg:py-2  bg-[#383838] items-center justify-center rounded lg:w-1/4">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative lg:bottom-4 flex justify-center items-center w-full h-auto md:h-[509px] lg:h-[509px]">
        <img
          src="/src/assets/logo/Image (1).png"
          alt="Product Image 1"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-10 left-20  right-0 p-4">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary lg:w-[483px] lg:h-[225px]">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">
              Tommy Hilfiger
            </h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 30% off on selected items
            </p>
            <button className="text-white mb-8 font-bold gap-4 px-6 md:w-1/2  py-6 lg:rounded-md lg:px-3 lg:py-2  bg-[#383838] items-center justify-center rounded lg:w-1/4">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center w-full h-auto md:h-[509px] lg:h-[509px]">
        <img
          src="/src/assets/logo/Image (2).png"
          alt="Product Image 2"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-10 left-20  right-0 p-4">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary lg:w-[483px] lg:h-[225px]">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">John Jacobs</h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 40% off on selected items
            </p>
            <button className="text-white mb-8 font-bold gap-4 px-6 md:w-1/2  py-6 lg:rounded-md lg:px-3 lg:py-2  bg-[#383838] items-center justify-center rounded lg:w-1/4">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative lg:bottom-14 flex justify-center items-center w-full h-auto md:h-[633px] lg:h-[633px]">
        <img
          src="/src/assets/logo/Image (3).png"
          alt="Product Image 3"
          className="w-full h-full object-cover"
        />
        {/* discount content */}
        <div className="absolute bottom-10 left-20  right-0 p-4">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary lg:w-[483px] lg:h-[225px]">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">
              Vincent Chase
            </h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 10% off on selected items
            </p>
            <button className="text-white mb-8 font-bold gap-4 px-6 md:w-1/2  py-6 lg:rounded-md lg:px-3 lg:py-2  bg-[#383838] items-center justify-center rounded  lg:w-1/4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;
