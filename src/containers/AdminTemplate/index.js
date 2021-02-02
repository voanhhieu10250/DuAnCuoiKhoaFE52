import React, { Suspense } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { App, MainView } from "./AdminTemplate.styles";
import Loader from "../../components/Loader";
import * as P from "./colors";
import { routesAdmin } from "../../routes";
import { swaggerInstance } from "../../Axios";

const SideBarAdmin = React.lazy(() => import("../../components/SideBarAdmin"));

export function AdminLayout() {
  const { path, url } = useRouteMatch();
  const memuItems = [
    {
      name: "Administrative",
      to: `${url}`,
      icon: <i className="fas fa-chart-line"></i>,
      subMenuItem: [],
    },
    {
      name: "Profile",
      to: `${url}/profile`,
      icon: <i className="fas fa-user-tie"></i>,
      subMenuItem: [],
    },
    {
      name: "Management",
      to: `${url}/manage`,
      icon: <i className="fas fa-tasks"></i>,
      subMenuItem: [
        {
          name: "Users",
          to: `${url}/manage/users`,
        },
        {
          name: "Films",
          to: `${url}/manage/films`,
        },
      ],
    },
  ];
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => (
        <AdminTemplate
          key={index}
          exact={item.exact}
          path={`${path + item.path}`}
          Component={item.component}
        />
      ));
    }
  };

  if (localStorage.getItem("UserAdmin")) {
    const account = JSON.parse(localStorage.getItem("UserAdmin"));
    swaggerInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${account.accessToken}`;
    return (
      <BrowserRouter>
        <App>
          <SideBarAdmin memuItems={memuItems} colorPalette={P.swampy} />
          <MainView>
            <Suspense fallback={<Loader />}>
              <Switch>{showLayoutAdmin(routesAdmin)}</Switch>
            </Suspense>
          </MainView>
        </App>
      </BrowserRouter>
    );
  }
  return <Redirect to="/auth" />;
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <Suspense fallback={<Loader />}>
            <Component {...propsComponent} />
          </Suspense>
        );
      }}
    />
  );
}
