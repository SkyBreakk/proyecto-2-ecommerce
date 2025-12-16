import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {

  const initialValue = {
    nombre: "",
    correo: "",
    password: "",
    rol: "",
    isLogin: false
  } ;

  const [user, setUser] = useState(initialValue);

  const logIn = (nombre,correo,password,rol) => {
    setUser({
      nombre,
      correo,
      password,
      rol,
      isLogin: true
    });
  }

  const logOut = () => {
    setUser(initialValue);
  };

  const datos = { user, logIn, logOut };

  return <UserContext.Provider value={datos}>
      {children}
    </UserContext.Provider>
    
};