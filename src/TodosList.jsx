import { useState } from "react";

export const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (!todo) {
      return;
    }
    // debugger;
    const newTodo = {
      task: todo,
      key: String(Math.random() * 10000),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo("");
  };

  console.log("todods", todos);

  const deleteTodo = (key) => {
    const filteredTodos = todos.filter((todo) => todo.key !== key);
    setTodos(filteredTodos);
  };

  return (
    <>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
      />
      <button style={{ marginLeft: "10px" }} onClick={addTodo}>
        submit
      </button>

      <ol>
        {todos.map((todo) => {
          return (
            <>
              <li style={{ width: "100%" }} key={todo}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>{todo.task}</p>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteTodo(todo.key)}
                  >
                    delete
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
};
