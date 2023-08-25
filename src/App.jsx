//Hook
import { useState } from "react";

//components
import { Header } from "./components/Header";
import { TaskBar } from "./components/TaskBar";
import { Tasks } from "./components/Tasks";
//CSS
import "./App.css";

export function App() {
  const [list, setList] = useState([
    {
      task: "2222"
      ,
      checked: false,
    },
  ]);

  function listGenerator(dataList) {
    return setList([...list, { task: dataList, checked: false }]);
  }
  console.log(list)
  return (
    <div>
      <Header />
      <div className="container">
        <div className="taskbar">
          <TaskBar taskGenerator={listGenerator} />
        </div>
        <div className="tasks">
          <Tasks listData={list} />
        </div>
      </div>
    </div>
  );
}
