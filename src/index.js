import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

document.getElementById("inc").addEventListener("click", () => {
  dispatch(inc());
});
document.getElementById("dec").addEventListener("click", () => {
  dispatch(dec());
});
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  dispatch(rnd(value));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode></React.StrictMode>);
