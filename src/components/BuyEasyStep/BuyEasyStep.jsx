const BuyEasyStep = () => {
  return (
    <div className=" py-10 relative z-10 bottom-24 mb-[130px]">
      <div className="flex flex-col font-primary lg:flex-row p-2 gap-[15px] text-center items-center justify-center bottom-10 relative">
        {/* Step 1 */}
        <div className="flex flex-col items-center w-[189px] h-[236px]">
          <a href="">
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-3 right-1"
              src="/src/assets/logo/Oval.png"
              alt="Search Icon"
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img width="w-15" src="/src/assets/logo/search.png" alt="" />
            </div>
          </a>
          <h4 className="font-primary text-lg font-bold mb-1">
            Search you sunglass
          </h4>
          <p className="text-sm font-primary">Shop Stylish Eyewear Now</p>
        </div>
        {/* Dash */}
        <div className="w-[151px] h-[15px] lg:block relative z-10 bottom-8 ">
          <img
            className="w-[151px] h-[15px]"
            src="/src/assets/logo/Vector (3).png"
            alt="Dash"
          />
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center w-[189px] h-[236px]">
          <a href="">
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-2 right-1"
              src="/src/assets/logo/Oval.png"
              alt="Search Icon"
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img width="w-15" src="/src/assets/logo/Icon (5).png" alt="" />
            </div>
          </a>
          <h4 className="font-primary text-lg font-bold mb-1">
            Select sunglass
          </h4>
          <p className="text-sm font-primary">Shade Your Style</p>
        </div>
        {/* Dash */}
        <div className=" lg:block relative z-10 bottom-8">
          <img src="/src/assets/logo/Vector (3).png" alt="Dash" />
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center w-[189px] h-[236px] ">
          <a href="">
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-2 right-1"
              src="/src/assets/logo/Oval.png"
              alt="Search Icon"
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img width="w-15" src="/src/assets/logo/payment.png" alt="" />
            </div>
          </a>
          <h4 className="font-primary text-lg font-bold mb-1">Make Payment</h4>
          <p className="text-sm font-primary">Securely Checkout now</p>
        </div>
        {/* Dash */}
        <div className=" lg:block relative z-10 bottom-8">
          <img src="/src/assets/logo/Vector (3).png" alt="Dash" />
        </div>
        {/* Step 4 */}
        <div className="flex flex-col items-center w-[189px] h-[236px]">
          <a href="">
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-2 right-1"
              src="/src/assets/logo/Oval.png"
              alt="Search Icon"
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img width="w-15" src="/src/assets/logo/car.png" alt="" />
            </div>
          </a>
          <h4 className="font-primary text-lg font-bold mb-1">
            Received Product
          </h4>
          <p className="text-sm font-primary">See the World Clearly</p>
        </div>
      </div>
    </div>
  );
};

export default BuyEasyStep;
