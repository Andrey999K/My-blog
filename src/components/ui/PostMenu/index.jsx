import React, { useState } from "react";
import Icon from "../../common/Icon";
import ModalWindow from "../../common/ModalWindow";
import EditorPost from "../../common/EditorPost";
import { EditorState } from "draft-js";

const PostMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createWithText(""));
  const handleOpenMenu = () => {
    setOpenMenu(prevState => !prevState);
  };
  const handleEditPost = () => {
    setEditPost(true);
    setOpenMenu(false);
  };
  return (
    <div className="relative flex items-center">
      <button onClick={handleOpenMenu} className="inline">
        <Icon name="menu" />
      </button>
      {openMenu && (
        <>
          <ul className="absolute top-6 right-0 p-4 bg-white shadow-lg rounded-lg">
            <li>
              <button onClick={handleEditPost}>Изменить</button>
            </li>
            <li>
              <button>Удалить</button>
            </li>
          </ul>
        </>
      )}
      {editPost && (
        <ModalWindow handleClose={setEditPost}>
          <EditorPost editorState={editorState} setEditorState={setEditorState}/>
        </ModalWindow>
      )}
    </div>
  );
};

export default PostMenu;
