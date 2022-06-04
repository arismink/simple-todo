import { useState } from "react";

function TodoForm({ addToDo }) {
  const [toDo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({...toDo, task: e.target.value})
  }

  return (
    <form>
      <input
        name="task"
        type="text"
        value={toDo.task}
        onChange={handleTaskInputChange}
      />
      <button />
    </form>
  );
}

export default TodoForm;