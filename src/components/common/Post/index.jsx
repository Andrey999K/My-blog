import React from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SubscriptionButton from "../SubscriptionButton";
import Icon from "../Icon";
import Like from "../Like";

const Post = ({ post, my }) => {
  const { id, user, date, title, description, image, likes, comments } = post;
  const { nickname } = user;
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="p-6 bg-white rounded-xl flex flex-col gap-4 text-base">
      <div className="flex justify-between w-full">
        <div className="flex gap-3 items-center">
          <Link to={homepage} className="flex gap-3 items-center">
            <Avatar/>
            <span>{nickname}</span>
          </Link>
          <Link to={`${homepage}/post/${id}`} className="text-sm text-gray-500">{date}</Link>
        </div>
        {my
          ? (
            <div className="flex items-center">
              <button className="inline">
                <Icon name="menu" />
              </button>
            </div>
            )
          : (
            <SubscriptionButton/>
            )
        }
      </div>
      {!!title && <p className="font-bold text-xl">{title}</p>}
      {!!description && <p>{description}</p>}
      <Link
        to={`${homepage}/post/${id}`}
        className="text-gray-500 cursor-pointer font-medium hover:text-my-green-200"
      >
        Подробнее...
      </Link>
      {!!image && (
        <div className="rounded-xl overflow-hidden">
          <img
            className="m-0 w-full"
            src={`${homepage}/images/${image}`}
            alt="Картинка"
          />
        </div>
      )}
      <div className="flex gap-3">
        <div className="flex gap-2">
          <Like/>
          <span>{likes}</span>
        </div>
        <div className="flex gap-2">
          <div className="cursor-pointer hover:text-my-green-200 flex items-center justify-center">
            <Icon name="comment" />
          </div>
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    user: PropTypes.shape({
      nickname: PropTypes.string.isRequired,
      avatar: PropTypes.string
    })
  }).isRequired,
  my: PropTypes.bool.isRequired
};

export default Post;
