import React, { Children, createContext, useContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("userData");
        return savedUser ? JSON.parse(savedUser) : null;
    })

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated: !!user }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

// useAuth
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("Error getting auth info");

    return context
}