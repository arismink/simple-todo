import Todo from "./Todo"

function ToDoList( { toDos }) {
  return (
    <ul>
      {toDos.map(toDo => {
        <Todo key={toDo} toDo={toDo} />
      })}

    </ul>
  );
}

export default ToDoList;