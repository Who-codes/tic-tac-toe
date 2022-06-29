import React from "react";
import { useGlobalContent } from "./content";
import Square from "./Square";

const Board = () => {
  const renderSquares = [];

  for (let i = 0; i < 9; i++) {
    renderSquares[i] = <Square position={i} key={i} />;
  }

  return <div className="board">{renderSquares.map((item) => item)}</div>;
};

export default Board;
