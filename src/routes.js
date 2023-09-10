const Homepage = React.lazy(() => import("./components/pages/Homepage"));
const Login = React.lazy(() => import("./components/pages/Login"));
const CreatePost = React.lazy(() => import("./components/pages/CreatePost"));
const MyPosts = React.lazy(() => import("./components/pages/MyPosts"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const PostPage = React.lazy(() => import("./components/pages/PostPage"));

export default [
  Homepage,
  Login,
  CreatePost,
  MyPosts,
  NotFound,
  PostPage
];
