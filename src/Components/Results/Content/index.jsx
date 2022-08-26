import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./index.module.scss";
import { ReactComponent as CorrectAnswer } from "../../../Images/correct.svg";
import { ReactComponent as FalseAnswer } from "../../../Images/false.svg";

const Content = ({ quizQuestions, answers }) => {
    Content.propTypes = {
        quizQuestions: PropTypes.array.isRequired,
        answers: PropTypes.array.isRequired
    };

    const falseAnswers = () => {
        const falseAnswersQuestions = answers.map(question => question.question);
        return falseAnswersQuestions;
    };

    const convertHTMLEntity = (text) => {
        const span = document.createElement("span");
        return text?.replace(/&[#A-Za-z0-9]+;/gi, (entity) => {
            span.innerHTML = entity;
            return span.innerText;
        });
    };

    return (
        <div className={styles.container}>
            {quizQuestions.length > 0 &&
                quizQuestions.map((question, index) => {
                    return (
                        <Accordion key={index} className={styles.accordion}>
                            <AccordionSummary
                                className={styles.accordion_summary}
                                expandIcon={<ExpandMoreIcon className={styles.expand_icon} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                {falseAnswers().includes(question.question) ?
                                    <FalseAnswer className={styles.false_answer_icon} />
                                    : <CorrectAnswer className={styles.true_answer_icon}/>
                                }
                                <Typography key={index}>{convertHTMLEntity(question.question)}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={styles.accordion_details}>
                                <Typography>{question.correct_answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            <Link to={"/"}><button>PLAY AGAIN?</button></Link>
        </div>
    );
};

export default Content;