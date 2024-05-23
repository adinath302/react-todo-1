import "./App.css";
import { useState } from "react";
import Todoitems from "./components/todoitems";
import Appname from "./components/Appname";
import Addtodo from "./components/addtodo";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoitems, settodoitems] = useState([]);

  // Method
  const handlenewitem = (itemname, itemduedate) => {
    // console.log(`new item added: ${itemname} , date: ${itemduedate}`);
    const newtodoitems = [
      ...todoitems,
      {
        name: itemname,
        duedate: itemduedate,
      },
    ];
    settodoitems(newtodoitems);
  };

  const handleDeleteitem = (todoitemname) => {
    const newtodoitems = todoitems.filter((item) => item.name !== todoitemname);

    settodoitems(newtodoitems);

    
  };

  return (
    <center>
      <Appname />
      <Addtodo onnewitem={handlenewitem} />
      {todoitems.length === 0 && <WelcomeMessage />}
      <Todoitems ondeleteclick={handleDeleteitem} Todoitems={todoitems} />
    </center>
  );
}

export default App;
