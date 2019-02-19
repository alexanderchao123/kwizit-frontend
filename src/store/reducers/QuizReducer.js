let initialState = {
  quizzes: [],
  current_quiz: {}
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_QUIZ':
        return {...state, current_quiz: action.payload}
      case 'ADD_QUIZZES':
        return {...state, quizzes: action.payload}
      case 'REMOVE_QUIZ':
        return {...state, current_quiz: action.payload}
      case 'REMOVE_QUIZZES':
        return {...state, quizzes: action.payload}
      default:
        return state;
    }
}
