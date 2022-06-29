import React, { useState } from "react";
import Board from "./Board";
import { useGlobalContext } from "./context";

const Game = () => {
  const { status, undo, restart, redo } = useGlobalContext();

  return (
    <main>
      <div className="game">
        <Board />
        <div className="game-components">
          <h3 className="status">{status}</h3>
          <div className="btn-container">
            <button className="btn main-btn" onClick={() => undo()}>
              undo
            </button>
            <button className="btn main-btn" onClick={() => restart()}>
              restart
            </button>
            <button className="btn main-btn" onClick={() => redo()}>
              redo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Game;
