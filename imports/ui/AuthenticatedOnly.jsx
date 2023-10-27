import { Navigate } from "react-router-dom";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import React from "react";

export const AuthenticatedOnly = ({ children }) => {
  const { loggedUser, isLoadingUser } = useLoggedUser();

  if (!loggedUser && !isLoadingUser) {
    return <Navigate to={"/"} />;
  }

  return children;
};
