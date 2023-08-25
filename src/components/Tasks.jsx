// import { EmptyTasks } from "./EmptyTasks";
import { useState } from "react";
import styles from "./Tasks.module.css";
import { TasksCreated } from "./TasksCreated";

export function Tasks(props) {


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
      {props.listData.map((item, index) => {
        return <TasksCreated key={index} taskData={item.task} />
      })}
      {/* <EmptyTasks /> */}
    </div>
  );
}
