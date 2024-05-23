import Todoitem from "./todoitem.jsx";
import style from "./todoitems.module.css";

const Todoitems = ({ Todoitems, ondeleteclick }) => {
  return (
    <>
      <div className={style["items-container"]}>
        {Todoitems.map((item, i) => (
          <Todoitem
            key={i}
            tododate={item.duedate}
            todoname={item.name}
            ondeleteclick={ondeleteclick}
          />
        ))}
      </div>
    </>
  );
};
export default Todoitems;
