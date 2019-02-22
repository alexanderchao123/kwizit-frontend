let initialState = {
  round: {},
  question: {
    title: "",
    difficulty: "",
    time: ""
  },
  lastQuestion: false
}

export default function roundReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_ROUND':
        return {...state, round: action.payload}
      case 'ADD_QUESTION':
        return {...state, question: action.payload.question, lastQuestion: action.payload.last_question}
      default:
        return state;
    }
}
