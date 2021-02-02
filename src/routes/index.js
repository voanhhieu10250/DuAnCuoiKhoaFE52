import React from "react";

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

const routesCheckout = [
  {
    exact: false,
    path: "/checkout/result/",
    component: React.lazy(() =>
      import("../containers/CheckoutTemPlate/BookedResultPage")
    ),
  },
  {
    exact: false,
    path: "/checkout/:id",
    component: React.lazy(() =>
      import("../containers/CheckoutTemPlate/CheckoutPage")
    ),
  },
];

const routesAdmin = [
  {
    exact: true,
    path: "/",
    component: React.lazy(() => import("../containers/AdminTemplate/Admin")),
  },
  {
    exact: false,
    path: "/profile",
    component: React.lazy(() =>
      import("../containers/AdminTemplate/ProfilePage")
    ),
  },
  {
    exact: false,
    path: "/manage/users",
    component: React.lazy(() =>
      import("../containers/AdminTemplate/UsersManagePage")
    ),
  },
  {
    exact: false,
    path: "/manage/films",
    component: React.lazy(() =>
      import("../containers/AdminTemplate/FilmsManagePage")
    ),
  },
  {
    exact: false,
    path: "/manage",
    component: React.lazy(() =>
      import("../containers/AdminTemplate/ManagePage")
    ),
  },
];
export { routesHome, routesAdmin, routesCheckout };
