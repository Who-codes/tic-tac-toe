import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <section>
      <div className="section-center">
        <h2>Instructions</h2>
        <p>
          The object of Tic Tac Toe is to get three in a row. You play on a
          three by three game board. The first player is known as X and the
          second is O. Players alternate placing Xs and Os on the game board
          until either oppent has three in a row or all nine squares are filled.
          X always goes first, and in the event that no one has three in a row,
          the stalemate is called a cat game.
        </p>
        <Link to="/">
          <button className="btn back-btn">back home</button>
        </Link>
      </div>
    </section>
  );
};

export default Help;
