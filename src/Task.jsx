import React from "react";

function Task(props) {
  return (
    <div>
      <h1 style={{ color: props.item.completed ? "green" : "red" }}>
        {props.item.task}
      </h1>
      <button
        onClick={() => {
          props.deleteTask(props.item.id);
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          props.completeTask(props.item.id);
        }}
      >
        {props.item.completed ? "Mark as not completed" : "Completed"}
      </button>
    </div>
  );
}

export default Task;
