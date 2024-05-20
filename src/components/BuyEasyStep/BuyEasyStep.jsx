const BuyEasyStep = () => {
  return (
    <div className=" py-10 relative z-10 bottom-24">
      <div className="flex flex-col lg:flex-row p-2 gap-8 text-center items-center justify-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <a href="">
            <img
              className="w-20 mb-2"
              src="/src/assets/logo/Icon.png"
              alt="Search Icon"
            />
          </a>
          <h4 className="font-primary text-lg font-bold mb-1">
            Search you sunglass
          </h4>
          <p className="text-sm font-primary">Shop Stylish Eyewear Now</p>
        </div>
        {/* Dash */}
        <div className=" lg:block relative z-10 bottom-8">
          <img src="/src/assets/logo/Vector (3).png" alt="Dash" />
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <a href="">
            <img
              className="w-20 mb-2"
              src="/src/assets/logo/Oval.png"
              alt="Search Icon"
            />
            <div className="relative bottom-14 left-5 items-center justify-center z-10">
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
        <div className="flex flex-col items-center">
          <a href="">
            <img
              className="w-20 mb-2"
              src="/src/assets/logo/Icon (3).png"
              alt="Search Icon"
            />
          </a>
          <h4 className="font-primary text-lg font-bold mb-1">Make Payment</h4>
          <p className="text-sm font-primary">Securely Checkout now</p>
        </div>
        {/* Dash */}
        <div className=" lg:block relative z-10 bottom-8">
          <img src="/src/assets/logo/Vector (3).png" alt="Dash" />
        </div>
        {/* Step 4 */}
        <div className="flex flex-col items-center">
          <a href="">
            <img
              className="w-20 mb-2"
              src="/src/assets/logo/Icon (4).png"
              alt="Search Icon"
            />
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
