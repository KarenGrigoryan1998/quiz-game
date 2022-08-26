import Content from "../../Components/Home/Content";
import Header from "../../Components/Home/Header";
import styles from "./index.module.scss";

const Home = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.background_image}>
                <Header />
                <Content />
            </div>
        </div>
    );
};

export default Home;