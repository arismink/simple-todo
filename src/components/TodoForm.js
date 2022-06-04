import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addToDo }) {

  // keeps track of input from user
  const [toDo, setToDo] = useState({
    id: "",
    task: "",
    completed: false
  });

  // handles when user types in input for a todo so we can keep track of the todo list
  const handleTaskInputChange = (e) => {
    // set toDo with the old toDo object properties spread onto it but update the task property with the new input
    setToDo({...toDo, task: e.target.value})
  }

  // handle when you want to add a new toDo to the list
  const handleSubmit = (e) => {
    // prevent default browser refresh
    e.preventDefault();

    // Call only if form not empty and remove whitespace
    if (toDo.task.trim()) {
      // get ID of task by using uuid package which will generate a ID for us
      addToDo({ ...toDo, id: uuidv4()});

      // reset task input
      setToDo({...toDo, task: ""});
    }
  }

  return (
    <form
      onSubmit={handleSubmit
      }>
      <input
        name="task"
        type="text"
        value={toDo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit"> submit </button>
    </form>
  );
}

export default TodoForm;