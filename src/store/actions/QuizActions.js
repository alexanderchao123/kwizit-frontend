/*-------- Action Creators --------*/
export const addQuiz = (quiz) => {
  return {
    type: "ADD_QUIZ",
    payload: quiz
  }
}

export const addQuizzes = (quizzes) => {
  return {
    type: "ADD_QUIZZES",
    payload: quizzes
  }
}

export const removeQuiz = () => {
  return {
    type: "REMOVE_QUIZ",
    payload: {}
  }
}

export const removeQuizzes = () => {
  return {
    type: "REMOVE_QUIZZES",
    payload: []
  }
}


/*-------- Thunk Creators --------*/
export const getQuiz = ({quizId}) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/quizzes/${quizId}`)
    .then(res => res.json())
    .then(json => dispatch(addQuiz(json.quiz)))
  }
}

export const getQuizzes = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/quizzes")
    .then(res => res.json())
    .then(json => dispatch(addQuizzes(json.quizzes)))
  }
}
