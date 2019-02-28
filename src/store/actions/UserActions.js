/*-------- Action Creators --------*/
export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: {
      user: user,
      isAuthenticated: true
    }
  }
}

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
    payload: {
      user: {},
      isAuthenticated: false
    }
  }
}


/*-------- Thunk Creators --------*/
export const createUser = (userInfo) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {Accepts: "application/json"},
      body: userInfo
    })
    .then(res => res.json())
    .then(json => {
      dispatch(addUser(json.user))
      return json
    })
  }
}

export const authenticateUser = (userInfo) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/authenticate_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(res => res.json())
    .then(json => {
      dispatch(addUser(json.user))
      return json
    })
  }
}

export const authenticateToken = (token) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/authenticate_token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => dispatch(addUser(json.user)))
  }
}
