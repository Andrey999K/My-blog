import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center bg-white/70">
      <ClipLoader color="#5CDF59" size={50} />
    </div>
  );
};

export default Loader;
