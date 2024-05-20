// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
// import { Pagination } from "swiper/modules";
import Test from "../Test/Test";
const Products = (props) => {
   const products = props.products;
  return (
    <div className="mb-24">
      <div className="  ">
        <Test products={products}></Test>
      </div>
    </div>
  );
};

export default Products;
