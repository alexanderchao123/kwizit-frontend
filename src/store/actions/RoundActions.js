/*-------- Action Creators --------*/
export const addRound = (round) => {
  return {
    type: "ADD_ROUND",
    payload: round
  }
}


/*-------- Thunk Creators --------*/
export const createRound = (quizId, token) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/quizzes/${quizId}/rounds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(addRound(json.round))
      return json
    })
  }
}

export const authenticateRound = (roundPin) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/authenticate_round/${roundPin}`)
    .then(res => res.json())
    .then(json => {
      dispatch(addRound(json.round))
    })
  }
}

export const getCurrentQuestion = (roundPin, token) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/rounds/${roundPin}/current_question`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      debugger
    })
  }
}
