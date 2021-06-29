import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [addTask, setAddTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setAddTask(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (addTask !== "") {
      var deets = {
        id: Math.floor(Math.random() * 10000),
        value: addTask,
      };
      setTaskList([...taskList, deets]);
    }
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const focusChangeHandler = (e) => {
    e.target.value = "";
  };

  return (
    <div className="container c ">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Add Task
        </span>
        <input
          type="text"
          class="form-control"
          // placeholder="Add Task"
          aria-label="Add Task"
          onChange={handleChange}
          onFocus={focusChangeHandler}
          aria-describedby="basic-addon1"
        />
      </div>
      <button className="btn btn-primary" onClick={clickHandler}>
        Add a Task
      </button>
      <br />
      <br />
      {taskList !== [] ? (
        <div className="card">
          <div className="card-body">
            {taskList.map((task) => (
              <ul key={task.id}>
                {task.value}
                <br />
                <button
                  className="btn btn-warning"
                  onClick={(e) => deleteHandler(e, task.id)}
                >
                  Delete
                </button>
              </ul>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Todo;
