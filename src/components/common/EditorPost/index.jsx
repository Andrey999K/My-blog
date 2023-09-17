import React from "react";
import { Editor } from "react-draft-wysiwyg";
import PropTypes from "prop-types";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorPost = ({ editorState, setEditorState }) => {
  return (
    <Editor
      wrapperClassName="relative h-full bg-white dark:bg-blackDark border rounded-[10px]n !border-none p-5"
      editorClassName="bg-white h-full dark:bg-blackDark border rounded !border-none px-4"
      toolbarClassName="bg-white dark:!bg-blackDark border rounded !border-none"
      editorState={editorState}
      onEditorStateChange={setEditorState}
      toolbar={{
        options: ["history", "inline", "fontSize", "blockType", "embedded", "image", "remove"],
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
