import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BigButton = ({ children, link, url }) => {
  const classes = "flex justify-center items-center text-xs md:text-sm py-2 px-4 md:py-3 md:px-6 hover:bg-my-green-300 duration-200 bg-my-green-400 text-white font-bold rounded";
  if (link) return <Link to={url} className={classes}>{children}</Link>;
  return <button className={classes}>{children}</button>;
};

BigButton.defaultProps = {
  link: false
};

BigButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.bool,
  url: (props, propName) => {
    if (props.link === true && !props[propName]) {
      return new Error("Url is required if link is true");
    }
  }
};

export default BigButton;
