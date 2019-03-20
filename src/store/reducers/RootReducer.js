import { combineReducers } from 'redux';
import UserReducer from './UserReducer'
import QuizReducer from './QuizReducer'
import RoundHostReducer from './RoundHostReducer'
import RoundPlayerReducer from './RoundPlayerReducer'

export const rootReducer = combineReducers({
  userInfo: UserReducer,
  quizInfo: QuizReducer,
  roundHostInfo: RoundHostReducer,
  roundPlayerInfo: RoundPlayerReducer
})
