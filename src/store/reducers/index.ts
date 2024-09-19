import { combineReducers } from "redux";
import questionsReducer from "./questions";

export const rootReducer = combineReducers({
  questions: questionsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
