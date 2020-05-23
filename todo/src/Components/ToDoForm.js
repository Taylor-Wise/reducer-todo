import React from "react";

const ToDoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label />
      <input
        type="text"
        name="newTask"
        placeholder="Enter task here"
        onChange={props.handleChange}
      />
      <button type="submit">Add Task</button>
      <button onClick={props.clearComplete}>Clear Completed</button>
    </form>
  );
};

export default ToDoForm;
