import React from "react";
import { Redirect, Route } from "react-router-dom";
import SideBarAdmin from "../../components/SideBarAdmin";

function AdminLayout(props) {
  return (
    <div>
      <SideBarAdmin />
      {props.children}
    </div>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}
