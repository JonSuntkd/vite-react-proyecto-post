import { Navigate } from "react-router-dom";
import useUser from "../components/Context/LoginContext/Hooks/useContext";

function RoutePrivate({ children }) {
  
  const {user} = useUser();

  if (!user) {
    return <Navigate to="/login" replace="true" />;
  }

  return <>{children}</>;
}

export default RoutePrivate;
