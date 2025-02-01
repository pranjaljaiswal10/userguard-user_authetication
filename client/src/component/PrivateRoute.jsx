import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../utils/usercontext.jsx";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(UserContext);
console.log(state)
  const location = useLocation();
  if (!state?.token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
