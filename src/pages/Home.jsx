import { useEffect, useState } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import BuyEasyStep from "../components/BuyEasyStep/BuyEasyStep";
import DiscountProducts from "../components/DiscountProducts/DiscountProducts";
import Products from "../components/Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the response data to check its structure
        setProducts(data.products); // Access the correct key if products is nested
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
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
          <Products products={products}></Products>
        </div>
      </section>
    </div>
  );
};

export default Home
