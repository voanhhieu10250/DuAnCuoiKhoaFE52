import React from "react";
import DashboardPage from "../containers/AdminTemplate/Dashboard";
import PageNotFound from "../containers/PageNotFound";

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
    component: PageNotFound,
  },
];
export { routesHome, routesAdmin, routePageNotFound };
