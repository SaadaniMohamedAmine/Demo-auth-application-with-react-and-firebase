import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../hooks/authContext";
import Feed from "../components/Feed";

const PrivateRoute = () => {
  const auth = useContext(AuthContext);
  return auth.authStatus ? <Feed /> : <Navigate to="/login" />;
};

export default PrivateRoute;
