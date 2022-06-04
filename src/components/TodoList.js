import Todo from "./Todo"

function TodoList( { toDos }) {
  return (
    <ul>
      {toDos.map(toDo => {
        <Todo key={toDo.id} toDo={toDo} />
      })}

    </ul>
  );
}

export default TodoList;