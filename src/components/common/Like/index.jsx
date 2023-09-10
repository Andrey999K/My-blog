import React from "react";
import Icon from "../Icon";

const Like = () => {
  return (
    <button className="cursor-pointer hover:text-my-green-200 flex items-center justify-center hover:text-my-green-200">
      <Icon name="heart" />
    </button>
  );
};

export default Like;
