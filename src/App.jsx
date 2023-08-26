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
  const [getId, setGetId] = useState('');

  function listGenerator(dataList) {
    setList([...list, { task: dataList, checked: false, id: uuidv4() }]);
    handleCreatedData()
  }
  console.log(list)

  const handleCreatedData = () => setGetTaskCreatedData(list.length)
  console.log(getTaskCreatedData)

  function handleRemove() {
    setList(list.filter((item) => getId !== item.id))
  }

  const handleGetId = (id) => {
    setGetId(id)
    setList(list.filter((item) => getId !== item.id))
    handleCreatedData()
  }



  return (
    <div>
      <Header />
      <div className="container">
        <div className="taskbar">
          <TaskBar taskGenerator={listGenerator} />
        </div>
        <div className="tasks">
          <Tasks listData={list} taksCreatedAmount={getTaskCreatedData} idGenerator={handleGetId} remove={handleRemove} />
        </div>
      </div>
    </div>
  );
}
