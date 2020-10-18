import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middleWareStack = [logger];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleWareStack)
);

export const persistor = persistStore(store);

export default { persistor, store };
