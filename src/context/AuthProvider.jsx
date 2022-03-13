import { createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({})
   const navigate = useNavigate()
   useEffect(() => {
      let profile = JSON.parse(localStorage.getItem('profile'))
      setAuth(profile)
      if (!profile) return navigate('/login')
   }, [navigate])
   return (
      <AuthContext.Provider value={{ auth }}>
         {children}
      </AuthContext.Provider>
   )
}
export default AuthProvider