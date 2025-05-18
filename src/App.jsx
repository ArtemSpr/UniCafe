import React from "react";
import { useState } from "react";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Positive = (props) => {
  if (props.all !== 0) {
    return <span> Good reviews {(props.pos * 100) / props.all} %</span>;
  } else {
    return <span>There are no reviews here yet</span>;
  }
};

const StatisticLine = (props) => (
  <tr>
    <td className="text">{props.text} :</td>
    <td>{props.value}</td>
  </tr>
);

const Statistic = (props) => {
  if (props.all !== 0) {
    return (
      <table>
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine text="Bad" value={props.bad} />
        <StatisticLine text="All" value={props.all} />
      </table>
    );
  } else {
    return <span>There are no reviews here yet</span>;
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <h1>Give a feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistic</h1>
      <br />
      <Statistic all={all} good={good} bad={bad} neutral={neutral} />
      <br />
      <h1>Rate of positive reviews</h1>
      <Positive all={all} pos={good} />
    </div>
  );
};

export default App;
