import React from "react";
import Option from "./Option";
function Question({ question, answer, dispatch, points }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option
        question={question}
        answer={answer}
        dispatch={dispatch}
        points={points}
      />
    </div>
  );
}

export default Question;
