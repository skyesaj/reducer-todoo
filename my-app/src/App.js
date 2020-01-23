import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { reducer, todo } from "./reducers/reducer";

function App() {
  return (
    <div className="App">
      <TodoList />
      {/* <TodoForm /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
