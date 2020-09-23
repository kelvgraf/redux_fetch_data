import React from "react";
import "./styles.css";
import Selector from "./components/Selector";
import { createStore, applyMiddleware } from "redux";
import reducer from "./dataFlow/reducers";
import { Provider } from "react-redux";
import Output from "./components/Output";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  "";
  return (
    <div className="App">
      <Provider store={store}>
        <Selector />
        <Output />
      </Provider>
    </div>
  );
}
