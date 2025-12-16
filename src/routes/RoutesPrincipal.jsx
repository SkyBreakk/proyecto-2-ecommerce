import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import PagesLayout from "../layout/PagesLayout";
import SearchScreen from "../views/SearchScreen";
import RegisterScreen from "../views/RegisterScreen"
import AdminScreen from "../views/AdminScreen";
import { UserContext } from "../context/UserContext";


const RoutesPrincipal = () => {
  
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="/Register" element={<RegisterScreen/>}/>
        <Route path="/Admin" element={ 
          user.rol == "admin" ? <AdminScreen/> : <Navigate to="/" /> 
          }/>
      </Route>
    </Routes>
  );
};

export default RoutesPrincipal;
