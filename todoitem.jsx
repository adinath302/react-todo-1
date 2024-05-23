import style from "./todoitem.module.css";

function Todoitem({ todoname, tododate, ondeleteclick }) {
  return (
    <div className="container ">
      <div className={`row ${style["kg-row"]}`}>
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn kg-button btn-danger"
            onClick={() => ondeleteclick(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
