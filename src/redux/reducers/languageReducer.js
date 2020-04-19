export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE_ACTION':
      return action.payload
    default:
    return state
  }
}