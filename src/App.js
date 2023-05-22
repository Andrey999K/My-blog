import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import MyPosts from "./pages/MyPosts";
import CreatePost from "./pages/CreatePost";

function App() {
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <Switch>
        <Route path={homepage} exact component={Homepage} />
        <Route path={`${homepage}/login`} component={Login} />
        <Route path={`${homepage}/post/:pageId`} component={PostPage} />
        <Route path={`${homepage}/myPosts`} component={MyPosts} />
        <Route path={`${homepage}/createPost`} component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
