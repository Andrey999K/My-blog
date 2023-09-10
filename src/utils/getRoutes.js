import { Route, Switch } from "react-router-dom";
import React from "react";
import Loader from "../components/ui/Loader";

const getRoutes = (routes, attr) => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.path === "") {
          return (
            <Route
              render={props => (
                <React.Suspense fallback={<Loader />} >
                  <prop.component {...props} title={prop.name} {...attr} />
                </React.Suspense>
              )}
              key={key}
            />
          );
        }
        return (
          <Route
            path={prop.path}
            render={props => (
              <React.Suspense fallback={<Loader />} >
                <prop.component {...props} title={prop.name} {...attr} />
              </React.Suspense>
            )}
            exact
            key={key}
          />
        );
      })}
    </Switch>
  );
};

export default getRoutes;
