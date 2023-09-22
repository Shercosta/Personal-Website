import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions/actions";

const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
