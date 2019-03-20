/*-------- Action Creators --------*/
export const addDecision = (decision) => {
  return {
    type: "ADD_DECISION",
    payload: decision
  }
}
