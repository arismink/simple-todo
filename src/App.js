import { useEffect, useState } from "react";


import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';

// unique local storage key to store todos in
const LOCAL_STORAGE_KEY = "simple-todo-list"

function App() {
  const [toDos, setToDos] = useState([]);

  // populate todo list with items in local storage when app initially renders
  useEffect(() => {
    // get the todos from local storage and store it in variable
    const storageToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('storage toDos', storageToDos);
    // call only if storage not null
    if (storageToDos) {
      setToDos([storageToDos]);
      console.log('called?');
    }
  }, [])

  // store our todos in local storage everytime a new todo is added
  // persist todos on refresh
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
    console.log('todos', toDos);
  }, [toDos]);

  const addToDo = (toDo) => {
    // add new toDo at the beginning, with the old toDos spread
    setToDos([toDo, ...toDos]);

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React toDo</p>
        <TodoForm
          addToDo={addToDo}
        />
        <TodoList
          toDos={toDos}
        />
      </header>
    </div>
  );
}

export default App;
