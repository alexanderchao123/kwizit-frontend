/*-------- Action Creators --------*/
export const addQuizzes = (quizzes) => {
  return {
    type: "ADD_QUIZZES",
    payload: quizzes
  }
}


/*-------- Thunk Creators --------*/
export const getQuizzes = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/quizzes")
    .then(res => res.json())
    .then(json => dispatch(addQuizzes(json.quizzes)))
  }
}
