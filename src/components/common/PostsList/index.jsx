import React from "react";
import Post from "../Post";
import PropTypes from "prop-types";

const PostsList = ({ data, my }) => {
  return (
    <ul className="flex flex-col gap-7">
      {data.map(post => <Post key={post.id} post={post} my={my}/>)}
    </ul>
  );
};

PostsList.defaultProps = {
  my: false
};

PostsList.propTypes = {
  data: PropTypes.array.isRequired,
  my: PropTypes.bool
};
export default PostsList;
