import  { useEffect, useState } from "react";
import ProductImg1 from "../../assets/productimages/block1mg.png";

const Test = () => {
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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="">
          <div className="bg-[#F7F7F7] items-center justify-center flex-col grid p-24">
            <img src={product.image || ProductImg1} alt={product.name} />
          </div>
          <h1>{product.name}</h1>
          <div className="flex gap-2">
            <p className="text-yellow-600">
              <span>$</span>
              {product.discountPrice}
            </p>
            <p className="text-gray-300 line-through">
              {product.price !== null ? (
                <>
                  <span>$</span>
                  {product.price}
                </>
              ) : (
                ""
              )}
              
            </p>
          </div>
          <div>
            <button className="underline cursor-pointer">Add To cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
