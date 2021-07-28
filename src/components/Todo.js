import React, { useState, useEffect } from "react";
import "./Todo.css";
import Card from "./UI/Card";
import Input from "./UI/Input";

/**
 *
 * @returns The block component that is being rendered
 */
function Todo() {
  const [addTask, setAddTask] = useState("", () => {
    const localTask = localStorage.getItem("task");
    return localTask ? JSON.parse(localTask) : "";
  });
  const [taskDetails, setTaskDetails] = useState("", () => {
    const localDeets = localStorage.getItem("taskDeets");
    return localDeets ? JSON.parse(localDeets) : "";
  });
  const [taskList, setTaskList] = useState([], () => {
    const localList = localStorage.getItem("taskList");
    return localList ? JSON.parse(localList) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(addTask));
    localStorage.setItem("taskDeets", JSON.stringify(taskDetails));
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [addTask, taskDetails, taskList]);

  const f = () => {
    const data = [
      {
        title: addTask,
        details: taskDetails,
      },
    ];
    console.log(data);
  };

  f();

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
    <div className="container c" data-testid="notes-container">
      <div className="h" data-testid="header">
        Note Taking Application
      </div>
      <Input
        name="Add Title"
        onChange={handleTitleChange}
        onFocus={focusChangeHandler}
      />
      <Input
        name="Add Task"
        onChange={handleDetailsChange}
        onFocus={focusChangeHandler}
      />

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
