import { createStore, applyMiddleware } from "redux";
import Root from "./Root";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Saga";

const sagaMiddleWare = createSagaMiddleware();

export const myStore = createStore(Root, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);