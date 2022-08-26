import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";

import Content from "../../Components/Results/Content";
import Scores from "../../Components/Results/Scores";
import styles from "./index.module.scss";

const Results = () => {
    const location = useLocation();

    return (
        <div className={styles.main_container}>
            <Box className={styles.box}>
                <Scores
                    quizQuestions={location.state.quizQuestions}
                    score = {location.state.score}
                />
                <Content
                    quizQuestions={location.state.quizQuestions}
                    answers = {location.state.answers}
                />
            </Box>
        </div>
    );
};

export default Results;