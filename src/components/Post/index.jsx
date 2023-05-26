import React from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Post = ({ post }) => {
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
        <button className="py-1 px-5 bg-my-green-200 text-white rounded-xl hover:bg-my-green-300 duration-200">Подписаться</button>
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
          <div className="cursor-pointer hover:text-my-green-200">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 12.0011C19.49 10.5411 21 8.7911 21 6.5011C21 5.04241 20.4205 3.64346 19.3891 2.61201C18.3576 1.58056 16.9587 1.0011 15.5 1.0011C13.74 1.0011 12.5 1.5011 11 3.0011C9.5 1.5011 8.26 1.0011 6.5 1.0011C5.04131 1.0011 3.64236 1.58056 2.61091 2.61201C1.57946 3.64346 1 5.04241 1 6.5011C1 8.8011 2.5 10.5511 4 12.0011L11 19.0011L18 12.0011Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>{likes}</span>
        </div>
        <div className="flex gap-2">
          <div className="cursor-pointer hover:text-my-green-200">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19.0022L2.9 13.3022C1.99713 11.497 1.76612 9.42939 2.2483 7.46942C2.73049 5.50944 3.8944 3.78502 5.53176 2.60474C7.16911 1.42446 9.17304 0.865353 11.1849 1.02748C13.1968 1.1896 15.0854 2.06237 16.5126 3.4896C17.9398 4.91684 18.8126 6.80538 18.9747 8.81727C19.1369 10.8292 18.5777 12.8331 17.3975 14.4704C16.2172 16.1078 14.4928 17.2717 12.5328 17.7539C10.5728 18.2361 8.50522 18.0051 6.7 17.1022L1 19.0022Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
  }).isRequired
};

export default Post;
