import React from "react";

function Input(props) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          {props.name}
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Add Task"
          aria-describedby="basic-addon1"
          onChange={props.onChange}
          onFocus={props.onFocus}
        />
      </div>
    </>
  );
}

export default Input;
