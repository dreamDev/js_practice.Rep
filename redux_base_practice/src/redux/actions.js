import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE, DISABLE } from "./types"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const enable = () => ({ type: ENABLE })
export const disable = () => ({ type: DISABLE })
export const changeTheme = newTheme => ({ type: CHANGE_THEME, payload: newTheme })
export const asyncIncrement = () => dispatch => {
  dispatch(disable())
  setTimeout(() => {
    dispatch(increment())
    dispatch(enable())
  }, 1500)
}