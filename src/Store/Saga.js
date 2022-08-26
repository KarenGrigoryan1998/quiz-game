import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GET_QUIZ_QUESTIONS_REQUEST } from "./QuizQuestions/Type";
import { setQuizQuestionsSuccess } from "./QuizQuestions/Action";

function* rootSaga() {
	yield call(watcherSaga);
}

function* watcherSaga() {
	yield takeEvery(GET_QUIZ_QUESTIONS_REQUEST, getQuizQuestions);
}

function* getQuizQuestions() {
	try {
		const result = yield axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
		yield put(setQuizQuestionsSuccess(result.data.results));
	} catch (e) {
		console.error(e);
	}
}

export default rootSaga;