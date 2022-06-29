import React from "react";
import Board from "./Board";
import { useGlobalContent } from "./content";

const Game = () => {
  return (
    <main>
      <div className="game">
        <Board />
      </div>
    </main>
  );
};

export default Game;
