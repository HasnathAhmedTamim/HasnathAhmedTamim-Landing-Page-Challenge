/* eslint-disable react/no-unescaped-entities */

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-[50px] lg:mb-[147px] md:grid-cols-1 xl:grid-cols-2 font-primary lg:h-[616px]">
      {/* left div */}
      <div className="bg-[#FED29C] flex flex-col justify-center items-left lg:py-6 px-6 lg:px-40 py-3 gap-5">
        <h2 className="font-primary text-[#383838] font-bold  leading-[48px] text-left lg:text-left mt-5 lg:mt-10 text-xl lg:text-3xl">
          Experience clear vision with <br /> OptiChroma Vision Frames
        </h2>
        <p className="text-[#545454]  font-normal leading-[20px]  lg:text-left text-left">
          At OptiChroma, we believe that everyone deserves clear vision and
          stylish eyewear. That's why we've designed a collection of frames that
          prioritize both form and function. <br />
          <span className="lg:py-2 block font-normal leading-[20px] ">
            Our team of experts is dedicated to helping you find the perfect{" "} <br />
            pair of glasses.
          </span>
        </p>
        <button className="text-white mb-8 font-bold gap-4 px-2   py-2  lg:rounded-md lg:px-3 lg:py-2  bg-[#383838] items-center justify-center rounded lg:w-[158px] lg:h-[48px] w-1/2">
          About Us
        </button>
      </div>
      {/* right div */}
      <div className="flex justify-center lg:justify-end">
        <img src="/src/assets/logo/sunglass.png" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
