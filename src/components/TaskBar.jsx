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

  function handleEnterkey(e) {
    let key = e.keyCode
    if (key === 13 && data.length > 0) {
      handleDataGenerator()
    }
    else {
      undefined
    }
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
            onKeyDown={handleEnterkey}

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
