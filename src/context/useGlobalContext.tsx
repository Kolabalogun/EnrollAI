/* eslint-disable react-refresh/only-export-components */

import React, { useState, createContext, useContext, ReactNode } from "react";

interface AppContextProps {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { useGlobalContext, AppProvider };
