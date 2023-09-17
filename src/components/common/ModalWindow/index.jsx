import React, { useRef } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

const ModalWindow = ({ children, handleClose }) => {
  const background = useRef(null);
  const handleClick = (e) => {
    if (e.target === background.current) handleClose(false);
  };
  return (
    <div
      onClick={handleClick}
      ref={background}
      className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen z-[9999] bg-black/70 flex justify-center items-center"
    >
      <div className="relative bg-white p-5 rounded-lg w-full max-w-screen-lg min-h-[70%]">
        <button
          onClick={() => handleClose(false)}
          className="absolute top-5 right-5 z-10">
          <Icon name="close" className="w-7 h-7" />
        </button>
        {children}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  handleClose: PropTypes.func.isRequired
};

export default ModalWindow;
