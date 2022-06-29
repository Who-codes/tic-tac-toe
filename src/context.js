import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    history: [{ squares: Array(9).fill(null) }],
    isNextX: true,
    stepNumber: 0,
  });

  const handleClick = (position) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (decideResult(squares) || squares[position]) {
      return;
    }
    squares[position] = state.isNextX ? "X" : "O";
    setState({
      history: history.concat([{ squares }]),
      isNextX: !state.isNextX,
      stepNumber: history.length,
    });
  };

  const undo = () => {
    state.stepNumber &&
      setState({
        ...state,
        stepNumber: state.stepNumber - 1,
        isNextX: state.stepNumber % 2 === 0,
      });
  };

  const restart = () => {
    setState({
      ...state,
      isNextX: true,
      stepNumber: 0,
    });
  };

  const redo = () => {
    state.history.length - 1 > state.stepNumber &&
      setState({
        ...state,
        stepNumber: state.stepNumber + 1,
        isNextX: state.stepNumber % 2 === 0,
      });
  };

  const decideResult = (squares) => {
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
        return `Winner ${squares[a]}`;
      }
    }
    if (!squares.includes(null)) {
      return `It's a draw.`;
    }
    return null;
  };

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = decideResult(current.squares);

  console.log(winnerList);

  let status;

  if (winner) {
    status = winner;
  } else {
    status = `Next PLayer :  ${state.isNextX ? "X" : "O"}`;
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleClick,
        status,
        current,
        undo,
        restart,
        redo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
