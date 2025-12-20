import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {

  // Declaro los valores inciales para el contexto
  const initialValue = {
    nombre: "",
    correo: "",
    password: "",
    rol: "",
    isLogin: false
  };

  // Declaración del contexto
  const [user, setUser] = useState( JSON.parse(localStorage.getItem("userLogIn")) || initialValue );

  // Se guarda en el localStorage la sesion abierta
  useEffect( () => {
    localStorage.setItem("userLogIn",JSON.stringify(user));
  }, [user] );

  // Función de abrir sesión
  const logIn = (nombre, correo, password, rol) => {
    setUser({
      nombre,
      correo,
      password,
      rol,
      isLogin: true
    });
  }

  // Función para cerrar sesión
  const logOut = () => {
    setUser(initialValue);
    localStorage.removeItem("userLogIn");
  };

  const datos = { user, logIn, logOut };

  return <UserContext.Provider value={datos}>
    {children}
  </UserContext.Provider>

};
