import { Rings } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner_container">
      <Rings
        height="120"
        width="120"
        color="#fb923c"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />

      <h2 className="text-slate-500 text-[18px] font-bold">Loading Products</h2>
      <p className="text-slate-500 text-[14px]">Please Wait</p>
    </div>
  );
};

export default Spinner;
