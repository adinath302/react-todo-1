import React, { useState } from "react";
import style from "./addtodo.module.css";

function Addtodo({ onnewitem }) {
  const [todoname, settodoname] = useState();
  const [Duedate, setDuedate] = useState();

  const handleNameChange = (event) => {
    settodoname(event.target.value);
  };
  const handleDateChange = (event) => {
    setDuedate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onnewitem(todoname, Duedate);
    settodoname("");
    setDuedate("");
  };

  return (
    <div className="container text-center">
      <div className={`row ${style["kg-row"]}`}>
        <div className="col-6">
          <input
            className={style["input"]}
            type="text"
            placeholder="Enter todo Here "
            value={todoname}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date"
           value={Duedate} 
           onChange={handleDateChange} />
        </div>

        <div className="col-2">
          <button
            type="button"
            className={`btn ${style["kg-button"]} btn-success`}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
