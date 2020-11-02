export const reducer = (state, action) => {
  if (action.type === 'INCREMENT') return ++state
  else if (action.type === 'DECREMENT') return --state
  else return state
}