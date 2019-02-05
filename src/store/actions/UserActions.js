/*-------- Action Creators --------*/
export const addUser = (user) => {
  return {
    type: "SIGN_IN_USER",
    payload: user
  }
}

export const signOutUser = () => {
  return {
    type: "SIGN_OUT_USER",
    payload: {user: undefined, isAuthenticated: false}
  }
}


/*-------- Thunk Creators --------*/
export const createUser = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({user: user})
    })
    .then(res => res.json())
    .then(json => {
      dispatch(addUser(json.user))
      localStorage.setItem("token", json.jwt)
    })
    .catch(error => console.log(error))
  }
}

export const authenticateUser = (userInfo) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/authenticate", {
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
      localStorage.setItem("token", json.jwt)
    })
    .catch(error => console.log(error))
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/current_user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => dispatch(addUser(json.user)))
    .catch(error => console.log(error))
  }
}
