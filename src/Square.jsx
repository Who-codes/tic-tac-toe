import React from "react";
import { useGlobalContext } from "./context";

const Square = ({ position }) => {
  const { squares, handleClick } = useGlobalContext();

  return (
    <button className="btn square-btn" onClick={() => handleClick(position)}>
      {squares[position]}
    </button>
  );
};

export default Square;
