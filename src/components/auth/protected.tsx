/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  const location = useLocation()?.pathname;

  return  isAuthenticated ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default Protected;
