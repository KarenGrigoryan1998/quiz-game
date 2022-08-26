import { GET_QUIZ_QUESTIONS_REQUEST, SET_QUIZ_QUESTIONS_ERROR, SET_QUIZ_QUESTIONS_SUCCESS } from "./Type";

export const setQuizQuestionsSuccess = (data) => {
    return {
        type: SET_QUIZ_QUESTIONS_SUCCESS,
        payload: data
    };
};

export const setQuizQuestionsError = (data) => {
    return {
        type: SET_QUIZ_QUESTIONS_ERROR,
        payload: data
    };
};

export const getQuizQuestionsRequest = () => {
    return {
        type: GET_QUIZ_QUESTIONS_REQUEST,
    };
};