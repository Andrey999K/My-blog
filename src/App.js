import React from "react";
import Header from "./components/ui/Header";
import getRoutes from "./utils/getRoutes";
import { publicRoutes } from "./routes";
import { Redirect, Switch } from "react-router-dom";

function App() {
  // const homepage = process.env.PUBLIC_URL;
  return (
    <div className="App bg-[#F2F4F3] min-h-[100dvh] flex flex-col">
      <Header/>
      <div className="mx-auto w-full h-full max-w-screen-xl px-8 flex justify-center">
        <Switch>
          {getRoutes(publicRoutes)}
          <Redirect to="/" />
        {/*  <Route path={homepage} exact component={Homepage} /> */}
        {/*  <Route path={`${homepage}/login`} component={Login} /> */}
        {/*  <Route path={`${homepage}/post/:postId`} component={PostPage} /> */}
        {/*  <Route path={`${homepage}/myPosts`} component={MyPosts} /> */}
        {/*  <Route path={`${homepage}/createPost`} component={CreatePost} /> */}
        {/*  <Route path={`${homepage}/404`} component={NotFound} /> */}
        {/*  <Redirect to={`${homepage}/404`} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
