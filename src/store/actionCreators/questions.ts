import { Dispatch } from "redux";

import { QuestionActionTypes } from "../reducers/questions/actions";
import { Answer, Question, QuestionsAction } from "../reducers/questions/types";

export const fetchQuestions = () => {
  return async (dispatch: Dispatch<QuestionsAction>) => {
    try {
      dispatch({ type: QuestionActionTypes.FETCH_QUESTIONS })

      const response = await fetch('/steps.json')
      const data = await response.json() as Question[];
      dispatch({ type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS, payload: data })

    } catch (err) {
      console.log(err)
      dispatch({ type: QuestionActionTypes.FETCH_QUESTIONS_ERROR, payload: 'Не удалось получить вопросы' })
    }
  }
}

export const setAnswerAction = (payload: Answer) => {
  return async (dispatch: Dispatch<QuestionsAction>) => {
    dispatch({ type: QuestionActionTypes.SET_ANSWER, payload })
  }
}