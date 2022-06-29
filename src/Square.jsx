import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const Square = ({ position }) => {
  const { current, handleClick } = useGlobalContext();

  return (
    <button className="btn square-btn" onClick={() => handleClick(position)}>
      {current.squares[position]}
    </button>
  );
};

export default Square;
