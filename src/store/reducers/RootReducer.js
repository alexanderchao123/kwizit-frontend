import { combineReducers } from 'redux';
import UserReducer from './UserReducer'
import QuizReducer from './QuizReducer'
import RoundReducer from './RoundReducer'

export const rootReducer = combineReducers({
  userInfo: UserReducer,
  quizInfo: QuizReducer,
  roundInfo: RoundReducer
})
