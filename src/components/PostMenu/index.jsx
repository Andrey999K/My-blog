import React, { useState } from "react";
import Icon from "../common/Icon";

const PostMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(prevState => !prevState);
  };
  return (
    <div className="relative flex items-center">
      <button onClick={handleClick} className="inline">
        <Icon name="menu" />
      </button>
      {openMenu && (
        <ul className="absolute top-6 right-0 p-4 bg-white shadow-lg rounded-lg">
          <li>
            <button>Изменить</button>
          </li>
          <li>
            <button>Удалить</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default PostMenu;
