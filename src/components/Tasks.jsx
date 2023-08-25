//Hooks
import { useState } from "react";
//Styles
import styles from "./Tasks.module.css";
//Components
import { TasksCreated } from "./TasksCreated";
import { EmptyTasks } from "./EmptyTasks";

export function Tasks(props) {
  const tasks = props.listData.map((item, index) => {
    return <TasksCreated key={index} taskData={item.task} />
  })

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.amountBar}>
          <div className={styles.tasksCreatedAmount}>
            <p>Tarefas criadas</p>
            <div>{props.taksCreatedAmount}</div>
          </div>
          <div className={styles.tasksFinishedAmount}>
            <p>Concluidas</p>
            <div>0</div>
          </div>
        </div>
      </div>

      <div>

      </div>
      {props.taksCreatedAmount === 0 ? < EmptyTasks /> : tasks}

    </div>
  );
}
