import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Authcontxt from "../context/authcontext";

const ProtectedRoute = (props) => {
  const { user } = useContext(Authcontxt);
  return <>{user ? <Outlet /> : <Navigate to={"/login"} />};</>;
};

export default ProtectedRoute;
