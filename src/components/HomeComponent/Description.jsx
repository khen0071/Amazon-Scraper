import React from "react";

import amazon from "../../assets/amazon2.png";

const Description = () => {
  return (
    <>
      <div className="descriptionContainer">
        <div className="flex flex-col-reverse justify-between items-center md:flex-row">
          <div className="w-full">
            <p className="text-[25px] text-center font-[700] pb-3 text-orange-500 sm:text-[30px] md:text-[40px] lg:text-[45px] md:text-start">
              Unveiling Product Insights for Smarter Shopping
            </p>
            <p className="text-slate-500 italic text-center md:text-start">
              - Amazon Scraper empowers you to make more informed shopping
              decisions by offering a data-driven approach to online shopping.
            </p>
          </div>
          <div className="w-full pb-6 flex justify-center items-center md:justify-end md:pb-0">
            <img
              src={amazon}
              alt="amazon"
              className="w-[250px] sm:w-[300px] md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
