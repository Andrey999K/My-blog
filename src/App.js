import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import MyPosts from "./pages/MyPosts";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="App bg-[#F2F4F3] min-h-screen flex flex-col">
      <Header/>
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
