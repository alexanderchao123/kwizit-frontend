let initialState = {
  decision: {
    correct: false
  }
}

export default function roundPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_DECISION":
      return {...state, decision: {...action.payload}}
      break;
    default:
      return state
  }
}
