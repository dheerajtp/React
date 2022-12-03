import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  let [todoList, setTodoList] = useState([]);

  let [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    let newTodoList = [
      ...todoList,
      { id: todoList.length + 1, task, completed: 0 },
    ];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    let otherTasks = todoList.filter((item) => item.id !== id);
    setTodoList(otherTasks);
  };

  const completeTask = (id) => {
    let markTask = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(markTask);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((item, key) => (
          <Task
            key={key}
            item={item}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
