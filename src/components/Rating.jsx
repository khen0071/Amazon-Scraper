const Rating = ({ stars }) => {
  return (
    <>
      <div className="text-yellow-300">
        <span className="text-yellow">
          {stars >= 1 ? (
            <i className="fa-solid fa-star"></i>
          ) : stars >= 0.5 ? (
            <i className="fa-solid fa-star-half-stroke"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </span>

        <span className="text-yellow">
          {stars >= 2 ? (
            <i className="fa-solid fa-star"></i>
          ) : stars >= 1.5 ? (
            <i className="fa-solid fa-star-half-stroke"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </span>

        <span className="text-yellow">
          {stars >= 3 ? (
            <i className="fa-solid fa-star"></i>
          ) : stars >= 2.5 ? (
            <i className="fa-solid fa-star-half-stroke"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </span>

        <span className="text-yellow">
          {stars >= 4 ? (
            <i className="fa-solid fa-star"></i>
          ) : stars >= 3.5 ? (
            <i className="fa-solid fa-star-half-stroke"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </span>

        <span className="text-yellow">
          {stars >= 5 ? (
            <i className="fa-solid fa-star"></i>
          ) : stars >= 4.5 ? (
            <i className="fa-solid fa-star-half-stroke"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </span>
      </div>
    </>
  );
};

export default Rating;
