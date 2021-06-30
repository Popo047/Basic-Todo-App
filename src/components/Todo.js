import React, { useState } from "react";
import "./Todo.css";
import Card from "./UI/Card";

/**
 *
 * @returns The block component that is being rendered
 */
function Todo() {
  const [addTask, setAddTask] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [taskList, setTaskList] = useState([]);

  /**
   * Set Value of the title
   * @param {*} e , is an eventListener
   */
  const handleTitleChange = (e) => {
    e.preventDefault();
    setAddTask(e.target.value);
  };

  /**
   *
   * @param {*} e
   */
  const handleDetailsChange = (e) => {
    e.preventDefault();
    setTaskDetails(e.target.value);
  };

  /**
   *
   * @param {*} event
   */
  const clickHandler = (event) => {
    event.preventDefault();
    if (addTask !== "" && taskDetails !== "") {
      var deets = {
        id: Math.floor(Math.random() * 10000),
        value: addTask,
        notes: taskDetails,
      };
      setTaskList([...taskList, deets]);
    }
  };

  /**
   * Delete the respective item when "Delete" button is pressed
   * @param {*} e , eventListener
   * @param {*} id , unique ID generated on every new task
   */
  const deleteHandler = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  /**
   * onFocus
   * @param {*} e eventListener
   */
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
          aria-label="Add Task"
          onChange={handleTitleChange}
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
        <div className="container" style={{ padding: "0px" }}>
          {taskList.map((task) => (
            <>
              <Card
                title={task.value}
                body={task.notes}
                key={task.id}
                deleteHandler={deleteHandler}
                id={task.id}
              />
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Todo;
