import React from "react";
import { useState } from "react";
function Scores() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [x, setX] = useState();
  const [score, setScore] = useState();
  return (
    <>
      <ul className="scoresul">
        {numbers.map((num, key) => {
          let id = "";
          if (key === x) {
            id = "selected";
          } else {
            id = "";
          }
          return (
            <div
              className="scoresdiv"
              id={`${id}`}
              key={key}
              onClick={() => {
                setX(key);
                setScore(key + 1);
              }}
            >
              {num}
            </div>
          );
        })}
      </ul>
    </>
  );
}
export default Scores;
