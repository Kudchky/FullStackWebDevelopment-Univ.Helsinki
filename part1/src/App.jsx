import React, { useState } from "react";
import Button from "./Button.jsx";
import Statistics from "./Statistics.jsx";

const App = () => {
  // convertirlo a un estado de objetos
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const calificar = (calificacion, setCalificaion) => {
    return () => {
      setCalificaion(calificacion + 1);
    };
  };

  return (
    <div>
      <h1>
        <strong>give feedback</strong>
      </h1>
      <Button handleClick={calificar(good, setGood)} text="good" />
      <Button handleClick={calificar(neutral, setNeutral)} text="neutral" />
      <Button handleClick={calificar(bad, setBad)} text="bad" />
      <h1>
        <strong>statistics</strong>
      </h1>
      {good > 0 ?? bad > 0 ?? neutral > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
export default App;
