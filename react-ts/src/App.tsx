import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const items = [new Todo("Learn react"), new Todo("Learning typescript")];
  return (
    <div>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
