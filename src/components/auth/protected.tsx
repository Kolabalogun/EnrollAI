/* eslint-disable @typescript-eslint/no-explicit-any */

import { ORG_LOGIN_ROUTE } from "@/router/routes";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const { accountType } = useSelector((state: any) => state.auth);
  const location = useLocation()?.pathname;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to={accountType === "organization" ? ORG_LOGIN_ROUTE : "/login"}
      state={{ from: location }}
      replace
    />
  );
};

export default Protected;
