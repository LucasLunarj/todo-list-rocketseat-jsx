//CSS
import styles from "../components/Header.module.css";
//images
import rocket from "../assets/rocket.svg";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={rocket} alt="" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </div>
  );
};
