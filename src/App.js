import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import PostPage from "./components/pages/PostPage";
import MyPosts from "./components/pages/MyPosts";
import CreatePost from "./components/pages/CreatePost";
import NotFound from "./components/pages/NotFound";
import Header from "./components/ui/Header";

function App() {
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="App bg-[#F2F4F3] min-h-[100dvh] flex flex-col">
      <Header/>
      <div className="mx-auto w-full h-full max-w-screen-xl px-8 flex justify-center">
        <Switch>
          <Route path={homepage} exact component={Homepage} />
          <Route path={`${homepage}/login`} component={Login} />
          <Route path={`${homepage}/post/:postId`} component={PostPage} />
          <Route path={`${homepage}/myPosts`} component={MyPosts} />
          <Route path={`${homepage}/createPost`} component={CreatePost} />
          <Route path={`${homepage}/404`} component={NotFound} />
          <Redirect to={`${homepage}/404`} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
