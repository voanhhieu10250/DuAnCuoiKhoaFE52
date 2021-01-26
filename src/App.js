import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import AdminTemplate from "./containers/AdminTemplate";
import HomeTemplate from "./containers/HomeTemplate";
import { routesAdmin, routesHome } from "./routes";

const AuthPage = React.lazy(() =>
  import("./containers/AdminTemplate/AuthPage")
);
const LoginPage = React.lazy(() =>
  import("./containers/HomeTemplate/LoginPage")
);
const CheckoutPage = React.lazy(() =>
  import("./containers/HomeTemplate/CheckoutPage")
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
        {/* ĐỪNG BAO GIỜ ĐỂ ErrorBoundary và Suspense BÊN TRONG Switch, trong Switch chỉ có Route thôi.
        nếu không sẽ bị lỗi chuyển trang. Phải bọc ngay bên ngoài Switch như thế này thì mới đúng quy định của React */}
        <ErrorBoundary>
          {/* Cái fallback này sẽ ngừng hiện component Loader ngay sau lần render ĐẦU TIÊN, nên phải chú ý nếu 
          những component nào cần phải đợi fetch data thì phải tự thêm Loader vào những component đó  */}
          <Suspense fallback={<Loader />}>
            <Switch>
              {showLayoutHome(routesHome)}
              {showLayoutAdmin(routesAdmin)}
              <Route exact={false} path="/login" component={LoginPage} />
              <Route exact={false} path="/auth" component={AuthPage} />
              <Route
                exact={false}
                path="/checkout/:id"
                component={CheckoutPage}
              />
              <Route path="" render={() => <Redirect to="/" />} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
