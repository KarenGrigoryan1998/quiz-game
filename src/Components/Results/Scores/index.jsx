import PropTypes from "prop-types";

import { ReactComponent as Medal } from "../../../Images/medal.svg";
import styles from "./index.module.scss";

const Scores = ({ quizQuestions, score }) => {
    Scores.propTypes = {
        quizQuestions: PropTypes.array.isRequired,
        score: PropTypes.number.isRequired,
    };

    return (
        <div className={styles.container}>
            <Medal className={styles.medal_icon} />
            <h1 className={styles.score_page_header}>You scored</h1>
            <p>{score} / {quizQuestions.length}</p>
        </div>
    );
};

export default Scores;