import React from "react";
import TodoContext from "./Context";
import TodoList from "./ToDo/TodoList";
import TodoAdd from "./ToDo/TodoAdd";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "1" },
    { id: 2, completed: false, title: "2" },
    { id: 3, completed: false, title: "3" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(value) {
    let curentId = todos[todos.length - 1].id + 1;
    console.log(value);

    setTodos(
      todos.concat([
        {
          id: curentId,
          completed: false,
          title: value,
        },
      ])
    );
  }

  return (
    <TodoContext.Provider value={{ removeTodo, toggleTodo, addTodo }}>
      <div className="wrapper">
        <h1>React</h1>
        {todos.length ? <TodoList todos={todos} /> : <p>No todos</p>}
        <TodoAdd />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
