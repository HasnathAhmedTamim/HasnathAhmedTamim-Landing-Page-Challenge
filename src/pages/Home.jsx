import { useEffect, useState } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import BuyEasyStep from "../components/BuyEasyStep/BuyEasyStep";
import DiscountProducts from "../components/DiscountProducts/DiscountProducts";
import Products from "../components/Products/Products";

// import CartList from "../components/CartList/CartList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [showCart,setShowCart] = useState(false)
  // Function to add item to cart
const addToCart = (data) => {
  // console.log(data); // Placeholder, replace with your actual logic to add item to cart
  setCart([...cart,{...data , quantity : 1}])
};
console.log(cart)

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

  // const handleShow = (value)=>{
  //   setShowCart(value)
  // }
  return (
    <div className="">
     

      <div>
        <Banner></Banner>
      </div>
      <section className="">
        <div className="container mx-auto">
          <BuyEasyStep></BuyEasyStep>
        </div>
        <div className="container mx-auto">
          <DiscountProducts></DiscountProducts>
        </div>
        <div className="">
          <AboutUs></AboutUs>
        </div>
        <div className="container mx-auto">
          {
            // showCart ? 
            // <CartList cart={cart}></CartList> :
          <Products products={products} addToCart={addToCart} />
          }
        </div>
      </section>
    </div>
  );
};

export default Home;
