import { useReducer } from "react";

const countReducer = (state, action) => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "DECREMENT") return state > 0 ? state - 1 : state;
  if (action.type === "RESET") return 0;
  return state;
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
