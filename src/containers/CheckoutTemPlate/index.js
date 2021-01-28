import React, { Fragment, Suspense } from "react";
import { Route } from "react-router-dom";
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
      render={(propsComponent) => (
        <CheckoutLayout>
          <Suspense fallback={<Loader />}>
            <Component {...propsComponent} />
          </Suspense>
        </CheckoutLayout>
      )}
    />
  );
};

export default ChechoutTemplate;
