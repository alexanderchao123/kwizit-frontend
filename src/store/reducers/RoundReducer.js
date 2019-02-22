let initialState = {
  round: {},
  question: {
    title: "",
    difficulty: "",
    time: ""
  }
}

export default function roundReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_ROUND':
        return {...state, round: action.payload}
      case 'ADD_QUESTION':
        return {...state, question: action.payload}
      default:
        return state;
    }
}
