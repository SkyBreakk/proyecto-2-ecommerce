import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoutes = ({ children }) => {

  const { user } = useContext(UserContext);

  if (user.isLogin) { 
    return children 
  } else { 
    return <Navigate to="/"/> 
  }
}

export default ProtectedRoutes;
