import React, { useState, ReactNode } from 'react';
import { UserContext } from './UserContext';
import defaultProfilePic from '@/assets/profilepic.jpg'; 

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [profileImage, setProfileImage] = useState(defaultProfilePic);

  const updateProfileImage = (newUrl: string) => {
    setProfileImage(newUrl);
  };

  return (
    <UserContext.Provider value={{ profileImage, updateProfileImage }}>
      {children}
    </UserContext.Provider>
  );
};