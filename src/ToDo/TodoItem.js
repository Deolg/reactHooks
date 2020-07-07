import React, { useContext } from "react";
import PropTypes from "prop-types";
import TodoContext from "../Context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid grey",
    borderRadius: "4px",
    marginBottom: "5px",
  },
  input: {
    marginRight: "1rem",
  },
  done: {
    textDecoration: "line-through",
  },
};

function TodoItem({ todo, index }) {
  const { removeTodo, toggleTodo } = useContext(TodoContext);

  return (
    <li style={styles.li}>
      <span style={todo.completed ? styles.done : {}}>
        <input
          style={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
