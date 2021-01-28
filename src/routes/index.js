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
    exact: false,
    path: "/dashboard",
    component: React.lazy(() =>
      import("../containers/AdminTemplate/Dashboard")
    ),
  },
];
export { routesHome, routesAdmin, routesCheckout };
