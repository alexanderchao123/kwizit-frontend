/*-------- Action Creators --------*/
export const addRound = (round) => {
  return {
    type: "ADD_ROUND",
    payload: round
  }
}

export const addDecision = (decision) => {
  return {
    type: "ADD_DECISION",
    payload: decision
  }
}


/*-------- Thunk Creators --------*/
export const authenticateRound = ({roundPin, token}) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/authenticate_round/${roundPin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => dispatch(addRound(json.round)))
  }
}

export const createOrFindDecision = ({choice, roundPin, token}) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/rounds/${roundPin}/decisions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({choice: choice})
    })
    .then(res => res.json())
    .then(json => {
      dispatch(addDecision(json.decision))})
  }
}
