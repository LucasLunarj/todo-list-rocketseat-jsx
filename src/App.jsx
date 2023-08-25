//Hook
import { useState } from "react";

//components
import { Header } from "./components/Header";
import { TaskBar } from "./components/TaskBar";
import { Tasks } from "./components/Tasks";
//CSS
import "./App.css";

export function App() {
  const [list, setList] = useState([]);
  const [getTaskCreatedData, setGetTaskCreatedData] = useState(0)

  function listGenerator(dataList) {
    setList([...list, { task: dataList, checked: false }]);
    handleCreatedData()
  }
  const handleCreatedData = () => setGetTaskCreatedData(list.length + 1)
  console.log(getTaskCreatedData)
  return (
    <div>
      <Header />
      <div className="container">
        <div className="taskbar">
          <TaskBar taskGenerator={listGenerator} />
        </div>
        <div className="tasks">
          <Tasks listData={list} taksCreatedAmount={getTaskCreatedData} />
        </div>
      </div>
    </div>
  );
}
