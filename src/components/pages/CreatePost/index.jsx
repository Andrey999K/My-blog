import React, { useState } from "react";
import { EditorState } from "draft-js";
import BigButton from "../../common/BigButton";
import EditorPost from "../../common/EditorPost";

const CreatePost = () => {
  const [editorState, setEditorState] = useState(EditorState.createWithText(""));
  return (
    <div className="w-[695px] my-12">
      <EditorPost editorState={editorState} setEditorState={setEditorState}/>
      <BigButton className="mt-5">Создать пост</BigButton>
    </div>
  );
};

export default CreatePost;
