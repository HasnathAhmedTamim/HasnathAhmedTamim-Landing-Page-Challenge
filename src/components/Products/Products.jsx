// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
// import { Pagination } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";
const Products = (props ) => {
  const products = props.products;
  return (
    <div className="mb-24">
      <div className="  ">
        <ProductCard products={products}  />
      </div>
    </div>
  );
};

export default Products;
