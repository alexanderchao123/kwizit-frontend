let initialState = {
  quizzes: [],
  quiz: {}
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_QUIZZES":
        return {...state, quizzes: action.payload}
      case "ADD_QUIZ":
        return {...state, quiz: action.payload}
      case "REMOVE_QUIZZES":
        return {...state, quizzes: action.payload}
      case "REMOVE_QUIZ":
        return {...state, quiz: action.payload}
      default:
        return state;
    }
}
