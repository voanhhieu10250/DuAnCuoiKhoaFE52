import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import { App, MainView } from "./AdminTemplate.styles";
import SideBarAdmin from "../../components/SideBarAdmin";
import Loader from "../../components/Loader";
import * as P from "./colors";

// const SideBarAdmin = React.lazy(() => import("../../components/SideBarAdmin"));
const memuItems = [
  {
    name: "Dash Board",
    to: "/dashboard",
    icon: <i className="fas fa-chart-line"></i>,
    subMenuItem: [],
  },
  {
    name: "Profile",
    to: "/profile",
    icon: <i className="fas fa-user-tie"></i>,
    subMenuItem: [],
  },
  {
    name: "Management",
    to: "/manage",
    icon: <i className="fas fa-tasks"></i>,
    subMenuItem: [
      {
        name: "Users",
        to: "/manage/users",
      },
      {
        name: "Tickets",
        to: "/manage/tickets",
      },
      {
        name: "Films",
        to: "/manage/films",
      },
      {
        name: "Cinemas",
        to: "/manage/cinemas",
      },
    ],
  },
];
export function AdminLayout(props) {
  return (
    <App>
      <SideBarAdmin memuItems={memuItems} colorPalette={P.swampy} />
      <MainView>{props.children}</MainView>
    </App>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            // <AdminLayout>
            <Suspense fallback={<Loader />}>
              <Component {...propsComponent} />
            </Suspense>
            // </AdminLayout>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}
