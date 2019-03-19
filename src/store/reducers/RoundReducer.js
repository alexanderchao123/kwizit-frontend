let initialState = {
  round: {},
  players: [],
  round_question: {
    id: "",
    active: "",
    question: {
      title: "",
      difficulty: "",
      time: 0,
      choices: [
        {answer: "", correct: ""},
        {answer: "", correct: ""},
        {answer: "", correct: ""},
        {answer: "", correct: ""}
      ]
    }
  },
  decision: {
    correct: false
  },
  lastQuestion: false
}

export default function roundReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_ROUND":
        return {...state, round: action.payload}
      case "ADD_PLAYER":
        return {...state, players: [...state.players, action.payload]}
      case "ADD_PLAYERS":
        return {...state, players: [...action.payload]}
        case "ADD_ROUND_QUESTION":
        return {...state, round_question: {...action.payload}}
      case "ADD_DECISION":
        return {...state, decision: {...action.payload}}
      case "DECREMENT_TIME":
        let question = {...state.round_question.question, time: (state.round_question.question.time - action.payload)}
        return {...state, round_question: {...state.round_question, question: question}}
      default:
        return state;
    }
}
