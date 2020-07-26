import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE, DISABLE } from "./types"
import { combineReducers } from "redux"

const counterReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }
  return state
}

const initialThemeState = {
  value: 'light'
}

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.payload
      }
    default: return state
  }
}

const initialButtonsState = {
  disabled: false
}

const buttonsReducer = (state = initialButtonsState, action) => {
  switch (action.type) {
    case ENABLE:
      return {
        ...state,
        disabled: false
      }
    case DISABLE:
      return {
        ...state,
        disabled: true
      }
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  buttons: buttonsReducer
})