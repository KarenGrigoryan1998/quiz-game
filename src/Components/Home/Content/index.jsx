import { Link } from "react-router-dom";
//Add space Here
import styles from "./index.module.scss";

const Content = () => {
  return (
    <div className={styles.content_main_container}>
      <h1>You will be presented with 10 True or False questions.</h1>
      <p>Can you score  100%?</p>
      <Link to={"/quiz"}><button>BEGIN</button></Link>
    </div>
  );
};

export default Content;