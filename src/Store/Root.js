import { combineReducers } from "redux";
import { quizQuestionsReducer } from "./QuizQuestions/Reducer";

export default combineReducers({
    quizQuestions: quizQuestionsReducer
});