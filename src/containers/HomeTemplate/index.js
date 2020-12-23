import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import NavbarHome from "../../components/NavbarHome";

function HomeLayout(props) {
  return (
    <Fragment>
      <NavbarHome />
      {props.children}
    </Fragment>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
