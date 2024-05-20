import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import BuyEasyStep from "../components/BuyEasyStep/BuyEasyStep";
import DiscountProducts from "../components/DiscountProducts/DiscountProducts";

const Home = () => {
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <BuyEasyStep></BuyEasyStep>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <DiscountProducts></DiscountProducts>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
}

export default Home
