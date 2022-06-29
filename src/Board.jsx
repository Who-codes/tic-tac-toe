import React from "react";
import Square from "./Square";

const Board = () => {
  const renderSquare = [];

  for (let i = 0; i < 9; i++) {
    renderSquare[i] = <Square position={i} key={i} />;
  }

  return <div className="board">{renderSquare.map((i) => i)}</div>;
};

export default Board;
