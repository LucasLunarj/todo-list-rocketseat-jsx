//Hooks
import { useState } from "react";
//Styles
import styles from "./Tasks.module.css";
//Components
import { TasksCreated } from "./TasksCreated";
import { EmptyTasks } from "./EmptyTasks";

export function Tasks(props) {

  const [finishedCount, setFinishedCount] = useState(0)
  const [removedSwitch, setRemovedSwitch] = useState('')

  const tasks = props.listData.map((item) => {
    return <TasksCreated key={item.id} taskData={item.task} receiveId={() => handleGetID(item.id)} tasksFinished={HandleGetFinishedTasksAmount} />
  })


  function handleGetID(id) {
    props.idGenerator(id)
    if (removedSwitch === false) {
      setFinishedCount(finishedCount - 1)

    } else {
      undefined
    }

  }


  function HandleGetFinishedTasksAmount(finished) {

    if (finished === false) {
      setFinishedCount(finishedCount + 1)
      setRemovedSwitch(finished)
    } else {
      setFinishedCount(finishedCount - 1)
      setRemovedSwitch(finished)
    }

  }
  console.log(removedSwitch)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.amountBar}>
          <div className={styles.tasksCreatedAmount}>
            <p>Tarefas criadas</p>
            <div>{props.tasksCreatedAmount}</div>
          </div>
          <div className={styles.tasksFinishedAmount}>
            <p>Concluidas</p>
            <div>{finishedCount}</div>
          </div>
        </div>
      </div>

      <div>

      </div>
      {props.tasksCreatedAmount === 0 ? < EmptyTasks /> : tasks}

    </div>
  );
}
