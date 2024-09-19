import { QuestionActionTypes } from "./actions";
import { QuestionsAction, QuestionsReducerState } from "./types";

const initialState: QuestionsReducerState = {
  questions: [],
  answers: [],
  isLoading: false,
  error: null
}

const questionsReducer = (state = initialState, action: QuestionsAction): QuestionsReducerState => {
  switch (action.type) {
    case QuestionActionTypes.FETCH_QUESTIONS:
      return ({ ...state, isLoading: true })
    case QuestionActionTypes.FETCH_QUESTIONS_SUCCESS:
      return ({ ...state, isLoading: false, questions: action.payload, answers: [], error: null })
    case QuestionActionTypes.FETCH_QUESTIONS_ERROR:
      return ({ ...state, isLoading: false, questions: [], answers: [], error: action.payload })
    case QuestionActionTypes.SET_ANSWER:
      const index = state.answers.findIndex(i => i.questionId === action.payload.questionId)
      
      return ({
        ...state,
        answers: [
          ...(index === -1
            ? [...state.answers, action.payload]
            : [
              ...state.answers.slice(0, index),
              action.payload,
              ...state.answers.slice(index + 1)
            ]
          )
        ]
      })
    default:
      return state
  }
}

export default questionsReducer