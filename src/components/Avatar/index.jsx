import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ url, size }) => {
  console.log(size);
  return (
    <div className={(size ? `w-[${size}px] h-[${size}px]` : "w-5 h-5") + " rounded-full overflow-hidden"}>
      <img
        className="w-full h-full"
        src={url}
        alt="avatar"
      />
    </div>
  );
};

Avatar.defaultProps = {
  url: "https://i.pravatar.cc/100"
};

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number
};

export default Avatar;
