import DashboardPage from "../containers/AdminTemplate/Dashboard";
import HomePage from "../containers/HomeTemplate/Homepage";
import PageNotFound from "../containers/PageNotFound";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
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
