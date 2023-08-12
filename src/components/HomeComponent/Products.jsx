/* eslint-disable react/prop-types */

import Search from "./Search";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Search />

        {products.length > 0 ? (
          <div className="">
            {products &&
              products?.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-[600px] border-2 bg-orange-100 p-3 mt-3 border-orange-400 text-center rounded-lg">
            <p className="my-3">
              <strong>Amazon Scraper API</strong> empowers you to make more
              informed shopping decisions by offering a data-driven approach to
              online shopping. Whether you're a savvy shopper, a price-conscious
              buyer, or someone who simply wants to stay updated on the latest
              products, our website is your one-stop destination.
            </p>
            <p className="font-[700] text-orange-700 text-[20px] uppercase my-3">
              Start Searching Now!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
