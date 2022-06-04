import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addToDo }) {
  const [toDo, setToDo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setToDo({...toDo, task: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call only if form not empty
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
      <button type="submit" />
    </form>
  );
}

export default TodoForm;