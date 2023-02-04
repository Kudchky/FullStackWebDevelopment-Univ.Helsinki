import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good * 1 + neutral * 0 + bad * -1) / all;
  let positive = (good * 100) / all;
  return (
    <form>
      <div>
        <label>good: </label>
        <label style={{ paddingLeft: "62px" }}>{good}</label>
      </div>
      <div>
        <label>neutral: </label>
        <label style={{ paddingLeft: "50px" }}>{neutral}</label>
      </div>
      <div>
        <label>bad: </label>
        <label style={{ paddingLeft: "72px" }}>{bad}</label>
      </div>
      <div>
        <label>all: </label>
        <label style={{ paddingLeft: "78px" }}>{all}</label>
      </div>
      <div>
        <label>average: </label>
        <label style={{ paddingLeft: "45px" }}>{average.toFixed(1)}</label>
      </div>
      <div>
        <label>positive: </label>
        <label style={{ paddingLeft: "43px" }}>{positive.toFixed(1)}%</label>
      </div>
    </form>
  );
};

export default Statistics;
