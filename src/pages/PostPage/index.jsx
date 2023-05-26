import React from "react";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import SubscriptionButton from "../../components/SubscriptionButton";
import Icon from "../../components/Icon";
import Like from "../../components/Like";

const PostPage = () => {
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="bg-white rounded p-5 w-full max-w-screen-lg ml-auto my-12 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Link to={homepage} className="flex gap-3 items-center">
            <Avatar/>
            <div className="flex flex-col">
              <span className="text-sm font-medium">ru_vds</span>
              <span className="text-xs text-gray-400">1,3 млн подписчиков</span>
            </div>
          </Link>
          <SubscriptionButton/>
        </div>
        <span className="text-xs text-gray-400">11.05.2023</span>
      </div>
      <h2 className="font-medium text-2xl">5 React-хуков, которые пригодятся в любом проекте</h2>
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          <Like/>
          <span>1245</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Icon name="eye" />
          </div>
          <span>5456</span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
