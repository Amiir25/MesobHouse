import { createContext, useContext, useEffect, useState } from "react";
import { usePopup } from "../ui/PopupContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { handlePopup } = usePopup();

  // User Database
  const [userDB, setUserDB] = useState(() => {
    const storedUsers = localStorage.getItem("userDB");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  // Current user
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("currentUser");
  });

  // Handle user registeration
  const handleRegister = (user) => {
    if (!user) {
      handlePopup("error", "Can't register with empty data");
      return false;
    }

    // Check if phone is registered
    const existingPhone = userDB.find((u) => u.phone === user.phone);
    if (existingPhone) {
      handlePopup("error", "Phone number already exists");
      setIsAuthenticated(false);
      return false;
    }

    // Check if email is registered
    const existingEmail = userDB.find((u) => u.email === user.email);
    if (existingEmail) {
      handlePopup("error", "Email already exists");
      setIsAuthenticated(false);
      return false;
    }

    setUserDB([...userDB, user]);
    setCurrentUser(user);
    setIsAuthenticated(true);
    return true;
  };

  // Handle login with phone
  const handlePhoneLogin = (user) => {
    if (!user) {
      handlePopup("error", "Can't login with empty data");
      return false;
    }

    const matchedUser = userDB.find(
      (u) => u.phone === user.phone && u.password === user.password,
    );

    if (!matchedUser) {
      handlePopup(
        "error",
        "User not found. Check you phone number and password.",
      );
      setIsAuthenticated(false);
      return false;
    }

    setCurrentUser(matchedUser);
    setIsAuthenticated(true);
    return true;
  };

  // Handle login with email
  const handleEmailLogin = (user) => {
    if (!user) {
      handlePopup("error", "Can't login with empty data");
      return false;
    }

    const matchedUser = userDB.find(
      (u) => u.email === user.email && u.password === user.password,
    );

    if (!matchedUser) {
      handlePopup("error", "User not found. Check you email and password.");
      setIsAuthenticated(false);
      return false;
    }

    setCurrentUser(matchedUser);
    setIsAuthenticated(true);
    return true;
  };

  // Handle logout
  const logout = () => {
    // clear states
    setCurrentUser(null);
    setIsAuthenticated(false);

    // Clear local storage
    localStorage.removeItem("savedCart");
    localStorage.removeItem("currentUser");
  }

  // Update userDB
  useEffect(() => {
    localStorage.setItem("userDB", JSON.stringify(userDB));
  }, [userDB]);

  // Update current user
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        handleRegister,
        handlePhoneLogin,
        handleEmailLogin,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Error getting auth info");

  return context;
};
