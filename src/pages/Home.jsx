import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import Description from "../components/HomeComponent/Description";
import Products from "../components/HomeComponent/Products";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

const Home = () => {
  const { products, loading } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirsttProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfFirsttProduct,
    indexOfLastProduct
  );
  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <Description />
        {loading ? <Spinner /> : <Products products={currentProduct} />}

        {loading ? null : (
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
          />
        )}
      </div>
    </>
  );
};

export default Home;
