import React, { useContext, useState } from "react";
import Square from "./Square";

const AppContainer = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    isNextX: true,
  });

  return (
    <AppContainer.Provider value={{ ...state }}>
      {children}
    </AppContainer.Provider>
  );
};

const useGlobalContent = () => {
  return useContext(AppContainer);
};

export { AppProvider, useGlobalContent };
