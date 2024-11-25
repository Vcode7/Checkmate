"use client"; // Ensure this component runs on the client-side

import React, { useEffect, useState, createContext, useContext } from 'react';
import { jwtDecode } from "jwt-decode";
import { removeTokenFromLocalStorage, setTokenInLocalStorage } from './tokenstore';

const UserContext = createContext(null);
const LoggedInContext = createContext(false);

// Custom hook to access user data
export const useUser = () => useContext(UserContext);

// Custom hook to access logged-in status
export const useLoggedIn = () => useContext(LoggedInContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    const loadUserData = () => {
      const token = localStorage.getItem('Token'); // Get the token from localStorage
      if (token) {
        try {
          const decodedData = jwtDecode(token); // Decode the token to get user data
          setUserData(decodedData); // Set the decoded data as userData
          setLoggedIn(true); // Set logged-in status to true
        } catch (error) {
          console.error('Failed to decode token:', error);
          setLoggedIn(false); // If the token is invalid, consider the user as not logged in
        }
      } else {
        setLoggedIn(false); // If no token, set logged-in status to false
      }
    };

    loadUserData(); // Call loadUserData once on mount
  }, []); // Empty dependency array to ensure it only runs once

  // Function to handle login
  const login = (token) => {
    setTokenInLocalStorage(token); // Save token to localStorage
    const decodedData = jwtDecode(token); // Decode token
    setUserData(decodedData); // Set decoded user data
    setLoggedIn(true); // Set logged-in status to true
  };

  // Function to handle logout
  const logout = () => {
    removeTokenFromLocalStorage();// Remove token from localStorage
    setUserData(null); // Clear user data
    setLoggedIn(false); // Set logged-in status to false
  };

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      <LoggedInContext.Provider value={loggedIn}>
        {children}
      </LoggedInContext.Provider>
    </UserContext.Provider>
  );
};
