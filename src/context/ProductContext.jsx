/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchProducts = async (text) => {
    isLoading();
    const url = `https://amazon-product-scraper7.p.rapidapi.com/search`;
    const params = new URLSearchParams({
      q: text,
    });

    const headers = {
      "X-RapidAPI-Key": "7a650e0016mshd7fa71d9fd386f9p16d78fjsn71e964cbed3d",
      "X-RapidAPI-Host": "amazon-product-scraper7.p.rapidapi.com",
    };

    const { data } = await axios.get(`${url}/${params}`, {
      headers: headers,
    });

    setProducts(data.results);
    setLoading(false);
  };

  const isLoading = () => {
    setLoading(true);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
