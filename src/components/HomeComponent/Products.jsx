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
          <div className="flex flex-col justify-center items-center mx-3 md:w-[600px] border-2 bg-orange-100 p-3 mt-3 border-orange-400 text-center rounded-lg">
            <p className="my-3 text-[12px] md:text-[16px]">
              Our cutting-edge website harnesses the power of Scraping Amazons
              Data via our own API to provide you with real-time information,
              trends, and analysis about a diverse array of products available
              on the platform.
            </p>
            <p className="font-[700] text-orange-700 text-[16px] md:text-[20px] uppercase my-3">
              Start Searching Now!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
