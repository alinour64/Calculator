import React from "react";

export default function Btns(props) {
  return (
    <div className="btns-container">
      <button className="nums" onClick={props.handleClicks}>
        {props.num}
      </button>
    </div>
  );
}
