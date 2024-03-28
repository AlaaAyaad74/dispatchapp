import React from "react";

function Progress({ index, questionNum, points, maxPosibleUnits, answer }) {
  return (
    <header className="progress">
      <progress max={questionNum} value={index + Number(answer !== null)} />
      <p>
        Question<strong>{index + 1}</strong>/{questionNum}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPosibleUnits}
      </p>
    </header>
  );
}

export default Progress;
