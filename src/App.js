import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import MyPosts from "./pages/MyPosts";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import PostsList from "./components/PostsList";

function App() {
  const homepage = process.env.PUBLIC_URL;
  const posts = [
    {
      id: 1,
      date: "11.05.2023",
      title: "",
      description: "Мы собрали для вас подборку свежих и актуальных книг, по всем языкам программирования.В подборке не просто новые книги для программистов, но и те книги, которые дают практическую основу с задачами и решениями для получения реального полезных навыков.",
      image: "1.jpg",
      likes: 1245,
      comments: 1138,
      user: {
        nickname: "React",
        avatar: ""
      }
    },
    {
      id: 2,
      date: "03.12.2018",
      title: "Как генерировать осмысленные коммиты. Применяем стандарт Conventional Commits",
      description: "",
      image: "",
      likes: 1245,
      comments: 1138,
      user: {
        nickname: "tashbenbetov",
        avatar: ""
      }
    },
    {
      id: 3,
      date: "10.07.2019",
      title: "React Hook Router современная альтернатива React Router",
      description: "",
      image: "3.jpg",
      likes: 1245,
      comments: 1138,
      user: {
        nickname: "freislot",
        avatar: ""
      }
    }
  ];
  return (
    <div className="App bg-[#F2F4F3] min-h-screen">
      <Header/>
      <div className="w-[695px] mx-auto my-12">
        <PostsList data={posts} />
      </div>
      <Switch>
        <Route path={homepage} exact component={Homepage} />
        <Route path={`${homepage}/login`} component={Login} />
        <Route path={`${homepage}/post/:pageId`} component={PostPage} />
        <Route path={`${homepage}/myPosts`} component={MyPosts} />
        <Route path={`${homepage}/createPost`} component={CreatePost} />
        <Route path={`${homepage}/404`} component={NotFound} />
        <Redirect to={`${homepage}/404`} />
      </Switch>
    </div>
  );
}

export default App;
