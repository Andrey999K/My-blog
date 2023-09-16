import React, { useState } from "react";
import Icon from "../../common/Icon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostMenu = ({ list }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(prevState => !prevState);
  };
  const handleClick = (action) => {
    setOpenMenu(false);
    action();
  };
  return (
    <div className="relative flex items-center">
      <button onClick={handleOpenMenu} className="inline">
        <Icon name="menu" />
      </button>
      {openMenu && (
        <ul className="absolute top-6 right-0 p-4 bg-white shadow-lg rounded-lg">
          {list.map((item, index) => {
            if (typeof item.action === "string") {
              return (
                <li key={`action_${index}`}>
                  <Link to={item.action}>{item.text}</Link>
                </li>
              );
            } else {
              return (
                <li key={`action_${index}`}>
                  <button onClick={() => handleClick(item.action)}>{item.text}</button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

PostMenu.defaultProps = {
  list: []
};

PostMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ])
  }))
};

export default PostMenu;
