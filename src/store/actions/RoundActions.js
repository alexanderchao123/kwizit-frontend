/*-------- Action Creators --------*/
export const addRound = (round) => {
  return {
    type: "ADD_ROUND",
    payload: round
  }
}

export const addQuestion = (json) => {
  return {
    type: "ADD_QUESTION",
    payload: json
  }
}

export const decrementTime = () => {
  return {
    type: "DECREMENT_TIME",
    payload: 1
  }
}

export const addPlayer = (player) => {
  return {
    type: "ADD_PLAYER",
    payload: player
  }
}

export const addPlayers = (players) => {
  return {
    type: "ADD_PLAYERS",
    payload: players
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

export const authenticateRound = (roundPin, token) => {
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
    .then(json => {
      dispatch(addRound(json.round))
    })
  }
}

export const getPlayers = (roundPin, token) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/rounds/${roundPin}/admissions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      let players = json.admissions.map((admission) => {
        return admission.user
      })
      debugger
      dispatch(addPlayers(players))
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
      dispatch(addQuestion(json))
      return json
    })
  }
}


/*-------- Thunk Creators For ActionCable --------*/
export const renderChoiceBlock = (subscription) => {
  return (dispatch) => {
    subscription.renderChoiceBlock()
  }
}

export const renderChoiceResult = (subscription) => {
  return (dispatch) => {
    subscription.renderChoiceResult()
  }
}

export const submitChoice = (subscription, choice) => {
  return (dispatch) => {
    subscription.submitChoice(choice)
  }
}
