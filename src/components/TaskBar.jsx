import styles from "./TaskBar.module.css";
import { useState } from "react";
//image

import plus from "../assets/plus.svg";

export const TaskBar = (props) => {
  const [data, setData] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.buttonBox}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button onClick={() => props.taskGenerator(data)} className={styles.buttonBox}>
            Criar
            <div>
              <img src={plus} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
