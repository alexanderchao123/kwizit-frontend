let initialState = {
  round: {},
  players: [],
  question: {
    title: "",
    difficulty: "",
    time: 0
  },
  lastQuestion: false
}

export default function roundReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_ROUND":
        return {...state, round: action.payload}
      case "ADD_PLAYER":
        return {...state, players: [...state.players, action.payload]}
      case "ADD_QUESTION":
        return {...state, question: action.payload.question, lastQuestion: action.payload.last_question}
      case "DECREMENT_TIME":
        return {...state, question: {...state.question, time: (state.question.time - action.payload)}}
      default:
        return state;
    }
}
