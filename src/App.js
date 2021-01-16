import React, { Suspense } from "react";
import { BrowserRouter, /*Redirect,*/ Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import AdminTemplate from "./containers/AdminTemplate";
import HomeTemplate from "./containers/HomeTemplate";
import { routePageNotFound, routesAdmin, routesHome } from "./routes";

const AuthPage = React.lazy(() =>
  import("./containers/AdminTemplate/AuthPage")
);
const LoginPage = React.lazy(() =>
  import("./containers/HomeTemplate/LoginPage")
);

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      ));
    }
  };

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => (
        <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      ));
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showLayoutHome(routesHome)}
          {showLayoutAdmin(routesAdmin)}
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Route exact={false} path="/login" component={LoginPage} />
              <Route exact={false} path="/auth" component={AuthPage} />
            </Suspense>
          </ErrorBoundary>
          {/* <Route render={() => <Redirect to="/" />} /> */}
          {showLayoutHome(routePageNotFound)}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
