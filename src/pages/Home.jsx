import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import BuyEasyStep from "../components/BuyEasyStep/BuyEasyStep";
import DiscountProducts from "../components/DiscountProducts/DiscountProducts";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>
      <section className="max-w-screen-2xl mx-auto">
        <div className="">
          <BuyEasyStep></BuyEasyStep>
        </div>
        <div className="">
          <DiscountProducts></DiscountProducts>
        </div>
        <div className="">
          <AboutUs></AboutUs>
        </div>
        <div className="">
          <Products></Products>
        </div>
      </section>
    </div>
  );
}

export default Home
