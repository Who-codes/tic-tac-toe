import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    isNextX: true,
  });

  const handleClick = (position) => {
    const squares = state.squares.slice();
    if (desideWinner(squares) || squares[position]) {
      return;
    }
    squares[position] = state.isNextX ? "X" : "O";
    setState({
      squares,
      isNextX: !state.isNextX,
    });
  };

  const desideWinner = (squares) => {
    const lists = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lists.length; i++) {
      const [a, b, c] = lists[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <AppContext.Provider value={{ ...state, handleClick }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
