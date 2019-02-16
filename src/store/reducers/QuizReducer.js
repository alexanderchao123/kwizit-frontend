let initialState = {
  quizzes: []
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_QUIZZES':
        return {...state, quizzes: action.payload}
      default:
        return state;
    }
}
