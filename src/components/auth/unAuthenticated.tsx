/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuthenticated = ({ children }: { children: React.ReactNode }) => {
  // Retrieve the isAuthenticated state from the Redux store
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  // Render children if not authenticated, otherwise, redirect to the dashboard page
  return !isAuthenticated ? children : <Navigate to={"/dashboard"} replace />;
};

export default UnAuthenticated;
