import { quizQuestionsState } from "./State";
import { GET_QUIZ_QUESTIONS_REQUEST, SET_QUIZ_QUESTIONS_ERROR, SET_QUIZ_QUESTIONS_SUCCESS } from "./Type";

export const quizQuestionsReducer = (state = quizQuestionsState, action) => {
    switch (action.type) {
        case SET_QUIZ_QUESTIONS_SUCCESS:
            return {
                ...state,
                quizQuestions: action.payload,
                loading: false
            };
        case SET_QUIZ_QUESTIONS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case GET_QUIZ_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
    }
    return { ...state };
};