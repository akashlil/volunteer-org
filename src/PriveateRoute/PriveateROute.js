import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Context/useAuth";

const PriveateROute = ({ children, ...rest }) => {
  const { user, dataloaded } = useAuth();

  if (dataloaded) {
    return "loding";
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PriveateROute;
