import { useState } from "react";
import "./App.css";
import Scores from "./components/scores";
import Staricon from "./assets/images/Star.svg";
import secondpic from "./assets/images/secondpic.svg";
function App() {
  const [submit, setSubmit] = useState(true);
  let y = 5;
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [x, setX] = useState();
  const [score, setScore] = useState("none");
  return (
    <>
      {submit && (
        <div className="container">
          <div className="oval">
            <img className="star" src={Staricon} alt="" />
          </div>
          <h1 className="header">How did we do?</h1>
          <p className="text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          {/* ეს ქულების დივი ცალკე კომპონენტად მქონდა გატანილი მარა დაფიქსირებული ქულა რაც იყო 
          ამ jsxში ვერ გადმოვიტანე და პირდაპირ დავწერე მაგიტო ასე  */}
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
          </ul>{" "}
          <button
            className="button"
            onClick={() => {
              setSubmit(!submit);
            }}
          >
            SUBMIT
          </button>
        </div>
      )}
      {!submit && (
        <div className="container" id="secondcontainer">
          <img className="secondpic" src={secondpic} alt="" />
          <div className="scoretextdiv">{`You selected ${score} out of 5`}</div>
          <h1 className="header" id="secondheader">
            Thank you!
          </h1>
          <p className="text" id="secondtext">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </>
  );
}

export default App;
