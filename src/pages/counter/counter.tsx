import { observer } from "mobx-react";
import React, { useState } from "react";
import { Counter as CounterState } from "../../store";
import "./counter.scss";

const counter = new CounterState();

export const Counter = observer(() => {
  const [input, setInput] = useState(2);

  return (
    <div className="counter">
      <div className="counter__display">
        <h1 className="counter__title">Current counter value:</h1>
        <span className="counter__value">{counter.value}</span>
      </div>
      <div className="counter__buttons">
        <button className="counter__button" onClick={() => counter.increase()}>
          Increase by one
        </button>
        <button className="counter__button" onClick={() => counter.decrease()}>
          Decrease by one
        </button>
        <button
          className="counter__button"
          onClick={() => counter.increaseBy(input)}
        >
          Increase by amount
        </button>
        <button
          className="counter__button"
          onClick={() => counter.decreaseBy(input)}
        >
          Decrease by amount
        </button>
        <input
          className="counter__input"
          type="number"
          min={0}
          max={10}
          value={input}
          onChange={(e) => setInput(+e.target.value)}
        />
      </div>
    </div>
  );
});
