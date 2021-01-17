import React, { Fragment, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../../components/Loader";
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
          <Suspense fallback={<Loader />}>
            <Component {...propsComponent} />
          </Suspense>
        </HomeLayout>
      )}
    />
  );
}
