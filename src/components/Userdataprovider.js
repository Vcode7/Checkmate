// components/UserDataProvider.js
"use client"; // Ensure this component runs on the client-side

import React, { useEffect, useState, createContext, useContext } from 'react';
import {jwtDecode} from "jwt-decode";

const UserContext = createContext(null);

// Custom hook to access user data in any child component
export const useUser = () => useContext(UserContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserData = () => {
      const token = localStorage.getItem('Token'); // Get the token from localStorage
      if (token) {
        try {
          const decodedData = jwtDecode(token); // Decode the token to get user data
          setUserData(decodedData); // Set the decoded data as userData
        } catch (error) {
          console.error('Failed to decode token:', error);
        }
      }
    };

    loadUserData(); // Call loadUserData once on mount
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
