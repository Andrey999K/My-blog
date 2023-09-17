import React, { useState } from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SubscriptionButton from "../SubscriptionButton";
import Icon from "../Icon";
import Like from "../Like";
import PostMenu from "../../ui/PostMenu";
import ModalWindow from "../ModalWindow";
import EditorPost from "../EditorPost";
import BigButton from "../BigButton";
import { EditorState, convertFromHTML, convertToRaw } from "draft-js";
import ContentState from "draft-js/lib/ContentState";
import draftToHtml from "draftjs-to-html";
import httpService from "../../../services/http.service";

const Post = ({ post, my }) => {
  const { id, user, date, title, description, image, likes, comments } = post;
  const [onEditPost, setOnEditPost] = useState(false);
  const contentState = convertFromHTML(createContent());
  const defaultState = EditorState.createWithContent(
    ContentState.createFromBlockArray(contentState)
  );
  const [editorState, setEditorState] = useState(defaultState);
  const { nickname } = user;
  const homepage = process.env.PUBLIC_URL;
  const handleOnEditPost = () => {
    setOnEditPost(true);
  };
  function createContent() {
    let context = "";
    if (title) context += `<h2><strong>${title}</strong></h2>`;
    if (description) context += `<p>${description}</p>`;
    return context;
  }
  const handleEditPost = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const newContent = draftToHtml(rawContentState).replace("\n", "").slice(0, -1);
    httpService.put(
      `http://localhost:5000/api/v1/post/${id}`,
      {
        newContent
      }
    )
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };
  return (
    <>
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
                <PostMenu
                  postId={id}
                  list={
                    [
                      { text: "Изменить", action: handleOnEditPost },
                      { text: "Удалить", action: "123" }
                    ]
                  }
                />
              </div>
              )
            : (
              <SubscriptionButton/>
              )
          }
        </div>
        {!!title && <h2 className="font-bold text-xl">{title}</h2>}
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
      {onEditPost && (
        <ModalWindow handleClose={setOnEditPost}>
          <div className="flex flex-col h-full">
            <EditorPost editorState={editorState} setEditorState={setEditorState}/>
            <div className="ml-9 mt-auto h-full flex items-end">
              <BigButton onClick={handleEditPost}>Изменить</BigButton>
            </div>
          </div>
        </ModalWindow>
      )}
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
