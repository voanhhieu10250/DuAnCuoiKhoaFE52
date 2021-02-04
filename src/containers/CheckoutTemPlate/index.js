import React, { Fragment, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import CheckoutStepController from "../../components/CheckoutStepController";
import Loader from "../../components/Loader";

const CheckoutLayout = ({ children }) => {
  return (
    <Fragment>
      <CheckoutStepController />
      {children}
    </Fragment>
  );
};

const ChechoutTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAccount"))
          return (
            <CheckoutLayout>
              <Suspense fallback={<Loader />}>
                <Component {...propsComponent} />
              </Suspense>
            </CheckoutLayout>
          );
        else return <Redirect to="/login" />;
      }}
    />
  );
};

export default ChechoutTemplate;
