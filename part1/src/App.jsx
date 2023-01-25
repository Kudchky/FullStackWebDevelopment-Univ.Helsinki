import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
import Display from "./Display";
import Button from "./Button.jsx";

const App = () => {
  const [counter, setCounter] = useState(0);

  /* setTimeout(() => setCounter(counter + 1), 1000); */
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decrementByOne = () => setCounter(counter - 1);

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Display counter={counter} />
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
      <Button handleClick={increaseByOne} text="Plus" />
      <br />
      <Button handleClick={setToZero} text="Reset" />
      <br />
      <Button handleClick={() => setCounter(0)} text="Zero" />
      <br />
      <Button handleClick={decrementByOne} text="Decrement" />
    </div>
  );
};
export default App;
