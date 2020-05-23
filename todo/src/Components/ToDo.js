import React from "react";

const ToDo = (props) => {
  return (
    <div className="ToDo">
      {props.state.map((task) => (
        <p
          key={task.id}
          className={task.completed ? "complete" : "uncomplete"}
          onClick={() => props.toggleComplete(task.id)}
        >
          {task.item}
        </p>
      ))}
    </div>
  );
};

export default ToDo;
