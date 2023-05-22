import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  const homepage = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <Switch>
        <Route path={homepage} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
