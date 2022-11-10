import React from "react";
import Btns from "./Btns";
import Answer from "./Answer";

export default function Calc() {
  const [equation, setEquation] = React.useState("");
  const [done, setDone] = React.useState(false);
  function calculate(num) {
    if (done) {
      setDone((prev) => !prev);
      let number;
      try {
        number = parseFloat(eval(equation).toFixed(5));
      } catch (error) {
        number = equation;
      }
      setEquation((prev) => number);
    }
    if (num === "DEL") {
      let pop;
      try {
        pop = equation.slice(0, -1);
      } catch (error) {
        pop = "";
      }
      setEquation((equation) => pop);
    } else if (num === "C") {
      setEquation("");
    } else if (num !== "=") {
      setEquation((prev) => (prev += num));
    } else if (num === "=") {
      setDone((prev) => !prev);
    }
  }
  return (
    <div className="Calc">
      <Answer done={done} ans={equation} />
      <div className="table-background">
        <table className="">
          <tr>
            <Btns handleClicks={() => calculate("C")} num="C" />
            <Btns handleClicks={() => calculate("")} num="" />
            <Btns handleClicks={() => calculate("DEL")} num="DEL" />
            <Btns handleClicks={() => calculate("/")} num="/" />
          </tr>

          <tr>
            <Btns handleClicks={() => calculate(7)} num="7" />
            <Btns handleClicks={() => calculate(8)} num="8" />
            <Btns handleClicks={() => calculate(9)} num="9" />
            <Btns handleClicks={() => calculate("*")} num="*" />
          </tr>

          <tr>
            <Btns handleClicks={() => calculate(4)} num="4" />
            <Btns handleClicks={() => calculate(5)} num="5" />
            <Btns handleClicks={() => calculate(6)} num="6" />
            <Btns handleClicks={() => calculate("-")} num="-" />
          </tr>

          <tr>
            <Btns handleClicks={() => calculate(1)} num="1" />
            <Btns handleClicks={() => calculate(2)} num="2" />
            <Btns handleClicks={() => calculate(3)} num="3" />
            <Btns handleClicks={() => calculate("+")} num="+" />
          </tr>

          <tr>
            <Btns handleClicks={() => calculate("")} num="" />
            <Btns handleClicks={() => calculate("0")} num="0" />
            <Btns handleClicks={() => calculate(".")} num="&#x2022;" />
            <Btns handleClicks={() => calculate("=")} num="=" />
          </tr>
        </table>
      </div>
    </div>
  );
}
