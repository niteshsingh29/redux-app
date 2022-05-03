import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "./redux/Counter/counter.action";
function App() {
  const dispatch = useDispatch();
  const mystate = useSelector((value) => value.counterReducer);
  console.log(mystate);
  return (
    <>
      <div className="App">
        <div>count : {mystate.count}</div>

        <button onClick={() => dispatch(increaseCounter())}>
          Increase Count +
        </button>

        <button>Decrease Count -</button>
      </div>


    </>
  );
}

export default App;
