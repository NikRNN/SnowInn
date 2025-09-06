import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incr = () => setCounter(counter + 1);
  console.log(counter);

  return (
    <div className={classes.btn}>
      <h1>{counter}</h1>
      fdvvdfvfvfdvdfsbvfdsvf
      <button onClick={incr}>Click</button>
    </div>
  );
};
