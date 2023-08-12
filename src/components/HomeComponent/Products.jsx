/* eslint-disable react/prop-types */

import Search from "./Search";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="productContainer">
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
          <div className="presentationContainer">
            <p className="my-3 text-[12px] md:text-[16px]">
              Our cutting-edge website harnesses the power of Scraping Amazons
              Data via our own API to provide you with real-time information,
              trends, and analysis about a diverse array of products available
              on the platform.
            </p>
            <p className="startSearch">Start Searching Now!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
