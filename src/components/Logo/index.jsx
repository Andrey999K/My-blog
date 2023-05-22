import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={process.env.PUBLIC_URL} className="pb-4 font-extrabold text-2xl md:text-5xl">
      <span>L</span>
      <span>o</span>
      <span className="text-white">g</span>
      <span className="text-white">o</span>
    </Link>
  );
};

export default Logo;
