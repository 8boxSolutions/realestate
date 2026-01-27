import { createContext, useContext } from 'react';

// Define the shape of our Context
interface UserContextType {
  profileImage: string;
  updateProfileImage: (newUrl: string) => void;
}

// Create the Context
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom Hook for easy usage
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};