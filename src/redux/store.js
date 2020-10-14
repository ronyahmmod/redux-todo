import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWareStack = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWareStack));
export default store;
