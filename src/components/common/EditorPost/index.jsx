import React from "react";
import { Editor } from "react-draft-wysiwyg";
import PropTypes from "prop-types";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorPost = ({ editorState, setEditorState }) => {
  return (
    <Editor
      wrapperClassName="h-full bg-white dark:bg-blackDark !h-min border rounded-[10px] overflow-hidden !border-none p-5"
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
  );
};

EditorPost.propTypes = {
  editorState: PropTypes.any.isRequired,
  setEditorState: PropTypes.func.isRequired
};

export default EditorPost;
