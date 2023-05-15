import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
  { incDispatch: inc, decDispatch: dec, rndDispatch: rnd },
  dispatch
);

document.getElementById("inc").addEventListener("click", () => {
  incDispatch();
});
document.getElementById("dec").addEventListener("click", () => {
  decDispatch();
});
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode></React.StrictMode>);
