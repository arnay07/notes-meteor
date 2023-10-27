import React from "react";
import { Navigate } from "react-router-dom";
import { useLoggedUser } from "meteor/quave:logged-user-react";

export const AnonymousOnly = ({ children }) => {
  const { loggedUser, isLoadingUser } = useLoggedUser();

  if (loggedUser && !isLoadingUser) {
    return <Navigate to={"/notes"} />;
  }

  return children;
};
