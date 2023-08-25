import styles from "./TaskBar.module.css";
import { useState } from "react";
//image

import plus from "../assets/plus.svg";

export const TaskBar = (props) => {
  const [data, setData] = useState("");
  function handleDataGenerator() {
    props.taskGenerator(data)
    setData("")
  }

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
          <button disabled={data.length === 0} onClick={handleDataGenerator} className={styles.buttonBox}>
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
