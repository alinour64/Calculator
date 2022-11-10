import React from "react";

export default function Answer(props) {
  if (props.done) {
    try {
      return (
        <div className="answer-class">
          <div>{props.ans}=</div>
          <div>{parseFloat(eval(props.ans).toFixed(5))}</div>
        </div>
      );
    } catch (error) {
      return (
        <div className="answer-class">
          <div>{props.ans}=</div>
          <div>{"ERROR! CHECK YOUR INPUT!"}</div>
        </div>
      );
    }
  }
  return <div className="answer-class">{props.ans}</div>;
}
