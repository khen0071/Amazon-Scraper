import { useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";

const Search = () => {
  const [text, setText] = useState("");

  const { fetchProducts } = useContext(ProductContext);
  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a product");
    } else {
      fetchProducts(text);
      setText("");
    }
  };

  return (
    <>
      <div className="searchContainer">
        <form onSubmit={submitHandler} className="form">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="inputContainer"
              placeholder="Search for product..."
              type="text"
              name="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
