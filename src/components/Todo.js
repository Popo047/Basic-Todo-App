import React, { useState } from "react";
import "./Todo.css";
import Card from "./UI/Card";

function Todo() {
  const [addTask, setAddTask] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setAddTask(e.target.value);
  };

  const handleDetailsChange = (e) => {
    e.preventDefault();
    setTaskDetails(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (addTask !== "" && taskDetails !== "") {
      var deets = {
        id: Math.floor(Math.random() * 10000),
        value: addTask,
        notes: taskDetails,
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
      <div className="h">Note Taking Application</div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Add Title
        </span>
        <input
          type="text"
          className="form-control"
          // placeholder="Add Task"
          aria-label="Add Task"
          onChange={handleChange}
          onFocus={focusChangeHandler}
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Add Details
        </span>
        <textarea
          type="text"
          className="form-control"
          // placeholder="Add Task"
          aria-label="Add Task"
          onChange={handleDetailsChange}
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
        <div className="container">
          {taskList.map((task) => (
            <>
              <Card title={task.value} body={task.notes} key={task.id} />
              <button
                className="btn btn-warning"
                onClick={(e) => deleteHandler(e, task.id)}
              >
                Delete
              </button>
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Todo;
