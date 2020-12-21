import React, { Suspense } from "react";
import { Route } from "react-router-dom";
// import HomeFooter from "../../components/HomeFooter";
import NavbarHome from "../../components/NavbarHome";

const HomeFooter = React.lazy(() => import("../../components/HomeFooter"));

function HomeLayout(props) {
  return (
    <Suspense fallback={<div></div>}>
      <NavbarHome />
      {props.children}
      <HomeFooter />
    </Suspense>
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
