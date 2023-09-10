import React from "react";
import Post from "../Post";
import PropTypes from "prop-types";

const PostsList = ({ data }) => {
  return (
    <ul>
      {data.map(post => <Post key={post.id} post={post}/>)}
    </ul>
  );
};

PostsList.propTypes = {
  data: PropTypes.array.isRequired
};
export default PostsList;
