/* eslint-disable react/prop-types */
const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pb-[20px]">
        <ul className="flex justify-center items-center space-x-1 text-[12px] md:text[18px]">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="flex justify-center items-center border-2 w-[25px] h-[25px] md:w-[30px] md:h-[30px] text-center bg-orange-600 text-white"
            >
              <a href="!#" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
