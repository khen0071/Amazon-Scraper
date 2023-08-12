/* eslint-disable react/prop-types */
import Rating from "../Rating";

const ProductCard = ({ product }) => {
  const { name, stars, total_reviews, image, brand, url, price } = product;
  return (
    <>
      <div className="productCardContainer">
        <div className="productCardContent">
          <div className="w-full flex justify-center">
            <img src={image} alt="image" className="w-[200px]" />
          </div>
          <div className="w-full text-center text-slate-500">
            <p className="font-[800] pb-2 text-[14px] md:text-[16px]">
              {brand}
            </p>
            <p className="text-[14px] md:text-[16px]">{name}</p>
          </div>
          <div className="section3">
            {!price ? (
              <div className="text-red-500 font-[500]">No Price Listed</div>
            ) : (
              <div>
                <p className="text-[20px] font-[700] text-green-500">
                  ${price}
                </p>
              </div>
            )}

            <div className="flex flex-col justify-center items-center">
              <p>
                Total Reviews:{" "}
                <span className="font-[700]">{total_reviews}</span>
              </p>
              <Rating stars={stars} />
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <a href={`${url}`} target="_blank" rel="noopener noreferrer">
            <button className="cardButton"> Buy Product</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
