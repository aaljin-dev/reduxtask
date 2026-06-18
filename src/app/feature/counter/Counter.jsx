import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
