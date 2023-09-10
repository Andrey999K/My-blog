import React from "react";

const Homepage = React.lazy(() => import("./components/pages/Homepage"));
const Login = React.lazy(() => import("./components/pages/Login"));
const CreatePost = React.lazy(() => import("./components/pages/CreatePost"));
const MyPosts = React.lazy(() => import("./components/pages/MyPosts"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const PostPage = React.lazy(() => import("./components/pages/PostPage"));

export const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/post/:postId", component: PostPage },
  { path: "/my_posts", component: MyPosts },
  { path: "/create_post", component: CreatePost },
  { path: "/", component: Homepage },
  { path: "", component: NotFound }
];
