import { useState } from "react";


import TodoForm from "./components/TodoForm";

import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos([...toDo, ...toDos])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React todo</p>
        <TodoForm
          addToDo={addToDo}
        />
      </header>
    </div>
  );
}

export default App;
