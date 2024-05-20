import { Link } from "react-router-dom";

const DiscountProducts = () => {
  return (
    <Link>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 items-center justify-center mb-24">
      <div className="relative bg-red-100 flex justify-center items-center">
        <img
          src="/src/assets/logo/Image.png"
          alt="Product Image"
          className="w-full h-auto"
        />
        {/* discount content */}
        <div className="absolute top-40  right-14 lg:top-60 inset-0 flex items-center justify-center">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">
              Bravo Sunglasses
            </h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 80% off on selected item
            </p>
            <button className="text-white p-2 lg:px-8 lg:py-4 bg-[#383838] rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-red-100 flex justify-center items-center">
        <img
          src="/src/assets/logo/Image (1).png"
          alt="Product Image 1"
          className="w-full h-auto"
        />
        {/* discount content */}
        <div className="absolute top-40  right-14 lg:top-30 inset-0 flex items-center justify-center">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">
              Tommy Hilfiger
            </h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 30% off on selected item
            </p>
            <button className="text-white p-2 lg:px-8 lg:py-4 bg-[#383838] rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-red-100 flex justify-center items-center">
        <img
          src="/src/assets/logo/Image (2).png"
          alt="Product Image 2"
          className="w-full h-auto"
        />
        {/* discount content */}
        <div className="absolute top-40  right-14 lg:top-60 inset-0 flex items-center justify-center">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">John Jacobs</h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 40% off on selected item
            </p>
            <button className="text-white p-2 lg:px-8 lg:py-4 bg-[#383838] rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-red-100 flex justify-center items-center">
        <img
          src="/src/assets/logo/Image (3).png"
          alt="Product Image 3"
          className="w-full h-auto"
        />
        {/* discount content */}
        <div className="absolute top-60  right-14 lg:top-70 inset-0 flex items-center justify-center">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center">
            <h4 className="font-bold text-sm lg:text-2xl mb-2">
              Vincent Chase
            </h4>
            <p className="text-sm lg:text-lg mb-4">
              Up to 10% off on selected item
            </p>
            <button className="text-white p-2 lg:px-8 lg:py-4 bg-[#383838] rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div></Link>
  );
};

export default DiscountProducts;
