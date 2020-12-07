import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminTemplate from "./containers/AdminTemplate";
import AuthPage from "./containers/AdminTemplate/AuthPage";
import HomeTemplate from "./containers/HomeTemplate";
import PageNotFound from "./containers/PageNotFound";
import { routePageNotFound, routesAdmin, routesHome } from "./routes";

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
          <Route exact={false} path="/auth" component={AuthPage} />
          {showLayoutHome(routePageNotFound)}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
