import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { getQuizQuestionsRequest } from "../../Store/QuizQuestions/Action";
import styles from "./index.module.scss";
import Category from "../../Components/Quiz/Category";
import Content from "../../Components/Quiz/Content";
import { FINAL_STEP as finalStep } from "../../Constants";

const Quiz = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { quizQuestions } = useSelector(state => state.quizQuestions);
    const [activeStep, setActiveStep] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const maxSteps = quizQuestions.length;

    const handleAnswer = (answered) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        const activeQuestion = quizQuestions.filter(question => quizQuestions?.[activeStep]?.question === question.question);
        if (activeQuestion?.[0]?.correct_answer === answered) {
            setScore(score + 1);
        }
        if(activeQuestion?.[0]?.correct_answer !== answered) {
            setAnswers([...answers, {question: activeQuestion?.[0]?.question, answered}]);
        }
    };

    if (activeStep === finalStep) {
        navigate("../results", { state: { score, quizQuestions, answers } });
    }

    useEffect(() => {
        dispatch(getQuizQuestionsRequest());
    }, []);

    return (
        <div className={styles.main_container}>
            <Box className={styles.box}>
                <Category
                    quizQuestions={quizQuestions}
                    activeStep={activeStep}
                />
                <Content
                    quizQuestions={quizQuestions}
                    activeStep={activeStep}
                    handleAnswer={handleAnswer}
                    maxSteps={maxSteps}
                />
            </Box>
        </div>
    );
};

export default Quiz;