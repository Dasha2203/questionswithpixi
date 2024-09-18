import { QuestionActionTypes } from "./actions";

export type Question = {
  id: number;
  question: string;
  options: string[];
}

export type Answer = {
  questionId: number;
  question: string;
  answer: string;
}

export type FetchQuestionsAction = {
  type: QuestionActionTypes.FETCH_QUESTIONS;
}

export type FetchQuestionsSuccessAction = {
  type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS;
  payload: Question[]
}

export type FetchQuestionsErrorAction = {
  type: QuestionActionTypes.FETCH_QUESTIONS_ERROR;
  payload: string;
}

export type SetAnswerAction = {
  type: QuestionActionTypes.SET_ANSWER;
  payload: Answer;
}

export type QuestionsAction = FetchQuestionsAction | FetchQuestionsSuccessAction | FetchQuestionsErrorAction | SetAnswerAction;

export type QuestionsReducerState = {
  questions: Question[];
  answers: Answer[];
  isLoading: boolean;
  error: null | string;
}