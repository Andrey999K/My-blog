import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BigButton from "../../common/BigButton";

const CreatePost = () => {
  const [editorState, setEditorState] = useState(EditorState.createWithText(""));
  return (
    <div className="w-[695px] my-12">
      <Editor
        wrapperClassName="bg-white dark:bg-blackDark !h-min border rounded-[10px] overflow-hidden !border-none p-5"
        editorClassName="bg-white !h-min dark:bg-blackDark border rounded !border-none px-4"
        toolbarClassName="bg-white dark:!bg-blackDark border rounded !border-none"
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbar={{
          options: ["history", "inline", "image", "remove"],
          inline: {
            options: ["bold", "italic", "underline", "strikethrough", "monospace"]
          }
        }}
      />
      <BigButton className="mt-5">Создать пост</BigButton>
    </div>
  );
};

export default CreatePost;
