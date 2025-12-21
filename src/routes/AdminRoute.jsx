import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext";

function AdminRoute({children}) {
    
    const {user} = useContext(UserContext);

    const isAdmin = () =>{
        if (user.isLogin == true && user.rol == "admin"){
            return true
        }else{
            return false
        }
    };

    if (isAdmin()) {
        return children
    }else {
        return <Navigate to={"/"}/>
    }
}

export default AdminRoute