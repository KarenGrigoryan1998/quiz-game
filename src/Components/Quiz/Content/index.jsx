import { Button, MobileStepper, Typography } from "@mui/material";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Content = ({ quizQuestions, activeStep, handleAnswer, maxSteps }) => {
    Content.propTypes = {
        quizQuestions: PropTypes.array.isRequired,
        activeStep: PropTypes.number.isRequired,
        handleAnswer: PropTypes.func.isRequired,
        maxSteps: PropTypes.number.isRequired,
    };

    const convertHTMLEntity = (text) => {
        const span = document.createElement("span");
        return text?.replace(/&[#A-Za-z0-9]+;/gi, (entity) => {
            span.innerHTML = entity;
            return span.innerText;
        });
    };

    return (
        <>
            <Typography>{convertHTMLEntity(quizQuestions?.[activeStep]?.question)}</Typography>
            <Button onClick={() => handleAnswer("False")}>False</Button>
            <Button onClick={() => handleAnswer("True")}>True</Button>
            <MobileStepper
                className={styles.mobile_stepper}
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
            />
        </>
    );
};

export default Content;