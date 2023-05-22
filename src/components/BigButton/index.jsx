import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BigButton = ({ children, link, url }) => {
  const classes = "inline-block p-4 bg-green-700 text-white font-bold rounded";
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
