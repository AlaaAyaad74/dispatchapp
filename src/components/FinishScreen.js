import React from "react";

function FinishScreen({ maxPosibleUnits, points, highScore, dispatch }) {
  const percentage = (points / maxPosibleUnits) * 100;
  return (
    <div>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPosibleUnits} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore:{highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
