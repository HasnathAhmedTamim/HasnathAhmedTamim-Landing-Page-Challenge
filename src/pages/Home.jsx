import Banner from "../components/Banner/Banner";
import BuyEasyStep from "../components/BuyEasyStep/BuyEasyStep";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto">
        <BuyEasyStep></BuyEasyStep>
      </div>
    </div>
  );
}

export default Home
