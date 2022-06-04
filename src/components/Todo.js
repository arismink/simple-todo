// Define what a toDo would look like

function Todo({ toDo }) {
  return (
    <div style={{display: "flex"}} >
      <input
        type="checkbox"
      />
      <li
        style={{
          color: "white",
          textDecoration: toDo.completed? "line-through" : null
        }}
      >{toDo.task}</li>
      <button>X</button>
    </div>
  )
}

export default Todo;