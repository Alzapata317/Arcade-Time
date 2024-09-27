'use client'
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContext.Provider value={{ showList, setShowList, showModal, setShowModal }}>
      {children}
    </AppContext.Provider>
  );
};