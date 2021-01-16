import React from "react";
import DashboardPage from "../containers/AdminTemplate/Dashboard";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: React.lazy(() => import("../containers/HomeTemplate/Homepage")),
  },
  {
    exact: false,
    path: "/phim/:id",
    component: React.lazy(() =>
      import("../containers/HomeTemplate/DetailPage")
    ),
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
];

const routePageNotFound = [
  {
    exact: false,
    path: "",
    component: React.lazy(() => import("../containers/PageNotFound")),
  },
];
export { routesHome, routesAdmin, routePageNotFound };
