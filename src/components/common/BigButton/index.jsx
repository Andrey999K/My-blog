import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BigButton = ({ children, link, url, className, disabled, onClick }) => {
  const classes = "flex justify-center items-center text-xs md:text-sm py-2 px-4 " +
    `md:py-3 md:px-6 duration-200 ${disabled ? "bg-my-green-50" : "bg-my-green-400 hover:bg-my-green-300"} text-white font-bold rounded` + (className ? " " + className : "");
  if (link) return <Link to={url} className={classes}>{children}</Link>;
  return <button onClick={onClick} className={classes} disabled={disabled}>{children}</button>;
};

BigButton.defaultProps = {
  link: false,
  disabled: false
};

BigButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.bool,
  url: (props, propName) => {
    if (props.link === true && !props[propName]) {
      return new Error("Url is required if link is true");
    }
  },
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default BigButton;
