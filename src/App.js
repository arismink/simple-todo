import { useState } from "react";


import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    // add new toDo at the beginning, with the old toDos spread
    setToDos([toDo, ...toDos])
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
