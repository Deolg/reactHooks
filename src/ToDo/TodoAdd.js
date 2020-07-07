import React, { useState, useContext } from "react";
import TodoContext from "../Context";

//function useInputValue
function TodoAdd() {
  const { addTodo } = useContext(TodoContext);
  const [value, setValue] = useState("");

  function submitHadler(e) {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={(e) => submitHadler(e)}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit">Add New todo</button>
    </form>
  );
}

export default TodoAdd;
