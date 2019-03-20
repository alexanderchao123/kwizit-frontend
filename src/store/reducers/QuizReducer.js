let initialState = {
  quizzes: [],
  quiz: {}
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_QUIZZES":
        return {...state, quizzes: action.payload}
        break;
      case "ADD_QUIZ":
        return {...state, quiz: action.payload}
        break;
      case "REMOVE_QUIZZES":
        return {...state, quizzes: action.payload}
        break;
      case "REMOVE_QUIZ":
        return {...state, quiz: action.payload}
        break;
      default:
        return state;
    }
}
