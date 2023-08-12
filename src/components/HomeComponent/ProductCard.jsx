/* eslint-disable react/prop-types */
import Rating from "../Rating";

const ProductCard = ({ product }) => {
  const { name, stars, total_reviews, image, brand, url, price } = product;
  return (
    <>
      <div className="border-2 border-orange-200 my-6 mx-3 py-4">
        <div className="flex flex-col items-center md:flex-row mx-3">
          <div className="w-full flex justify-center">
            <img src={image} alt="image" className="w-[200px]" />
          </div>
          <div className="w-full text-center text-slate-500">
            <p className="font-[800] pb-2">{brand}</p>
            <p>{name}</p>
          </div>
          <div className="w-full flex justify-center flex-col my-6 items-center text-slate-500 space-y-3">
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
        <div className="flex space-y-3 flex-col justify-center items-center  mt-2 md:space-x-3 md:flex-row md:space-y-0">
          <a href={`${url}`} target="_blank" rel="noopener noreferrer">
            <button className="border-2 bg-orange-500 text-white border-orange-300 px-6 py-2 w-[200px] rounded-md hover:border-orange-800 ease-in-out duration-500">
              {" "}
              Buy Product
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
