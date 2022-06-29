import React, { useContext } from "react";

const AppContainer = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContainer.Provider value={"hello"}>{children}</AppContainer.Provider>
  );
};

const useGlobalContent = () => {
  return useContext(AppContainer);
};

export { AppProvider, useGlobalContent };
