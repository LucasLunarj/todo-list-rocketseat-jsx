//Hook
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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
    setList([...list, { task: dataList, checked: false, id: uuidv4() }]);
    handleCreatedData()
  }
  console.log(list)

  const handleCreatedData = () => setGetTaskCreatedData(list.length + 1)
  console.log(getTaskCreatedData)



  const handleGetId = (id) => {

    setList(list.filter((item) => id !== item.id))
    setGetTaskCreatedData(list.length - 1)
  }



  return (
    <div>
      <Header />
      <div className="container">
        <div className="taskbar">
          <TaskBar taskGenerator={listGenerator} />
        </div>
        <div className="tasks">
          <Tasks listData={list} tasksCreatedAmount={getTaskCreatedData} idGenerator={handleGetId} />
        </div>
      </div>
    </div>
  );
}
