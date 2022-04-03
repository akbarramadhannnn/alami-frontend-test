import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout";
import ListRoutes from "./routes";

const App = () => {
  useEffect(() => {
    const listSeller = window.localStorage.getItem("listSeller");
    if (listSeller === null) {
      window.localStorage.setItem("listSeller", JSON.stringify([]));
    }
  }, []);
  return (
    <Layout>
      <Switch>
        {ListRoutes.map((route, indexRoute) => (
          <Route
            key={indexRoute}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
